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
  sumCommissions.value = parseFloat(sumCommissions.value.toFixed(2));
  for (let item in commissions) {
    let partial = commissions[item] / sumCommissions.value * 100 
    series.value.push(parseFloat(partial.toFixed(2)))
  };
}

const chartOptions = ref({
    chart: {
      width: 150,
      type: 'donut',
      offsetX: -10,
    },
    labels: ['Empresarial', 'Link dedicado', 'Meta alcançada', 'Contrato fidelizado 36 meses'],
    colors: ['#FF8B3D', '#53AEE2','#FFD8BE', '#BAE6FF'],
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
      fill: {
      // type: 'gradient',
    },
    color: ['#53AEE2', '#FF8B3D', '#BAE6FF', '#FFD8BE'],
    stroke: {
      curve: "straight",
      width: 0
    }
  });

const emit = defineEmits(['viewExtract']);

const viewExtract = () => {
  emit('viewExtract');
}

onMounted(countPercentages)
</script>

<template>
  <div class="flex flex-col justify-between">
    <div class="relative flex flex-col  min-[1600px]:pl-16 md:pl-8 pt-5">
      <h2 class="text-nowrap text-lg">
        Composição do comissionamento
      </h2>
      <span class="text-nowrap font-semiBold text-3xl pt-5">R$ {{ sumCommissions }}</span>
      <!-- <button class="absolute top-5  min-[1600px]:right-16 md:right-5 bg-age-blue text-white py-2 px-4 rounded pr-4" @click="viewExtract">Extrato</button> -->
    </div>
    <div class="flex flex-row items-center  min-[1600px]:justify-between md:justify-center h-4/5 md:text-xs  min-[1600px]:text-lg px-16 md:px-8">
      <apexchart type="donut" width="150" height="150" :options="chartOptions" :series="series"></apexchart>
      <div class="items__container flex md:justify-between md:w-4/6 text-nowrap  min-[1600px]:w-3/6">
        <div class="items__composition">
          <div class="item">
            <div style="background-color: #FF8B3D">
            </div>
            <span>Empresarial</span>
          </div>
          <div class="composition">
            <span>R$ {{ dataSeller.commissionBusiness ? dataSeller.commissionBusiness.toFixed(2) : 0 }}</span>
          </div>
        </div>
        <div class="items__composition flex">
          <div class="item">
            <div style="background-color: #53AEE2">
            </div>
            <span>Link dedicado</span>
          </div>
          <div class="composition">
            <span>R$ {{ dataSeller.commissionDedicated ? dataSeller.commissionDedicated.toFixed(2) : 0 }}</span>
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
      span {
        font-size: 1.2rem;
        font-weight: 500;
        color: #333;
      }
    }

  }
}
</style>