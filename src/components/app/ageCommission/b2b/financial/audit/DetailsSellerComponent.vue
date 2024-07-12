<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import ListSalesDetails from "@/components/app/ageCommission/b2b/financial/audit/cards/ListSalesDetails.vue";
import SellerCard from '@/components/app/ageCommission/b2b/financial/audit/cards/SellerCard.vue'
import CommissionsCompositionsCard from "@/components/app/ageCommission/b2b/financial/audit/cards/CommissionsCompositionsCard.vue"
import SalesCard from "./cards/SalesCard.vue";
import CommissionsOnlineCard from "./cards/CommissionsOnlineCard.vue";
import PorcentageCard from "./cards/PorcentageCard.vue";
import ListExtracts from "./cards/ListExtracts.vue";
import { infoPage, sellerInfoStore } from "@/stores/counter";
import { AXIOS } from '@api/AXIOS';
import { useRouter } from 'vue-router';
import Cookie from 'js-cookie';

const returnPage = () => {
  router.push('/ageComissiona/b2b/financeiro')
  page.value = 'list'
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

const store = sellerInfoStore();
const info = infoPage();

const getPeriodRefer = () => {
  const period = periodOptions.value.find((option) => option.value === selectedPeriod.value);
  periodRefer.value = period.refer;
};

const seller = ref({});
const page = ref('');
const statusDashboard = ref(false);
const periodRefer = ref('')

const setInfoPage = async () => {
  await info.setInfoPage({
    title: 'Detalhes do Executivo',
    subtitle: 'Vendas, meta, comissionamento, contratos e faturas vinculadas' });
  page.value = 'details'
}

const validateData = () => {
  if(!seller.value) {
    store.removeInfo();
    router.push('/home')
  }
}

// Função para obter dados da API
const getData = () => {
  statusReq.value = true;
  statusDashboard.value = false;
  AXIOS({
    method: 'get',
    url: 'agerv/b2b/seller/dashboard',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    },
    params: { period: selectedPeriod.value }
  }).then((response) => {
    getPeriodRefer();
    seller.value = response.data[0];
    statusReq.value = false;
    statusDashboard.value = true;
    setInfoPage();
  }).catch((error) => {
    if(error.response.status === 404 || error.response.status === 401 || error.response.status === 500) {
      router.push('/home')
    }
    validateData();
  });
};

const propData = ref(false);

const verifyData = async () => {
  const dataSeller = await store.getInfo();
  if(Object.keys(dataSeller.dataSeller).length <= 0) {
    getPeriodRefer();
    getData();
  } else {
    seller.value = dataSeller.dataSeller;
    periodRefer.value = dataSeller.periodRefer
    propData.value = true;
    setInfoPage()
  }
  statusReq.value = false;
  statusDashboard.value = true;
}

const router = useRouter();
const currentRoute = computed(() => router.currentRoute.value);

onMounted(verifyData);

</script>

<template>
  <div class="relative">
    <div class="options_extract" v-if="page === 'details' && !propData">
      <span>Mês de pagamento</span>
      <select @change="getData" v-model="selectedPeriod" :disabled="statusReq">
        <option v-for="option in periodOptions" :value="option.value" :key="option.value">{{ option.label }}</option>
      </select>
    </div>
    <div class="return absolute z-10 right-0 -top-24" v-if="page == 'details' &&
        currentRoute.path !== '/ageComissiona/b2b/dashboard/executivo'">
      <button @click="returnPage">Voltar</button>
    </div>
    <div class="details__container h-screen flex flex-col">


      <template v-if="seller">
        <div class="flex-grow grid grid-cols-3 grid-rows-2 gap-4 h-4/5" v-if="page == 'details' && statusDashboard">
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
  </div>
</template>

<style lang="scss">
.return {
  margin-bottom: 1vh;
  padding-right: 2.6vw;
  @include flex(row, flex-end, center);
  button {
    cursor: pointer;
    font-size: 1.0rem;
    color: #fff;

    background-color: #53AEE2;
    outline: none;
    padding: 5px 20px;
    border-radius: 3px;
    transition: opacity 0.3s ease-in-out;
    box-shadow: $global-box-shadow;

    &:hover {
      opacity: 0.9;
    }
  }
}

.alert {
  @include flex(column, center, center, 3vh);
  height: 80%;
  h1 {
    font-size: 2.4rem;
    color: #666;
  }

}

.options_extract {
  @include flex(row, flex-end, center);
  margin-bottom: 1vh;


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