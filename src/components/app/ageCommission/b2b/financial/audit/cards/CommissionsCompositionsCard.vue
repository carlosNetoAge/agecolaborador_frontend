<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface InvoiceItem {
  invoice: any;
}

interface DataSeller {
  invoices?: { [key: string]: InvoiceItem };
}

const props = defineProps<{ data: DataSeller }>();

const dataSeller = props.data;
const series = ref([]);
let sumCommissions = ref(0);

const countPercentages = () =>{
  const commissions = {
    commissionBusiness: parseFloat(dataSeller.commissionBusiness.toFixed(2)),
    commissionDedicated: parseFloat(dataSeller.commissionDedicated.toFixed(2)),
    metaReach: 0,
    loyalty: 0,
  };
  sumCommissions.value = Object.values(commissions).reduce((acc, current) => acc + current, 0);
  for (let item in commissions) {
    let partial = commissions[item] / sumCommissions.value * 100 
    series.value.push(parseFloat(partial.toFixed(2)))
  };
}

const chartOptions = ref({
    chart: {
      width: 150,
      type: 'donut',
    },
    labels: ['Empresarial', 'Link dedicado', 'Meta alcançada', 'Contrato fidelizado 36 meses'],
    colors: ['#FF8B3D', '#53AEE2','#FFD8BE', '#BAE6FF'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        startAngle: -350,
        endAngle: 10,
        expandOnClick: false,
        labels: {
          name: {
            formatter: function() {

            }
          }
        }
      },
    },
      fill: {
      type: 'gradient',
    },
    color: ['#53AEE2', '#FF8B3D', '#BAE6FF', '#FFD8BE'],
    stroke: {
      curve: "smooth",
      width: 5
    }
  });

onMounted(countPercentages)
</script>

<template>
  <div class="flex flex-col justify-between">
    <div class="flex flex-col pl-10 pt-5">
      <h2 class="text-nowrap text-lg">
        Composição do comissionamento
      </h2>
      <span class="text-nowrap font-semiBold text-3xl pt-5">R$ {{ sumCommissions }}</span>
    </div>
    <div class="flex flex-row items-center justify-between h-4/5 lg:text-sm">
      <apexchart type="donut" width="150" height="150" :options="chartOptions" :series="series"></apexchart>
      <div class="items__container flex text-nowrap w-3/5">
        <div class="items__composition">
          <div class="item">
            <div style="background-color: #FF8B3D">
            </div>
            <span>Empresarial</span>
          </div>
          <div class="composition">
            <span>R$ {{ dataSeller.commissionBusiness.toFixed(2) }}</span>
          </div>
        </div>
        <div class="items__composition flex">
          <div class="item">
            <div style="background-color: #53AEE2">
            </div>
            <span>Link dedicado</span>
          </div>
          <div class="composition">
            <span>R$ {{ dataSeller.commissionDedicated.toFixed(2) }}</span>
          </div>
        </div>
        <div class="items__composition flex">
          <div class="item">
            <div style="background-color: #FFD8BE">
            </div>
            <span>Meta alcançada</span>
          </div>
          <div class="composition">
            <span>R$ {{ dataSeller.metaReach ?  dataSeller.metaReach.toFixed(2) : 0 }}</span>
          </div>
        </div>
        <div class="items__composition flex">
          <div class="item">
            <div style="background-color: #BAE6FF">
            </div>
            <span>fidelizado 36 meses</span>
          </div>
          <div class="composition">
            <span>R$ {{ dataSeller.loyalty ? dataSeller.loyalty.toFixed(2) : 0}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.items__container {
  @include flex(column, flex-start, initial, 1vh);
  .items__composition {
    @include flex(row, space-between, center);
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
      padding-left: 40px;

      span {
        font-size: 1.2rem;
        font-weight: 500;
        color: #333;
      }
    }

  }
}
</style>