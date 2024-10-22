<template>
  <div class="return absolute z-10 right-0 top-48">
      <button @click="returnPage">Voltar</button>
    </div>
  <div class="rvScreen flex-grow grid grid-cols-7 grid-rows-3 gap-4 rounded-large">
    <DataCard class="bg-white/70 p-4 rounded-large col-span-2 row-span-2" />
    <GoldCard class="bg-white/70 p-4 rounded-large col-span-2 row-span-2" />
    <SilverCard class="bg-white/70 p-4 rounded-large col-span-2 row-span-2" />
    <ValuesCard class="bg-white/70 p-4 rounded-large col-span-1 row-span-2" />
    <CalendarCard class="bg-white/70 p-4 rounded-large col-span-7 row-span-1" />
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
import { useRouter } from 'vue-router';

const router = useRouter();
const info = infoPage();

const setInfoPage = async () => {
    info.setInfoPage({
    title: 'Dashboard',
    subtitle: 'Confira sua produtividade no mês de junho abaixo.' });
}

const returnPage = () => {
  router.push('/inicio')
}


onMounted(setInfoPage)

</script>

<style lang="scss" scoped>
.rvScreen {

  height: 100%;
  width: 100%;
  z-index: 10;
}

.return {
  margin-bottom: 1vh;
  padding-right: 2.6vw;
  @include flex(row, flex-end, center);
  button {
    cursor: pointer;
    font-size: 1.0rem;
    color: #fff;

    background-color: #53AEE2;
    outline: none;
    padding: 5px 20px;
    border-radius: 3px;
    transition: opacity 0.3s ease-in-out;
    box-shadow: $global-box-shadow;

    &:hover {
      opacity: 0.9;
    }
  }
}

</style>