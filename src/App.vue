<script setup lang="ts">
import {  RouterView } from 'vue-router'
import LoadingWidget from "@/components/widgets/LoadingWidget.vue";
import { stateLoading, stateMenu } from "@/stores/counter";
import MenuComponent from "@/components/widgets/menu/MenuComponent.vue";
import { useRoute } from 'vue-router';

const route = useRoute();
const loading = stateLoading();
const menu = stateMenu();

</script>

<template>
      <MenuComponent v-if="route.meta.auth"/>
      <RouterView
        class="page__container"
        :style="{'width': menu.status ? '92%' : '82%' }"
      />
   <transition name="fade">
     <LoadingWidget v-if="loading.status"/>
   </transition>
</template>

<style lang="scss">

*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  border: 0;
  user-select: none;
  text-decoration: none;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  background: $global-background-color;
  position: relative;
  @include flex(row, space-between, center);

  .page__container {
    height: 100%;
    transition: width .3s ease-in-out;
  }
}

html {
  font-size: 62.5%;
}

/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

/*   PLACEHOLDER   */
::-webkit-input-placeholder {
  color: #33333380;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



</style>
