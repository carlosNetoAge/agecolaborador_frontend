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
const linkSeries = ref([0]);
const businessSeries = ref([0]);

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

const calculateSeries = () => {
  dataOptionsBusiness.value.labels = [(dataSeller.percentInvoiceBusiness * 100) + "%"];
  businessSeries.value = [dataSeller.percentInvoiceBusiness * 100];
  dataOptionsLink.value.labels = [(dataSeller.percentInvoiceDedicated * 100) + "%"];
  linkSeries.value = [parseFloat(dataSeller.percentInvoiceDedicated) * 100];
}


onMounted(calculateSeries)
  
</script>

<template>
  <div class="flex flex-col justify-around">
    <div class="flex flex-col pl-10 pt-5">
      <h2 class="text-nowrap text-lg">
        Percentual à receber sob a fatura paga
      </h2>
    </div>
    <div class="flex flex-row"> 
      <div id="linkChart">
        <apexchart type="radialBar" width="200" height="200" :options="dataOptionsLink" :series="linkSeries"></apexchart>
      </div>
      <div id="businessChart">
        <apexchart type="radialBar" width="200" height="200" :options="dataOptionsBusiness" :series="businessSeries"></apexchart>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>