<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import morning from '@/assets/img/app/ageIntegrator/aniel/morning.png'
import afternoon from '@/assets/img/app/ageIntegrator/aniel/afternoon.png'

import { infoPage} from "@/stores/counter";
import CalendarOperational from "@/components/app/ageIntegrator/aniel/CalendarOperational.vue";
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";

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

const panel = ref('operational');


</script>

<template>
  <div class="options">
    <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel" @click="panel = 'operational'">Operacional</router-link>
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
              <h3>{{ item.servico }} {{ item.status == 'fechada' ? '- Fechada' : '' }}</h3>
              <p>{{ item.motivo_fechamento }}</p>
            </div>
            <div class="progress">
              <progress :class="{'closed': item.status == 'fechada'}"  :value="item.utilizado" :max="item.capacidade" ></progress>
              <div class="info">
                <span v-if="item.status == 'aberta'"><b>{{ Math.abs(item.capacidade - item.utilizado ) }}</b> - {{ (item.capacidade - item.utilizado) >= 0 ? 'Disponíveis' : 'Excedentes' }}</span>
                <span v-else><b>{{ Math.abs(item.capacidade - item.utilizado ) }}</b> - {{ (item.capacidade - item.utilizado) >= 0 ? 'Disponíveis' : 'Excedentes' }}</span>
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
              <h3>{{ item.servico }} {{ item.status == 'fechada' ? '- Fechada' : '' }}</h3>
              <p>{{ item.motivo_fechamento }}</p>
            </div>
            <div class="progress">
              <progress :class="{'closed': item.status == 'fechada'}" :value="item.utilizado" :max="item.capacidade"></progress>
              <div class="info">
                <span v-if="item.status == 'aberta'"><b>{{ Math.abs(item.capacidade - item.utilizado ) }}</b> - {{ (item.capacidade - item.utilizado) >= 0 ? 'Disponíveis' : 'Excedentes' }}</span>
                <span v-else><b>{{ Math.abs(item.capacidade - item.utilizado ) }}</b> - {{ (item.capacidade - item.utilizado) >= 0 ? 'Disponíveis' : 'Excedentes' }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

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
      border:  1px solid #cccccc50;
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
        @include flex(column, flex-start, initial, 4vh);
        padding-top: 5vh;

        .service {
          @include flex(column, flex-start, initial, .5vh);
          .title {
            width: 50%;
            h3 {
              font-size: 1.6rem;
              font-weight: 500;
              color: #333;
            }
          }

          p {
            font-size: 1rem;
            padding: 5px 0 5px 2px;
            width: 100%;
            font-weight: 600;
            color: #E42B0F;

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
}

</style>
