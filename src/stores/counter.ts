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


interface InfoPagePayload {
  title: string
  subtitle: string
}

export const infoPage = defineStore('infoPage', () => {

  const title = ref('Título')
    const subtitle = ref('Descrição')

  function setInfoPage(payload: InfoPagePayload) {
    title.value = payload.title
    subtitle.value = payload.subtitle
  }



    return { title, subtitle, setInfoPage }
})
