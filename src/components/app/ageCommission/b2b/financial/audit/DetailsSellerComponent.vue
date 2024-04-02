<script setup lang="ts">

import GridOne from "@/components/app/ageCommission/b2b/financial/audit/GridOne.vue";
import GridTwo from "@/components/app/ageCommission/b2b/financial/audit/GridTwo.vue";
import GridThree from "@/components/app/ageCommission/b2b/financial/audit/GridThree.vue";
import {defineEmits, ref, defineProps} from 'vue';
import ListSalesDetails from "@/components/app/ageCommission/b2b/financial/audit/ListSalesDetails.vue";

const emit = defineEmits(['return']);

const returnPage = () => {
  emit('return');
}

const props = defineProps({
  dataSeller: Object,
  periodRefer: String
});

const seller = ref(props.dataSeller);
const page = ref('details');


</script>

<template>
  <div class="details__container" v-if="page == 'details'">
    <div class="return">
      <button @click="returnPage">Voltar</button>
    </div>
    <div class="title__container">
      <h1>Detalhes do Executivo</h1>
      <p>Vendas, meta, comissionamento, contratos e faturas vinculadas.</p>
    </div>

    <div class="content__details">
      <GridOne
        :data="seller"
        :periodRefer="props.periodRefer"
        @viewSales="page = 'listSales'"
      />
      <GridTwo
        :data="seller"
      />
      <GridThree
        :data="seller"
      />
    </div>
  </div>

  <ListSalesDetails
      @return="page = 'details'"
      :dataList="dataSeller"
      v-if="page == 'listSales'" />
</template>

<style lang="scss">

.details__container {
  @include container(100%, 100%, 6vh 4vw 4vh 2vw);
  position: relative;

  .return {
    position: absolute;
    top: 6vh;
    right: 5vw;

    button {
      cursor: pointer;
      font-size: 1.4rem;
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

  .content__details {
    @include flex(row, flex-start, center, 1vw);
    padding: 1vh 0;
    height: 90%;

    .grid__container {
      width: calc((100% / 3) - 1vw);
      @include flex(column, flex-start, initial, 1vw);
      height: 100%;

      .grid__item {
        background-color: #fff;
        border-radius: 15px;
        box-shadow: $global-box-shadow;
        padding: 2vh 1vw;
        position: relative;

        .showDetails {
          position: absolute;
          top: 1vh;
          right: 1vw;
          color: #666;
          font-size: 1.2rem;
          cursor: pointer;
          font-weight: 500;

          &:hover {
            color: #333;
          }
        }

        h2 {
          font-size: 1.2rem;
          font-weight: 400;
          color: #666666;
        }

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