<template>
  <div class="relative flex flex-col border-age-lightBlue border h-full w-full rounded-large">
    <p class="text-2xl font-semibold pl-6 pt-2">Prata</p>
    <div >
      <img class="banners" :src="silverBanner">
    </div>
    <div class="h-full w-full flex flex-col justify-around">
      <div class="flex flex-row justify-between px-6 text-4xl font-semibold">
        <p>Valor</p>
        <p>R$ 5,00</p>
      </div>
      <div class="flex flex-row justify-between px-6 text-4xl font-semibold">
        <p>Produtividade</p>
        <p>70/50</p>
      </div>
      <div class="flex justify-center">
        <div class="h-4 w-11/12 bg-age-lightBlue rounded-large">
          <div
            class="bg-age-blue h-full leading-none py-1 rounded-large "
            :style="{width: '100%'}"
            ></div>
        </div>
      </div>
      <div class="border border-age-lightBlue rounded-large h-2/4 mx-3 flex justify-center items-center justify-self-end">
        <p class="text-4xl text-gray-600">Demais regiões</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import silverBanner from "@/assets/img/web/bandeira prata.svg"

</script>

<style lang="scss" scoped>
.banners {
  position: absolute;
  right: 2.5rem;
  top: 0;
  height: 26px;
}

</style>