<script setup lang="ts">

import {ref} from "vue";
import morning from '@/assets/img/app/ageIntegrator/aniel/morning.png';
import afternoon from '@/assets/img/app/ageIntegrator/aniel/afternoon.png';
import deadline from '@/assets/img/app/ageIntegrator/aniel/deadline.png';
import team from '@/assets/img/app/ageIntegrator/aniel/team.png';
import description from '@/assets/img/app/ageIntegrator/aniel/description.png';
import unlock from '@/assets/img/app/ageIntegrator/aniel/unlock.png';
import lock from '@/assets/img/app/ageIntegrator/aniel/lock.png';
import open from '@/assets/img/app/ageIntegrator/aniel/open.png';
import unsafe from '@/assets/img/app/ageIntegrator/aniel/unsafe.png';
import capacity from '@/assets/img/app/ageIntegrator/aniel/capacity.png';
import schedule from '@/assets/img/app/ageIntegrator/aniel/schedule.png';
import safe from '@/assets/img/app/ageIntegrator/aniel/safe.png';
import configuration from '@/assets/img/app/ageIntegrator/aniel/cogwheel.png';
import sla from '@/assets/img/app/ageIntegrator/aniel/sla.png';
import technician from '@/assets/img/app/ageIntegrator/aniel/technician.png';
import calculator from '@/assets/img/app/ageIntegrator/aniel/calculator.png';
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";
import AlterCapacitySchedule from "@/components/app/ageIntegrator/aniel/schedule/management/AlterCapacitySchedule.vue";

const modal = ref(false);
const data = ref([]);
const scheduleSelected = ref({});
const alterCapacityModal = ref(false);
const alterCapacityData = ref([]);
const alterCapacityIndex = ref(-1);

const months = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

const formattedDateReschedule = (dateParam: any) => {
  const date = new Date(dateParam);
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${day} de ${month} de ${year}`;
};


const getData = () => {
  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/schedule',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer '+Cookie.get('token')
    }
  }).then((response) => {
    data.value = response.data
  }).catch((error) => {
    console.log(error);
  });
}

getData();

const statusSchedule = (item: any) => {

  if (item.capacidade - item.utilizado < 0) {
    return unsafe;
  } else if (item.capacidade - item.utilizado < 5) {
    return unsafe;
  } else {
    return safe;
  }

}

const alterStatusSchedule = () => {
  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/schedule/alter-status',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer '+Cookie.get('token')
    },
    data: {
      schedule_id: scheduleSelected.value.id,
      command: scheduleSelected.value.status == 'aberta' ? 'close' : 'reopen',
      motive_id: 1
    }
  }).then(() => {
    getData();
    modal.value = false;
  }).catch((error) => {
    console.log(error);
  });
}

const alterCapacityBuilder = () => {
  alterCapacityData.value.forEach(item => {
    if (item.tecnicos === undefined) {
      item.tecnicos = item.capacidade / 2;
    }
    if (item.sla === undefined) {
      item.sla = 2;
    }

    if (item.nova_capacidade === undefined) {
      item.nova_capacidade = item.capacidade;
    }
  });

}

const alterCapacity = () => {
  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/schedule/alter-capacity',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer '+Cookie.get('token')
    },
    data: {
      schedule: alterCapacityData.value
    }
  }).then((res) => {
    getData();
    alterCapacityIndex.value = -1;
    alterCapacityData.value = [];
  }).catch((error) => {

  });
}

</script>

<template>
  <div class="content__capacity">
    <div class="days">
      <div class="day" v-for="(items, day) in data" :key="day">
        <div class="action_alter_capacity">
          <button v-if="alterCapacityIndex != day" @click="[alterCapacityData = items, alterCapacityIndex = day, alterCapacityBuilder()]">
            <img :src="configuration" alt="">
          </button>
          <template v-else>
            <button @click="[alterCapacityIndex = -1, alterCapacityData = []]">
              <img :src="unsafe" alt="">
            </button>
            <button @click="alterCapacity">
              <img :src="safe" alt="">
            </button>
          </template>
        </div>
        <h4>
          {{ items[0].dia_semana.charAt(0).toUpperCase() + items[0].dia_semana.slice(1) }}, {{ formattedDateReschedule(day) }}
        </h4>
        <div class="services-container">
          <div class="services">
            <table>
              <thead>
              <tr v-if="alterCapacityIndex != day">
                <th style="width: 5%; text-align: center">Período</th>
                <th>Serviço</th>
                <th>Capacidade</th>
                <th>Agendados</th>
                <th>Líquido</th>
                <th>Status</th>
                <th>Motivo fechamento</th>
                <th>Data e hora do fechamento</th>
                <th>Alterado por</th>
                <th>ações</th>
              </tr>
              <tr v-else>
                <th style="width: 5%; text-align: center">Período</th>
                <th>Serviço</th>
                <th>Capacidade atual</th>
                <th>Líquido</th>
                <th>Técnicos</th>
                <th>Quantidade de serviços</th>
                <th>Capacidade calculada</th>
                <th>Alterado por</th>
              </tr>
              </thead>
              <tbody>
              <tr v-if="alterCapacityIndex != day" v-for="(item, index) in items" :key="index">
                <td  style="width: 5%">
                  <img :src="item.periodo == 'manha' ? morning : afternoon" alt="">
                </td>
                <td style="text-align: left">{{ item.servico }}</td>
                <td>
                  <div class="flex">
                    <img :src="capacity" alt="">
                    <span>{{ item.capacidade }}</span>
                  </div>
                </td>
                <td>
                  <div class="flex">
                    <img :src="schedule" alt="">
                    <span>{{ item.utilizado }}</span>
                  </div>
                </td>
                <td>
                  <div class="flex">
                    <img :src="statusSchedule(item)" alt="">
                    <span>{{ item.capacidade - item.utilizado }}</span>
                  </div>
                </td>
                <td>
                  <div class="flex">
                    <img style="width: 1vw" :src="item.status == 'aberta' ? unlock : lock" alt="">
                    <span>{{ item.status }}</span>
                  </div>
                </td>
                <td>
                  <div class="flex">
                    <img :src="description" alt="">
                    <span>{{ item.motivo_fechamento != null ? item.motivo_fechamento : '-' }}</span>
                  </div>
                </td>
                <td>
                  <div class="flex">
                    <img :src="deadline" alt="">
                    <span>{{ item.data_fechamento != null ? item.data_fechamento+' ás '+item.hora_fechamento : '-' }} </span>
                  </div>
                </td>
                <td>
                  <div class="flex">
                    <img :src="team" alt="">
                    <span> {{ item.user.nome }} </span>
                  </div>
                </td>
                <td class="actions_table">
                  <svg @click="[modal = true, scheduleSelected = item]" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="12" cy="2" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="22" r="2"/></svg>
                </td>
              </tr>
              <tr v-else v-for="(item, idx) in alterCapacityData" :key="item.id">
                <td  style="width: 5%">
                  <img :src="item.periodo == 'manha' ? morning : afternoon" alt="">
                </td>
                <td style="text-align: left">{{ item.servico }}</td>
                <td>
                  <div class="flex">
                    <img :src="capacity" alt="">
                    <span>{{ item.capacidade }}</span>
                  </div>
                </td>
                <td>
                  <div class="flex">
                    <img :src="statusSchedule(item)" alt="">
                    <span>{{ item.capacidade - item.utilizado }}</span>
                  </div>
                </td>
                <td>
                  <div class="flex">
                    <img :src="technician" alt="">
                    <input type="number" v-model="item.tecnicos">
                  </div>
                </td>
                <td>
                  <div class="flex">
                    <img :src="sla" alt="">
                    <input type="number"  v-model="item.sla">
                  </div>
                </td>
                <td>
                  <div class="flex">
                    <img :src="calculator" alt="">
                    <span>{{ item.nova_capacidade = item.tecnicos * item.sla }}</span>
                  </div>
                </td>
                <td>
                  <div class="flex">
                    <img :src="team" alt="">
                    <span> {{ item.user.nome }} </span>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>


          </div>

        </div>
      </div>

    </div>
  </div>

  <div class="modal" v-if="modal">
    <div class="card">
      <div class="close__btn">
        <svg
            @click="modal = false"
            xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"/></svg>
      </div>
      <h3>Alterar status da agenda</h3>
      <div class="info">
        <p><b>Data:</b> #{{ scheduleSelected.data }}</p>
        <p><b>Servico:</b> {{ scheduleSelected.servico }}</p>
        <p><b>Capacidade:</b> {{ scheduleSelected.capacidade }}</p>
        <p><b>Utilizado:</b> {{ scheduleSelected.utilizado }}</p>
        <p><b>Disponível:</b> {{ scheduleSelected.capacidade - scheduleSelected.utilizado }}</p>
        <p><b>Status:</b> {{ scheduleSelected.status }}</p>
        <p><b>Motivo do fechamento:</b> {{ scheduleSelected.motivo_fechamento != null ? scheduleSelected.motivo_fechamento : '-' }}</p>
        <p><b>Data e hora:</b> {{ scheduleSelected.data_fechamento != null ? scheduleSelected.data_fechamento+' ás '+scheduleSelected.hora_fechamento : '-' }}</p>
        <p><b>Alterado por:</b> {{ scheduleSelected.user.nome }}</p>
      </div>
      <div class="action">
        <button @click="alterStatusSchedule()" :class="scheduleSelected.status == 'aberta' ? 'closed' : 'open'">
          {{ scheduleSelected.status == 'aberta' ? 'Fechar agenda' : 'Reabrir agenda' }}
        </button>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.content__capacity {
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;


  .days {
    @include flex(row, flex-start, initial, 2vh);
    flex-wrap: wrap;
    height: 100%;
    padding-top: 2vh;

    .day {
      @include flex(column, flex-start, initial);
      width: 100%;
      padding: 1vh 15px;
      background-color: #fff;
      border-radius: 10px;
      border: 1px solid #cccccc20;
      transition: border-color 0.3s ease-in-out;
      position: relative;
      &:hover {
        border-color: #cccccc60;
      }

      .action_alter_capacity {
        position: absolute;
        top: 1vh;
        z-index: 99;
        right: 2vw;
        cursor: pointer;
        @include flex(row, flex-start, center, .5vw);

        img {
          width: 1.5vw;
          height: auto;
        }
      }

      h4 {
        font-size: 1.2rem;
        font-weight: 500;
        color: #666;
        display: block;
        margin: 1vh 0;
      }

      .services-container {
        .services {
          @include flex(row, space-between, center, .5vw);
          table {
            width: 100%;
            border-collapse: collapse;
            thead {
              th {
                font-size: 1.2rem;
                font-weight: 400;
                color: #666666;
                text-align: left;
                padding: 10px 10px;
                border-bottom: 1px solid #cccccc40;
              }
            }
            tbody {
              tr {
                border-bottom: 1px solid #cccccc40;

                &:hover {
                  background-color: #f5f5f540;
                }

                td {
                  font-size: 1.2rem;
                  font-weight: 500;
                  color: #333333;
                  padding: 10px 10px;
                  text-align: left;

                  img {
                    width: 1.5vw;
                    height: auto;
                    display: block;
                    margin: 0 auto;
                  }
                }

                .flex {
                  @include flex(row, flex-start, center, .5vw);

                  img {
                    margin: 0;
                  }

                  input {
                    border: 1px solid #cccccc60;
                    border-radius: 7px;
                    padding: 3px 15px;
                    font-size: 1.2rem;
                    color: #333;
                    font-weight: 500;
                  }
                }

                .actions_table {
                  svg {
                    display: block;
                    margin: 0 auto;
                    width: .8vw;
                    height: auto;
                    fill: #333333;
                    cursor: pointer;
                    transition: fill ease-in-out .2s;
                    &:hover {
                      opacity: .9;
                    }
                  }
                }

                .status {
                  display: block;
                  margin: 0 auto;
                  width: 100%;
                  padding: 3px 0;
                  border-radius: 5px;
                  span {
                    font-size: 1rem;
                    font-weight: 500;
                    color: #fff;
                    display: block;
                    margin: 0 auto;
                  }
                }
                .open {
                  background-color: #2ECC71;
                }

                .closed {
                  background-color: #F23E2F;
                }
              }
              tr:nth-last-child(1) {
                border-bottom: none;
              }
            }
          }

          .divisor {
            height: 160px;
            @include flex(row, center, center);
            padding-top: 20px;

            div {
              background-color: #cccccc60;
              width: 2px;
              height: 80%;
            }
          }
        }

      }

    }
  }
}

.modal {
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  @include flex(row, center, center);

  .card {
    width: 30vw;
    padding-bottom: 4vh;
    background-color: #ffffff;
    border-radius: 10px;

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

    h3 {
      font-size: 2rem;
      color: #333;
      text-align: center;
      font-weight: 500;

    }

    .info {
      padding: 2vh 3vw;

      p {
        font-size: 1.4rem;
        color: #333;
        margin: 5px 0;

      }
    }

    .action {
      width: 100%;
      @include flex(row, center, center);

      button {
        padding: 10px 35px;
        background-color: #53aee2;
        color: #fff;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color ease-in-out .1s;
        font-weight: 500;
        font-size: 1.4rem;


      }

      .open {
        &:hover {
          background-color: #2ECC71;
        }
      }

      .closed {
        &:hover {
          background-color: #F23E2F;
        }
      }
    }

  }
}


</style>