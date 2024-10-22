<script setup lang="ts">

import {infoPage} from "@/stores/counter";
import { useRoute } from 'vue-router';
import {ref} from "vue";
import SendUnique from "@/components/app/ageReport/report/SendUnique.vue";
import SendRecurrence from "@/components/app/ageReport/report/SendRecurrence.vue";
import IntegrationService from "@/components/app/ageReport/report/IntegrationService.vue";
import OptionsBlock from "@/components/app/ageReport/report/OptionsBlock.vue";
import ReportLikeIcon from '@/assets/img/app/ageReport/check.png'
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";


const info = infoPage();

info.setInfoPage({
  title: 'Painel de Relatório',
  subtitle: 'Gerencie a forma como o relatório será entregue.',
});


const report = ref({
  title: 'Produtividade Retenção',
  description: 'Relatório com informações sobre os atendimentos recebidos, retidos e valores dos planos após a negociação.',
})

const typeSending = ref('unique');

const typeSendingData = ref([
  {
    value: 'unique',
    label: 'Envio único',
  },
  // {
  //   value: 'recurrence',
  //   label: 'Recorrência',
  // },
  // {
  //   value: 'integration',
  //   label: 'Integrações',
  // }

])

const typeReport = ref('');
const reportId = ref('');


const getReport = () => {
  const route = useRoute();
  const hash = route.params.hash;
  const decodeHash = () => {
    return JSON.parse(atob(hash));
  }

  typeReport.value = decodeHash().reportType;
  reportId.value = decodeHash().reportId;

  AXIOS({
    url: `/agereport/reports/${decodeHash().reportId}`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookie.get('token')}`
    }
  }).then((response) => {
    report.value = response.data;
    if(report.value.tipo == 'relatorio') {
      getReportColumns();
    }
  }).catch((error) => {
    console.log(error);
  });
}

const getReportColumns = () => {
  AXIOS({
    url: `/agereport/reports/${report.value.id}/columns`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookie.get('token')}`
    }
  }).then((response) => {
    report.value.columns = response.data;
  }).catch((error) => {
    console.log(error);
  });
}

getReport();

const mountDatePayload = (data) => {
  payload.value.dateFilter = data;
}

const mountOptionsPayload = (data) => {
  payload.value.options = data;
}

const payload = ref({
  dateFilter: {},
  options: {},
  command: '',
  reportId: reportId.value,
})

const modalStatus = ref(false);


const sendReport = () => {
  payload.value.command = typeSending.value
  modalStatus.value = true

  AXIOS({
    url: '/agereport/reports/building',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookie.get('token')}`
    },
    params: payload.value,
  }).then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error);
  });
}


</script>

<template>
  <div class="report" v-if="typeReport == 'relatorio' && !modalStatus">
    <div class="block header">
      <h1>{{report.nome ?? 'Carregando...'}}</h1>
      <p>{{report.descricao ?? 'Carregando...'}}</p>
    </div>
    <div class="block">
      <h2>Recorrência e intervalo dos dados</h2>
      <p>Escolha envio único, recorrência de datas ou integrações.</p>

      <div class="radios">
        <div class="radio" v-for="type in typeSendingData" :key="type.value">
          <input type="radio" :id="type.value" :name="type.value" v-model="typeSending" :value="type.value">
          <label :for="type.value">{{type.label}}</label>
        </div>
      </div>
      <SendUnique @sendPayloadDates="mountDatePayload" :columnsFiltered="report.filtros" v-if="typeSending == 'unique' && report.filtros?.length > 0"/>
      <SendRecurrence v-else-if="typeSending == 'recurrence'"/>
      <IntegrationService v-else-if="typeSending == 'integration'"/>
    </div>
    <OptionsBlock @sendPayloadOptions="mountOptionsPayload" :columns="report.columns" v-if="typeSending != 'integration' && report.columns"/>
    <div class="actions" v-if="report.columns">
      <router-link to="/ageReport/relatorios">
        <button>Cancelar</button>
      </router-link>
      <button @click="sendReport()">Exportar</button>
    </div>
  </div>
  <div v-else-if="report.tipo == 'dashboard'" class="dashboard">
    <router-link to="/agereport/relatorios">Voltar</router-link>
    <iframe :src="report.iframe"></iframe>
  </div>
  <div class="modal" v-if="modalStatus">
    <div class="card">
      <img :src="ReportLikeIcon" alt="">
      <h2>Solicitado!</h2>
      <p>Assim que estiver tudo pronto, notificaremos você.</p>
      <div>
        <router-link to="/ageReport/relatorios">
          Confirmar
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">


.report {
  width: 100%;
  padding: 2vh 2vw;
  margin: 0vh auto 0 auto;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 1px 2px #0000002b;

  .block {
    border-bottom: 2px solid #e0e0e060;
    padding: 2vh 0 4vh 0;
    h2 {
      font-size: 1.6rem;
      font-weight: 500;
      color: #333;
    }
    p {
      font-size: 1.2rem;
      color: #6c6c6c;
    }


    .radios {
      @include flex(row, flex-start, center, 1vw);
      padding: 2vh 0;

      .radio {
        @include flex(row, flex-start, center);
        input {
          width: 1.5rem;
          height: 1.5rem;
          cursor: pointer;
        }
        label {
          padding-left: .5vw;
          font-size: 1.4rem;
          cursor: pointer;

        }
      }
    }

    .column {
      @include flex(column, flex-start, initial, 1vh);
    }

    .inputs-interval {
      @include flex(column, flex-start, initial, 1vh);
      padding: 2vh 0;


      .date-person {
        @include flex(row, flex-start, center, 1vw);
        padding: .2vh 0;
        width: 100%;

        .date {
          @include flex(column, flex-start, initial, .5vh);
          width: 50%;
          label {
            font-size: 1.4rem;
            color: #333;
            font-weight: 500;
          }
          input {
            width: 100%;
            padding: 1vh;
            font-size: 1.4rem;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            cursor: pointer;
            outline: none;
          }
        }
      }
    }
    .select {
      width: 25%;
      @include flex(column, flex-start, initial, .5vh);
      label {
        font-size: 1.4rem;
        color: #333;
        font-weight: 500;
      }
      select {
        width: 100%;
        padding: 1vh;
        font-size: 1.4rem;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        cursor: pointer;
        outline: none;
      }
    }

    .checkboxes {
      @include flex(row, flex-start, initial, 1vw);
      flex-wrap: wrap;
      padding: 2vh 0;

      .checkbox {
        @include flex(row, flex-start, initial, .5vw);
        width: calc(30% - 1vw);
        label {
          font-size: 1.2rem;
          font-weight: 500;
          cursor: pointer;
          color: #111;
        }
      }
    }

  }

  .header {
    padding: 2vh 0;
    h1 {
      font-size: 2rem;
      font-weight: 500;
      color: #333333;
      margin-bottom: 3px;
    }
    p {font-size: 1.4rem;}
  }

  .actions {
    @include flex(row, flex-end, center, 1vw);
    margin-top: 2vh;

    button:nth-child(1) {
      background-color: #fff;
      color: #111;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    }

    button {
      padding: 1vh 2vw;
      border-radius: 5px;
      font-size: 1.4rem;
      font-weight: 600;
      color: #fff;
      background-color: #52ADE2;
      cursor: pointer;
      outline: none;
      border: none;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

      &:hover {
        opacity: .9;
      }
    }
  }

}

.dashboard {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 2vh 2vw;

  a {
    font-size: 1.6rem;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid #fff;
    background-color: #52ADE2;
    border-radius: 5px;
    padding: 5px 15px;
    color: #ffffff;
    &:hover {
      border-color: #52ADE2;
      color: #52ADE2;
      background-color: #fff;
    }
  }

  h1 {
    font-size: 2.4rem;
    color: #333;
    font-weight: 500;
  }

  p {
    font-size: 1.6rem;
    color: #6c6c6c;
  }

  iframe {
    margin-top: 2vh;
    width: 100%;
    height: 90%;
    border: none;
  }
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  @include flex(row, center, center, 1vw);

  .card {
    background-color: #fff;
    padding: 4vh 3vw 6vh 3vw;
    border-radius: 5px;
    box-shadow: 0 1px 2px #0000002b;
    animation: modal .8s ease-in-out forwards;
    opacity: 0;

    img {
      width: 10vw;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    h2 {
      font-size: 3.4rem;
      font-weight: 500;
      color: #555;
      text-align: center;
    }

    p {
      font-size: 1.4rem;
      color: #999;
      text-align: center;
    }

    div {
      a {
        width: 60%;
        text-align: center;
        padding: 1vh 2vw;
        border-radius: 5px;
        font-size: 1.4rem;
        font-weight: 600;
        color: #fff;
        background-color: #52ADE2;
        cursor: pointer;
        outline: none;
        border: none;
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
        display: block;
        margin: 4vh auto 0 auto;
        &:hover {
          opacity: .9;
        }
      }
    }
  }
}

@keyframes modal {
  0% {
    opacity: 0;
    transform: scale(.6);
  }
  25% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(.9);
  }
  75% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}



</style>