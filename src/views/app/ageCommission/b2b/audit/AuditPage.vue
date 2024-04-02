<script setup lang="ts">

import DetailsSellerComponent from "@/components/app/ageCommission/b2b/financial/audit/DetailsSellerComponent.vue";
import {onMounted, ref} from "vue";
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";

const dataSeller = ref({});
const page = ref('list');


const viewDetails = (data: Object) => {
  dataSeller.value = data;
  page.value = 'details';
}

const data = ref({});
const statusDashboard = ref(false);

const getData = () => {

  AXIOS({
    method: 'get',
    url: 'agerv/b2b/commission/financial/builder',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    }
  }).then((response) => {
    data.value = response.data
    statusDashboard.value = true
  }).catch((error) => {
    console.log(error);
  });

}

onMounted(() => {
  getData()
})

</script>


<template>
  <div class="audit__container" v-if="page == 'list'">
    <div class="title__container">
      <h1>Auditoria de vendas B2b - Mês Ref. Janeiro de 2024</h1>
      <p>Examine cada transação, garantindo precisão e integridade nas vendas.</p>
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
          <tr @click="viewDetails(sellerData)" v-for="(sellerData, idx) in data" :key="idx">
            <td>{{sellerData.seller}}</td>
            <td>{{sellerData.contracts.dedicated + sellerData.contracts.business}}</td>
            <td>R$ {{(sellerData.commissionDedicated + sellerData.commissionBusiness).toFixed(2)}}</td>
            <td>
              <span>
                Pendente
              </span>
            </td>
          </tr>
          </tbody>
        </transition>
      </table>
    </div>
  </div>

  <DetailsSellerComponent
      @return="page = 'list'"
      v-if="page == 'details'" :dataSeller="dataSeller" />
</template>

<style scoped lang="scss">

.audit__container {
  @include flex(column, flex-start, initial, 3vh);
  @include container(100%, 100%, 6vh 4vw 4vh 2vw);

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