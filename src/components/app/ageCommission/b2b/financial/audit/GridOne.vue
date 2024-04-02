<script setup lang="ts">

import { defineProps, ref, defineEmits } from 'vue';

interface InvoiceItem {
  invoice: any; // Substitua `any` pelo tipo correto, se conhecido.
}

// Se não temos certeza sobre a estrutura exata de 'data', podemos começar com um tipo mais genérico.
interface DataSeller {
  invoices?: { [key: string]: InvoiceItem }; // Assumindo um objeto com chaves desconhecidas.
}

const props = defineProps<{ data: DataSeller, periodRefer: String }>();

const dataSeller = ref(props.data);

const countInvoices = () => {
  let invoicesCount = 0;

  // Verifica se 'invoices' é um objeto
  if (dataSeller.value && typeof dataSeller.value.invoices === 'object') {
    Object.values(dataSeller.value.invoices).forEach((invoiceItem) => {
      if (invoiceItem && invoiceItem.invoice != null) {
        invoicesCount += 1;
      }
    });
  }

  return invoicesCount;
}

const emit = defineEmits(['viewSales']);

const viewSales = () => {
  emit('viewSales');
}

</script>

<template>
  <div class="grid__container">
    <div class="grid__item" style="height: 25%">
      <h2>Total em vendas</h2>
      <span class="showDetails" @click="viewSales">visualizar</span>
      <div class="info__icon">
        <div class="info">
          <span>{{ dataSeller.contracts.dedicated + dataSeller.contracts.business }}</span>
          <div class="percent">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z"/></svg>
            <span>00,00%</span>
          </div>
        </div>

        <div class="icon">

          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512">
                <g>
                  <path d="M490.667,234.667H448V192c0-11.782-9.551-21.333-21.333-21.333c-11.782,0-21.333,9.551-21.333,21.333v42.667h-42.667   c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h42.667V320c0,11.782,9.551,21.333,21.333,21.333   c11.782,0,21.333-9.551,21.333-21.333v-42.667h42.667c11.782,0,21.333-9.551,21.333-21.333   C512,244.218,502.449,234.667,490.667,234.667z"/>
                  <circle cx="192" cy="128" r="128"/>
                  <path d="M192,298.667c-105.99,0.118-191.882,86.01-192,192C0,502.449,9.551,512,21.333,512h341.333   c11.782,0,21.333-9.551,21.333-21.333C383.882,384.677,297.99,298.784,192,298.667z"/>
                </g>
              </svg>

        </div>

      </div>
    </div>
    <div class="grid__item" style="height: 45%">
      <h2>Informações gerais</h2>
      <div class="info__general">
        <p>
          Executivo: <b>{{ dataSeller.seller }}</b>
        </p>
        <p>Supervisionado por: B2B</p>
        <p>Comissionamento referente à <b>{{ props.periodRefer }}</b></p>
      </div>
    </div>
    <div class="grid__item" style="height: 35%">
      <h2>Total de contratos e faturas recebidas</h2>

      <div class="info__contracts__invoices">
        <div class="info">
          <div class="icon" id="contracts">
            <svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m16 .3a4.968 4.968 0 0 1 1.879 1.164l1.656 1.658a4.954 4.954 0 0 1 1.165 1.878h-4.7zm5 6.7v12a5.006 5.006 0 0 1 -5 5h-8a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h6v5a2 2 0 0 0 2 2zm-4.192 10.413a1 1 0 0 0 -1.4-.222 4.586 4.586 0 0 1 -2.273.809 1.347 1.347 0 0 1 -.864-.345 3.025 3.025 0 0 0 -1.832-.655 5.861 5.861 0 0 0 -3.046 1.206 1 1 0 1 0 1.214 1.588 3.951 3.951 0 0 1 1.832-.794c.246 0 .371.078.7.3a3.252 3.252 0 0 0 2 .7 6.464 6.464 0 0 0 3.456-1.193 1 1 0 0 0 .213-1.394zm.192-3.413a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1zm0-4a1 1 0 0 0 -1-1h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1z"/></svg>
          </div>
          <span>{{ dataSeller.contracts.dedicated + dataSeller.contracts.business }} contratos</span>
        </div>
        <div class="info">
          <div class="icon" id="invoices">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.02,8.79c-.59-.54-1.36-.81-2.17-.78-.8,.04-1.54,.39-2.09,.98l-3.22,3.53c-.55-.91-1.55-1.52-2.69-1.52H4c-2.21,0-4,1.79-4,4v5c0,2.21,1.79,4,4,4h4.96c2.85,0,5.57-1.22,7.47-3.35l6.81-7.64c1.09-1.23,.99-3.12-.22-4.23Zm-1.27,2.9l-6.81,7.64c-1.52,1.7-3.69,2.68-5.97,2.68H4c-1.1,0-2-.9-2-2v-5c0-1.1,.9-2,2-2H12.86c.63,0,1.14,.51,1.14,1.14,0,.56-.42,1.05-.98,1.13l-5.16,.74c-.55,.08-.93,.58-.85,1.13,.08,.55,.59,.93,1.13,.85l5.16-.74c1.18-.17,2.13-.99,2.51-2.06l4.43-4.86c.18-.2,.43-.32,.7-.33,.27,0,.53,.08,.73,.26,.41,.37,.44,1.01,.07,1.42Z"/><path d="M9,10h.38c1.45,0,2.62-1.18,2.62-2.62,0-1.29-.92-2.38-2.19-2.59l-3.28-.55c-.3-.05-.52-.31-.52-.62,0-.34,.28-.62,.62-.62h2.64c.36,0,.69,.19,.87,.5,.27,.48,.88,.64,1.37,.36,.48-.28,.64-.89,.36-1.37-.53-.92-1.53-1.5-2.6-1.5h-.27c0-.55-.45-1-1-1s-1,.45-1,1h-.38c-1.45,0-2.62,1.18-2.62,2.62,0,1.29,.92,2.38,2.19,2.59l3.28,.55c.3,.05,.52,.31,.52,.62,0,.34-.28,.62-.62,.62h-2.64c-.36,0-.69-.19-.87-.5-.28-.48-.89-.64-1.37-.36-.48,.28-.64,.89-.36,1.37,.53,.92,1.53,1.5,2.6,1.5h.27c0,.55,.45,1,1,1s1-.45,1-1Z"/></svg>
          </div>
          <span>{{ countInvoices() }} faturas</span>
        </div>

      </div>

    </div>
  </div>

</template>

<style scoped lang="scss">

.info__icon {
  @include flex(row, space-between, center, 0);
  padding: 1vh 0 0 .5vw;
  span {
    font-size: 2.4rem;
    font-weight: 500;
    color: #333;
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

  .icon {
    width: 4vw;
    height: 4vw;
    @include flex(row, center, center);
    border-radius: 50%;
    background-color: #DBE9E9;
    box-shadow: $global-box-shadow;

    svg {
      fill: #08C293;
      width: 1.5vw;
      height: 1.5vw;
    }
  }
}

.info__contracts__invoices {
  @include flex(row, space-evenly, center);
  height: 90%;

  .info {
    @include flex(column, center, center, 1vh);

    .icon {
      width: 4vw;
      height: 4vw;
      @include flex(row, center, center);
      border-radius: 50%;
      box-shadow: $global-box-shadow;

      svg {
        width: 1.5vw;
        height: 1.5vw;
      }
    }

    #invoices {
      background-color: #08C29330;

      svg {
        fill: #08C293;
      }

    }

    #contracts {
      background-color: #6860BD30;

      svg {
        fill: #6860BD;
      }
    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
      color: #333;
    }
  }
}

.info__general {
  padding: 2vh 0;
  p {
    font-size: 1rem;
    font-weight: 400;
    color: #333;
    padding: 10px 5px;
    border-bottom: 1px solid #cccccc60;
  }
}

</style>