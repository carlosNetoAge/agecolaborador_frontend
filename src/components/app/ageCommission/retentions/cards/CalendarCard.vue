<template>
  <div class="h-full w-full" v-if="vshow">
    <div>
      <apexchart type="bar" height="175px" width="100%" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue';

const vshow = ref(false)

const jsonMock = {
    "1": {
      "solicitacoes_recebidas": 5,
      "retencoes_realizadas": 3,
      "retencoes_nao_realizadas": 2
    },
    "2": {
      "solicitacoes_recebidas": 8,
      "retencoes_realizadas": 6,
      "retencoes_nao_realizadas": 1
    },
    "3": {
      "solicitacoes_recebidas": 7,
      "retencoes_realizadas": 5,
      "retencoes_nao_realizadas": 3
    },
    "4": {
      "solicitacoes_recebidas": 6,
      "retencoes_realizadas": 4,
      "retencoes_nao_realizadas": 2
    },
    "5": {
      "solicitacoes_recebidas": 9,
      "retencoes_realizadas": 7,
      "retencoes_nao_realizadas": 3
    },
    "6": {
      "solicitacoes_recebidas": 4,
      "retencoes_realizadas": 2,
      "retencoes_nao_realizadas": 1
    },
    "7": {
      "solicitacoes_recebidas": 10,
      "retencoes_realizadas": 8,
      "retencoes_nao_realizadas": 4
    },
    "8": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 1,
      "retencoes_nao_realizadas": 2
    },
    "9": {
      "solicitacoes_recebidas": 6,
      "retencoes_realizadas": 5,
      "retencoes_nao_realizadas": 2
    },
    "10": {
      "solicitacoes_recebidas": 7,
      "retencoes_realizadas": 6,
      "retencoes_nao_realizadas": 1
    },
    "11": {
      "solicitacoes_recebidas": 5,
      "retencoes_realizadas": 3,
      "retencoes_nao_realizadas": 1
    },
    "12": {
      "solicitacoes_recebidas": 8,
      "retencoes_realizadas": 7,
      "retencoes_nao_realizadas": 3
    },
    "13": {
      "solicitacoes_recebidas": 4,
      "retencoes_realizadas": 2,
      "retencoes_nao_realizadas": 1
    },
    "14": {
      "solicitacoes_recebidas": 9,
      "retencoes_realizadas": 6,
      "retencoes_nao_realizadas": 3
    },
    "15": {
      "solicitacoes_recebidas": 7,
      "retencoes_realizadas": 4,
      "retencoes_nao_realizadas": 2
    },
    "16": {
      "solicitacoes_recebidas": 6,
      "retencoes_realizadas": 5,
      "retencoes_nao_realizadas": 1
    },
    "17": {
      "solicitacoes_recebidas": 8,
      "retencoes_realizadas": 6,
      "retencoes_nao_realizadas": 2
    },
    "18": {
      "solicitacoes_recebidas": 5,
      "retencoes_realizadas": 3,
      "retencoes_nao_realizadas": 1
    },
    "19": {
      "solicitacoes_recebidas": 10,
      "retencoes_realizadas": 7,
      "retencoes_nao_realizadas": 3
    },
    "20": {
      "solicitacoes_recebidas": 4,
      "retencoes_realizadas": 2,
      "retencoes_nao_realizadas": 1
    },
    "21": {
      "solicitacoes_recebidas": 7,
      "retencoes_realizadas": 5,
      "retencoes_nao_realizadas": 2
    },
    "22": {
      "solicitacoes_recebidas": 6,
      "retencoes_realizadas": 4,
      "retencoes_nao_realizadas": 1
    },
    "23": {
      "solicitacoes_recebidas": 9,
      "retencoes_realizadas": 7,
      "retencoes_nao_realizadas": 3
    },
    "24": {
      "solicitacoes_recebidas": 5,
      "retencoes_realizadas": 3,
      "retencoes_nao_realizadas": 2
    },
    "25": {
      "solicitacoes_recebidas": 8,
      "retencoes_realizadas": 6,
      "retencoes_nao_realizadas": 1
    },
    "26": {
      "solicitacoes_recebidas": 7,
      "retencoes_realizadas": 5,
      "retencoes_nao_realizadas": 3
    },
    "27": {
      "solicitacoes_recebidas": 6,
      "retencoes_realizadas": 4,
      "retencoes_nao_realizadas": 2
    },
    "28": {
      "solicitacoes_recebidas": 9,
      "retencoes_realizadas": 7,
      "retencoes_nao_realizadas": 3
    },
    "29": {
      "solicitacoes_recebidas": 4,
      "retencoes_realizadas": 2,
      "retencoes_nao_realizadas": 1
    },
    "30": {
      "solicitacoes_recebidas": 10,
      "retencoes_realizadas": 8,
      "retencoes_nao_realizadas": 4
    },
    "31": {
      "solicitacoes_recebidas": 5,
      "retencoes_realizadas": 3,
      "retencoes_nao_realizadas": 2
    }
}

const chartOptions = {
  chart: {
    type: 'bar',
    height: "175px",
    width: "100%",
    stacked: true,
    toolbar: {
      show: false
    },
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#FF8B3D', '#53AEE2', '#BAE6FF'],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 5,
      colors: {
        backgroundBarOpacity: 0,
      },
      dataLabels: {
        total: {
          enabled: false,
        }
      }
    },
  },
  xaxis: {
    type: 'category',
    categories: []
  },
  yaxis: {
    labels: {
      show: false,
    }
  },
  legend: {
    position: 'top',
    offsetY: 0
  },
  fill: {
    opacity: 1
  },
  grid: {
    show: false,
  },
}

const series = ref([])

const populateChart = (data) => {
  const categories = [];
  const solicitacoesRecebidas = [];
  const retencoesRealizadas = [];
  const retencoesNaoRealizadas = [];

  for (const [day, values] of Object.entries(data)) {
    categories.push(day);
    solicitacoesRecebidas.push(values.solicitacoes_recebidas);
    retencoesRealizadas.push(values.retencoes_realizadas);
    retencoesNaoRealizadas.push(values.retencoes_nao_realizadas);
  }

  series.value = [
    {
      name: "Não retidos",
      data: solicitacoesRecebidas,
    },
    {
      name: "Retidos",
      data: retencoesRealizadas,
    },
    {
      name: "Total",
      data: retencoesNaoRealizadas,
    },
  ];
  console.log(chartOptions, series)

  chartOptions.xaxis.categories = categories;

  nextTick(() => {
    vshow.value = true;
  })
}

onMounted(() => {
  populateChart(jsonMock)
})
</script>

<style lang="scss" scoped>

</style>