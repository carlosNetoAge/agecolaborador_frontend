<script setup lang="ts">


const seriesData = Array.from({ length: 15 }, () => Math.floor(Math.random() * 30)); // Exemplo de valores de série

// Identifica o índice do maior valor
const maxIndex = seriesData.findIndex(value => value === Math.max(...seriesData));

// Cria um array de cores onde todos os valores, exceto o maior, têm a segunda cor
const colors = seriesData.map((_, index) => index === maxIndex ? "#42A6DF" : "#EDF1FA");

const options = {
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: colors,
  series: [{
    name: "Vendas",
    data: seriesData,
  }],
  xaxis: {
    categories: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom', 'seg'],
    axisBorder: {
      show: false, // Esconde a borda do eixo X
    },
    axisTicks: {
      show: false, // Esconde os ticks (marcadores) do eixo X
    },
    labels: {
      style: {
        colors: '#bebdbd',
        fontSize: '1.2rem',
      }
    },
  },
  yaxis: {
    max: 30,
    labels: {
      style: {
        colors: '#bebdbd',
        fontSize: '1.2rem',
      }
    },
  },
  grid: {
    show: false,
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: '40%',
      barWidth: '100%',
      dataLabels: {
        enabled: false, // desabilita os rótulos de dados
      },
      // borderRadiusApplication: 'round',
      // borderRadiusWhenStacked: 'last',
      distributed: true, // Habilita a coloração individual das barras
    },
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false // Desabilita a legenda do gráfico
  }
};


</script>

<template>
  <div class="card">
    <h1>Total de vendas</h1>
    <apexchart width="100%" height="90%" :options="options" :series="options.series"></apexchart>
  </div>
</template>

<style scoped lang="scss">

</style>