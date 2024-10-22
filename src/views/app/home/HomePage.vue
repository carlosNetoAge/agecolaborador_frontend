<script setup lang="ts">

import {mount} from "@vue/test-utils";
import {infoPage} from "@/stores/counter";

const info = infoPage();


const setInfoPage = () => {
  info.setInfoPage({
    title: 'Tela inicial',
    subtitle: 'Principais módulos e funções da aplicação.' });
}

const nameUser = 'Carlos Neto - 081.222.222-33';

mount(setInfoPage);

</script>

<template>
  <div class="home__container">
    
  </div>
</template>

<style scoped lang="scss">


iframe {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  top: 0;
  left: 0;
}

</style>