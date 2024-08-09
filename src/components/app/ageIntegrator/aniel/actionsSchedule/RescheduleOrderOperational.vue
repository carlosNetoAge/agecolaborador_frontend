<script setup lang="ts">
import {defineEmits, onMounted, ref} from "vue";
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";

import robot1Gif from '@/assets/img/app/ageIntegrator/aniel/robot1.gif';
import robot2Gif from '@/assets/img/app/ageIntegrator/aniel/robot2.gif';
import robot3Gif from '@/assets/img/app/ageIntegrator/aniel/robot3.gif';
import robot4Gif from '@/assets/img/app/ageIntegrator/aniel/robot4.gif';
import robot5Gif from '@/assets/img/app/ageIntegrator/aniel/robot5.gif';
import error from '@/assets/img/app/ageIntegrator/aniel/404.gif';

const emit = defineEmits(['closeModal']);

const close = () => {
  emit('closeModal');
}

const props = defineProps<{
  dataOs: object,
}>();

const rescheduleDate = ref('');
const datesAvailableReschedule = ref([]);
const statusCapacity = ref(true);


const getCapacityReschedule = () => {
  statusCapacity.value = true;

  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity/reschedule',
    method: 'get',
    params: {
      typeService: props.dataOs.servico
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    }
  }).then((response) => {
    datesAvailableReschedule.value = response.data;
    statusCapacity.value = false;
  }).catch((error) => {
    console.log(error);
  });
}

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

const payloadRescheduleOrder = ref({
  date: '',
  period: '',
  order: ''
})

const updatePayloadRescheduleOrder = (date: any, period: any) => {
  payloadRescheduleOrder.value = {
    date: date,
    period: period,
    order: props.dataOs.protocolo
  };

  rescheduleDate.value = `${date} ${period}`;
};

onMounted(() => {
  getCapacityReschedule();
});


const statusRequest = ref(false);
const errorRequest = ref(false);

const rescheduleOrder = () => {

  statusRequest.value = true;
  alterLoading()
  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-order/actions/reschedule',
    method: 'POST',
    data: {
      protocol: payloadRescheduleOrder.value.order,
      date: payloadRescheduleOrder.value.date,
      period: payloadRescheduleOrder.value.period
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    }
  }).then(() => {
    loadingActual.value = 6;

    setTimeout(() => {
      statusRequest.value = false;
      close();
    }, 3000);
  }).catch(() => {
    loadingActual.value = 10;
    errorRequest.value = true;

    setTimeout(() => {
      statusRequest.value = false;
      close();
    }, 3000);
  })

}

const loadingActual = ref(1)


const alterLoading = () => {
  setInterval(() => {
    if (loadingActual.value < 5) {
      loadingActual.value++
    }
  }, 5000)
}

const preloadImages = () => {
  const images = [
    robot1Gif,
    robot2Gif,
    robot3Gif,
    robot4Gif,
    robot5Gif,
    error,
  ];
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

onMounted(() => {
  preloadImages();
  getCapacityReschedule();
});

</script>

<template>
  <div class="reschedule_modal">
    <div class="card">
      <div class="close__btn">
        <svg
            @click="close()"
            xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"/></svg>
      </div>
      <h3>Datas disponíveis para reagendar o protocolo #{{props.dataOs.protocolo}}</h3>

      <div class="days" v-if="!statusCapacity">
        <div class="day" v-for="(date, index) in datesAvailableReschedule">
          <div class="infoDay">
            <p>{{ date.dayName }}, {{ formattedDateReschedule(index) }}</p>
          </div>
          <div class="period">
            <button v-for="(item, periodName) in date.period || []"
                    @click="updatePayloadRescheduleOrder(index, periodName)"
                    :class="{selected : rescheduleDate == index+' '+periodName, disable : item.status != 'aberta'}"
                    :disabled="item.status != 'aberta'">
              {{periodName}}
            </button>
          </div>
        </div>
      </div>

      <div class="reschedule-button">
        <button v-if="rescheduleDate != ''" @click="rescheduleOrder()">
          Reagendar ordem de serviço # {{ props.dataOs.protocolo }}
        </button>
      </div>

    </div>
  </div>
  <div class="loading" v-if="statusRequest">
    <div class="card_loading">
      <div class="content_loading" id="loading_1" v-if="loadingActual == 1">
        <img :src="robot1Gif" alt="Carregando..." />
        <h3><b>Por favor, aguarde... </b><br>Estou procurando por sua ordem de serviço</h3>
      </div>
      <div class="content_loading" id="loading_2" v-if="loadingActual == 2">
        <img :src="robot2Gif" alt="Carregando..." />
        <h3><b>Encontrei!</b> <br>Só um momento que já vou começar o meu trabalho</h3>
      </div>
      <div class="content_loading" id="loading_3" v-if="loadingActual == 3">
        <img :src="robot3Gif" alt="Carregando..." />
        <h3><b>Trabalha... trabalha...</b> <br>Estou alterando a data do agendamento, um momento...</h3>
      </div>
      <div class="content_loading" id="loading_4" v-if="loadingActual == 4">
        <img :src="robot4Gif" alt="Carregando..." />
        <h3><b>Removendo da esteira do técnico...</b> <br>Tenho que fazer tudo por aqui mesmo?</h3>
      </div>
      <div class="content_loading" id="loading_5" v-if="loadingActual == 5">
        <img :src="robot5Gif" alt="Carregando..." />
        <h3><b>Verificando status...</b> <br>Se algo deu errado, a culpa é do desenvolvedor...</h3>
      </div>
      <div class="content_loading" id="loading_6" v-if="loadingActual == 6">
        <img :src="robot2Gif" alt="Carregando..." />
        <h3><b>Tudo certo!</b> <br>Se precisar, estou por aqui.</h3>
      </div>
      <div class="content_loading" id="loading_6" v-if="errorRequest">
        <img :src="error" alt="Carregando..." />
        <h3><b>Algo deu errado!</b> <br>Acione o time de desenvolvimento.</h3>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

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
    height: 85%;
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

    h3 {
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
      max-height: 80%;
      overflow-y: auto;

      .day {
        @include flex(row, space-between, center, 0);
        width: 100%;
        padding: 2vh 1vw;
        background-color: #fff;
        border-radius: 10px;
        border: 2px solid #cccccc40;
        transition: border-color ease-in-out .3s;

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
            padding: 7px 15px;
            font-size: 1.2rem;
            background-color: #E9F3FE;
            font-weight: 600;
            color: #333;
            border-radius: 15px;
            cursor: pointer;
            transition: all ease-in-out .2s;
            &:hover {
              background-color: #53AEE2;
              color: #fff;
            }
          }

          .selected {
            background-color: #53AEE2;
            color: #fff;
          }

          .disable {
            background-color: #ccc;
            color: #fff;
            cursor: not-allowed;

            &:hover {
              background-color: #F15043;
              color: #fff;
            }
          }
        }
      }
    }


    .reschedule-button {
      margin-top: 2vh;
      width: 100%;
      @include flex(row, center, center, 0);

      button {
        padding: 10px 20px;
        font-size: 1.2rem;
        font-weight: 600;
        color: #fff;
        background-color: #53AEE2;
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

.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000060;
  z-index: 99;
  @include flex(row, center, center);

  .card_loading {
    background-color: #fff;
    border-radius: 10px;
    padding: 8vh 2vw;
    width: 30vw;
    height: 40vh;


    .content_loading {
      @include flex(column, center, center);
      img {
        width: 5vw;
        height: auto;
        opacity: 0;
        animation: appears-robot ease-in-out forwards .3s;

      }

      h3 {
        font-size: 1.4rem;
        font-weight: 500;
        color: #333;
        text-align: center;
        padding: 10px;
        opacity: 0;
        animation: appears-text ease-in-out forwards .3s;
        animation-delay: .2s;

        b {
          color: #111;
          font-size: 2rem;
          font-weight: 600;
        }
      }
    }

    @keyframes appears-robot {
      0% {
        transform: translateX(20px);
        opacity: 0;
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes appears-text {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>