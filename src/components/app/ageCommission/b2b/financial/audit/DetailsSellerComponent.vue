<script setup lang="ts">
import {defineEmits, ref, defineProps,onMounted, onBeforeMount} from 'vue';
import ListSalesDetails from "@/components/app/ageCommission/b2b/financial/audit/cards/ListSalesDetails.vue";
import SellerCard from '@/components/app/ageCommission/b2b/financial/audit/cards/SellerCard.vue'
import CommissionsCompositionsCard from "@/components/app/ageCommission/b2b/financial/audit/cards/CommissionsCompositionsCard.vue"
import SalesCard from "./cards/SalesCard.vue";
import CommissionsOnlineCard from "./cards/CommissionsOnlineCard.vue";
import PorcentageCard from "./cards/PorcentageCard.vue";
import ListExtracts from "./cards/ListExtracts.vue";
import { infoPage } from "@/stores/counter";
import { AXIOS } from '@api/AXIOS';

interface InvoiceItem {
  invoice: any;
}

interface DataSeller {
  invoices?: { [key: string]: InvoiceItem };
}

const emit = defineEmits(['return']);
const props = defineProps<{ dataSeller: DataSeller }>()
const dataSeller = props.dataSeller;

const returnPage = () => {
  emit('return');
}

const selectedPeriod = ref('2024-01-01');
const statusReq = ref(false);


// Opções de período para seleção
const periodOptions = ref([
  { label: 'Março de 2024', value: '2024-01-01', refer: 'Janeiro de 2024'},
  { label: 'Abril de 2024', value: '2024-02-01', refer: 'Fevereiro de 2024'},
  { label: 'Maio de 2024', value: '2024-03-01' , refer: 'Março de 2024'},
  { label: 'Junho de 2024', value: '2024-04-01' , refer: 'Abril de 2024'},
  { label: 'Julho de 2024', value: '2024-05-01' , refer: 'Maio de 2024'},
  { label: 'Agosto de 2024', value: '2024-06-01' , refer: 'Junho de 2024'},

]);

const info = infoPage();
const periodRefer = ref('');

const getPeriodRefer = () => {
  const period = periodOptions.value.find((option) => option.value === selectedPeriod.value);
  periodRefer.value = period.refer;
};

const seller = ref({});
const page = ref('details');
const statusDashboard = ref(false);

const setInfoPage = () => {
  info.setInfoPage({
    title: 'Detalhes do Executivo',
    subtitle: 'Vendas, meta, comissionamento, contratos e faturas vinculadas' });
}

// Função para obter dados da API
const getData = () => {
  statusReq.value = true;
  statusDashboard.value = false;
  AXIOS({
    method: 'get',
    url: 'agerv/b2b/commission/financial/builder/seller',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { period: selectedPeriod.value }
  }).then((response) => {
    getPeriodRefer();
    seller.value = response.data[0];
    statusReq.value = false;
    statusDashboard.value = true;
    setInfoPage();
  }).catch((error) => {
    console.log(error)
  });
};

const verifyData = () => {
  dataSeller.length == 0 ? getData() : seller.value = dataSeller;
  statusReq.value = false;
  statusDashboard.value = true;
}

onBeforeMount(verifyData);


</script>

<template>
  <div class="details__container h-screen flex flex-col">
    <div class="options" v-if="page === 'details'">
      <span>Mês de pagamento</span>
      <select @change="getData" v-model="selectedPeriod" :disabled="statusReq">
        <option v-for="option in periodOptions" :value="option.value" :key="option.value">{{ option.label }}</option>
      </select>
    </div>
    <div class="return" v-if="page === 'listSales'">
      <button @click="returnPage">Voltar</button>
    </div>
    <template v-if="seller != null">
      <div class="flex-grow grid grid-cols-3 grid-rows-2 gap-4 h-max" v-if="page == 'details' && statusDashboard">
        <SellerCard
            :data="seller"
            :periodRefer="periodRefer"
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
    </template>
    <div class="alert" v-else>
      <h1>
        Nenhuma venda registrada no período selecionado, escolha outro período.
      </h1>
    </div>
  </div>
</template>

<style lang="scss">

.alert {
  @include flex(column, center, center, 3vh);
  height: 80%;
  h1 {
    font-size: 2.4rem;
    color: #666;
  }

}

.options {
  position: absolute;
  top: -7vh;
  right: 7vw;

  span {
    font-size: 1.4rem;
    color: #333;
    margin-right: 1vw;
  }
}
select {
  cursor: pointer;
  font-size: 1.4rem;
  color: #333;
  padding: 1vh 1vw;
  border-radius: 5px;
  border: 1px solid #f4f4f4;
  outline: none;
  transition: border-color ease-in-out .2s;
  box-shadow: $global-box-shadow;

  &:hover {
    border-color: #53AEE2;
  }
}

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