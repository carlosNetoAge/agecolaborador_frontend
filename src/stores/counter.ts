import { ref } from 'vue'
import { defineStore } from 'pinia'
import Cookie from 'js-cookie';

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

''

    return { title, subtitle, setInfoPage }
})

export const useAuthStore = defineStore('auth', () => {

  const isAuthenticated = ref(false);
  const authToken = ref(null);

  if (Cookie.get('token')) {
    isAuthenticated.value = true
    authToken.value = Cookie.get('token')
  }

  function login(pin: any, payload: object) {
    isAuthenticated.value = true;
    Cookie.set('token', pin, { expires: payload.keepConnected ? 30 : 1 });
    authToken.value = pin;
  }

  function logout() {
    isAuthenticated.value = false;
    authToken.value = null;
    Cookie.remove('token', {path: '/'});
  }  

  return { isAuthenticated, login, logout }
});

export const sellerInfoStore = defineStore('sellerInfo', () => {

  const dataSeller = ref({})
  const periodRefer = ref('')

  function setInfo(seller: object, date: string) {
    dataSeller.value = seller;
    periodRefer.value = date;
  }

  function getInfo() {
    return { dataSeller: dataSeller.value, periodRefer: periodRefer.value}
  }

  function removeInfo() {
    dataSeller.value = {}
    periodRefer.value = ''
  }

  return { setInfo, getInfo, removeInfo, dataSeller, periodRefer}
})