<template>
  <div>
    <div>
      <apexchart type="bar" height="200" width="100%" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script setup>
const chartOptions = {
  chart: {
    type: 'bar',
    height: 200,
    width: "100%",
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  colors: ['#53AEE2', '#BAE6FF', '#FF8B3D'],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '01/01/2024 GMT', '01/02/2024 GMT', '01/03/2024 GMT', '01/04/2024 GMT', '01/05/2024 GMT', 
      '01/06/2024 GMT', '01/07/2024 GMT', '01/08/2024 GMT', '01/09/2024 GMT', '01/11/2024 GMT', 
      '01/12/2024 GMT', '01/13/2024 GMT', '01/14/2024 GMT', '01/15/2024 GMT', '01/16/2024 GMT', 
      '01/17/2024 GMT', '01/18/2024 GMT', '01/19/2024 GMT', '01/20/2024 GMT', '01/21/2024 GMT', 
      '01/22/2024 GMT', '01/23/2024 GMT', '01/24/2024 GMT', '01/25/2024 GMT', '01/26/2024 GMT', 
      '01/27/2024 GMT', '01/28/2024 GMT', '01/29/2024 GMT', '01/30/2024 GMT', '01/31/2024 GMT',
    ],
  },
  legend: {
    position: 'top',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
}

const series = {
    "1": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "2": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "3": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "4": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "5": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "6": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "7": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "8": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "9": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "10": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "11": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "12": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "13": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "14": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "15": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "16": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "17": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "18": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "19": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "20": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "21": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "22": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "23": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "24": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "25": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "26": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "27": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "28": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "29": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "30": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    },
    "31": {
      "solicitacoes_recebidas": 3,
      "retencoes_realizadas": 2,
      "retencoes_perdidas": 1
    }
  }

</script>

<style lang="scss" scoped>

</style>