<script setup lang="ts">
import { defineEmits } from 'vue';
import iconBusiness from "@/assets/img/web/link empresarial.svg"
import iconLink from "@/assets/img/web/link dedicado icone.svg"

interface InvoiceItem {
  invoice: any;
}

interface DataSeller {
  invoices?: { [key: string]: InvoiceItem };
}

const props = defineProps<{ data: DataSeller }>();
const dataSeller = props.data;

const emit = defineEmits(['viewSales']);

const viewSales = () => {
  emit('viewSales');
}
  
</script>

<template>
  <div>
    <div class="relative flex flex-col">
      <h2 class="text-nowrap text-lg pl-10 pt-5">
        Composição das vendas
      </h2>
      <button class="absolute top-5 min-[1600px]:right-16 md:right-5 bg-age-blue text-white py-2 px-4 rounded pr-4" @click="viewSales">Visualizar</button>
    </div>
    <div class="composition__sales">
      <div class="composition">
        <img :src="iconLink" alt="">
        <div class="type">
          <span>Link Dedicado</span>
        </div>
        <div class="value">
          <span>{{dataSeller.contracts.dedicated}}</span>
          <div class="percent">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z"/></svg>
            <span>00,00%</span>
          </div>
        </div>
      </div>
      <div class="composition">
        <img :src="iconBusiness" alt="">
        <div class="type">
          <span>Empresarial</span>
        </div>
        <div class="value">
          <span>{{dataSeller.contracts.business}}</span>
          <div class="percent">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z"/></svg>
            <span>00,00%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.composition__sales {
  @include flex(row, space-evenly, center, 0);
  height: 90%;

  .composition {
    margin-top: 1vh;
    @include flex(column, flex-start, center, 1vh);
    text-align: center;
    .icon {
      @include flex(column, center, center, 0);
      width: 4vw;
      height: 4vw;
      border-radius: 50%;
      box-shadow: $global-box-shadow;

      svg {
        width: 1.5vw;
        height: 1.5vw;
      }

    }

    #dedicated {
      background-color: #97A5D0;

      svg {
        fill: #0F297D
      }
    }

    #business {
      background-color: #FFD8BE;

      svg {
        fill: #FF8B3D
      }
    }
    .type {
      font-size: 1rem;
      font-weight: 400;
      color: #666666;
    }

    .value {
      .percent {
        span {
          font-size: 1rem;
        }
      }
      span {
        font-size: 2.4rem;
        font-weight: 500;
        color: #333;
      }
    }
  }
}
</style>