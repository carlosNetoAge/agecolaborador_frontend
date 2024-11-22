<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import morning from '@/assets/img/app/ageIntegrator/aniel/morning.png'
import afternoon from '@/assets/img/app/ageIntegrator/aniel/afternoon.png'
import infoIcon from '@/assets/img/app/ageIntegrator/aniel/info.png'

import { infoPage} from "@/stores/counter";
import CalendarOperational from "@/components/app/ageIntegrator/aniel/CalendarOperational.vue";
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";
import echo from '@config/echo';

const info = infoPage();

const setInfoPage = () => {
  info.setInfoPage({
    title: "Agenda Técnica Aniel",
    subtitle: "Acompanhe a capacidade de agendamento em tempo real"
  });
};

setInfoPage();

const statusRequest = ref(false);
const capacity = ref({});
const dateSelected = ref();
const getData = (period: Date) => {
  statusRequest.value = false;
  dateSelected.value = period;

  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity',
    params: {
      period: period
    },
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + Cookie.get('token')
    }
  }).then((response) => {
    statusRequest.value = true;
    capacity.value = response.data
  }).catch((error) => {
    console.log(error)
  });
}

const formatHour = (hour: string) => {
  return hour.split(':').slice(0, 2).join(':');
}

const formatDate = (date: string) => {
  return date.split('-').reverse().join('/');
}

const panel = ref('capacity');
const statusService = ref('')

setInterval(() => {
  getData(dateSelected.value);
}, 10000);

const updateStatusService = (servico:string) => {
  statusService.value = servico;
};



</script>

<template>
  <div class="options">
    <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel" @click="panel = 'capacity'">Capacidade</router-link>
    <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel/operacional" @click="panel = 'operational'">Operacional</router-link>
<!--    <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel/dashboard" @click="panel = 'dashboard'">Dashboard</router-link>-->
  </div>
  <CalendarOperational
    @updateData="getData"
    :statusCalendar="statusRequest"
  />
  <div class="container_content">
    <div class="capacity">
      <div class="period">
        <div class="header">
          <div class="title">
            Capacidade período Manhã
          </div>
          <img :src="morning" alt="">
        </div>
        <div class="services">
          <div class="service" v-for="(item, service) in capacity.manha || []" :key="service">
            <div class="title">
              <img v-if="item.status == 'fechada'" @mouseover="updateStatusService(item.servico+'manha')" @mouseleave="updateStatusService('')" :src="infoIcon" alt="info">

              <span>{{ item.servico }} {{ item.status == 'fechada' ? ' - Fechada': '' }}</span>

              <div class="info_content" v-if="item.status == 'fechada' && statusService == item.servico+'manha'">
                <p>Data: <b>{{ formatDate(item.data_fechamento)+' às ' + formatHour(item.hora_fechamento) + 'h' }}</b></p>
                <p>Motivo: <b>{{ item.motivo_fechamento }}</b></p>
              </div>
            </div>
            <div class="progress">
              <progress :class="{'closed': item.status == 'fechada'}"  :value="item.utilizado" :max="item.capacidade" ></progress>
              <div class="info">
                <span v-if="item.status == 'aberta'"><b>{{ Math.abs(item.capacidade - item.utilizado ) }}</b> - {{ (item.capacidade - item.utilizado) >= 0 ? 'Disponíveis' : 'Excedentes' }}</span>
                <span v-else>
                  <b>{{ (item.capacidade - item.utilizado) >= 0 ? 0 : Math.abs(item.capacidade - item.utilizado) }}</b> -
                  {{ (item.capacidade - item.utilizado) >= 0 ? 'Disponíveis' : 'Excedentes' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="period">
        <div class="header">
          <div class="title">
            Capacidade período Tarde
          </div>
          <img :src="afternoon" alt="">
        </div>
        <div class="services">
          <div class="service" v-for="(item, service) in capacity.tarde || []" :key="service">
            <div class="title">
              <img v-if="item.status == 'fechada'" @mouseover="updateStatusService(item.servico+'tarde')" @mouseleave="updateStatusService('')" :src="infoIcon" alt="info">

              <span>{{ item.servico }} {{ item.status == 'fechada' ? ' - Fechada': '' }}</span>

              <div class="info_content" v-if="item.status == 'fechada' && statusService == item.servico+'tarde'">
                <p>Data: <b>{{ formatDate(item.data_fechamento)+' às ' + formatHour(item.hora_fechamento) + 'h' }}</b></p>
                <p>Motivo: <b>{{ item.motivo_fechamento }}</b></p>
              </div>
            </div>
            <div class="progress">
              <progress :class="{'closed': item.status == 'fechada'}" :value="item.utilizado" :max="item.capacidade"></progress>
              <div class="info">
                <span v-if="item.status == 'aberta'"><b>{{ Math.abs(item.capacidade - item.utilizado ) }}</b> - {{ (item.capacidade - item.utilizado) >= 0 ? 'Disponíveis' : 'Excedentes' }}</span>
                <span v-else>
                  <b>{{ (item.capacidade - item.utilizado) >= 0 ? 0 : Math.abs(item.capacidade - item.utilizado) }}</b> -
                  {{ (item.capacidade - item.utilizado) >= 0 ? 'Disponíveis' : 'Excedentes' }}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

#app .content .page__container {
  padding: 6vh 5% 0 9% !important;
}

.options  {
  width: 100%;
  margin-bottom: 2vh;
  @include flex(row, flex-start, center, 1vw);


  a {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    transition: all ease-in-out .1s;
    padding: 5px 25px;
    border: 1px solid transparent;

    &:hover {
      @extend .select;
      opacity: .9;
    }
  }

  .select {
    background-color: #EBF3FE;
    color: #53aee2;
    border-color: #53aee2;
    }
}


.container_content {
  width: 100%;
  height: calc(75% - 2vh);
  margin-top: 2vh;
  .capacity {
    width: 100%;
    height: 100%;
    @include flex(row, space-between, center, 1vw);

    .period {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 15px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      @include flex(column, flex-start, initial, 1vh);
      padding: 2vh 1vw;

      .header {
        width: 100%;
        @include flex(row, space-between, center, 1vh);
        position: relative;
        .title {
          font-size: 1.6rem;
          font-weight: 500;
          color: #333;
        }

        img {
          position: absolute;
          top: -1vh;
          right: 1vw;
          width: 3vw;
          height: auto;
        }
      }

      .services {
        @include flex(column, flex-start, initial, 5vh);
        padding-top: 4vh;

        .service {
          @include flex(column, flex-start, initial, .5vh);
          .title {
            width: 50%;
            position: relative;
            @include flex(row, flex-start, center, .5vw);
            span {
              font-size: 1.6rem;
              font-weight: 500;
              color: #333;
            }

            img {
              width: 1vw;
              height: auto;

              &:hover {
                opacity: .9;
              }
            }

            .info_content {
              position: absolute;
              background-color: #333;
              border-radius: 5px;
              padding: 10px 15px;
              z-index: 3;
              bottom: -8vh;

              p {
                font-size: 1rem;
                padding: 5px 0 5px 2px;
                width: 100%;
                font-weight: 500;
                color: #fff;
                text-align: center;
              }



            }

          }


          .progress {
            position: relative;
            width: 70%;

            .info {
              position: absolute;
              right: 0; top: -3vh;

              span {
                font-size: 1.1rem;
                font-weight: 500;
                color: #333;
              }
            }

            progress {
              width: 100%;
              height: 3vh;
              border-radius: 10px;
              background-color: #E6F2FE;
              appearance: none;
              &::-webkit-progress-bar {
                background-color: #E6F2FE;
                border-radius: 10px;
              }
              &::-webkit-progress-value {
                background-color: #53aee2;
                border-radius: 10px;
              }
            }
            .closed {
                &::-webkit-progress-bar {
                  background-color: #FEF6F4;
                }

                &::-webkit-progress-value {
                  background-color: #E42B0F;
                }
            }
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

  .container_content {
    .capacity {
      .period {
        .header {
          .title {
            font-size: 1.4rem;


          }
          img {
            width: 2.5vw;
          }
        }
        .services {
          padding-top: 1vh;
          gap: 4vh;

          .service {
            .title {
              span {
                font-size: 1.4rem;
              }

              .info_content {
                bottom: -12vh;
              }
            }
            p {
              font-size: 1rem;
            }
            .progress {
              .info {
                span {
                  font-size: 1rem;
                }
              }
              progress {
                height: 3vh;
              }
            }
          }
        }
      }
    }
  }

}

</style>
