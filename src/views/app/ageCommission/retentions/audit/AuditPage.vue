<script setup lang="ts">
// Importações necessárias
// import DetailsSellerComponent from "@/components/app/ageComission/b2b/financial/audit/DetailsSellerComponent.vue";
// import { onMounted, onUpdated, ref, watch } from "vue";
// import { AXIOS } from "@api/AXIOS";
// import Cookie from "js-cookie";
// import { infoPage } from "@/stores/counter";
import { ref } from "vue";
import { sellerInfoStore } from "@/stores/counter";
import router from "@/router";



// Referências reativas
const page = ref('list');
// const data = ref([]);
// const statusDashboard = ref(false);
const statusReq = ref(false);
const selectedPeriod = ref('2024-01-01');
const periodRefer = ref('');
// const info = infoPage();
const store = sellerInfoStore();

// Opções de período para seleção
const periodOptions = ref([
  { label: 'Março de 2024', value: '2024-01-01', refer: 'Janeiro de 2024'},
  { label: 'Abril de 2024', value: '2024-02-01', refer: 'Fevereiro de 2024'},
  { label: 'Maio de 2024', value: '2024-03-01' , refer: 'Março de 2024'},
  { label: 'Junho de 2024', value: '2024-04-01' , refer: 'Abril de 2024'},
  { label: 'Julho de 2024', value: '2024-05-01' , refer: 'Maio de 2024'},
  { label: 'Agosto de 2024', value: '2024-06-01' , refer: 'Junho de 2024'},
]);

const jsonMock = [
  {
    "atendente": "Atendente A",
    "solicitacoes_recebidas_total": 145,
    "retencoes_realizadas_total": 95,
    "retencoes_nao_realizadas": 50,
    "retencoes_dias": {
      "1": {
        "solicitacoes_recebidas": 20,
        "retencoes_realizadas": 12,
        "retencoes_nao_realizadas": 8
      },
      "10": {
        "solicitacoes_recebidas": 15,
        "retencoes_realizadas": 10,
        "retencoes_nao_realizadas": 5
      },
      "20": {
        "solicitacoes_recebidas": 18,
        "retencoes_realizadas": 9,
        "retencoes_nao_realizadas": 9
      },
      "30": {
        "solicitacoes_recebidas": 25,
        "retencoes_realizadas": 17,
        "retencoes_nao_realizadas": 8
      }
    },
    "cidade_ouros": 25,
    "cidades_prata": 70,
    "media_atual": 85.5,
    "media_anterior": 82.3,
    "valor_rv": 1200,
    "status": "Não pago"
  },
  {
    "atendente": "Atendente B",
    "solicitacoes_recebidas_total": 130,
    "retencoes_realizadas_total": 85,
    "retencoes_nao_realizadas": 45,
    "retencoes_dias": {
      "5": {
        "solicitacoes_recebidas": 22,
        "retencoes_realizadas": 14,
        "retencoes_nao_realizadas": 8
      },
      "15": {
        "solicitacoes_recebidas": 20,
        "retencoes_realizadas": 11,
        "retencoes_nao_realizadas": 9
      },
      "25": {
        "solicitacoes_recebidas": 18,
        "retencoes_realizadas": 10,
        "retencoes_nao_realizadas": 8
      },
      "31": {
        "solicitacoes_recebidas": 25,
        "retencoes_realizadas": 17,
        "retencoes_nao_realizadas": 8
      }
    },
    "cidade_ouros": 30,
    "cidades_prata": 55,
    "media_atual": 80.2,
    "media_anterior": 78.4,
    "valor_rv": 1100,
    "status": "Pago"
  },
  {
    "atendente": "Atendente C",
    "solicitacoes_recebidas_total": 160,
    "retencoes_realizadas_total": 105,
    "retencoes_nao_realizadas": 55,
    "retencoes_dias": {
      "2": {
        "solicitacoes_recebidas": 25,
        "retencoes_realizadas": 18,
        "retencoes_nao_realizadas": 7
      },
      "12": {
        "solicitacoes_recebidas": 20,
        "retencoes_realizadas": 15,
        "retencoes_nao_realizadas": 5
      },
      "22": {
        "solicitacoes_recebidas": 18,
        "retencoes_realizadas": 12,
        "retencoes_nao_realizadas": 6
      },
      "29": {
        "solicitacoes_recebidas": 28,
        "retencoes_realizadas": 20,
        "retencoes_nao_realizadas": 8
      }
    },
    "cidade_ouros": 35,
    "cidades_prata": 70,
    "media_atual": 88.7,
    "media_anterior": 85.5,
    "valor_rv": 1300,
    "status": "Pago"
  },
  {
    "atendente": "Atendente D",
    "solicitacoes_recebidas_total": 140,
    "retencoes_realizadas_total": 90,
    "retencoes_nao_realizadas": 50,
    "retencoes_dias": {
      "7": {
        "solicitacoes_recebidas": 20,
        "retencoes_realizadas": 13,
        "retencoes_nao_realizadas": 7
      },
      "17": {
        "solicitacoes_recebidas": 15,
        "retencoes_realizadas": 9,
        "retencoes_nao_realizadas": 6
      },
      "27": {
        "solicitacoes_recebidas": 22,
        "retencoes_realizadas": 15,
        "retencoes_nao_realizadas": 7
      },
      "30": {
        "solicitacoes_recebidas": 23,
        "retencoes_realizadas": 16,
        "retencoes_nao_realizadas": 7
      }
    },
    "cidade_ouros": 28,
    "cidades_prata": 62,
    "media_atual": 83.4,
    "media_anterior": 81.7,
    "valor_rv": 1150,
    "status": "Não pago"
  }
]


// // Função para visualizar detalhes do vendedor
const viewDetails = (data: Object) => {
  computeReferenceMonth()
  store.setInfo(data, periodRefer.value);
  page.value = 'details';
  router.push('/ageComissiona/retencao/colaborador')
};

// Função para obter dados da API
// const getData = () => {
//   statusReq.value = true;
//   statusDashboard.value = false;
//   AXIOS({
//     method: 'get',
//     url: '',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + Cookie.get('token')
//     },
//     params: {  }
//   }).then((response) => {
//     computeReferenceMonth();
//     setInfoPage();
//   }).catch((error) => {
//   });
// };

// Observa mudanças e busca dados na montagem
// onMounted(getData);
// watch(selectedPeriod, (newVal, oldVal) => {
//   if (newVal !== oldVal) getData();
// });

// // Computar o mês referência dinamicamente
const computeReferenceMonth = () => {
  periodRefer.value = periodOptions.value.find((option) => option.value === selectedPeriod.value).refer;
};

// const returning = () => {
//   page.value = 'list'
// };

// const setInfoPage = () => {
//   info.setInfoPage({
//     title: 'Auditoria de Renteções - Referente à ' + periodRefer.value,
//     subtitle: 'Examine cada transação, garantindo precisão e integridade nas vendas.' });
// }

</script>

<template>
  <div class="audit__container" v-if="page === 'list'">
    <div class="period">
      <select @change="getData" v-model="selectedPeriod" :disabled="statusReq">
        <option v-for="option in periodOptions" :value="option.value" :key="option.value">{{ option.label }}</option>
      </select>
    </div>
    <div class="table">
      <div class="header">
        <div class="row">
          <div class="item" style="text-align: left;">Colaborador</div>
          <div class="item">Solicitações</div>
          <div class="item">Retenções</div>
          <div class="item">Taxa de retenção</div>
          <div class="item">Média anterior</div>
          <div class="item">Média atual</div>
          <div class="item">Valor R.V</div>
          <div class="item" style="text-align: center;">Status</div>
        </div>
      </div>
      <div class="body">
        <div class="row" v-for="(colaboratorData, index) in jsonMock" :key="index">
          <div class="item first_item">
            {{ colaboratorData.atendente }}
          </div>
          <div class="item">
            {{ colaboratorData.solicitacoes_recebidas_total }}
          </div>
          <div class="item">
            {{ colaboratorData.retencoes_realizadas_total }}
          </div>
          <div class="item">
            {{ parseInt((colaboratorData.retencoes_realizadas_total / colaboratorData.solicitacoes_recebidas_total) * 100) }}%
          </div>
          <div class="item">
            <td>R${{ colaboratorData.media_anterior }} </td>
          </div>
          <div class="item">
            <td>R${{ colaboratorData.media_atual }} </td>
          </div>
          <div class="item">
            <td>R${{ colaboratorData.valor_rv  }} </td>
          </div>
          <div class="item">
            <span class="badge"
                    :class="{
                'badge-success' : colaboratorData.status === 'Pago',
                'badge-cancel' : colaboratorData.status === 'Não pago'
              }">
                {{ colaboratorData.status }}</span>
          </div>
        </div>
      </div>
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
}
.table {
  width: 100%;
  height: 100%;
  .row {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    @include flex(row, flex-start, center, 1vw);
    padding: 2vh 1vw;
    border: 1px solid #cccccc50;



    .item {
      max-width: 15%;
      width: 15%;
      text-align: center;
      font-size: 1.2rem;
      user-select: text !important;

      .badge {
        padding: 0.5vh 1vw;
        border-radius: 20px;
        font-size: 1.2rem;
        font-weight: 500;
        color: #fff;
      }
      
      .badge-success {
        background-color: #E8FBEF;
        color: #09D45B;
      }
      
      .badge-progress {
        background-color: #E6F2FE;
        color: #0A7BF5;
      }
      
      .badge-cancel {
        background-color: #dc354530;
        color: #dc3545;
      }
    }
  }

  .header {
    margin: 1vh 0;
    .row {
      background-color: #F9FCFF;
      .item {
        font-size: 1.2rem;
        font-weight: 600;
        color: #333;
      }
    }
  }

  .body {
    @include flex(column, flex-start, initial, 1vh);

    .row {
      &:hover {
        border-color: #cccccc80;
      }
      .item {
        display: flex;
        justify-content: center;
        text-align: center;
        color: #444;
      }
      .first_item {
        justify-content: flex-start;
      }
    }
  }
}

.gold {
  background-color: #FFB32C;
}

.silver {
  background-color: #959595;
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