<script setup lang="ts">

import { ref } from 'vue';
import {infoPage} from "@/stores/counter";
import {onBeforeMount} from "vue";

const info = infoPage();
const panel = ref({});

const setInfoPage = () => {
  info.setInfoPage({
    title: "Agenda Técnica Aniel",
    subtitle: "Aprove o excedente de ordens de serviço que não entraram no sistema por limitação do capacity."
  });
};

onBeforeMount(() => {
  setInfoPage();
});


const rows = ref([
  {
    "title": "Ativação Plano Combo",
    "type": "Ativação",
    "segment": "B2C",
    "schedule": "12/06/2024 14:00",
    "period": "Tarde",
    "collaborator": "Juliano Silva",
    "contract": "219821",
    "contact": "6199999-9999",
    "nameClient": "Fulano de Souza",
    "request": "Betania",
    "status": "Aprovado"
  },
  {
    "title": "Ativação Plano Combo",
    "type": "Ativação",
    "segment": "B2C",
    "schedule": "12/06/2024 10:00",
    "period": "Manhã",
    "collaborator": "Ana Lima",
    "contract": "219822",
    "contact": "6198888-8888",
    "nameClient": "Ciclano Pereira",
    "request": "Jhefferson",
    "status": "Pré-Aprovado"
  },
  {
    "title": "Ativação Plano Combo",
    "type": "Ativação",
    "segment": "B2C",
    "schedule": "12/06/2024 16:00",
    "period": "Tarde",
    "collaborator": "Marcos Dias",
    "contract": "219823",
    "contact": "6197777-7777",
    "nameClient": "Beltrano Silva",
    "request": "Denise",
    "status": "Aprovado"
  },
  {
    "title": "Ativação Plano Combo",
    "type": "Ativação",
    "segment": "B2C",
    "schedule": "12/06/2024 11:00",
    "period": "Manhã",
    "collaborator": "Joana Souza",
    "contract": "219824",
    "contact": "6196666-6666",
    "nameClient": "Maria Oliveira",
    "request": "Sul",
    "status": "Rejeitado"
  }
])


</script>

<template>
  <div class="options">
    <div class="navbar">
      <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel" @click="panel = 'operational'">Operacional</router-link>
      <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel/aprovacao" @click="panel = 'approbation'">Aprovação</router-link>
    </div>
    <div class="actions">
      <button>Aprovar</button>
      <button>Rejeitar</button>
    </div>
  </div>
  <div class="table">
    <div class="header">
      <div class="row">
        <div class="cntr">
          <input type="checkbox" id="cbx" class="hidden-xs-up cbxInput">
          <label for="cbx" class="cbx"></label>
        </div>
        <div class="item" style="text-align: left;">Serviço</div>
        <div class="item">Tipo</div>
        <div class="item">Data/Hora agendada</div>
        <div class="item">Período</div>
        <div class="item">Colaborador</div>
        <div class="item">Contrato</div>
        <div class="item">Contato</div>
        <div class="item">Solicitou aprovação</div>
        <div class="item" style="text-align: center;">Status</div>


      </div>
    </div>
    <div class="body">
      <div class="row" v-for="(item, index) in rows" :key="index">
        <div class="cntr">
          <input type="checkbox" :id="`cbx${index}`" class="hidden-xs-up cbxInput">
          <label :for="`cbx${index}`" class="cbx"></label>
        </div>
        <div class="item" style="text-align: left;">
          {{ item.title }}
        </div>
        <div class="item">
          {{ item.type }}
        </div>
        <div class="item">
          {{ item.schedule }}
        </div>
        <div class="item">
          {{ item.period }}
        </div>
        <div class="item">
          {{ item.collaborator }}
        </div>
        <div class="item">
          {{ item.contract }}
        </div>
        <div class="item">
          {{ item.contact }}
        </div>
        <div class="item">
          {{ item.request }}
        </div>
        <div class="item" style="text-align: center;">
              <span class="badge"
                    :class="{
                'badge-success' : item.status === 'Aprovado',
                'badge-progress' : item.status === 'Pré-Aprovado',
                'badge-cancel' : item.status === 'Rejeitado'
              }">
                {{ item.status }}</span>

        </div>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.options  {
  width: 100%;
  margin-bottom: 2vh;
  @include flex(row, space-between, center, 1vw);

  .navbar {
    @include flex(row, flex-start, center, 1vw);
  }

  .actions {
    @include flex(row, flex-start, center, 1vw);

  }

  a, button {
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

.table {
  width: 100%;
  .row {
    width: 100%;
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
        color: #444;


      }
    }
  }
}


.cbx {
  position: relative;
  top: 1px;
  width: 17px;
  height: 17px;
  border: 1px solid #c8ccd4;
  border-radius: 3px;
  vertical-align: middle;
  transition: background 0.1s ease;
  cursor: pointer;
  display: block;
}

.cbx:after {
  content: '';
  position: absolute;
  top: 1px;
  left: 5px;
  width: 5px;
  height: 10px;
  opacity: 0;
  transform: rotate(45deg) scale(0);
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transition: all 0.3s ease;
  transition-delay: 0.15s;
}

.lbl {
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;
}

.cbxInput:checked ~ .cbx {
  border-color: transparent;
  background: #53AEE2;
  animation: jelly 0.6s ease;
}

.cbxInput:checked ~ .cbx:after {
  opacity: 1;
  transform: rotate(45deg) scale(1);
}

.cntr {
  position: relative;
}

@keyframes jelly {
  from {
    transform: scale(1, 1);
  }

  30% {
    transform: scale(1.25, 0.75);
  }

  40% {
    transform: scale(0.75, 1.25);
  }

  50% {
    transform: scale(1.15, 0.85);
  }

  65% {
    transform: scale(0.95, 1.05);
  }

  75% {
    transform: scale(1.05, 0.95);
  }

  to {
    transform: scale(1, 1);
  }
}

.hidden-xs-up {
  display: none!important;
}

</style>