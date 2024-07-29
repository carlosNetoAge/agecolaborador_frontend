<script setup lang="ts">

import {defineEmits, defineProps} from "vue";

const emit = defineEmits(['closeModal']);

const { osStatus } = defineProps(['osStatus']);

const close = () => {
  emit('closeModal');
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleString();
}

</script>

<template>
  <div class="modal__log">
    <div class="card">
      <div class="close__btn">
        <svg
            @click="close()"
            xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"/></svg>
      </div>
      <h1>Histórico da Ordem de Serviço</h1>

      <div class="logs">
        <div class="log" v-for="(log, index) in osStatus" :key="index">
          <span>{{log.descricao}} -  <b>{{log.created_at ? formatDate(log.created_at) : '00/00/2024, 00:00:00'}}</b></span>
          <span :style="{backgroundColor: log.cor_indicativa}" >{{ log.titulo }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.modal__log {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000040;
  z-index: 99;
  @include flex(row, center, center, 0);

  .card {
    width: 80%;
    height: 80%;
    padding-bottom: 4vh;
    background-color: #E9F3FE;
    border-radius: 10px;
    box-shadow: $global-box-shadow;


    .close__btn {
      width: 100%;
      @include flex(row, flex-end, center, 0);
      padding: 10px;
      svg {
        width: 25px;
        height: auto;
        fill: #F23E2F;
        cursor: pointer;
        transition: fill ease-in-out .2s;
        &:hover {
          opacity: .9;
        }
      }
    }

    h1 {
      font-size: 1.8rem;
      font-weight: 600;
      color: #333;
      padding: 10px;
      text-align: center;
    }

    .logs {
      width: 100%;
      @include flex(column, flex-start, center, 1vh);
      margin-top: 1vh;

      .log {
        width: 80%;
        background-color: #fff;
        border-radius: 5px;
        padding: 2vh 2vw;

        @include flex(row, space-between, center, 1vh);

        span:nth-child(1) {
          font-size: 1.4rem;
          color: #333;
          font-weight: 500;
        }

        span:nth-child(2) {
          font-size: 1.2rem;
          color: #fff;
          font-weight: 500;
          padding: 5px 10px;
          border-radius: 5px;
        }

      }
    }
  }
}

</style>