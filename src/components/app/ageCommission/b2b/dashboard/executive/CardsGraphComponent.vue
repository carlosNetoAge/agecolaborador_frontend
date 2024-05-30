<script setup lang="ts">


const defineOptions = (color:string) => {


  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false, // Esconde a barra de ferramentas
      },
      zoom: {
        enable: false,
      },
      brush: {
        enabled: false
      }
    },
    stroke: {
      curve: 'smooth', // Opcional: Define o tipo de curva das linhas
      width: 2 // Opcional: Define a largura da linha
    },
    colors: [color],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100]
      },
    },
    grid: {
      show: false, // Desabilita a grade
    },
    xaxis: {
      labels: {
        show: false, // Esconde os rótulos do eixo X
      },
      axisBorder: {
        show: false, // Esconde a borda do eixo X
      },
      axisTicks: {
        show: false, // Esconde os ticks (marcadores) do eixo X
      },
    },
    yaxis: {
      labels: {
        show: false, // Esconde os rótulos do eixo Y
      },
      axisBorder: {
        show: false, // Esconde a borda do eixo Y
      },
      axisTicks: {
        show: false, // Esconde os ticks (marcadores) do eixo Y
      },
    },
    dataLabels: {
      enabled: false // Desabilita os rótulos de dados
    },
    markers: {
      size: 0 // Esconde os marcadores de ponto
    },
    tooltip: {
      enabled: false // Desabilita a dica de ferramenta
    }
  };

  return options;
}

const defineSeries = () => {
  return [
    {
      name: 'Vendas Banda Larga',
      data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 31))
    }
  ];

}

</script>

<template>
  <div class="cards">
    <div class="card">
      <h2>Total de vendas</h2>
      <div class="content__card">
        <div class="values">
            <span class="value">
              68
            </span>
          <div class="percent">
            <span>+29% ref. mês anterior</span>
          </div>
        </div>
        <div class="graph">
          <apexchart width="100%" height="100%" :options="defineOptions('#08C293')" :series="defineSeries()"></apexchart>
        </div>
      </div>
    </div>
    <div class="card">
      <h2>Total faturado</h2>
      <div class="content__card">
        <div class="values">
            <span class="value">
              R$ 3.482,30
            </span>
          <div class="percent">
            <span>-12% ref. mês anterior</span>
          </div>
        </div>
        <div class="graph">
          <apexchart width="100%" height="100%" :options="defineOptions('#FC5B5B')" :series="defineSeries()"></apexchart>

        </div>
      </div>
    </div>
    <div class="card">
      <h2>Total em comissionamento e benefícios</h2>
      <div class="content__card">
        <div class="values">
            <span class="value">
              R$ 1.231,50
            </span>
          <div class="percent">
            <span>+29% ref. mês anterior</span>
          </div>
        </div>
        <div class="graph">
          <apexchart width="100%" height="100%" :options="defineOptions('#FC5B5B')" :series="defineSeries()"></apexchart>

        </div>
      </div>
    </div>
    <div class="card">
      <h2>Total faturado</h2>
      <div class="content__card">
        <div class="values">
            <span class="value">
              R$ 3.482,30
            </span>
          <div class="percent">
            <span>+29% ref. mês anterior</span>
          </div>
        </div>
        <div class="graph">
          <apexchart width="100%" height="100%" :options="defineOptions('#08C293')" :series="defineSeries()"></apexchart>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>