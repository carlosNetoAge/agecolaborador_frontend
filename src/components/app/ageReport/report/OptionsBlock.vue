<script setup lang="ts">

import {onBeforeMount, ref, watchEffect} from "vue";
import {mount} from "@vue/test-utils";

const typeArchive = ref([
  {
    label: 'Planilha (XLSX)',
    value: 'xlsx'
  },
  // {
  //   label: 'Texto delimitado (CSV)',
  //   value: 'csv'
  // },
  // {
  //   label: 'JSON',
  //   value: 'json'
  // }
])

const props = defineProps<{
  columns: Array<{ label: string, value: string }>,
}>()

const columns = ref(props.columns);

const selectedArchive = ref('xlsx');
const selectedTypeColumns = ref('all');


const selectedColumns = ref(columns.value.map(column => column));

const toggleSelection = (column) => {
  if (selectedColumns.value.includes(column)) {
    selectedColumns.value = selectedColumns.value.filter(item => item !== column);
  } else {
    selectedColumns.value.push(column);
  }
};

const emits = defineEmits(['sendPayloadOptions']);

const payload = ref({
  typeArchive: selectedArchive.value,
  columns: selectedTypeColumns.value,
});

watchEffect(() => {
  payload.value = {
    typeArchive: selectedArchive.value,
    columns: selectedColumns.value,
  }
  emits('sendPayloadOptions', payload.value);
});


onBeforeMount(() => {
  emits('sendPayloadOptions', payload.value);
});

</script>

<template>
  <div class="block">
    <h2>Opções de relatórios</h2>
    <p>Escolha o tipo de arquivo, colunas e mais.</p>
    <div class="radios column">
      <div class="radio" v-for="(archive, index) in typeArchive" :key="index">
        <input type="radio" v-model="selectedArchive" :id="archive.value" :name="archive.value" :value="archive.value">
        <label :for="archive.value">{{ archive.label }}</label>
      </div>
    </div>
    <div class="columns-options">
      <div class="select">
        <label for="columns">Colunas</label>
        <select name="columns" id="columns" v-model="selectedTypeColumns">
          <option value="all">Todas as colunas</option>
          <option value="person">Personalizadas</option>
        </select>
      </div>
    </div>
    <div class="checkboxes" v-if="selectedTypeColumns == 'person'">
      <div class="checkbox" v-for="(column, index) in columns" :key="index">
        <label class="checkbox-container">
          <input :id="index"
              :checked="selectedColumns.includes(column)"
              @change="toggleSelection(column)"
              class="custom-checkbox" checked="" type="checkbox">
          <span class="checkmark"></span>
        </label>
        <label class="label" :for="index">{{ column }}</label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.label {
  font-size: 1.4rem;
}

.checkbox {
  gap: 0 !important;
  width: calc(20% - 1vw) !important;
}

.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
}

.custom-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 17px;
  width: 17px;
  background-color: #eee;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left:6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.custom-checkbox:checked ~ .checkmark {
  background-color: #52ADE2;
}

.custom-checkbox:checked ~ .checkmark:after {
  display: block;
}

@keyframes checkAnim {
  0% {
    height: 0;
  }

  100% {
    height: 10px;
  }
}

.custom-checkbox:checked ~ .checkmark:after {
  animation: checkAnim 0.2s forwards;
}
</style>