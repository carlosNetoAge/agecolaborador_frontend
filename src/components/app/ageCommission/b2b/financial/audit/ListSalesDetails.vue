<script setup lang="ts">
import {defineProps, ref} from "vue";

const props = defineProps({
  dataList: Object
});

const dataSeller = ref(props.dataList);

const emit = defineEmits(['return']);

const returnPage = () => {
  emit('return');
}

</script>

<template>
  <div class="audit__container">
<!--    <div class="title__container">-->
<!--      <h1>Listagem de vendas do Executivo(a) {{ dataSeller.seller }} - Mês Ref. Janeiro de 2024</h1>-->
<!--      <p>Examine cada transação, garantindo precisão e integridade nas vendas.</p>-->
<!--    </div>-->
    <div class="return">
      <button @click="returnPage">
        Voltar
      </button>
    </div>
    <div class="table__container">
      <table>
        <thead>
        <tr>
          <th>Nº do contrato</th>
          <th>Tipo de contrato</th>
          <th>Data ativação</th>
          <th>Valor do contrato</th>
          <th>Fatura paga</th>
          <th>Competência</th>
          <th>Data do recebimento</th>
          <th>Valor recebido</th>
          <th>Percentual comissão</th>
          <th>Comissão</th>
        </tr>
        </thead>
        <transition name="fade">
          <tbody>
            <tr v-for="(invoice, idx) in dataSeller.invoices" :key="idx">
              <td>{{ invoice.contract_id }}</td>
              <td>{{ invoice.title}}</td>
              <td>{{ invoice.approval_date}}</td>
              <td>{{ invoice.amount.liquid}}</td>
              <td>{{ invoice.invoice != null ? invoice.invoice.title : 'Não recebida'}}</td>
              <td>{{ invoice.invoice != null ? invoice.invoice.competence : ' - '}}</td>
              <td>{{ invoice.invoice != null ? invoice.invoice.receipt_date : ' - '}}</td>
              <td>R${{ invoice.invoice != null ? invoice.invoice.total_amount : ' 0 '}}</td>
              <td>{{ invoice.invoice != null ? invoice.invoice.percentCommission.toFixed(2) : ' 0 '}}%</td>
              <td>R${{ invoice.invoice != null ? invoice.invoice.commission.toFixed(2) : ' 0 '}}</td>
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
  position: relative;

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

  .return {
    position: absolute;
    top: -6vh;
    right: 1vw;

    button {
      cursor: pointer;
      font-size: 1rem;
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


  .table__container {
    width: 100%;
    overflow-y: auto;
    max-height: 100%;
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