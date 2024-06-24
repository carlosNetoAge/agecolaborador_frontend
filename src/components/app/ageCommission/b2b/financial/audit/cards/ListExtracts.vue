<script setup lang="ts">
import {defineProps, ref} from "vue";

const props = defineProps({
  seller: Object
});

const dataSeller = ref(props.seller);

const emit = defineEmits(['return']);

const returnPage = () => {
  emit('return');
}

const mock = ref([{
    title: 'teste',
    status: 'pago',
    valor: 400,
  },{
    title: 'teste2',
    status: 'A ser pago',
    valor: 700,
  },{
    title: 'teste3',
    status: 'Pendente',
    valor: 300,
  }])

</script>

<template>
  <div>
    <div class="return">
      <button @click="returnPage">
        Voltar
      </button>
    </div>
    <div class="table">
      <div class="header">
        <div class="row">
          <div class="item item1" style="text-align: left;">nome</div>
          <div class="item" style="text-align: center;">Status</div>
          <div class="item">valor</div>
        </div>
      </div>
      <div class="body">
        <div class="row" v-for="(item, index) in mock" :key="index">
          <div class="item item1" style="text-align: left;">
            {{ item.title }}
          </div>
          <div class="item">
                <span class="badge"
                      :class="{
                  'badge-success' : item.status === 'pago',
                  'badge-progress' : item.status === 'A ser pago',
                  'badge-cancel' : item.status === 'Pendente'
                }">
                  {{ item.status }}</span>

          </div>
          <div class="item">
            R$ {{ item.valor }}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"> 
.table {
  width: 100%;
  .row {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    @include flex(row, flex-start, center, 1vw);
    padding: 2vh 1vw;
    border: 1px solid #cccccc50;

    .item1 {
      min-width: 60%;
    }

    .item {
      width: 20%;
      text-align: center;
      font-size: 1.4rem;

      .badge {
        padding: 0.5vh 1vw;
        border-radius: 20px;
        font-size: 1.4rem;
        font-weight: 500;
        color: #fff;
      }

      .badge-success {
        background-color: #E8FBEF;
        color: #09D45B;
      }

      .badge-progress {
        background-color: #E6F2FE;
        color: #0A7BF5;
      }

      .badge-cancel {
        background-color: #dc354530;
        color: #dc3545;
      }



    }

  }


  .header {
    margin: 1vh 0;
    .row {
      background-color: #F9FCFF;

      .item {
        font-size: 2rem;
        font-weight: 600;
        color: #333;
      }
    }

  }

  .body {
    @include flex(column, flex-start, initial, 1vh);

    .row {
      &:hover {
        border-color: #cccccc80;
      }
      .item {
        color: #444;


      }
    }
  }
}
</style>