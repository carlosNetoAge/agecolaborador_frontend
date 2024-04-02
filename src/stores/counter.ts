import { ref } from 'vue'
import { defineStore } from 'pinia'

export const stateLoading = defineStore('loading', () => {
  const status = ref(false)

  function alternateState(state:boolean) {
    status.value = state
  }

  return { status, alternateState }
})

// Menu

export const stateMenu = defineStore('menu', () => {
  const status = ref(false)

  function alternateState(state:boolean) {
    status.value = state
  }

  return { status, alternateState }
})
