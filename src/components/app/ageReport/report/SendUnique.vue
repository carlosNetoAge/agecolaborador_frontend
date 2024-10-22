<script setup lang="ts">
import {computed, ref, watchEffect} from "vue";
import dayjs from "dayjs";

const props = defineProps<{
  columnsFiltered: Array<{ name: string, field: string }>,
}>();

const columnsFiltered = ref(props.columnsFiltered);

const intervalDates = ref([
  {
    label: 'Hoje',
    value: 'today'
  },
  {
    label: 'Ontem',
    value: 'yesterday'
  },
  {
    label: 'Últimos 7 dias',
    value: '7d'
  },
  {
    label: 'Últimos 30 dias',
    value: '30d'
  },
  {
    label: 'Esta semana',
    value: 'thisWeek'
  },
  {
    label: 'Semana passada',
    value: 'lastWeek'
  },
  {
    label: 'Personalizado',
    value: 'custom'
  },
])

const setDateRange = () => {
  const now = dayjs();  // Data e hora atual

  switch (selectedInterval.value) {
    case '30m':
      startDate.value = now.subtract(30, 'minute').format('YYYY-MM-DD');
      startHour.value = now.subtract(30, 'minute').format('HH:mm');
      endDate.value = now.format('YYYY-MM-DD');
      endHour.value = now.format('HH:mm');
      break;
    case '1h':
      startDate.value = now.subtract(1, 'hour').format('YYYY-MM-DD');
      startHour.value = now.subtract(1, 'hour').format('HH:mm');
      endDate.value = now.format('YYYY-MM-DD');
      endHour.value = now.format('HH:mm');
      break;
    case '3h':
      startDate.value = now.subtract(3, 'hour').format('YYYY-MM-DD');
      startHour.value = now.subtract(3, 'hour').format('HH:mm');
      endDate.value = now.format('YYYY-MM-DD');
      endHour.value = now.format('HH:mm');
      break;
    case '6h':
      startDate.value = now.subtract(6, 'hour').format('YYYY-MM-DD');
      startHour.value = now.subtract(6, 'hour').format('HH:mm');
      endDate.value = now.format('YYYY-MM-DD');
      endHour.value = now.format('HH:mm');
      break;
    case '24h':
      startDate.value = now.subtract(24, 'hour').format('YYYY-MM-DD');
      startHour.value = now.subtract(24, 'hour').format('HH:mm');
      endDate.value = now.format('YYYY-MM-DD');
      endHour.value = now.format('HH:mm');
      break;
    case 'today':
      startDate.value = now.startOf('day').format('YYYY-MM-DD');
      startHour.value = now.startOf('day').format('HH:mm');
      endDate.value = now.endOf('day').format('YYYY-MM-DD');
      endHour.value = now.endOf('day').format('HH:mm');
      break;
    case 'yesterday':
      startDate.value = now.subtract(1, 'day').startOf('day').format('YYYY-MM-DD');
      startHour.value = now.subtract(1, 'day').startOf('day').format('HH:mm');
      endDate.value = now.subtract(1, 'day').endOf('day').format('YYYY-MM-DD');
      endHour.value = now.subtract(1, 'day').endOf('day').format('HH:mm');
      break;
    case '7d':
      startDate.value = now.subtract(7, 'day').format('YYYY-MM-DD');
      startHour.value = now.subtract(7, 'day').format('HH:mm');
      endDate.value = now.format('YYYY-MM-DD');
      endHour.value = now.format('HH:mm');
      break;
    case '30d':
      startDate.value = now.subtract(30, 'day').format('YYYY-MM-DD');
      startHour.value = now.subtract(30, 'day').format('HH:mm');
      endDate.value = now.format('YYYY-MM-DD');
      endHour.value = now.format('HH:mm');
      break;
    case 'thisWeek':
      startDate.value = now.startOf('week').format('YYYY-MM-DD');
      startHour.value = now.startOf('week').format('HH:mm');
      endDate.value = now.endOf('week').format('YYYY-MM-DD');
      endHour.value = now.endOf('week').format('HH:mm');
      break;
    case 'lastWeek':
      startDate.value = now.subtract(1, 'week').startOf('week').format('YYYY-MM-DD');
      startHour.value = now.subtract(1, 'week').startOf('week').format('HH:mm');
      endDate.value = now.subtract(1, 'week').endOf('week').format('YYYY-MM-DD');
      endHour.value = now.subtract(1, 'week').endOf('week').format('HH:mm');
      break;
    case 'custom':
      startDate.value = '';  // O usuário define manualmente
      startHour.value = '';  // O usuário define manualmente
      endDate.value = '';    // O usuário define manualmente
      endHour.value = '';    // O usuário define manualmente
      break;
    default:
      startDate.value = '';
      startHour.value = '';
      endDate.value = '';
      endHour.value = '';
  }
};

const selectedInterval = ref('today');
const startDate = ref('');
const endDate = ref('');
const startHour = ref('');
const endHour = ref('');

setDateRange();
const selectedFilter = ref(columnsFiltered.value[0].field);

const payload = ref({
  columnFilter: selectedFilter.value,
  startDate: startDate.value,
  endDate: endDate.value,
})

const emits = defineEmits(['sendPayloadDates']);

watchEffect(() => {
  payload.value = {
    columnFilter: selectedFilter.value,
    startDate: startDate.value,
    endDate: endDate.value,
  }
  emits('sendPayloadDates', payload.value);
});


</script>

<template>
  <div class="inputs-interval">
    <div class="select">
      <label for="filter">Coluna a ser filtrada</label>
      <select name="filter" v-model="selectedFilter" >
        <option v-for="filter in columnsFiltered" :key="filter.field" :value="filter.field">
          {{ filter.name }}
        </option>
      </select>
    </div>
    <div class="select">
      <label for="interval">Intervalo entre datas</label>
      <select name="interval" v-model="selectedInterval" @change="setDateRange">
        <option v-for="interval in intervalDates" :key="interval.value" :value="interval.value">
          {{ interval.label }}
        </option>
      </select>
    </div>
    <div class="date-person">
      <div class="date">
        <label for="start">Data inicial</label>
        <input type="date" name="start" v-model="startDate">
      </div>
      <div class="date">
        <label for="start">Data final</label>
        <input type="date" name="start" v-model="endDate">
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.inputs-interval {
  .date-person {
    width: 45%;
  }
}

</style>