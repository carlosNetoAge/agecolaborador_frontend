<script setup lang="ts">
import {defineEmits, ref, defineProps, onMounted} from 'vue';
import ListSalesDetails from "@/components/app/ageCommission/b2b/financial/audit/cards/ListSalesDetails.vue";
import SellerCard from '@/components/app/ageCommission/b2b/financial/audit/cards/SellerCard.vue'
import CommissionsCompositionsCard from "@/components/app/ageCommission/b2b/financial/audit/cards/CommissionsCompositionsCard.vue"
import SalesCard from "./cards/SalesCard.vue";
import CommissionsOnlineCard from "./cards/CommissionsOnlineCard.vue";
import PorcentageCard from "./cards/PorcentageCard.vue";
import ListExtracts from "./cards/ListExtracts.vue";
import { infoPage } from "@/stores/counter";

const emit = defineEmits(['return']);

const returnPage = () => {
  emit('return');
}

const info = infoPage();

const props = defineProps({
  dataSeller: Object,
  periodRefer: String
});

const seller = ref(props.dataSeller);
const page = ref('details');

const setInfoPage = () => {
  info.setInfoPage({
    title: 'Detalhes do Executivo',
    subtitle: 'Vendas, meta, comissionamento, contratos e faturas vinculadas' });
  }

onMounted(setInfoPage);

</script>

<template>
  <div class="details__container h-screen flex flex-col">
    <div class="return">
      <button @click="returnPage">Voltar</button>
    </div>
    <div class="flex-grow grid grid-cols-3 grid-rows-2 gap-4 h-max" v-if="page == 'details'">
      <SellerCard
        :data="seller"
        :periodRefer="props.periodRefer"
        class="bg-white p-4 rounded-large"
      >
      </SellerCard>
      <CommissionsCompositionsCard
        :data="seller"
        class="bg-white p-4 rounded-large"
        @viewExtract="page = 'extract'"
      >
      </CommissionsCompositionsCard>
      <SalesCard
        :data="seller"
        :page="page"
        @viewSales="page = 'listSales'"
        class="bg-white p-4 rounded-large"
      >
      </SalesCard>
      <CommissionsOnlineCard
        :data="seller"
        class="bg-white p-4 rounded-large col-span-2"
      ></CommissionsOnlineCard>
      <PorcentageCard
        :data="seller"
        class="bg-white p-4 rounded-large"
      ></PorcentageCard>
    </div>
    <ListSalesDetails
        @return="page = 'details'"
        :dataList="seller"
        v-if="page == 'listSales'"
    />
    <ListExtracts
      @return="page = 'details'"
      :data="seller"
      v-if="page == 'extract'"
    />
  </div>
</template>

<style lang="scss">

.details__container {
  @include container(100%, 100%);
  position: relative;

  .return {
    position: absolute;
    top: -6vh;
    right: 1vw;

    button {
      cursor: pointer;
      font-size: 1.0rem;
      color: #fff;
      background-color: #53AEE2;
      outline: none;
      padding: 5px 20px;
      border-radius: 5px;
      transition: opacity 0.3s ease-in-out;
      box-shadow: $global-box-shadow;

      &:hover {
        opacity: 0.9;
      }
    }
  }
}

  .percent {
    @include flex(row, flex-start, center, .2vw);
    span {
      font-size: 1rem;
      font-weight: 400;
      color: #08C293;
    }
    svg {
      fill: #08C293;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

</style>