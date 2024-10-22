<script setup lang="ts">

import {ref} from "vue";
import powerBiIcon from '@/assets/img/app/ageReport/powerbi.svg'
import excelIcon from '@/assets/img/app/ageReport/excel.png'
import ReportLikeIcon from '@/assets/img/app/ageReport/check.png'
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";

const typeInsert = ref('report');

const typesReport = ref([
  {
    label: 'Base',
    value: 'Base'
  },
  {
    label: 'Técnico',
    value: 'Técnico'
  },
  {
    label: 'Financeiro',
    value: 'Financeiro'
  },
  {
    label: 'RH',
    value: 'RH'
  },
  {
    label: 'Comercial',
    value: 'Comercial'
  },
  {
    label: 'Redes',
    value: 'Redes'
  },
  {
    label: 'Planejamento',
    value: 'Planejamento'
  },
  {
    label: 'Outros',
    value: 'Outros'
  },
])

const databases = ref([
  {
    label: 'Voalle',
    value: 'Voalle'
  },
  {
    label: 'Portal',
    value: 'Portal'
  },
  {
    label: 'Aniel',
    value: 'Aniel'
  }
])


const filters = ref('')

const filtersQuery = ref([])

const toggleFilters = () => {

  const filter = {
    name: '',
    field: filters.value
  }

  filtersQuery.value.push(filter)
  filters.value = ''
}

const removeFilter = (index) => {
  filtersQuery.value.splice(index, 1)
}


const payload = ref({
  name: '',
  description: '',
  typeReport: typeInsert,
  area: 'Base',
  database: 'Voalle',
  consult: '',
  filters: filtersQuery.value,
  link: ''
})

const modalStatus = ref(false);

const saveReport = () => {

  AXIOS({
    method: 'POST',
    url: 'agereport/management/reports',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookie.get('token')}`
    },
    data: payload.value
  }).then((response) => {
    modalStatus.value = true

  }).catch((error) => {
    console.log(error)
  })
}



</script>

<template>
  <div class="container">
    <img v-if="typeInsert == 'dashboard'" @click="typeInsert = 'report'" class="trade-insert" :src="powerBiIcon" alt="">
    <img v-if="typeInsert == 'report'" @click="typeInsert = 'dashboard'" class="trade-insert" :src="excelIcon" alt="">
    <div class="block">
      <div class="title">
        <h1>{{ typeInsert == 'report' ? 'Novo Relatório' : 'Novo Dashboard' }}</h1>
        <p>Cadastre um novo relatório, utilizando campos personalizados, query ou dashboards.</p>
      </div>
    </div>
    <div class="block">
      <div class="subsection">
        <h1>Detalhes</h1>
        <p>Informe o nome e descrição do relatório que será exibido no painel.</p>

        <div class="inputs">
          <div class="input">
            <label for="name">Nome</label>
            <input v-model="payload.name" type="text" id="name" autocomplete="off" placeholder="Nome do relatório...">
          </div>
          <div class="input">
            <label for="area">Área do relatório</label>
            <select name="area" id="area" v-model="payload.area">
              <option v-for="type in typesReport" :key="type.value" :value="type.value">
                {{ type.label }}
              </option>
            </select>
          </div>
          <div class="input" style="width: 100%">
            <label for="description">Descrição</label>
            <input v-model="payload.description" type="text" id="description" autocomplete="off" placeholder="Descrição...">
          </div>
        </div>
      </div>
    </div>
    <div v-if="typeInsert == 'report'" class="block">
        <div class="subsection">
          <h1>Informações técnicas</h1>
          <p>Escolha o banco de dados, query e filtros disponíveis</p>

          <div class="inputs">
            <div class="input">
              <label for="database">Banco de dados</label>
              <select name="database" id="database" v-model="payload.database">
                <option v-for="type in databases" :key="type.value" :value="type.value">
                  {{ type.label }}
                </option>
              </select>
            </div>
            <div class="input">
              <label for="filters">Adicione filtros</label>
              <input type="text" id="filters"
                     autocomplete="off"
                     placeholder="c.created..." v-model="filters" @keydown.enter="toggleFilters()">
            </div>
            <div class="input">
              <label for="consult">Query</label>
              <textarea v-model="payload.consult" name="consult" id="consult" placeholder="Select * from ..."></textarea>
            </div>
            <div class="input">
              <label for="filters">Filtros</label>
              <div class="filters">
                <div class="filter" v-for="(filter, index) in filtersQuery" :key="index">
                  <input autocomplete="off" v-model="filtersQuery[index].name" type="text" :id="filter" placeholder="Nome...">
                  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M14,22.03c-.39,0-.78-.08-1.16-.23-1.13-.47-1.84-1.52-1.85-2.75v-2.06H3.97c-2.19,0-3.97-1.8-3.97-4.01v-1.98c0-2.21,1.78-4.01,3.97-4.01h7.03v-2.06c0-1.23,.71-2.28,1.85-2.75,1.13-.47,2.38-.22,3.24,.65l6.72,6.33,.02,.02c1.55,1.55,1.55,4.07,0,5.62l-6.77,6.37c-.56,.56-1.3,.86-2.06,.86ZM3.97,8.99c-1.09,0-1.97,.9-1.97,2.01v1.98c0,1.11,.89,2.01,1.97,2.01H12c.55,0,1,.45,1,1v3.06c0,.6,.47,.84,.61,.9,.14,.06,.64,.22,1.07-.21l6.77-6.37c.74-.74,.75-1.99-.01-2.76l-6.73-6.33c-.45-.45-.95-.29-1.09-.24-.14,.06-.61,.3-.61,.9v3.05c0,.55-.45,1-1,1H3.97Z"/></svg>
                  <span>{{filter.field}}</span>
                  <svg style="cursor: pointer" @click="removeFilter(index)" xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div v-if="typeInsert == 'dashboard'" class="block">
      <div class="subsection">
        <h1>Informações técnicas</h1>
        <p>Insira o link do iframe que deseja expor</p>
        <div class="inputs">
          <div class="input" style="width: 100%">
            <label for="link">Link</label>
            <input v-model="payload.link" type="text" id="link" autocomplete="off" placeholder="https://powerbi...">
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <router-link to="/ageReport/relatorios">
        <button>Cancelar</button>
      </router-link>
      <button @click="saveReport()">Salvar</button>
    </div>

  </div>
  <div class="modal" v-if="modalStatus">
    <div class="card">
      <img :src="ReportLikeIcon" alt="">
      <h2>Sucesso!</h2>
      <p>{{ typeInsert == 'report' ? 'Relatório' : 'Dashboard' }} criado com sucesso, você será redirecionado.</p>
      <div>
        <router-link to="/ageReport/relatorios">
          Confirmar
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">


@keyframes up-layer {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  width: 45vw;
  margin: auto auto;
  padding: 2vh 2vw 4vh 2vw;
  border-radius: 5px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  animation: up-layer .5s ease-in-out forwards;
  position: relative;
  transition: all .5s ease-in-out;
  background-color: #fff;

  .trade-insert {
    position: absolute;
    width: 2vw;
    height: auto;
    top: 2vh;
    right: 1vw;
    cursor: pointer;
  }

  .block {
    padding: 1vh 0 2vh 0;
    z-index: 5;

    .title {
      h1 {
        font-size: 2.6rem;
        color: #333;
        font-weight: 500
      }

      p {
        font-size: 1.4rem;
      }
    }

    .subsection {
      h1 {
        font-size: 1.6rem;
        font-weight: 500;
        color: #333;
      }
      p {
        font-size: 1.2rem;
        color: #6c6c6c;
        margin-bottom: 2vh;
      }

      .inputs {
        margin-top: 1vh;
        @include flex(row, flex-start, initial, 1vw);
        flex-wrap: wrap;

        .input {
          @include flex(column, flex-start, initial, .2vh);
          width: calc(50% - 1vw);
          flex-wrap: wrap;

          .filters {
            @include flex(column, flex-start, initial, 1vh);
            max-height: 20vh;
            overflow-y: auto;
            padding: 2px;

            .filter {
              @include flex(row, flex-start, center, .5vw);
              background-color: #EBF3FE;
              padding: 7px 10px;
              border-radius: 5px;
              width: 100%;
              box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;


              span {
                font-size: 1.3rem;
                color: #333;
                font-weight: 500;
              }

              svg {
                width: 1vw;
                height: auto;
                fill: #333;
              }



              input, select {
                all: unset;
                width: 40%;
                background-color: #fff;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 1.3rem;
                font-weight: 500;
                color: #333333;
                outline: none;
              }

              select {
                width: 30%;
              }
            }

          }

          label {
            font-size: 1.4rem;
            color: #333;
            font-weight: 500;
          }

          input {
            width: 100%;
            padding: 1vh;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            font-size: 1.3rem;
            font-weight: 500;
            color: #333333;
            outline: none;

            &:focus {
              border-color: #33333360;
            }
          }

          select {
            width: 100%;
            padding: 1vh;
            color: #333333;
            font-size: 1.3rem;
            font-weight: 500;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            cursor: pointer;
            outline: none;

            &:focus {
              border-color: #33333360;
            }
          }

          textarea {
            width: 100%;
            padding: 1vh;
            border: 1px solid #e0e0e0;
            border-radius: 5px;
            font-size: 1.3rem;
            font-weight: 500;
            color: #333333;
            outline: none;
            height: clamp(20vh, 20vh, 20vh);
            resize: none;

            &:focus {
              border-color: #33333360;
            }
          }
        }
      }
    }
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