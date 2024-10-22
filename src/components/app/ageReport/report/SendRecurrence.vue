<script setup lang="ts">
import {ref} from "vue";

const selectedIntervalRecurrence = ref('today');
const selectedRecurrence = ref('daily');
const endHourRecurrence = ref('08:00');


const intervalDatesRecurrence = ref([
  {
    label: 'Últimos 30 minutos',
    value: '30m'
  },
  {
    label: 'Última hora',
    value: '1h'
  },
  {
    label: 'Últimas 3 horas',
    value: '3h'
  },
  {
    label: 'Últimas 6 horas',
    value: '6h'
  },
  {
    label: 'Últimas 24 horas',
    value: '24h'
  },
  {
    label: 'Dia atual',
    value: 'today'
  },
  {
    label: 'Dia anterior',
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
    label: 'Semana atual',
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

const typeRecurrence = ref([
  {
    label: 'Diário',
    value: 'daily'
  },
  {
    label: 'Semanal',
    value: 'weekly'
  },
  {
    label: 'Mensal',
    value: 'monthly'
  }
])

</script>

<template>
  <div class="inputs-interval">
    <div class="select">
      <label for="interval">Intervalo de busca</label>
      <select name="interval" v-model="selectedIntervalRecurrence" @change="setDateRange">
        <option v-for="interval in intervalDatesRecurrence" :key="interval.value" :value="interval.value">
          {{ interval.label }}
        </option>
      </select>
    </div>
    <div class="date-person">
      <div class="select">
        <label for="recurrence">Recorrência dos envios</label>
        <select name="recurrence" v-model="selectedRecurrence" @change="setDateRange">
          <option v-for="recurrence in typeRecurrence" :key="recurrence.value" :value="recurrence.value">
            {{ recurrence.label }}
          </option>
        </select>
      </div>
      <div class="date">
        <label for="end">Hora do envio</label>
        <input type="time" name="end" v-model="endHourRecurrence">
      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">
.date {
  width: 30% !important;
}
</style>