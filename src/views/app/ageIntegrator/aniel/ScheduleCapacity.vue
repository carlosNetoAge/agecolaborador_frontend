<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import morning from '@/assets/img/app/ageIntegrator/aniel/morning.png'
import afternoon from '@/assets/img/app/ageIntegrator/aniel/afternoon.png'

import { infoPage} from "@/stores/counter";
import CalendarOperational from "@/components/app/ageIntegrator/aniel/CalendarOperational.vue";

const info = infoPage();

const setInfoPage = () => {
  info.setInfoPage({
    title: "Agenda Técnica Aniel",
    subtitle: "Acompanhe a capacidade de agendamento em tempo real"
  });
};

setInfoPage();



const panel = ref('operational');

</script>

<template>
  <div class="options">
    <button :class="{select: panel === 'operational'}">Operacional</button>
    <button :class="{select: panel === 'dashboard'}">Dashboard</button>
    <button :class="{select: panel === 'management'}">Gerenciamento</button>
  </div>
  <CalendarOperational />
  <div class="container_content">
    <div class="capacity">
      <div class="period">
        <div class="header">
          <div class="title">
            Capacidade período Manhã
          </div>
          <img :src="morning" alt="">
        </div>
        <div class="services">
          <div class="service">
            <div class="title">
              <h3>Ativações</h3>
            </div>
            <div class="progress">
              <progress value="100" max="100"></progress>
              <div class="info" style="right: 0; top: -2vh">
                <span>0 - Disponíveis</span>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="title">
              <h3>Visitas Técnicas</h3>
            </div>
            <div class="progress">
              <progress value="60" max="100"></progress>
              <div class="info" style="right: 0; top: -2vh">
                <span>42 - Disponíveis</span>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="title">
              <h3>Mudança de endereço</h3>
            </div>
            <div class="progress">
              <progress value="35" max="100"></progress>
              <div class="info" style="right: 0; top: -2vh">
                <span>65 - Disponíveis</span>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="title">
              <h3>Mudança de ponto</h3>
            </div>
            <div class="progress">
              <progress value="15" max="20"></progress>
              <div class="info" style="right: 0; top: -2vh">
                <span>20 - Disponíveis</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="period">
        <div class="header">
          <div class="title">
            Capacidade período Tarde
          </div>
          <img :src="afternoon" alt="">
        </div>
        <div class="services">
          <div class="service">
            <div class="title">
              <h3>Ativações</h3>
            </div>
            <div class="progress">
              <progress value="100" max="100"></progress>
              <div class="info" style="right: 0; top: -2vh">
                <span>0 - Disponíveis</span>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="title">
              <h3>Visitas Técnicas</h3>
            </div>
            <div class="progress">
              <progress value="60" max="100"></progress>
              <div class="info" style="right: 0; top: -2vh">
                <span>42 - Disponíveis</span>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="title">
              <h3>Mudança de endereço</h3>
            </div>
            <div class="progress">
              <progress value="35" max="100"></progress>
              <div class="info" style="right: 0; top: -2vh">
                <span>65 - Disponíveis</span>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="title">
              <h3>Mudança de ponto</h3>
            </div>
            <div class="progress">
              <progress value="15" max="20"></progress>
              <div class="info" style="right: 0; top: -2vh">
                <span>20 - Disponíveis</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.options  {
  width: 100%;
  margin-bottom: 2vh;
  @include flex(row, flex-start, center, 1vw);


  button {
    background-color: #fff;
    border-radius: 10px;
    border:  1px solid #cccccc50;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    transition: all ease-in-out .1s;
    padding: 10px 25px;

    &:hover {
      background-color: #53aee2;
      color: #fff;
    }
  }

  .select {
    background-color: #53aee2;
    color: #fff;
    }
}


.container_content {
  width: 100%;
  height: calc(75% - 2vh);
  margin-top: 2vh;
  .capacity {
    width: 100%;
    height: 100%;
    @include flex(row, space-between, center, 1vw);

    .period {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 15px;
      border:  1px solid #cccccc50;
      @include flex(column, flex-start, initial, 1vh);
      padding: 2vh 1vw;

      .header {
        width: 100%;
        @include flex(row, space-between, center, 1vh);
        position: relative;
        .title {
          font-size: 1.6rem;
          font-weight: 500;
          color: #333;
        }

        img {
          position: absolute;
          top: -1vh;
          right: 1vw;
          width: 3vw;
          height: auto;
        }
      }

      .services {
        @include flex(column, flex-start, initial, 4vh);
        padding-top: 5vh;

        .service {
          @include flex(column, flex-start, initial, .5vh);
          .title {
            width: 50%;
            h3 {
              font-size: 1.6rem;
              font-weight: 500;
              color: #333;
            }
          }

          p {
            font-size: 1rem;
            font-weight: 400;
            color: #666;
          }

          .progress {
            position: relative;
            width: 70%;

            .info {
              position: absolute;

              span {
                font-size: 1.1rem;
                font-weight: 500;
                color: #333;
              }
            }

            progress {
              width: 100%;
              height: 1.5vh;
              border-radius: 10px;
              background-color: #E6F2FE;
              appearance: none;
              &::-webkit-progress-bar {
                background-color: #E6F2FE;
                border-radius: 10px;
              }
              &::-webkit-progress-value {
                background-color: #53aee2;
                border-radius: 10px;
              }
            }
          }

        }
      }
    }
  }
}

</style>
