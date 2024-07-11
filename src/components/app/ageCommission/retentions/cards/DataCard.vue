<template>
  <div class="flex flex-col h-full border-age-lightBlue border rounded-large">
    <div class="text-xl flex flex-row text-left font-semibold my-4 pl-10">
      <div class="w-1/2">Dados</div>
      <div class="w-1/2">Médias</div>
    </div>
    <div class="grid grid-cols-2 grid-row-3 h-full w-full">
      <div class="border-age-lightBlue flex flex-col justify-between border m-3 text-center pt-3 text-gray-600 rounded-large">
        <p class="text-xl">Solicitações recebidas</p>
        <p class="text-3xl font-semibold pb-14">100</p>
      </div>
      <div class="border-age-lightBlue flex flex-col justify-between border m-3 text-center pt-3 text-gray-600 rounded-large">
        <p class="text-xl">Média anterior</p>
        <p class="text-3xl font-semibold pb-14">R$ 100</p>
      </div>
      <div class="border-age-lightBlue flex flex-col justify-between border m-3 text-center pt-3 text-gray-600 rounded-large">
        <p class="text-xl">Retenções realizadas</p>
        <p class="text-3xl font-semibold pb-14">90</p>
      </div>
      <div class="border-age-lightBlue flex flex-col justify-between border m-3 text-center pt-3 text-gray-600 rounded-large">
        <p class="text-xl">Média Atual</p>
        <p class="text-3xl font-semibold pb-14">R$ 90</p>
      </div>
      <div class="border-age-lightBlue flex flex-col justify-between border m-3 text-center pt-3 rounded-large text-age-orange">
        <p class="text-xl">Retenções não realizadas</p>
        <p class="text-3xl font-semibold pb-14">10</p>
      </div>
      <div class="border-age-lightBlue flex flex-col justify-between border m-3 text-center pt-3 rounded-large text-age-orange">
        <p class="text-xl">M. anterior X M. atual</p>
        <p class="text-3xl font-semibold pb-14">R$ -10</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>