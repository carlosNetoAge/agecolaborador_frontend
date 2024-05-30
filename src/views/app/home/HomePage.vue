<script setup lang="ts">

import {mount} from "@vue/test-utils";
import {infoPage} from "@/stores/counter";

const info = infoPage();


const setInfoPage = () => {
  info.setInfoPage({
    title: 'Tela inicial',
    subtitle: 'Principais módulos e funções da aplicação.' });
}

mount(setInfoPage);

</script>

<template>
  <div class="home__container">

  </div>
</template>

<style scoped lang="scss">



</style>