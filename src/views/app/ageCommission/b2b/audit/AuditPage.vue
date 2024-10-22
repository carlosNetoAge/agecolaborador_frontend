<script setup lang="ts">
// Importações necessárias
import DetailsSellerComponent from "@/components/app/ageCommission/b2b/financial/audit/DetailsSellerComponent.vue";
import { onMounted, onUpdated, ref, watch } from "vue";
import { AXIOS } from "@api/AXIOS";
import Cookie from "js-cookie";
import { infoPage } from "@/stores/counter";
import { sellerInfoStore } from "@/stores/counter";
import router from "@/router";



// Referências reativas
const page = ref('list');
const data = ref([]);
const statusDashboard = ref(false);
const statusReq = ref(false);
const selectedPeriod = ref('2024-01-01');
const periodRefer = ref('');
const info = infoPage();
const store = sellerInfoStore();

// Opções de período para seleção
const periodOptions = ref([
  { label: 'Março de 2024', value: '2024-01-01', refer: 'Janeiro de 2024'},
  { label: 'Abril de 2024', value: '2024-02-01', refer: 'Fevereiro de 2024'},
  { label: 'Maio de 2024', value: '2024-03-01' , refer: 'Março de 2024'},
  { label: 'Junho de 2024', value: '2024-04-01' , refer: 'Abril de 2024'},
  { label: 'Julho de 2024', value: '2024-05-01' , refer: 'Maio de 2024'},
  { label: 'Agosto de 2024', value: '2024-06-01' , refer: 'Junho de 2024'},
  { label: 'Setembro de 2024', value: '2024-07-01' , refer: 'Julho de 2024'},
]);

// Função para visualizar detalhes do vendedor
const viewDetails = (data: Object) => {
  computeReferenceMonth()
  store.setInfo(data, periodRefer.value);
  page.value = 'details';
  router.push('/ageComissiona/b2b/financeiro/executivo')
};

// Função para obter dados da API
const getData = () => {
  statusReq.value = true;
  statusDashboard.value = false;
  AXIOS({
    method: 'get',
    url: 'agerv/b2b/commission/financial/builder',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    },
    params: { period: selectedPeriod.value }
  }).then((response) => {
    computeReferenceMonth();
    data.value = response.data;
    statusDashboard.value = true;
    statusReq.value = false;
    setInfoPage();
  }).catch((error) => {
  });
};

// Observa mudanças e busca dados na montagem
onMounted(getData);
watch(selectedPeriod, (newVal, oldVal) => {
  if (newVal !== oldVal) getData();
});

// Computar o mês referência dinamicamente
const computeReferenceMonth = () => {
  periodRefer.value = periodOptions.value.find((option) => option.value === selectedPeriod.value).refer;
};

const returning = () => {
  page.value = 'list'
};

const setInfoPage = () => {
  info.setInfoPage({
    title: 'Auditoria de vendas B2B - Referente à ' + periodRefer.value,
    subtitle: 'Examine cada transação, garantindo precisão e integridade nas vendas.' });
}

</script>

<template>
  <div class="audit__container" v-if="page === 'list'">
    <div class="period">
      <select @change="getData" v-model="selectedPeriod" :disabled="statusReq">
        <option v-for="option in periodOptions" :value="option.value" :key="option.value">{{ option.label }}</option>
      </select>
    </div>
    <div class="table__container">
      <table>
        <thead>
        <tr>
          <th>Executivo</th>
          <th>Vendas</th>
          <th>Comissão</th>
          <th>Status</th>
        </tr>
        </thead>
        <transition name="fade">
          <tbody v-if="statusDashboard">
          <tr v-for="(sellerData, idx) in data" :key="idx" @click="viewDetails(sellerData)">
            <td>{{ sellerData.seller }}</td>
            <td>{{ sellerData.contracts.dedicated + sellerData.contracts.business }}</td>
            <td>R$ {{ (sellerData.commissionDedicated + sellerData.commissionBusiness).toFixed(2) }}</td>
            <td><span>Pendente</span></td>
          </tr>
          </tbody>
        </transition>
      </table>
    </div>
  </div>
</template>


<style scoped lang="scss">


.audit__container {
  @include flex(column, flex-start, initial, 3vh);
  @include container(100%, 100%);

  .title__container {
    h1 {
      font-size: 2rem;
      font-weight: 500;
      color: #333
    }
    p {
      font-size: 1.4rem;
      font-weight: 400;
      color: #777;
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

  .table__container {
    width: 100%;
    overflow-y: auto;
    max-height: 90%;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: $global-box-shadow;
    table {
      border-collapse: collapse;
      width: 100%;
      text-align: center;
      thead {
        tr {
          background-color: #F6F6F6;

          th {
            padding: 2vh 1vw;
            font-size: 1.5rem;
            font-weight: 500;
            color: #333333;
          }
        }
      }
      tbody {
        tr {
          background-color: #ffffff;
          border-bottom: 1px solid #f4f4f4;
          -webkit-animation: up .3s ease-in-out forwards;
          -o-animation: up .3s ease-in-out forwards;
          animation: up .3s ease-in-out forwards;
          opacity: 0;
          cursor: pointer;
          transition: background-color ease-in-out .2s;

          &:hover {
            background-color: #F1F1F180;
          }

          td {
            padding: 2vh 1vw;
            font-size: 1.2rem;
            font-weight: 500;
            color: #333333;
          }
        }
      }

      th:nth-child(1), td:nth-child(1) {
        text-align: left;
      }
    }
  }
}


@keyframes up {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


</style>