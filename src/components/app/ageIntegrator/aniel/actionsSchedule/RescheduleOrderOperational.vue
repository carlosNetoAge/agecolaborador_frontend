<script setup lang="ts">
import {defineEmits} from "vue";

const emit = defineEmits(['closeModal']);

const close = () => {
  emit('closeModal');
}

const props = defineProps<{
  protocol: string,
}>();
</script>

<template>
  <div class="modal_reschedule">
    <div class="card">
      <div class="close__btn">
        <svg
            @click="close"
            xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"/></svg>
      </div>
      <h3>Datas disponíveis para reagendar o protocolo #{{props.protocol}}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">

.modal_reschedule {
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  @include flex(row, center, center);

  .card {
    width: 80vw;
    height: 90vh;
    background-color: #E9F3FE;
    border-radius: 10px;

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

    h3 {
      font-size: 2rem;
      color: #333;
      text-align: center;
      font-weight: 500;

      b {
        font-weight: 600;
        color: #F15043;
      }
    }
  }
}

</style>