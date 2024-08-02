<script setup lang="ts">

import confirm from '@/assets/img/app/ageIntegrator/aniel/confirm.png'
import noSending from '@/assets/img/app/ageIntegrator/aniel/pending.png'
import pending from '@/assets/img/app/ageIntegrator/aniel/not_sending.png'
import schedule from '@/assets/img/app/ageIntegrator/aniel/schedule.png'
import place from '@/assets/img/app/ageIntegrator/aniel/place.png'
import service from '@/assets/img/app/ageIntegrator/aniel/service.png'

import {infoPage} from "@/stores/counter";
import {computed, ref} from "vue";
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";
import OptionsSchedule from "@/components/app/ageIntegrator/aniel/actionsSchedule/OptionsSchedule.vue";

const info = infoPage();
const data = ref([]);
const search = ref('');
const status = ref('all');
const typeService = ref('all')
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;
const modal = ref(false)

const dateFilter = ref(formattedDate);

const setInfoPage = () => {
  info.setInfoPage({
    title: "Agenda Operacional Aniel",
    subtitle: "Acompanhe o status de agendamento em tempo real"
  });
};

setInfoPage();

const panel = ref('operational');

const getDashboard = () => {
  AXIOS({
    url: 'http://localhost:8000/integrator/aniel/management-schedule/dashboard-operational',
    method: 'get',
    params: {
      period: dateFilter.value
    },
    headers: {
      'Authorization': 'Bearer '+Cookie.get('token')
    }
  })
    .then((response) => {
      data.value = response.data.dashboard
    })
    .catch((error) => {
      console.log(error);
    });
}

const dataFiltered = computed(() => {
  const searchValue = search.value.toString().toLowerCase();

  return data.value.filter((value) => {
    const matchesSearch = value.protocolo.toLowerCase().includes(searchValue);

    let matchesStatus = true;
    if (status.value === 'closed_productive') {
      matchesStatus = value.status === 'Fechada Produtiva';
    } else if (status.value === 'pending_att') {
      matchesStatus = value.status === 'Aberta Aguardando Atendimento';
    } else if (status.value === 'closed_improductive') {
      matchesStatus = value.status === 'Fechada Improdutiva';
    } else if (status.value === 'pending_technical') {
      matchesStatus = value.status === 'Aberta Aguardando Responsável';
    } else if (status.value === 'displacement') {
      matchesStatus = value.status === 'OS em Deslocamento';
    }

    let matchesTypeService = true;
    if (typeService.value === 'activations') {
      matchesTypeService = value.servico === 'Ativação';
    } else if (typeService.value === 'vt') {
      matchesTypeService = value.servico === 'Visita Técnica';
    } else if (typeService.value === 'me') {
      matchesTypeService = value.servico === 'Mudança De Endereço';
    }

    return matchesSearch && matchesStatus && matchesTypeService;
  });
});

getDashboard();

setInterval(() => {
  getDashboard();
}, 10000);

const openVoalle = function (personId: number) {
  const dataHash = {
    personId: personId,
    pbxInfo: {},
    availableAttendance: true
  }

  const hash = btoa(JSON.stringify(dataHash));

  window.open('https://erp.agetelecom.com.br/people_informations?hash='+hash, '_blank')
}


const clearFilters = () => {
  search.value = '';
  typeService.value = 'all';
  status.value = 'all';
  getDashboard();

}

</script>

<template>
  <div class="options">
    <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel" @click="panel = 'capacity'">Capacidade</router-link>
    <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel/operacional" @click="panel = 'operational'">Operacional</router-link>
    <!--    <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel/dashboard" @click="panel = 'dashboard'">Dashboard</router-link>-->
  </div>

  <div class="operational__dashboard">
      <div class="filters">
<!--        <div class="cards">-->
<!--          <div class="card"></div>-->
<!--          <div class="card"></div>-->
<!--          <div class="card"></div>-->
<!--          <div class="card"></div>-->
<!--          <div class="card"></div>-->
<!--        </div>-->
        <div class="actions">

          <div class="search">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 513.749 513.749" style="enable-background:new 0 0 513.749 513.749;" xml:space="preserve" width="512" height="512">
        <g>
          <path d="M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"/>
        </g>
        </svg>
            <input type="number" placeholder="Pesquisar (Protocolo)" v-model="search" />
          </div>
          <div class="period">
            <input type="date" name="period" v-model="dateFilter" @change="getDashboard">
          </div>
          <div class="status">
            <select name="status" id="status" v-model="typeService">
              <option value="all">Todos Serviços</option>
              <option value="activations">Ativações</option>
              <option value="vt">Visita Técnica</option>
              <option value="me">Mudança de endereço</option>
            </select>
          </div>
          <div class="status">
            <select name="status" id="status" v-model="status">
              <option value="all">Todos Status</option>
              <option value="closed_productive">Fechada produtiva</option>
              <option value="pending_att">Aguardando atendimento</option>
              <option value="pending_technical">Aguardando Responsável</option>
              <option value="displacement">Os em deslocamento</option>
              <option value="closed_improductive">Fechada improdutiva</option>
            </select>
          </div>
          <div class="clear">
            <button @click="clearFilters()">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                <path d="m17,0c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7S20.86,0,17,0Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm2.957-6.543l-1.543,1.543,1.543,1.543-1.414,1.414-1.543-1.543-1.543,1.543-1.414-1.414,1.543-1.543-1.543-1.543,1.414-1.414,1.543,1.543,1.543-1.543,1.414,1.414Zm-7.957,9.025c.616.412,1.289.743,2,.995v8.523l-6-4.5v-5.12L0,5.38v-2.38C0,1.346,1.346,0,3,0h8.349c-.706.571-1.325,1.244-1.831,2H3c-.551,0-1,.449-1,1v1.62l8,9v4.88l2,1.5v-5.518Z"/>
              </svg>
            </button>
          </div>

        </div>

      </div>
    <div class="table_orders">
      <table>
        <thead>
        <tr>
          <th style="text-align: left">Protocolo</th>
          <th style="text-align: left">Serviço</th>
          <th>Agendamento</th>
          <th style="text-align: left">Status</th>
          <th style="text-align: left">Confirmação do cliente</th>
          <th style="text-align: left">Localidade</th>
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in dataFiltered" :key="index">
          <td style="text-align: left"><b @click="openVoalle(item.cliente_id)" style="user-select: none; cursor: pointer"># </b>{{item.protocolo}}</td>
          <td style="text-align: left">
            <div class="flex">
              <img :src="service" alt="servico">
              <span>
                {{ item.sub_servico }}
              </span>
            </div>
          </td>
          <td>
            <div class="flex">
              <img :src="schedule" alt="agenda">
              <span>{{ item.data_agendamento }}</span>
            </div>
          </td>
          <td>
            <div class="flex">
              <svg :fill="item.cor_indicativa ?? '#cccccc'" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m24,24H0v-1c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3v1ZM3.718,5.202L1.4,2.982.018,4.426l2.317,2.22,1.383-1.443Zm3.862-2.493L6.367-.008l-1.826.814,1.213,2.717,1.826-.814Zm16.402,1.717l-1.383-1.443-2.317,2.22,1.383,1.443,2.317-2.22Zm-4.523-3.619L17.633-.008l-1.213,2.717,1.826.814,1.213-2.717Zm1.541,12.193c0-4.963-4.037-9-9-9S3,8.037,3,13v5h18v-5Zm-9-2c-1.103,0-2,.897-2,2h-2c0-2.206,1.794-4,4-4v2Z"/></svg>
              <span>{{ item.status }}</span>
            </div>
          </td>
          <td  style="text-align: left">
            <div class="flex">
              <img v-if="item.confirmacao_cliente == 'Confirmado'" :src="confirm" alt="confirmado">
              <img v-else-if="item.confirmacao_cliente == 'Pendente'" :src="pending" alt="pendente">
              <img v-else-if="item.confirmacao_cliente == 'Atendente'" :src="confirm" alt="confirmado">
              <img v-else :src="noSending" alt="confirmado">

              <span>
              {{ item.confirmacao_cliente ?? 'Não enviada' }}
            </span>
            </div>

          </td>
          <td>
            <div class="flex">
              <img :src="place" alt="local">
              <span>{{ item.localidade }}</span>
            </div>
          </td>
          <td>
            <div style="cursor: pointer" @click="modal = true">
              <svg  class="actions_order" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="12" cy="2" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="22" r="2"/></svg>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <OptionsSchedule v-if="modal == true" @closeModal="modal = false" />
</template>

<style scoped lang="scss">

.options  {
  width: 100%;
  margin-bottom: 2vh;
  @include flex(row, flex-start, center, 1vw);


  a {
    background-color: #fff;
    border-radius: 10px;
    border:  1px solid #cccccc50;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    transition: all ease-in-out .1s;
    padding: 10px 25px;

    &:hover {
      background-color: #53aee2;
      color: #fff;
    }
  }

  .select {
    background-color: #53aee2;
    color: #fff;
  }
}

.operational__dashboard {
  height: 90%;


  .filters {
    @include flex(column, flex-start, initial, 1.5vh);
    .cards {
      width: 100%;
      @include flex(row, space-between, center);

      .card {
        width: calc((100% / 5) - 1.5vh);
        height: 8vh;
        background-color: #fff;
        border-radius: 10px;
      }
    }

    .actions {
      width: 100%;
      padding: 0vh 1vw;
      background-color: #F9F9FB;
      border-radius: 10px;
      @include flex(row, flex-start, center, 1vw);

      .search {
        width: 20%;
        height: 100%;
        background-color: #ffff;
        border: 2px solid #cccccc40;
        border-radius: 10px;
        overflow: hidden;
        @include flex(row, flex-start, initial);

        svg {
          width: 40px;
          height: auto;
          fill: #8790A7;
          padding: 10px;
        }

        input {
          width: 100%;
          height: 100%;
          padding: 10px 5px;
          font-size: 1.2rem;
          font-weight: 500;
          color: #666;
          border: none;
          outline: none;
          &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }

      .period {
        width: 20%;
        height: 100%;
        background-color: #ffff;
        border: 2px solid #cccccc40;
        border-radius: 10px;
        overflow: hidden;
        @include flex(row, flex-start, initial);

        input {
          width: 100%;
          height: 100%;
          padding: 10px 10px 10px 15px;
          font-size: 1.2rem;
          font-weight: 600;
          color: #666;
          border: none;
          outline: none;
          &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }

      }

      .status {
        width: 20%;
        height: 100%;
        background-color: #ffff;
        border-radius: 10px;

        select {
          width: 100%;
          height: 100%;
          padding: 10px 10px 10px 15px;
          font-size: 1.2rem;
          font-weight: 600;
          color: #666;
          border: 2px solid #cccccc40;
          border-radius: 10px;
          outline: none;


        }


      }

      .clear {
        height: 100%;

        svg {
          width: 40px;
          height: auto;
          fill: #8790A7;
          padding: 10px;
          transition: fill ease-in-out .2s;

          &:hover {
            fill: #333;
          }
        }

        button {
          @include flex(row, flex-start, initial);
          width: 100%;
          height: 100%;
          padding: 10px 5px;
          font-size: 1.2rem;
          font-weight: 500;
          color: #111;
          outline: none;
          cursor: pointer;
          transition: all ease-in-out .1s;
        }

      }
    }

  }

  .table_orders {
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 1vh 1vw;
    max-height: 67vh;
    overflow-y: auto;
    margin-top: 1.5vh;
    table {
      width: 100%;
      border-collapse: collapse;

      thead {
        tr {
          th {
            font-size: 1.2rem;
            font-weight: 500;
            color: #777;
            height: 7vh;
            border-bottom: 1px solid #cccccc60;
            text-align: left;
            padding: 0 10px;
          }
        }
      }

      tbody {
        tr {
          border-bottom: 1px solid #cccccc60;

          &:nth-last-child(1) {
            border-bottom: none;
          }
          td {
            padding: 0 10px;

            font-size: 1.2rem;
            font-weight: 500;
            color: #333;
            height: 7vh;
            text-align: left;
            user-select: text;

            .status {
              text-align: left;
              font-size: 1.2rem;
              @include flex(row, flex-start, center, 0.5vw);
              svg {
                width: 1vw;
                height: auto;
              }
              .badge {
                &.success {
                  background-color: #27B966;
                }
                &.warning {
                  background-color: #FF9A42;
                }
                &.rescheduled {
                  background-color: #6A31EF;
                }
                &.pending {
                  background-color: #ccc;
                }
              }

            }

            .actions_order {
              margin: 0 auto;
              width: 20px;
              height: 20px;
              fill: #333;
              cursor: pointer;
              transition: fill ease-in-out .2s;
              &:hover {
                fill: #53AEE2;
              }
            }

          }

          .flex {
            @include flex(row, flex-start, center, .5vw);


          }

          img, svg {
            width: 1.2vw;
            height: auto;
          }

        }
      }
    }


  }


}

@media (max-width: 1400px) {

  .options {

    a {
      padding: 5px 15px;
    }

  }
  .operational__dashboard {
    .filters {
      .actions {

      }
    }
    .table_orders {
      max-height: 65vh;

      table {
        thead {
          tr {
            th {
              font-size: 1rem;
            }
          }
        }
        tbody {
          tr {
            td {
              font-size: 1.1rem;

              img {
                width: 1vw;
              }
            }
          }
        }
      }
    }
  }
}
</style>