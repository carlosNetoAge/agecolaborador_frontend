<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref, defineEmits, defineProps, watch} from "vue";
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";

const props = defineProps({
  statusCalendar: Boolean
});

const dateCalendar = ref({})

const emit = defineEmits(['updateData']);



const dateActual = new Date();

const monthActual = ref(getNameMonth(dateActual));
const dayActual = ref(dateActual.getDate());

const updateData = (period?: Date) => {
  if (!period) {
    period = new Date();  // Usando a data atual se nenhum período for fornecido
    const year = period.getFullYear();
    const month = String(period.getMonth() + 1).padStart(2, '0');
    const day = String(period.getDate()).padStart(2, '0');
    const formattedPeriod = `${year}-${month}-${day}`;

    return emit('updateData', formattedPeriod);
  }

  return emit('updateData', period);

}


const getCalendar = async () => {
  AXIOS({
    method: 'get',
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/capacity/calendar',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    },
  }).then((response) => {
    dateCalendar.value = response.data;
    updateData();
    activeDrag();
  });
}

function getNameMonth(data: Date) {
  const options = { month: 'long' };
  const nameMonth = data.toLocaleString('pt-BR', options);
  return nameMonth.charAt(0).toUpperCase() + nameMonth.slice(1);
}


const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

const container = ref<HTMLElement | null>(null);

const startDrag = (e: MouseEvent) => {
  isDragging.value = true;
  startX.value = e.pageX - (container.value?.offsetLeft || 0);
  scrollLeft.value = container.value?.scrollLeft || 0;
};

const onDrag = (e: MouseEvent) => {
  if (!isDragging.value) return;
  e.preventDefault();
  const x = e.pageX - (container.value?.offsetLeft || 0);
  const walk = (x - startX.value) * 2; // Velocidade do arrasto
  if (container.value) {
    container.value.scrollLeft = scrollLeft.value - walk;
  }
};

const stopDrag = () => {
  isDragging.value = false;
};


const activeDrag = () => {
  if (container.value) {
    container.value.addEventListener('mousemove', onDrag);
    container.value.addEventListener('mouseup', stopDrag);
    container.value.addEventListener('mouseleave', stopDrag);
  }
};






onMounted(() => {
  getCalendar();


});

onBeforeUnmount(() => {
  if (container.value) {
    container.value.removeEventListener('mousemove', onDrag);
    container.value.removeEventListener('mouseup', stopDrag);
    container.value.removeEventListener('mouseleave', stopDrag);
  }
});


</script>

<template>
  <div class="calendar">
    <div class="months">
      <div
          v-for="(month, i) in dateCalendar"
          :key="i"
          :class="{ month: true, select: i === monthActual }"
          @click="[monthActual = i, dayActual = 0]"
      >
        {{ i }}
      </div>
    </div>
    <div
        ref="container"
        class="days"
        @mousedown="startDrag"
    >
      <div class="day"
           v-for="(month, day) in dateCalendar[monthActual]" :key="day">

        <div class="box"  :class="{selectedDay: dayActual === month.day}"
             @click="[dayActual = month.day, updateData(month.extense)]">
          <span class="dayName">{{ month.name }}</span>
          <span class="dayNumber">{{ month.day }}</span>
        </div>
      </div>
    </div>
    <section class="dots-container" v-if="!props.statusCalendar">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </section>
  </div>

</template>

<style scoped lang="scss">
.calendar {
  width: 100%;
  height: 15%;
  padding: 1vh 0;
  background-color: #fff;
  border-radius: 15px;
  border:  1px solid #cccccc50;
  @include flex(column, center, initial, 0);
  position: relative;
  .months {
    width: 100%;
    @include flex(row, space-evenly, center, 1vh);
    margin-bottom: 1vh;
    animation: up .3s ease-in-out forwards;
    opacity: 0;

    .month {
      font-size: 1.2rem;
      font-weight: 400;
      color: #888;
      cursor: pointer;
      transition: color ease-in-out .3s;

      &:hover {
        color: #333;
      }
    }

    .select {
      color: #333;
      font-weight: 600;
    }
  }

  .days {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    cursor: grab;
    @include flex(row, flex-start, center, 1vh);
    animation: up .3s ease-in-out forwards;
    opacity: 0;
    &:active {
      cursor: grabbing;
    }

    .day {
      min-width: 4%;
      text-align: center;
      font-size: 1.4rem;
      font-weight: 400;
      color: #888;
      cursor: pointer;
      transition: color ease-in-out .3s;
      flex: 0 0 auto;
      display: flex;
      @include flex(column, center, center);
      user-select: none;

      &:active {
        cursor: grabbing;
      }

      .box {
        padding: .5vh .5vw;

      }

      .dayName {
        display: block;
        font-size: 1rem;
        color: #333;
      }

      .dayNumber {
        display: block;
        font-size: 1.4rem;
        color: #333;
        font-weight: 500;
      }

      &:hover {
        color: #333;
      }
    }

    .selectedDay {
      background-color: #53AEE2;
      border-radius: 10px;
      .dayName, .dayNumber {
        color: #fff;
        font-weight: 600;
      }
    }

    .select {
      color: #333;
      font-weight: 600;
    }
  }
}

@media (max-width: 1400px) {

  .calendar {
    height: 17%;
    .months {
      .month {
        font-size: 1rem;
      }
    }

    .days {
      .day {

        .dayName {
          font-size: 1rem;
        }

        .dayNumber {
          font-size: 1.2rem;
        }
      }
    }
  }
}

@keyframes up {
  from {
    transform: translateY(5px);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }

}

.dots-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #FFFFFF;
  border-radius: 15px;
}

.dot {
  height: 10px;
  width: 10px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #53AEE2;
  animation: pulse 1.5s infinite ease-in-out;
}

.dot:last-child {
  margin-right: 0;
}

.dot:nth-child(1) {
  animation-delay: -0.3s;
}

.dot:nth-child(2) {
  animation-delay: -0.1s;
}

.dot:nth-child(3) {
  animation-delay: 0.1s;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    background-color: #53AEE260;
    box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
  }

  50% {
    transform: scale(1.2);
    background-color: #53AEE2;
    box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);
  }

  100% {
    transform: scale(0.8);
    background-color: #53AEE240;
    box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
  }
}
</style>