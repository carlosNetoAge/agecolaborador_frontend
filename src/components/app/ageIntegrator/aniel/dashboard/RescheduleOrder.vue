<script setup lang="ts">
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";
import {ref, defineProps, onBeforeMount, onMounted, defineEmits} from "vue";

const { osSelected } = defineProps(['osSelected']);

const modalReschedule = ref(false);
const rescheduleDate = ref('');
const datesAvailableReschedule = ref([]);
const statusCapacity = ref(true);

const emit = defineEmits(['closeModal', 'closeAll']);


const close = () => {
  emit('closeModal');
}

const finishReschedule = () => {
  emit('closeAll');
}


const getCapacityReschedule = () => {
  statusCapacity.value = true;

  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity/reschedule',
    method: 'get',
    params: {
      typeService: osSelected.servico
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
    order: osSelected.protocolo
  };

  rescheduleDate.value = `${date} ${period}`;
};

const rescheduleOrder = () => {
  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/reschedule-order',
    method: 'post',
    data: {
      order: payloadRescheduleOrder.value.order,
      period: payloadRescheduleOrder.value.period,
      date: payloadRescheduleOrder.value.date
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    }
  }).then((response) => {
    finishReschedule()
  }).catch((error) => {
    console.log(error);
  });
};

onMounted(() => {
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

      <h1>Reagendar Ordem de Serviço</h1>

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
          Reagendar ordem de serviço # {{ osSelected.protocolo }}
        </button>
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

</style>