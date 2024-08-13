<script setup lang="ts">
import {infoPage} from "@/stores/counter";

// assets
import statusSchedule from '@/assets/img/app/ageIntegrator/aniel/status_schedule.png';
import permissions from '@/assets/img/app/ageIntegrator/aniel/service.png';
import {ref} from "vue";
import StatusCapacityManagement from "@/components/app/ageIntegrator/aniel/schedule/management/StatusCapacityManagement.vue";


const info = infoPage();
const pageActual = ref(StatusCapacityManagement)


const setInfoPage = () => {
  info.setInfoPage({
    title: "Agenda Operacional Aniel",
    subtitle: "Acompanhe o status de agendamento em tempo real"
  });
};

setInfoPage();

const buttons = [
  {
    name: "Status da agenda",
    icon: statusSchedule,
    action: () => {
      pageActual.value = StatusCapacityManagement;
    }
  },
  {
    name: "Permissões",
    icon: permissions,
    action: () => {
      pageActual.value = StatusCapacityManagement;
    }
  },
];

</script>

<template>
  <div class="options">
    <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel/dashboard">Dashboard</router-link>
    <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel/gerenciamento">Gerenciamento</router-link>
  </div>
  <div class="content__dashboard">
    <div class="page__actual">
      <component :is="pageActual" />
    </div>
<!--    <div class="pages">-->
<!--      <h3>Gerenciamento</h3>-->

<!--      <div class="actions">-->
<!--        <button v-for="(button, index) in buttons" @click="button.action" :key="index">-->
<!--          <img :src="button.icon" :alt="button.name">-->
<!--          <span>{{button.name}}</span>-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<style scoped lang="scss">
.options  {
  width: 100%;
  margin-bottom: 2vh;
  @include flex(row, flex-start, center, 1vw);


  a {
    background-color: #fff;
    border-radius: 10px;
    border:  1px solid #cccccc50;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    transition: all ease-in-out .1s;
    padding: 10px 25px;

    &:hover {
      background-color: #53aee2;
      color: #fff;
    }
  }

  .select {
    background-color: #53aee2;
    color: #fff;
  }
}

.content__dashboard {
  width: 100%;
  height: 90%;
  @include flex(row, space-between, initial);

  .page__actual {
    width: 100%;
    height: 100%;
  }

  .pages {
    width: calc(20% - 1vw);
    padding: 2vh 2vw 4vh 2vw;
    background-color: #fff;
    border-radius: 15px;
    height: 50%;

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      color: #333;
      margin-bottom: 2vh;
    }

    .actions {
      @include flex(column, flex-start, initial, 1vh);
      button {
        width: 100%;
        padding: 10px 15px;
        background-color: #fff;
        border: 1px solid #cccccc50;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color ease-in-out .1s;
        @include flex(row, flex-start, center, 1vw);

        img {
          width: 1vw;
          height: auto;
        }

        span {
          color: #333;
          text-align: left;
          font-size: 1.2rem;
          font-weight: 500;
        }

        &:hover {
          background-color: #cccccc20;
        }
      }
    }
  }
}

@media (max-width: 1400px) {

  .options {

    a {
      padding: 5px 15px;
    }

  }
}


</style>