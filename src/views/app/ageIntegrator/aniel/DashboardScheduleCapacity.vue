<script setup lang="ts">

import { ref } from 'vue';
import {infoPage} from "@/stores/counter";
import {onBeforeMount} from "vue";

// images
import warning from '@/assets/img/app/ageIntegrator/aniel/order_warning.png';
import approval from '@/assets/img/app/ageIntegrator/aniel/order_approval.png';
import surplus from '@/assets/img/app/ageIntegrator/aniel/order_surplus.png';
import all from '@/assets/img/app/ageIntegrator/aniel/order_all.png';
import rescheduled from '@/assets/img/app/ageIntegrator/aniel/order_rescheduled.png';



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

const getStatus = (status: string) => {
  const classCss = {
    'Aprovado': 'success',
    'Pré-Aprovado': 'progress',
    'Rejeitado': 'warning',
    'Inserido no Aniel': 'success',
    'Pendente de aprovação': 'progress',
    'Reagendado pelo cliente': 'success',
    'Expirado': 'warning'
  };
  return classCss[status] || 'default';
};


const rows = ref([
  {
    "title": "Mudança de endereço",
    "type": "ME",
    "segment": "B2C",
    "schedule": "12/06/2024 14:00",
    "period": "Tarde",
    "collaborator": "Juliano Silva",
    "contract": "219821",
    "os": "120212",
    "contact": "6199999-9999",
    "nameClient": "Fulano de Souza",
    "sector": "SAC",
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
    "os": "120212",
    "contact": "6198888-8888",
    "nameClient": "Ciclano Pereira",
    "sector": "MCV",
    "request": "Jhefferson",
    "status": "Pré-Aprovado"
  },
  {
    "title": "Mudança de Ponto",
    "type": "MP",
    "segment": "B2C",
    "schedule": "12/06/2024 16:00",
    "period": "Tarde",
    "collaborator": "Marcos Dias",
    "contract": "219823",
    "os": "120212",
    "contact": "6197777-7777",
    "nameClient": "Beltrano Silva",
    "sector": "Suporte",
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
    "os": "120212",
    "contact": "6196666-6666",
    "nameClient": "Maria Oliveira",
    "sector": "Condomínio",
    "request": "Daiane",
    "status": "Rejeitado"
  }
])

const filterSelected = ref('all');

const defineOptionsOs = (color:string) => {
  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false, // Esconde a barra de ferramentas
      },
      zoom: {
        enable: false,
      },
      brush: {
        enabled: false
      },
      offsetY: 20,
    },
    stroke: {
      curve: 'straight', // Opcional: Define o tipo de curva das linhas
      width: 2 // Opcional: Define a largura da linha
    },
    colors: [color],
    grid: {
      show: false, // Desabilita a grade
    },
    xaxis: {
      labels: {
        show: false, // Esconde os rótulos do eixo X
      },
      axisBorder: {
        show: false, // Esconde a borda do eixo X
      },
      axisTicks: {
        show: false, // Esconde os ticks (marcadores) do eixo X
      },
    },
    yaxis: {
      labels: {
        show: false, // Esconde os rótulos do eixo Y
      },
      axisBorder: {
        show: false, // Esconde a borda do eixo Y
      },
      axisTicks: {
        show: false, // Esconde os ticks (marcadores) do eixo Y
      },
    },
    dataLabels: {
      enabled: false // Desabilita os rótulos de dados
    },
    markers: {
      size: 0 // Esconde os marcadores de ponto
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    }
  };
  return options;
}

const defineOptionsStatus = () => {
  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false, // Esconde a barra de ferramentas
      },
      zoom: {
        enable: false,
      },
      brush: {
        enabled: false
      },
      offsetY: 20,
    },
    stroke: {
      curve: 'straight', // Opcional: Define o tipo de curva das linhas
      width: 2 // Opcional: Define a largura da linha
    },
    plotOptions: {
      bar: {
        distributed: true, // Permite que cada barra tenha uma cor diferente
      }
    },
    colors: ['#53AEE2', '#FF9A42', '#008200', '#848284', '#00FFFF', '#ED1C24'],
    grid: {
      show: false, // Desabilita a grade
    },
    xaxis: {
      labels: {
        show: false, // Esconde os rótulos do eixo X
      },
      axisBorder: {
        show: false, // Esconde a borda do eixo X
      },
      axisTicks: {
        show: false, // Esconde os ticks (marcadores) do eixo X
      },
    },
    yaxis: {
      labels: {
        show: false, // Esconde os rótulos do eixo Y
      },
      axisBorder: {
        show: false, // Esconde a borda do eixo Y
      },
      axisTicks: {
        show: false, // Esconde os ticks (marcadores) do eixo Y
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: 20,
      style: {
        fontSize: '12px',
        colors: ['#333']
      }
    },
    markers: {
      size: 0 // Esconde os marcadores de ponto
    },
    tooltip: {
      enabled: true,
      x: {
        show: true
      }
    },
    legend: {
      show: false
    }
  };
  return options;
}

const defineSeriesOs = () => {
  return [
    {
      name: 'Agendadas',
      data: [
        { x: '08:00 - 10:00', y: 10 },
        { x: '10:00 - 12:00', y: 40 },
        { x: '12:00 - 14:00', y: 30 },
        { x: '14:00 - 16:00', y: 42 },
        { x: '16:00 - 18:00', y: 10 }
      ]
    }
  ];

}

const defineSeriesStatus = () => {
  return [
    {
      name: 'Status',
      data: [
        {x: 'Aberta Aguardando Atendimento', y: 20},
        {x: 'Fechada Improdutiva', y: 30 },
        {x: 'Fechada Produtiva', y: 40 },
        {x: 'Aberta Aguardando Agendamento', y: 25 },
        {x: 'Atendimento Iniciado', y: 10 },
        {x: 'Cancelado', y: 15 },
      ]
    }
  ];

}


</script>

<template>
  <div class="dashboard__page">
    <div class="options">
      <div class="navbar">
        <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel" @click="panel = 'operational'">Operacional</router-link>
        <router-link exact-active-class="select" to="/ageIntegra/agenda-aniel/dashboard" @click="panel = 'dashboard'">Dashboard</router-link>
      </div>
    </div>
    <div class="filters">
      <div class="filter" @click="filterSelected = 'all'" :class="{'selected' : filterSelected === 'all'}">
        <button>Todas</button>
        <div class="effect-select"></div>
      </div>
      <div class="filter" @click="filterSelected = 'atv'" :class="{'selected' : filterSelected === 'atv'}">
        <button>Ativações</button>
        <div class="effect-select"></div>
      </div>
      <div class="filter" @click="filterSelected = 'vt'" :class="{'selected' : filterSelected === 'vt'}">
        <button>Visíta técnica</button>
        <div class="effect-select"></div>
      </div>
      <div class="filter" @click="filterSelected = 'me'" :class="{'selected' : filterSelected === 'me'}">
        <button>Mudança de endereço</button>
        <div class="effect-select"></div>
      </div>
      <div class="filter" @click="filterSelected = 'rt'" :class="{'selected' : filterSelected === 'rt'}">
        <button>Retenção</button>
        <div class="effect-select"></div>
      </div>
    </div>
    <div class="cards">
      <div class="card">
        <div class="info">
          <div class="title">
            <p>Ordens do dia</p>
          </div>
          <div class="value">
            <span>385</span>
            <span></span>
          </div>
        </div>
        <div class="icon">
          <img :src="all" alt="">
        </div>
      </div>
      <div class="card">
        <div class="info">
          <div class="title">
            <p>Ordens excedentes</p>
          </div>
          <div class="value">
            <span>33</span>
            <span></span>
          </div>
        </div>
        <div class="icon">
          <img :src="surplus" alt="">
        </div>
      </div>
      <div class="card">
        <div class="info">
          <div class="title">
            <p>Ordens aprovadas</p>
          </div>
          <div class="value">
            <span>13</span>
            <span></span>
          </div>
        </div>
        <div class="icon">
          <img :src="approval" alt="">
        </div>
      </div>
      <div class="card">
        <div class="info">
          <div class="title">
            <p>Ordens reagendadas</p>
          </div>
          <div class="value">
            <span>8</span>
            <span></span>
          </div>
        </div>
        <div class="icon">
          <img :src="rescheduled" alt="">
        </div>
      </div>
      <div class="card">
        <div class="info">
          <div class="title">
            <p>Ordens pendentes</p>
          </div>
          <div class="value">
            <span>12</span>
            <span></span>
          </div>
        </div>
        <div class="icon">
          <img :src="warning" alt="">
        </div>
      </div>
    </div>
    <div class="actions">

      <div class="search">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 513.749 513.749" style="enable-background:new 0 0 513.749 513.749;" xml:space="preserve" width="512" height="512">
        <g>
          <path d="M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"/>
        </g>
        </svg>
        <input type="number" placeholder="Pesquisar (Protocolo)" />
      </div>
      <div class="period">
        <input type="date" name="period">
      </div>
      <div class="status">
        <select name="status" id="status">
          <option value="all">Todos</option>
          <option value="surplus">Excedentes</option>
          <option value="approved">Aprovado</option>
          <option value="rescheduled">Reagendas</option>
          <option value="pending">Pendentes</option>
        </select>
      </div>
      <div class="clear">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path d="m17,0c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7S20.86,0,17,0Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm2.957-6.543l-1.543,1.543,1.543,1.543-1.414,1.414-1.543-1.543-1.543,1.543-1.414-1.414,1.543-1.543-1.543-1.543,1.414-1.414,1.543,1.543,1.543-1.543,1.414,1.414Zm-7.957,9.025c.616.412,1.289.743,2,.995v8.523l-6-4.5v-5.12L0,5.38v-2.38C0,1.346,1.346,0,3,0h8.349c-.706.571-1.325,1.244-1.831,2H3c-.551,0-1,.449-1,1v1.62l8,9v4.88l2,1.5v-5.518Z"/>
          </svg>
        </button>
      </div>

    </div>

    <div class="table_orders">
      <table>
        <thead>
          <tr>
            <th style="text-align: left">Protocolo</th>
            <th>Tipo</th>
            <th style="text-align: left">Serviço</th>
            <th>Agendamento</th>
            <th>Período</th>
            <th style="text-align: left">Status</th>
            <th>Setor</th>
            <th>Solicitante</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">#120212</td>
            <td>Ativação</td>
            <td style="text-align: left">Ativação Internet</td>
            <td>10:35</td>
            <td>Manhã</td>
            <td>
              <div class="status">
                <div class="badge success"></div>
                <span>Aprovado</span>
              </div>
            </td>
            <td>MCV</td>
            <td>Jhefferson</td>
            <td>
            </td>
          </tr>
          <tr>
            <td style="text-align: left">#120213</td>
            <td>VT</td>
            <td style="text-align: left">Visita técnica</td>
            <td>10:35</td>
            <td>Manhã</td>
            <td>
              <div class="status">
                <div class="badge rescheduled"></div>
                <span>Reagendado</span>
              </div>
            </td>
            <td>SAC</td>
            <td>Betânia</td>
            <td>
            </td>
          </tr>
          <tr>
            <td style="text-align: left">#120213</td>
            <td>VT</td>
            <td style="text-align: left">Visita técnica Rede Mesh</td>
            <td>13:10</td>
            <td>Manhã</td>
            <td>
              <div class="status">
                <div class="badge pending"></div>
                <span>Pendente</span>
              </div>
            </td>
            <td>SAC</td>
            <td>Betânia</td>
            <td>
              <svg class="actions_order" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="12" cy="2" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="22" r="2"/></svg>
            </td>
          </tr>
          <tr>
            <td style="text-align: left">#120212</td>
            <td>Ativação</td>
            <td style="text-align: left">Ativação Internet</td>
            <td>10:35</td>
            <td>Manhã</td>
            <td>
              <div class="status">
                <div class="badge success"></div>
                <span>Aprovado</span>
              </div>
            </td>
            <td>MCV</td>
            <td>Jhefferson</td>
            <td>
            </td>
          </tr>
          <tr>
            <td style="text-align: left">#120213</td>
            <td>VT</td>
            <td style="text-align: left">Visita técnica</td>
            <td>10:35</td>
            <td>Manhã</td>
            <td>
              <div class="status">
                <div class="badge rescheduled"></div>
                <span>Reagendado</span>
              </div>
            </td>
            <td>SAC</td>
            <td>Betânia</td>
            <td>
            </td>
          </tr>
          <tr>
            <td style="text-align: left">#120213</td>
            <td>VT</td>
            <td style="text-align: left">Visita técnica Rede Mesh</td>
            <td>13:10</td>
            <td>Manhã</td>
            <td>
              <div class="status">
                <div class="badge pending"></div>
                <span>Pendente</span>
              </div>
            </td>
            <td>SAC</td>
            <td>Betânia</td>
            <td>
              <svg class="actions_order" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="12" cy="2" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="22" r="2"/></svg>
            </td>
          </tr>
          <tr>
            <td style="text-align: left">#120212</td>
            <td>Ativação</td>
            <td style="text-align: left">Ativação Internet</td>
            <td>10:35</td>
            <td>Manhã</td>
            <td>
              <div class="status">
                <div class="badge success"></div>
                <span>Aprovado</span>
              </div>
            </td>
            <td>MCV</td>
            <td>Jhefferson</td>
            <td>
            </td>
          </tr>
          <tr>
            <td style="text-align: left">#120213</td>
            <td>VT</td>
            <td style="text-align: left">Visita técnica</td>
            <td>10:35</td>
            <td>Manhã</td>
            <td>
              <div class="status">
                <div class="badge rescheduled"></div>
                <span>Reagendado</span>
              </div>
            </td>
            <td>SAC</td>
            <td>Betânia</td>
            <td>
            </td>
          </tr>
          <tr>
            <td style="text-align: left">#120213</td>
            <td>VT</td>
            <td style="text-align: left">Visita técnica Rede Mesh</td>
            <td>13:10</td>
            <td>Manhã</td>
            <td>
              <div class="status">
                <div class="badge pending"></div>
                <span>Pendente</span>
              </div>
            </td>
            <td>SAC</td>
            <td>Betânia</td>
            <td>
              <svg class="actions_order" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><circle cx="12" cy="2" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="22" r="2"/></svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<style scoped lang="scss">

.dashboard__page {
  @include flex(column, flex-start, initial, 2vh);
  width: 100%;

  .options  {
    width: 100%;

    .navbar {
      @include flex(row, flex-start, center, 1vw);
    }

    .actions {
      @include flex(row, flex-start, center, 1vw);

    }

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

  .filters {
    @include flex(row, flex-start, center, 1.5vw);
    position: relative;
    border-bottom: 2px solid #cccccc40;

    .filter {
      button {
        font-size: 1.2rem;
        font-weight: 600;
        color: #111;
        cursor: pointer;
        transition: all ease-in-out .1s;
        padding: 10px;

        &:hover {
          color: #53AEE2;
        }

      }

      .effect-select {
        border-bottom: 5px solid transparent;
        border-radius: 5px 5px 0 0;
        transition: all ease-in-out .1s;

      }
    }

    .selected {
      button {
        color: #53AEE2;
      }
      .effect-select {
        border-color: #53AEE2;
      }

    }

  }

  .cards {
    @include flex(row, flex-start, center, 1vw);
    align-items: stretch;
    width: 100%;

    .card {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 10px;
      border:  2px solid #cccccc40;
      @include flex(row, space-between, center, .5vw);
      padding: 1vh 1vw;
      .info {
        @include flex(column, flex-start, initial, 1vh);

        .title {
          p {
            font-size: 1.2rem;
            font-weight: 500;
            color: #777;
          }
        }

        .value {
          @include flex(row, flex-start, center, .5vw);
          span {
            font-size: 2rem;
            font-weight: 600;
            color: #333;

            &:nth-child(2) {
              font-size: 1.2rem;
              font-weight: 500;
            }
          }

        }


      }

      .icon {
        @include flex(row, center, center, 0);
        height: 100%;

        img {
          width: 2.5vw;
          height: auto;
        }
      }
    }

  }

  .actions {
    width: 100%;
    padding: .5vh 1vw;
    background-color: #F9F9FB;
    border-radius: 10px;
    @include flex(row, flex-start, center, 1vw);

    .search {
      width: 20%;
      height: 100%;
      background-color: #ffff;
      border: 2px solid #cccccc40;
      border-radius: 10px;
      overflow: hidden;
      @include flex(row, flex-start, initial);

      svg {
        width: 40px;
        height: auto;
        fill: #8790A7;
        padding: 10px;
      }

      input {
        width: 100%;
        height: 100%;
        padding: 10px 5px;
        font-size: 1.2rem;
        font-weight: 500;
        color: #666;
        border: none;
        outline: none;
        &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }

    .period {
      width: 20%;
      height: 100%;
      background-color: #ffff;
      border: 2px solid #cccccc40;
      border-radius: 10px;
      overflow: hidden;
      @include flex(row, flex-start, initial);

      input {
        width: 100%;
        height: 100%;
        padding: 10px 10px 10px 15px;
        font-size: 1.2rem;
        font-weight: 600;
        color: #666;
        border: none;
        outline: none;
        &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }

    }

    .status {
      width: 20%;
      height: 100%;
      background-color: #ffff;
      border-radius: 10px;

      select {
        width: 100%;
        height: 100%;
        padding: 10px 10px 10px 15px;
        font-size: 1.2rem;
        font-weight: 600;
        color: #666;
        border: 2px solid #cccccc40;
        border-radius: 10px;
        outline: none;


      }


    }

    .clear {
      height: 100%;

      svg {
        width: 40px;
        height: auto;
        fill: #8790A7;
        padding: 10px;
        transition: fill ease-in-out .2s;

        &:hover {
          fill: #333;
        }
      }

      button {
        @include flex(row, flex-start, initial);
        width: 100%;
        height: 100%;
        padding: 10px 5px;
        font-size: 1.2rem;
        font-weight: 500;
        color: #111;
        outline: none;
        cursor: pointer;
        transition: all ease-in-out .1s;
      }

    }
  }

  .table_orders {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 1vh 1vw;
    max-height: 50vh;
    overflow-y: auto;
    table {
      width: 100%;
      border-collapse: collapse;

      thead {
        tr {
          th {
            font-size: 1.2rem;
            font-weight: 500;
            color: #777;
            height: 7vh;
            border-bottom: 1px solid #cccccc60;
            text-align: center;
            padding: 0 10px;
          }
        }
      }

      tbody {
        tr {
          border-bottom: 1px solid #cccccc60;

          &:nth-last-child(1) {
            border-bottom: none;
          }
          td {
            padding: 0 10px;

            font-size: 1.2rem;
            font-weight: 500;
            color: #333;
            height: 7vh;
            text-align: center;


            .status {
              @include flex(row, flex-start, center, .5vw);
              .badge {
                width: 10px;
                height: 10px;
                padding: 5px;
                border-radius: 50%;
                &.success {
                  background-color: #27B966;
                }
                &.warning {
                  background-color: #FF9A42;
                }
                &.rescheduled {
                  background-color: #6A31EF;
                }
                &.pending {
                  background-color: #ccc;
                }
              }

            }

            .actions_order {
              margin: 0 auto;
              width: 20px;
              height: 20px;
              fill: #333;
              cursor: pointer;
              transition: fill ease-in-out .2s;
              &:hover {
                fill: #53AEE2;
              }
            }

          }
        }
      }
    }


  }
}

@media (max-width: 1400px) {

  .dashboard__page {
    .options {
      a, button {
        padding: 5px 15px;
      }
    }

    .table_orders {
      max-height: 40vh;
    }
  }
}


</style>