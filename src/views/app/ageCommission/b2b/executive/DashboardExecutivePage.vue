<script setup lang="ts">

import { infoPage } from "@/stores/counter";
import CardsGraphComponent from "@/components/app/ageCommission/b2b/dashboard/executive/CardsGraphComponent.vue";
import CardTotalSales from "@/components/app/ageCommission/b2b/dashboard/executive/CardTotalSales.vue";

const info = () => { infoPage()
            .setInfoPage(
                {title: 'Dashboard',
                        subtitle: 'Tenha uma visão completa de suas vendas, comissões e metas em um só lugar.'}
            )};

info();

</script>

<template>
  <div class="dashboard__container">
    <CardTotalSales />
    <CardsGraphComponent />
    <div class="card"></div>
    <div class="card"></div>

  </div>
</template>

<style lang="scss">

.dashboard__container {
  @include container(100%, 100%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1vw;

  .cards, .card {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
  }

  .card {
    padding: 1vh 1vw;

    h1 {
      font-size: 1.6rem;
      font-weight: 400;
      color: #333;
    }

    h2 {
      font-size: 1.4rem;
      font-weight: 400;
      color: #777;
      height: 20%;
    }

  }


  .cards {
    background-color: transparent;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: .5vw;


    .card {
      .content__card {
        @include flex(row, space-between, center);
        height: 80%;
        position: relative;
        .values {
          @include flex(column, space-between);
          height: 100%;
          .value {
            font-size: 2rem;
            font-weight: 600;
            color: #333;
          }

          .percent {

          }
        }

        .graph {
          position: absolute;
          right: 0;
          top: -20%;
          width: 40%;
          height: 115%;
        }
      }
    }


  }
}

</style>