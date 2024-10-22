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
  const status = ref(true)

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


// export const collaboratorInfoStore = defineStore('colaboratorInfo', () => {
//
//   const colaboratorData = ref({})
//   const periodRefer = ref('')
//
//   function setInfo(seller: object, date: string) {
//     colaboratorData.value = seller;
//     periodRefer.value = date;
//   }
//
//   function getInfo() {
//     return { colaboratorData: colaboratorData.value, periodRefer: periodRefer.value}
//   }
//
//   function removeInfo() {
//     colaboratorData.value = {}
//     periodRefer.value = ''
//   }
//
//   return { setInfo, getInfo, removeInfo, colaboratorData, periodRefer}
// })



interface Notification {
  type: string;
  command: string;
  title: string;
  message: string;
  read: boolean;
  report: any | undefined;
}

export const useUserNotification = defineStore('userNotification', {
  state: () => ({
    data: ref<Notification[]>([]), // Correção: ref direto aqui
    modalStatus: false
  }),

  getters: {
    getNotification: (state) => state.data,
    unreadCount: (state) =>
        state.data.filter((notification) => !notification.read).length,
    getStatusModal: (state) => state.modalStatus
  },

  actions: {
    setNotification(notification: Omit<Notification, 'read'>) {
      // Garante que 'read' seja sempre falso ao criar uma nova notificação
      this.data.unshift({ ...notification, read: false });
    },

    activateModal(status) {
      if (this.modalStatus && status) {
        this.modalStatus = false;
        return;
      }
      this.modalStatus = status;
    },

    updateNotification(index: number) {
      if (this.data[index]) {
        this.data[index].read = true;
      }
    },

    removeNotification(index: number) {
      if (index >= 0 && index < this.data.length) {
        this.data.splice(index, 1); // Remove a notificação pelo índice
      }
    },

    clearAllNotifications() {
      this.data = [];
    },
    closeModalNotification() {

    }
  },

  persist: {
    key: 'userNotifications', // Chave personalizada no storage
    storage: localStorage, // Pode ser alterado para sessionStorage, se necessário
    paths: ['data'], // Persiste apenas 'data'
  },
});
