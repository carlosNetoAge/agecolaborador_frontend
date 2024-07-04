<template>
  <div class="flex justify-between items-center flex-col border-age-lightBlue border rounded-large">
    <div class="h-full flex flex-col justify-evenly items-center">
      <div><p class="text-xl font-semibold text-gray-400">Acelerador/Deflator</p></div>
      <div><p class="text-2xl font-semibold text-gray-600">10%</p></div>
      <div>
        <div v-if="mulitplyer">
          <img :src="accelerator">
        </div>
        <div v-if="!mulitplyer">
          <img :src="deflator">
        </div>
      </div>
    </div>
    <div class="h-3 w-4/5 bg-age-lightBlue rounded-full" />
    <div class="h-full flex flex-col justify-evenly items-center">
      <p class="text-2xl font-semibold text-gray-400">Valor do Rv</p>
      <p class="text-4xl font-semibold text-gray-600">$500</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import accelerator from '@/assets/img/web/acelerador.svg'
import deflator from '@/assets/img/web/deflator.svg'

const mulitplyer = ref(true)


</script>

<style lang="scss" scoped>

</style>