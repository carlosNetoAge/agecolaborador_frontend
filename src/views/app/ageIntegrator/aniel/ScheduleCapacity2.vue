<script setup lang="ts">
import { infoPage } from "@/stores/counter";
import {ref, watch} from "vue";
import {Calendar as VCalendar, DatePicker as VDatePicker} from "v-calendar";

const info = infoPage();

const setInfoPage = () => {
  info.setInfoPage({
    title: "Agenda Técnica Aniel",
    subtitle: "Acompanhe a capacidade de agendamento em tempo real"
  });
};

const date = new Date();
const today = ref(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
const disabledDates = ref([]);
// disabledDates.value = [{ end: null, start: null }];


watch(
    () => today.value,
    (newValue) => {
      console.log(newValue);
    }
);


setInfoPage();

</script>

<template>
  <VDatePicker class="test" v-model="today" :min-date="new Date()" view="weekly" :disabled-dates="disabledDates"/>
</template>

<style lang="scss">

.test {
  .vc-bordered {
    border: 1px solid red !important;
    border-radius: 15px !important;
  }
}

</style>