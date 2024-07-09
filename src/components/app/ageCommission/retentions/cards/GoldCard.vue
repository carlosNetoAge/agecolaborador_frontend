<template>
  <div class="relative flex flex-col border-age-lightBlue border h-full w-full rounded-large">
    <p class="text-2xl font-semibold pl-4 pt-2">Ouro</p>
    <div >
      <img class="banners" :src="goldBanner">
    </div>
    <div class="border-age-lightBlue border h-full w-full rounded-large flex flex-col justify-evenly">
      <div class="flex flex-row justify-between px-6 text-4xl font-semibold">
        <p>Valor</p>
        <p>R$ 7,00</p>
      </div>
      <div class="flex flex-row justify-between px-6 text-4xl font-semibold">
        <p>Produtividade</p>
        <p>40/50</p>
      </div>
      <div class="flex justify-center">
        <div class="h-4 w-11/12 bg-age-lightBlue rounded-large">
          <div
            class="bg-age-blue h-full leading-none py-1 rounded-large "
            :style="{width: '80%'}"
            ></div>
        </div>
      </div>
      <div class="border border-age-lightBlue rounded-large h-2/4 mx-3 grid grid-cols-2 grid-rows-3 gap-1">
        <div class="border border-age-lightBlue rounded-large m-1 flex justify-center items-center text-xl text-gray-600"><p>Santa Maria</p></div>
        <div class="border border-age-lightBlue rounded-large m-1 flex justify-center items-center text-xl text-gray-600"><p>Ceilândia</p></div>
        <div class="border border-age-lightBlue rounded-large m-1 flex justify-center items-center text-xl text-gray-600"><p>Riacho fundo 1</p></div>
        <div class="border border-age-lightBlue rounded-large m-1 flex justify-center items-center text-xl text-gray-600"><p>Riacho fundo 2</p></div>
        <div class="border border-age-lightBlue rounded-large m-1 flex justify-center items-center text-xl text-gray-600"><p>Recanto das Emas</p></div>
        <div class="border border-age-lightBlue rounded-large m-1 flex justify-center items-center text-xl text-gray-600"><p>Samambaia</p></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import goldBanner from "@/assets/img/web/bandeira ouro.svg"

</script>

<style lang="scss" scoped>
.banners {
  position: absolute;
  right: 2.5rem;
  top: 0;
  height: 26px;
}

</style>