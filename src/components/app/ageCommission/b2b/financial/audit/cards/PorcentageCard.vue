<script setup lang="ts">
import { onMounted, ref } from 'vue'
import comingSoon from '@/assets/img/web/coming-soon.png'

interface InvoiceItem {
  invoice: any;
}

interface DataSeller {
  invoices?: { [key: string]: InvoiceItem };
}

const props = defineProps<{ data: DataSeller }>();
const dataSeller = props.data;
const linkSeries = ref([0]);
const businessSeries = ref([0]);
const mocValue = ref([1,2,3])

const dataOptionsLink = ref({
  chart: {
    width: 200,
    height: 200,
    type: 'radialBar',
  },
  colors: ['#53AEE2'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      },
      dataLabels: {
      show: true,
        value: {
          show: false
        }
      }
    },
  },
})

const dataOptionsBusiness = ref({
  chart: {
    width: 200,
    height: 200,
    type: 'radialBar',
  },
  colors: ['#FF8B3D'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      },
      dataLabels: {
        show: true,
        value: {
          show: false
        }
      }
    },
  },
})

const chartOptions = ref({
    chart: {
      height: "auto",
      width: "auto",
      type: 'donut',
      offsetX: -20,
    },
    labels: ['Pago', 'A ser pago', 'Previsão de ganhos'],
    colors: ['#FF8B3D', '#53AEE2','#FFD8BE'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false,
    },
    tooltip:{
      enabled: false
    },
    plotOptions: {
      pie: {
        startAngle: -360,
        endAngle: 0,
        expandOnClick: false,
        donut: {
          size: "80%"
        }
      },
    },
    color: ['#53AEE2', '#FF8B3D', '#FFD8BE'],
    stroke: {
      curve: "straight",
      width: 0
    },
    responive: {
      brakpoints: 1600,
      options: {
        chart: {
          width: 200,
        },
      },
    }
  });

const calculateSeries = () => {
  dataOptionsBusiness.value.labels = [(dataSeller.percentInvoiceBusiness * 100) + "%"];
  businessSeries.value = [dataSeller.percentInvoiceBusiness * 100];
  dataOptionsLink.value.labels = [(dataSeller.percentInvoiceDedicated * 100) + "%"];
  linkSeries.value = [parseFloat(dataSeller.percentInvoiceDedicated) * 100];
}


onMounted(calculateSeries)
  
</script>

<template>
  <div class="relative">
    <div class="flex flex-col justify-around">
      <div class="flex flex-col pl-10 pt-5">
        <h2 class="text-nowrap text-lg">
          Contagem de pagamentos
        </h2>
      </div>
      <div class="flex flex-row justify-between"> 
        <div id="chart">
          <apexchart type="donut" :options="chartOptions" :series="mocValue"></apexchart>
        </div>
        <div class="items__container flex flex-col gap-2 md:justify-center md:w-3/5 text-nowrap min-[1600px]:w-3/6">
          <div class="items__composition">
            <div class="item">
              <div style="background-color: #FF8B3D">
              </div>
              <span>Pago</span>
            </div>
            <div class="composition">
              <span>R$ {{ mocValue[0].toFixed(2) }}</span>
            </div>
          </div>
          <div class="items__composition flex">
            <div class="item">
              <div style="background-color: #53AEE2">
              </div>
              <span>A ser pago</span>
            </div>
            <div class="composition">
              <span>R$ {{ mocValue[1].toFixed(2) }}</span>
            </div>
          </div>
          <div class="items__composition flex">
            <div class="item">
              <div style="background-color: #FFD8BE">
              </div>
              <span>Previsão de ganhos</span>
            </div>
            <div class="composition">
              <span>R$ {{ mocValue[2].toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bg-[#333] opacity-35 h-full w-full top-0 left-0 rounded-large">
    </div>
    <div class="flex justify-center items-center absolute h-full w-full top-0 left-0">
      <img :src="comingSoon" class="w-2/12">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.items__container {
  .items__composition {
    @include flex(row, space-between, center, 1vw);
    width: 100%;    

    .item {
      @include flex(row, flex-start, center, .5vw);
      div {
        width: .5vw;
        height: .5vw;
        border-radius: 50%;
      }


      span {
        font-size: 1.2rem;
        font-weight: 400;
        color: #333;
      }
    }

    .composition {
      span {
        font-size: 1.2rem;
        font-weight: 500;
        color: #333;
      }
    }

  }
}
</style>