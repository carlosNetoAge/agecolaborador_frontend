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
    status: 'A ser pago',
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
    <div class="flex justify-center">
      <div class="overflow-x-auto">
        <table class="table text-gray-400 border-separate space-y-6 text-2xl">
        <thead class="bg-age-blue text-white">
          <tr>
            <th class="p-3 text center text-3xl">Name</th>
            <th class="p-3 text center text-3xl">Status</th>
            <th class="p-3 text center text-3xl">Valeu</th>
          </tr>
        </thead>
        <tbody>

          
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.table {
    border-spacing: 0 15px;
    border-radius: 20px;
  }

  .table tr {
    border-radius: 20px;
  }
  
</style>