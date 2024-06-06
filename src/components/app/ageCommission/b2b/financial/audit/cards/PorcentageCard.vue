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
const linkSeries = ref([50]);
const businessSeries = ref([50]);

const dataOptionsLink = ref({
    chart: {
      width: 200,
      height: 200,
      type: 'radialBar',
    },
    series: [],
    colors: ['#53AEE2'],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        }
      },
      dataLabels: {
        show: false,
      },
    },
})

const dataOptionsBusiness = ref({
  chart: {
    height: 200,
    type: 'radialBar',
  },
  series: [],
  colors: ['#FF8B3D'],
  plotOptions: {
    radialBar: {
      inverseOrder: true,
      startAngle: -350,
      endAngle: 10,
      hollow: {
        size: '70%',
      }
    },
  },
  labels: [],
})

const calculateSeries = () => {
  dataOptionsBusiness.value.series = [dataSeller.percentInvoiceBusiness * 100];
  dataOptionsBusiness.value.labels = [dataSeller.percentInvoiceBusiness * 100];
  businessSeries.value = [dataSeller.percentInvoiceBusiness * 100];
  dataOptionsLink.value.series = [dataSeller.percentInvoiceDedicated * 100];
  dataOptionsLink.value.labels = [dataSeller.percentInvoiceDedicated * 100];
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
     

<!-- 
    <div class="percent__invoice__paid">
      <div class="percent__invoice">
        <div class="info">
          <span>Link Dedicado</span>
          <span>{{ dataSeller.percentInvoiceDedicated * 100 }}%</span>
        </div>
        <div class="progress" id="dedicated">
          <progress :value="dataSeller.percentInvoiceDedicated * 100" max="100"></progress>
        </div>
      </div>
      <div class="percent__invoice">
        <div class="info">
          <span>Empresarial</span>
          <span>{{ dataSeller.percentInvoiceBusiness * 100 }}%</span>
        </div>
        <div class="progress">
          <progress :value="dataSeller.percentInvoiceBusiness * 100" max="100"></progress>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.check__business {
  .level {
    .icon {
      background-color: #08C29330;
      border: 2px solid #08C293;
      color: #08C293;

    }
    .rule {
      span:nth-child(2) {
        color: #08C293;
      }
    }
  }

  .divisor {
    div {
      background-color: #08C293;
    }
  }
}

.check__dedicated {
  .level {
    .icon {
      background-color: #6860BD30;
      border: 2px solid #6860BD;
      color: #6860BD;
    }
    .rule {
      span:nth-child(2) {
        color: #6860BD;
      }
    }
  }

  .divisor {
    div {
      background-color: #6860BD;
    }
  }
}
</style>