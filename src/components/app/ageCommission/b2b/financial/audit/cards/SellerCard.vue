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

  totalContracts.value = dataSeller.value.contracts.business + dataSeller.value.contracts.dedicated;
  totalSells.value = totalContracts.value;
}

onMounted(countDatas);

</script>

<template>
  <div class="relative flex flex-col justify-evenly pl-10">
    <div class="flex flex-row">
      <img :src="userSvg" class="w-40">
      <div class="flex flex-col justify-evenly text-left text-nowrap text-xl w-16 pl-24 lg:pl-10 lg:text-base">
        <p class="font-semibold">
          {{ dataSeller.seller }}
        </p>
        <p>Comissionamento: <span class="font-semibold">{{ props.periodRefer }}</span></p>
      </div>
    </div>
    <span class="absolute w-24 top-5 right-5 border-2 border-age-blue text-age-blue px-4 py-2 rounded-medium text-lg font-Bold text-center">B2B</span>
    <div class="flex flex-row">
      <div class="flex flex-col items-center flex-1">
        <img class="object-cover mb-6 size-24" :src="icon$" alt="">
        <p>{{ totalContracts }} vendas</p>
      </div>
      <div class="flex flex-col items-center flex-1">
        <img class="object-cover mb-6 size-24" :src="iconDoc" alt="">
        <p>{{ totalContracts }} contratos</p>
      </div>
      <div class="flex flex-col items-center flex-1">
        <img class="object-cover mb-6 size-24" :src="iconInvoice" alt="">
        <p>{{ totalInvoices }} faturas</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>