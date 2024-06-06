<script setup lang="ts">
import { infoPage } from "@/stores/counter";
import {ref} from "vue";
const info = infoPage();


const rows = ref([
    {
      "title": "Régua de cobrança",
      "date": "30/05/2024",
      "uniqueClients": "17.342",
      "efiency": "78%",
      "amount": "R$ 2.993",
      "arrecadation": "R$ 102.391,21",
      "whatsapp": "2.159",
      "sms": "10.451",
      "email": "15.783",
      "status": "Em progresso"
    },
    {
      "title": "Régua de cobrança",
      "date": "29/05/2024",
      "uniqueClients": "19.827",
      "efiency": "82%",
      "amount": "R$ 2.993",
      "arrecadation": "R$ 102.391,21",
      "whatsapp": "1.723",
      "sms": "12.489",
      "email": "13.265",
      "status": "Cancelado"
    },
    {
      "title": "Régua de cobrança",
      "date": "28/05/2024",
      "uniqueClients": "18.572",
      "efiency": "81%",
      "amount": "R$ 2.993",
      "arrecadation": "R$ 102.391,21",
      "whatsapp": "1.965",
      "sms": "11.384",
      "email": "14.621",
      "status": "Enviado"
    },
    {
      "title": "Régua de cobrança",
      "date": "27/05/2024",
      "uniqueClients": "16.984",
      "efiency": "79%",
      "amount": "R$ 2.993",
      "arrecadation": "R$ 102.391,21",
      "whatsapp": "1.834",
      "sms": "12.647",
      "email": "13.784",
      "status": "Enviado"
    }
])


const setInfoPage = () => {
  info.setInfoPage({
    title: 'Relatório de envios - Régua de Cobrança',
    subtitle: 'Acompanhe os envios realizados pela comunicação específica' });
}
setInfoPage();

</script>

<template>
  <div>
    <div>
      <div class="table">
        <div class="header">
          <div class="row">
            <div class="cntr">
              <input type="checkbox" id="cbx" class="hidden-xs-up cbxInput">
              <label for="cbx" class="cbx"></label>
            </div>
            <div class="item" style="text-align: left;">Título</div>
            <div class="item">Data de envio</div>
            <div class="item">Clientes únicos</div>
            <div class="item">Custo</div>
            <div class="item">Eficiência</div>
            <div class="item">Arrecadação</div>
            <div class="item">Whatsapp</div>
            <div class="item">Sms</div>
            <div class="item">E-mail</div>
            <div class="item" style="text-align: left;">Status</div>


          </div>
        </div>
        <div class="body">
          <div class="row" v-for="(item, index) in rows">
            <div class="cntr">
              <input type="checkbox" :id="`cbx${index}`" class="hidden-xs-up cbxInput">
              <label :for="`cbx${index}`" class="cbx"></label>
            </div>
            <div class="item" style="text-align: left;">
              {{ item.title }}
            </div>
            <div class="item">
              {{ item.date }}
            </div>
            <div class="item">
              {{ item.uniqueClients }}
            </div>
            <div class="item">
              {{ item.amount }}
            </div>
            <div class="item">
              {{ item.efiency }}
            </div>
            <div class="item">
              {{ item.arrecadation }}
            </div>
            <div class="item">
              {{ item.whatsapp }}
            </div>
            <div class="item">
              {{ item.sms }}
            </div>
            <div class="item">
              {{ item.email }}
            </div>
            <div class="item" style="text-align: left;">
              <span class="badge"
                    :class="{
                'badge-success' : item.status === 'Enviado',
                'badge-progress' : item.status === 'Em progresso',
                'badge-cancel' : item.status === 'Cancelado'
              }">
                {{ item.status }}</span>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">


.table {
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
      cursor: pointer;
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