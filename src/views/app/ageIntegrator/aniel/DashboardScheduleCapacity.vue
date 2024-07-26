<script setup lang="ts">

import {computed, ref} from 'vue';
import {infoPage} from "@/stores/counter";
import {onBeforeMount} from "vue";

// images
import warning from '@/assets/img/app/ageIntegrator/aniel/order_warning.png';
import approval from '@/assets/img/app/ageIntegrator/aniel/order_approval.png';
import surplus from '@/assets/img/app/ageIntegrator/aniel/order_surplus.png';
import all from '@/assets/img/app/ageIntegrator/aniel/order_all.png';
import rescheduled from '@/assets/img/app/ageIntegrator/aniel/order_rescheduled.png';
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";



const info = infoPage();
const panel = ref({});

const setInfoPage = () => {
  info.setInfoPage({
    title: "Agenda Técnica Aniel",
    subtitle: "Aprove o excedente de ordens de serviço que não entraram no sistema por limitação do capacity."
  });
};

const filterSelected = ref('all');
const data = ref([]);

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

const dateFilter = ref(formattedDate);
const search = ref('');
const status = ref('all');
const osSelected = ref([])
const modalStatus = ref(false);
const modalReschedule = ref(false);
const rescheduleDate = ref('');


const getDashboard = () => {
  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/dashboard',
    method: 'GET',
    params: {
      period: dateFilter.value
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    }
  })
      .then((response) => {
        data.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
};

const approvalOrder = (order: any) => {
  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/approval-order',
    method: 'POST',
    data: {
      order: order
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    }
  })
      .then((response) => {
        console.log(response);

        getDashboard();
        modalStatus.value = false;
        osSelected.value = [];
      })
      .catch((error) => {
        console.log(error);
      });
};

const countStatusApproved = computed(() => {
  return data.value.reduce((count, service) => {
    const statusCount = service.status_order.filter(status => status.id === 15).length;
    return count + statusCount;
  }, 0);
});

const countStatusReSchedule = computed(() => {
  return data.value.reduce((count, service) => {
    const statusCount = service.status_order.filter(status => status.id === 16).length;
    return count + statusCount;
  }, 0);
});

const dataFiltered = computed(() => {
  const searchValue = search.value.toString().toLowerCase();

  return data.value.filter((value) => {
    const matchesSearch = value.protocolo.toLowerCase().includes(searchValue);

    let matchesStatus = true;
    if (status.value === 'approved') {
      matchesStatus = value.status_order[0]['id'] === 15;
    } else if (status.value === 'rescheduled') {
      matchesStatus = value.status_order[0]['id'] === 16;
    } else if (status.value === 'pending') {
      matchesStatus = value.status_order[0]['id'] !== 15 && value.status_order[0]['id'] !== 16;
    }

    return matchesSearch && matchesStatus;
  });
});


getDashboard();
setInfoPage();


setInterval(() => {
  getDashboard();
}, 10000);

</script>

<template>
  <div class="dashboard__page">
    <div class="options">
      <div class="navbar">
        <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel" @click="panel = 'operational'">Operacional</router-link>
        <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel/dashboard" @click="panel = 'dashboard'">Dashboard</router-link>
      </div>
    </div>
    <div class="cards">
      <div class="card">
        <div class="info">
          <div class="title">
            <p>Ordens do dia</p>
          </div>
          <div class="value">
            <span> - </span>
            <span></span>
          </div>
        </div>
        <div class="icon">
          <img :src="all" alt="">
        </div>
      </div>
      <div class="card">
        <div class="info">
          <div class="title">
            <p>Ordens excedentes</p>
          </div>
          <div class="value">
            <span>{{ data.length }}</span>
            <span></span>
          </div>
        </div>
        <div class="icon">
          <img :src="surplus" alt="">
        </div>
      </div>
      <div class="card">
        <div class="info">
          <div class="title">
            <p>Ordens aprovadas</p>
          </div>
          <div class="value">
            <span>{{ countStatusApproved }}</span>
            <span></span>
          </div>
        </div>
        <div class="icon">
          <img :src="approval" alt="">
        </div>
      </div>
      <div class="card">
        <div class="info">
          <div class="title">
            <p>Ordens reagendadas</p>
          </div>
          <div class="value">
            <span>{{countStatusReSchedule}}</span>
            <span></span>
          </div>
        </div>
        <div class="icon">
          <img :src="rescheduled" alt="">
        </div>
      </div>
      <div class="card">
        <div class="info">
          <div class="title">
            <p>Ordens pendentes</p>
          </div>
          <div class="value">
            <span>{{ data.length - countStatusApproved - countStatusReSchedule }}</span>
            <span></span>
          </div>
        </div>
        <div class="icon">
          <img :src="warning" alt="">
        </div>
      </div>
    </div>
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
        <select name="status" id="status" v-model="status">
          <option value="all">Todos</option>
          <option value="surplus">Excedentes</option>
          <option value="approved">Aprovado</option>
          <option value="rescheduled">Reagendas</option>
          <option value="pending">Pendentes</option>
        </select>
      </div>
      <div class="clear">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path d="m17,0c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7S20.86,0,17,0Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm2.957-6.543l-1.543,1.543,1.543,1.543-1.414,1.414-1.543-1.543-1.543,1.543-1.414-1.414,1.543-1.543-1.543-1.543,1.414-1.414,1.543,1.543,1.543-1.543,1.414,1.414Zm-7.957,9.025c.616.412,1.289.743,2,.995v8.523l-6-4.5v-5.12L0,5.38v-2.38C0,1.346,1.346,0,3,0h8.349c-.706.571-1.325,1.244-1.831,2H3c-.551,0-1,.449-1,1v1.62l8,9v4.88l2,1.5v-5.518Z"/>
          </svg>
        </button>
      </div>

    </div>

    <div class="table_orders">
      <table>
        <thead>
        <tr>
          <th style="text-align: left">Protocolo</th>
          <th>Tipo</th>
          <th style="text-align: left">Serviço</th>
          <th>Agendamento</th>
          <th>Período</th>
          <th style="text-align: left">Status</th>
          <th>Localidade</th>
          <th>Aberta por</th>
          <th>Setor</th>
          <th>Solicitante</th>
          <th>Aprovado por</th>
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in dataFiltered" :key="index">
          <td style="text-align: left"># {{ item.protocolo }}</td>
          <td>{{ item.servico }}</td>
          <td style="text-align: left">{{ item.subservico }}</td>
          <td>{{ item.hora_agendamento }}</td>
          <td>{{ item.periodo }}</td>
          <td>
            <div class="status">
              <div class="badge" :style="{backgroundColor: item.status_order[0]['cor_indicativa']}"></div>
              <span>{{ item.status_order[0]['titulo'] }}</span>
            </div>
          </td>
          <td>{{item.localidade}}</td>
          <td>{{ item.aberta_por }}</td>
          <td>{{ item.setor }}</td>
          <td></td>
          <td>
            {{ item.aprovador }}
          </td>
          <td>
            <div style="cursor: pointer" @click="[osSelected = item, modalStatus = true]" v-if="item.status_order[0]['id'] != 15">
              <svg  class="actions_order" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="12" cy="2" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="22" r="2"/></svg>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="modal" v-if="modalStatus">
    <div class="card">
      <div class="close__btn">
        <svg
            @click="modalStatus = false"
            xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"/></svg>
      </div>

      <h1>Gerenciamento da Ordem de Serviço</h1>

      <div class="info">
        <p><b>Protocolo:</b> #{{ osSelected.protocolo }}</p>
        <p><b>Servico:</b> {{ osSelected.servico }}</p>
        <p><b>Tipo de serviço:</b> {{ osSelected.subservico }}</p>
        <p><b>Agendamento:</b> {{ osSelected.hora_agendamento }}</p>
        <p><b>Periodo:</b> {{ osSelected.periodo }}</p>
        <p><b>Status:</b> {{ osSelected.status_order[0]['titulo'] }}</p>
        <p><b>Localidade:</b> {{ osSelected.localidade }}</p>
      </div>
      <div class="options">
        <button @click="approvalOrder(osSelected.protocolo)" style="background-color: #11B15B">Aprovar entrada</button>
        <button @click="modalReschedule = true" style="background-color: #5E78FF">Reagendar OS</button>
      </div>
    </div>
  </div>
  <div class="reschedule_modal" v-if="modalStatus && modalReschedule">
    <div class="card">
      <div class="close__btn">
        <svg
            @click="modalReschedule = false"
            xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"/></svg>
      </div>

      <h1>Reagendar Ordem de Serviço</h1>

      <div class="info">
        <div class="days">
          <div class="day">
            <div class="infoDay">
              <p>Quinta-feira, 01 de agosto de 2024</p>
            </div>
            <div class="period">
              <button @click="rescheduleDate = 'morning'" :class="{selected : rescheduleDate == 'morning'}">Manhã</button>
              <button @click="rescheduleDate = 'afternoon'" :class="{selected : rescheduleDate == 'afternoon'}">Tarde</button>
            </div>
          </div>
          <div class="day">
            <div class="infoDay">
              <p>Sexta-feira, 02 de agosto de 2024</p>
            </div>
            <div class="period">
              <button @click="rescheduleDate = 'morning2'" :class="{selected : rescheduleDate == 'morning2'}">Manhã</button>
              <button @click="rescheduleDate = 'afternoon2'" :class="{selected : rescheduleDate == 'afternoon2'}">Tarde</button>
            </div>
          </div>
          <div class="day">
            <div class="infoDay">
              <p>Sábado, 03 de agosto de 2024</p>
            </div>
            <div class="period">
              <button @click="rescheduleDate = 'morning3'" :class="{selected : rescheduleDate == 'morning3'}">Manhã</button>
              <button @click="rescheduleDate = 'afternoon3'" :class="{selected : rescheduleDate == 'afternoon3'}">Tarde</button>
            </div>
          </div>
          <div class="day">
            <div class="infoDay">
              <p>Segunda-feira, 05 de agosto de 2024</p>
            </div>
            <div class="period">
              <button @click="rescheduleDate = 'morning4'" :class="{selected : rescheduleDate == 'morning4'}">Manhã</button>
              <button @click="rescheduleDate = 'afternoon4'" :class="{selected : rescheduleDate == 'afternoon4'}">Tarde</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.dashboard__page {
  @include flex(column, flex-start, initial, 2vh);
  width: 100%;

  .options  {
    width: 100%;

    .navbar {
      @include flex(row, flex-start, center, 1vw);
    }

    .actions {
      @include flex(row, flex-start, center, 1vw);

    }

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

  .filters {
    @include flex(row, flex-start, center, 1.5vw);
    position: relative;
    border-bottom: 2px solid #cccccc40;

    .filter {
      button {
        font-size: 1.2rem;
        font-weight: 600;
        color: #111;
        cursor: pointer;
        transition: all ease-in-out .1s;
        padding: 10px;

        &:hover {
          color: #53AEE2;
        }

      }

      .effect-select {
        border-bottom: 5px solid transparent;
        border-radius: 5px 5px 0 0;
        transition: all ease-in-out .1s;

      }
    }

    .selected {
      button {
        color: #53AEE2;
      }
      .effect-select {
        border-color: #53AEE2;
      }

    }

  }

  .cards {
    @include flex(row, flex-start, center, 1vw);
    align-items: stretch;
    width: 100%;

    .card {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 10px;
      border:  2px solid #cccccc40;
      @include flex(row, space-between, center, .5vw);
      padding: 1vh 1vw;
      .info {
        @include flex(column, flex-start, initial, 1vh);

        .title {
          p {
            font-size: 1.2rem;
            font-weight: 500;
            color: #777;
          }
        }

        .value {
          @include flex(row, flex-start, center, .5vw);
          span {
            font-size: 2rem;
            font-weight: 600;
            color: #333;

            &:nth-child(2) {
              font-size: 1.2rem;
              font-weight: 500;
            }
          }

        }


      }

      .icon {
        @include flex(row, center, center, 0);
        height: 100%;

        img {
          width: 2.5vw;
          height: auto;
        }
      }
    }

  }

  .actions {
    width: 100%;
    padding: .5vh 1vw;
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

  .table_orders {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 1vh 1vw;
    max-height: 50vh;
    overflow-y: auto;
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
            text-align: center;
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
            text-align: center;
            user-select: text;

            .status {
              @include flex(row, flex-start, center, .5vw);
              .badge {
                width: 10px;
                height: 10px;
                padding: 5px;
                border-radius: 50%;
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
        }
      }
    }


  }
}

@media (max-width: 1400px) {

  .dashboard__page {
    .options {
      a, button {
        padding: 5px 15px;
      }
    }

    .table_orders {
      max-height: 40vh;
    }
  }
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000040;
  z-index: 99;
  @include flex(row, center, center, 0);

  .card {
    width: 30%;
    padding-bottom: 4vh;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: $global-box-shadow;


    .close__btn {
      width: 100%;
      height: 10%;
      @include flex(row, flex-end, center, 0);
      padding: 10px;
      svg {
        width: 25px;
        height: auto;
        fill: #F23E2F;
        cursor: pointer;
        transition: fill ease-in-out .2s;
        &:hover {
          opacity: .9;
        }
      }
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 600;
      color: #333;
      padding: 10px;
      text-align: center;
    }

    .info {
      padding: 2vh 3vw;

      p {
        font-size: 1.4rem;
        color: #333;
        margin: 5px 0;

      }
    }

    .options {
      width: 100%;
      height: 50%;
      @include flex(column, flex-start, center, 1vh);
      padding: 10px;
      button {
        width: 40%;
        padding: 10px;
        font-size: 1.2rem;
        font-weight: 600;
        color: #fff;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        transition: all ease-in-out .2s;
        &:hover {
          opacity: .9;
        }
      }
    }
  }
}

.reschedule_modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000060;
  z-index: 99;
  @include flex(row, center, center, 0);
  .card {
    width: 70%;
    height: 80%;
    padding-bottom: 4vh;
    background-color: #E9F3FE;
    border-radius: 10px;
    box-shadow: $global-box-shadow;


    .close__btn {
      width: 100%;
      @include flex(row, flex-end, center, 0);
      padding: 10px;

      svg {
        width: 25px;
        height: auto;
        fill: #F23E2F;
        cursor: pointer;
        transition: fill ease-in-out .2s;

        &:hover {
          opacity: .9;
        }
      }
    }

    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: #333;
      padding: 10px;
      text-align: center;
    }


    .days {
      margin: 0 auto;
      width: 80%;
      padding: 2vh 2vw;
      @include flex(column, flex-start, center, 1vh);
      flex-wrap: wrap;

      .day {
        @include flex(row, space-between, center, 0);
        width: 60%;
        padding: 2vh 1vw;
        background-color: #fff;
        border-radius: 10px;
        border: 2px solid #cccccc40;
        transition: border-color ease-in-out .3s;

        &:hover {
          border-color: #5E78FF60;
        }

        .infoDay {
          p {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            text-align: center;
            padding: 5px 0;
          }
        }

        .period {
          @include flex(row, flex-start, center, 1vw);
          button {
            width: 100%;
            padding: 5px 10px;
            font-size: 1.2rem;
            background-color: #E9F3FE;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;;
            font-weight: 600;
            color: #333;
            border-radius: 5px;
            cursor: pointer;
            transition: all ease-in-out .2s;
            &:hover {
              background-color: #5E78FF;
              color: #fff;
            }
          }

          .selected {
            background-color: #5E78FF;
            color: #fff;
          }
        }
      }
    }
  }

  }

</style>