<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";

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

onMounted(() => {
  if (container.value) {
    container.value.addEventListener('mousemove', onDrag);
    container.value.addEventListener('mouseup', stopDrag);
    container.value.addEventListener('mouseleave', stopDrag);
  }
});

onBeforeUnmount(() => {
  if (container.value) {
    container.value.removeEventListener('mousemove', onDrag);
    container.value.removeEventListener('mouseup', stopDrag);
    container.value.removeEventListener('mouseleave', stopDrag);
  }
});

const days = ref(0);

const formatString = (str: string) => {
  if (str.endsWith('.')) {
    str = str.slice(0, -1);
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};


const monthActual = ref<any>((new Date().getMonth()) + 1);
const monthActualName = ref<any>('');
const daysName = ref<string[]>([]);

const months = Array.from({ length: 12 }, (_, i) => {
  const date = new Date(0, i);
  const options = { month: 'long' };
  const formatter = new Intl.DateTimeFormat('pt-BR', options);
  return formatString(formatter.format(date));
});

const getDaysInMonth = (month: number) => {
  daysName.value = [];
  monthActual.value = month;
  const yearNow = new Date().getFullYear();
  days.value = new Date(yearNow, month, 0).getDate();

  for (let i = 1; i <= days.value; i++) {
    daysName.value.push(formatDate(month, i));
  }
};

onMounted(() => {
  getDaysInMonth(monthActual.value)

  monthActualName.value = months.map((month, i) => {
    if (month === months[new Date().getMonth()]) {
      return month;
    }
  }).filter((month) => month)[0];
});

const formatDate = (month: number, day: number) => {
  const options = { weekday: 'short' };
  const formatter = new Intl.DateTimeFormat('pt-BR', options);
  const date = new Date(new Date().getFullYear(), month - 1, day);
  return formatString(formatter.format(date));
};

const payload = ref({});
const monthSelected = ref(0);
const daySelected = ref(0);

const setPayload = (month:number, day:number) => {
  monthSelected.value = month;
  daySelected.value = day;
  payload.value = {
    date: new Date().getFullYear()+`-${month}-${day}`,
  };
};

</script>

<template>
  <div class="calendar">
    <div class="months">
      <div
          v-for="(month, i) in months"
          :key="month"
          :class="{ month: true, select: month === monthActualName }"
          @click="[monthActualName = month, getDaysInMonth(i + 1)]"
      >
        {{ month }}
      </div>
    </div>
    <div
        ref="container"
        class="days"
        @mousedown="startDrag"
    >
      <div class="day"
           v-for="(name, day) in daysName" :key="day"
           @click="setPayload(monthActual, (day+1))">
        <div class="box"  :class="{selectedDay: daySelected === day + 1}">
          <span class="dayName">{{ name }}</span>
          <span class="dayNumber">{{ day + 1 }}</span>
        </div>
      </div>
    </div>
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

  .months {
    width: 100%;
    @include flex(row, space-evenly, center, 1vh);
    margin-bottom: 1vh;
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

</style>