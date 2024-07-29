<script setup lang="ts">

import { defineProps, ref, defineEmits } from 'vue';
import RescheduleOrder from "@/components/app/ageIntegrator/aniel/dashboard/RescheduleOrder.vue";
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";
import LogOrder from "@/components/app/ageIntegrator/aniel/dashboard/LogOrder.vue";

const { osSelected, modalStatus } = defineProps(['osSelected', 'modalStatus']);

const modalReschedule = ref(false);
const modalLog = ref(false);
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
        close();
        osSelected.value = [];
      })
      .catch((error) => {
        console.log(error);
      });
};

const emit = defineEmits(['closeModal']);


const close = () => {
  emit('closeModal');
}

</script>

<template>
  <div class="modal" v-if="modalStatus">
    <div class="card">
      <div class="close__btn">
        <svg
            @click="close"
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
        <button @click="approvalOrder(osSelected.protocolo)"
                :disabled="osSelected.status_order[0].id == 15 || osSelected.status_order[0].id == 16"
                :style="{
            backgroundColor: osSelected.status_order[0].id == 15 || osSelected.status_order[0].id == 16 ? '#ccc' : '#11B15B',
            color: osSelected.status_order[0].id == 15 || osSelected.status_order[0].id == 16 ? '#111' : '#fff',
            cursor: osSelected.status_order[0].id == 15 || osSelected.status_order[0].id == 16 ? 'not-allowed' : 'pointer'
        }">
          Aprovar entrada
        </button>

        <button @click="modalReschedule = true"
                :disabled="osSelected.status_order[0].id == 15 || osSelected.status_order[0].id == 16"
                :style="{
            backgroundColor: osSelected.status_order[0].id == 15 || osSelected.status_order[0].id == 16 ? '#ccc' : '#53AEE2',
            color: osSelected.status_order[0].id == 15 || osSelected.status_order[0].id == 16 ? '#111' : '#fff',
            cursor: osSelected.status_order[0].id == 15 || osSelected.status_order[0].id == 16 ? 'not-allowed' : 'pointer'
        }">
          Reagendar OS
        </button>
        <button @click="modalLog = true" style="background-color: #5183FF; color: #fff">Histórico da OS</button>
      </div>
    </div>
    <RescheduleOrder v-if="modalReschedule" @closeAll="[close(), modalReschedule = false]" @closeModal="modalReschedule = false" :osSelected="osSelected"/>
    <LogOrder v-if="modalLog" @closeModal="modalLog = false" :osStatus="osSelected.status_order" />
  </div>

</template>

<style scoped lang="scss">
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

</style>