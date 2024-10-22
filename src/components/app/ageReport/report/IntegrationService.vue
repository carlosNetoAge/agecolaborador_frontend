<script setup lang="ts">
import {ref} from "vue";

const integrations = ref([
  {
    label: 'Power Bi',
    value: 'powerBi'
  },
  {
    label: 'Excel',
    value: 'excel'
  }
])

const selectedIntegration = ref('powerBi');

</script>

<template>
  <div class="inputs-interval">
    <div class="select">
      <label for="interval">Integrações disponíveis</label>
      <select name="interval" v-model="selectedIntegration">
        <option v-for="interval in integrations" :key="interval.value" :value="interval.value">
          {{ interval.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped lang="scss">



</style>