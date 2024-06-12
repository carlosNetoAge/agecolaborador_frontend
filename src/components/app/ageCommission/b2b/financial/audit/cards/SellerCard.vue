<script setup lang="ts">
import { onMounted, ref } from 'vue'
import userSvg from "@/assets/img/web/Usuário.svg"
import icon$ from "@/assets/img/web/Ícone 1.svg"
import iconDoc from "@/assets/img/web/Ícone 2.svg"
import iconInvoice from "@/assets/img/web/Ícone 3.svg"

interface InvoiceItem {
  invoice: any;
}

interface DataSeller {
  invoices?: { [key: string]: InvoiceItem };
}

const props = defineProps<{ data: DataSeller, periodRefer: String }>();

const periodRefer = ref(props.periodRefer)
const dataSeller = ref(props.data);
let totalContracts = ref(0);
let totalInvoices = ref(0);
let totalSells = ref(0);

const countDatas = () => {
  for (const key in dataSeller.value.invoices) {
    if (dataSeller.value.invoices[key].invoice) {
      totalInvoices.value++;
    }
  }
  console.log(periodRefer.value)
  totalContracts.value = dataSeller.value.contracts.business + dataSeller.value.contracts.dedicated;
  totalSells.value = totalContracts.value;
}

onMounted(countDatas);

</script>

<template>
  <div class="relative flex flex-col justify-evenly pl-12">
    <div class="flex flex-row pt-5">
      <img :src="userSvg" class="w-32 min-[1600px]:w-40">
      <div class="flex flex-col justify-evenly min-[1600px]:text-2xl min-[1600px]:m-24 lg:m-10 p-2 md:text-lg w-full text-center gap-2">
        <p class="font-semibold text-nowrap">
          {{ dataSeller.seller }}
        </p>
        <p class="flex flex-col text-nowrap">Comissionamento ref. as vendas de: <span class="font-semibold">{{ periodRefer }}</span></p>
      </div>
    </div>
    <span class="absolute w-24 top-8 right-10 border border-age-blue text-age-blue px-2 py-2 rounded-medium text-base font-Bold text-center">B2B</span>
    <div class="flex flex-row justify-evenly">
      <div class="flex flex-col items-center">
        <img class="object-cover mb-4 min-[1600px]:size-24 size-20" :src="icon$" alt="">
        <p>{{ totalContracts }} vendas</p>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover mb-4 min-[1600px]:size-24 size-20" :src="iconDoc" alt="">
        <p>{{ totalContracts }} contratos</p>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover mb-4 min-[1600px]:size-24 size-20" :src="iconInvoice" alt="">
        <p>{{ totalInvoices }} faturas</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>