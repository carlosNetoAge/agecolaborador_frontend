<template>
  <div class="rvScreen flex-grow grid grid-cols-7 grid-rows-3 gap-4">
    <DataCard class="bg-white/80 p-4 rounded-large col-span-2 row-span-2" />
    <GoldCard class="bg-white/80 p-4 rounded-large col-span-2 row-span-2" />
    <SilverCard class="bg-white/80 p-4 rounded-large col-span-2 row-span-2" />
    <ValuesCard class="bg-white/80 p-4 rounded-large col-span-1 row-span-2" />
    <CalendarCard class="bg-white/80 p-4 rounded-large col-span-7 row-span-1" />
  </div>
</template>

<script setup lang="ts">
import GoldCard from './cards/GoldCard.vue';
import SilverCard from './cards/SilverCard.vue';
import DataCard from './cards/DataCard.vue';
import ValuesCard from './cards/ValuesCard.vue';
import CalendarCard from './cards/CalendarCard.vue';
import { infoPage } from "@/stores/counter";
import { onMounted } from 'vue';

const info = infoPage();

const setInfoPage = async () => {
  await info.setInfoPage({
    title: 'Dashboard',
    subtitle: 'Confira sua produtividade no mês de junho abaixo.' });
}

onMounted(setInfoPage)

</script>

<style lang="scss" scoped>
.rvScreen {
  background-image: url('../../../../assets/img/backgrouds/rvRetencao.png');
  height: 100%;
  width: 100%;
  z-index: 10;
}

</style>