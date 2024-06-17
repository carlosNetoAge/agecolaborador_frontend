<script setup lang="ts">

import {reactive, ref} from 'vue';
import {AXIOS} from "@api/AXIOS";
import Router from "@/router";
import {stateLoading, useAuthStore} from "@/stores/counter";
import { nextTick } from 'process';


interface Payload {
  username: string;
  pass: string;
  keepConnected: boolean;
}

interface ValidationField {
  required: boolean;
  minLength: number;
  maxLength: number;
  errors: string[];
}

interface FormValidation {
  errors: boolean,
  responseMsg: string;
  step: number;
}

interface ValidateForm {
  username: ValidationField;
  pass: ValidationField;
  form: FormValidation;
}

const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
}


const payload: Payload = reactive({
  username: "",
  pass: "",
  keepConnected: false,
});

const validateForm: ValidateForm = reactive({
  username: {
    required: true,
    minLength: 3,
    maxLength: 20,
    errors: [],
  },
  pass: {
    required: true,
    minLength: 8,
    maxLength: 100,
    errors: [],
  },
  form: {
    errors: false,
    responseMsg: 'Usuário ou senha inválidos',
    step: 0,
  },
});

const validateUserName = (): void => {
  const username = payload.username;

  if (!validateForm.username.required) {
    return;
  }

  validateForm.username.errors = []; // Clear previous errors

  if (username.length === 0) {
    validateForm.username.errors.push("Por favor, preencha seu nome de usuário.");
  } else if (username.length < validateForm.username.minLength) {
    validateForm.username.errors.push("Seu nome de usuário precisa ter pelo menos 3 caracteres");
  } else if (username.length > validateForm.username.maxLength) {
    validateForm.username.errors.push("Seu nome de usuário pode ter no máximo 20 caracteres. Tente abreviar um pouco.");
  }
};

const validatePassword = (): void => {
  const pass = payload.pass;

  if (!validateForm.pass.required) {
    return;
  }

  validateForm.pass.errors = []; // Clear previous errors

  if (pass.length === 0) {
    validateForm.pass.errors.push("Para sua segurança, precisamos da sua senha.");
  } else if (pass.length < validateForm.pass.minLength) {
    validateForm.pass.errors.push("Sua senha precisa ter pelo menos 8 caracteres.");
  } else if (pass.length > validateForm.pass.maxLength) {
    validateForm.pass.errors.push("Número de caracteres excedido. Tente uma senha mais curta.");
  }
};

const statusSubmit = ref(false);
const loading = stateLoading();
const authStore = useAuthStore();

const submit = async (): Promise<void> => {
  const validate = (): boolean => {
    validateUserName();
    validatePassword();
    return !(validateForm.username.errors.length > 0 || validateForm.pass.errors.length > 0);
  };

  const validated = validate();

  if (!validated) {
    return;
  }

  statusSubmit.value = true;
  loading.alternateState(true);
  setTimeout(() => login(), 2000)
};

const login = async () => {
  await AXIOS({
    method: 'post',
    url: 'auth/login',
    data: {
      user: payload.username,
      password: payload.pass,
      keepConnected: payload.keepConnected,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    authStore.login(response.data.access_token, payload)
  }).catch((error) => {
    validateForm.form.errors = true;

    if (error.response && error.response.status === 401) {
      validateForm.form.responseMsg = "Usuário ou senha inválidos.";
    } else {
      validateForm.form.responseMsg = "Erro ao tentar se conectar. <br> Tente novamente mais tarde.";
    }
    statusSubmit.value = false;
  }).finally(() => {
    Router.replace('inicio');
    loading.alternateState(false);
    statusSubmit.value = false;
    validateForm.form.step++;
    loading.alternateState(false);
  });
}


</script>

<template>
  <div class="form__card__login">
    <transition name="slide">
      <div class="wrapper response-data" :class="{'warning' : validateForm.form.errors}" v-if="validateForm.form.errors">
      <span v-html="validateForm.form.responseMsg">
      </span>
      </div>
    </transition>
    <form action="#" @submit.prevent="submit">
      <div class="input__container">
        <label for="username">Insira seu usuário</label>
        <div class="input__box">
          <input
              @focusout="validateUserName()"
              v-model="payload.username"
              spellcheck="false"
              type="text" name="username" id="username" autocomplete="off" placeholder="joao.silva">
        </div>
        <transition name="slide">
          <div class="wrapper" v-if="validateForm.username.errors.length > 0">
          <span>
            {{validateForm.username.errors[validateForm.username.errors.length - 1]}}
          </span>
          </div>
        </transition>
      </div>
      <div class="input__container">
        <label for="password">Insira sua senha</label>
        <div class="input__box">
          <input
              v-model="payload.pass" spellcheck="false"
              autocomplete="off"
              @focusout="validatePassword()"
              :type="showPassword ? 'text' : 'password'" name="password" id="password" placeholder="******">
          <svg v-if="showPassword" @click="togglePassword"
               xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
            <path
                d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z"/>
            <path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/>
          </svg>
          <svg v-else @click="togglePassword"
               xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
            <path
                d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z"/>
          </svg>

        </div>
        <transition name="slide">
          <div class="wrapper" v-if="validateForm.pass.errors.length > 0">
          <span>
            {{ validateForm.pass.errors[validateForm.pass.errors.length - 1] }}
          </span>
          </div>
        </transition>
      </div>
      <button type="submit" class="submit__button">
        <span v-if="!statusSubmit">Entrar</span>
        <div class="spinner" v-if="statusSubmit">
          <svg viewBox="25 25 50 50" class="circular">
            <circle stroke-miterlimit="10" stroke-width="3" fill="none" r="20" cy="50" cx="50" class="path"></circle>
          </svg>
        </div>
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">

.form__card__login {
  @include form;
  z-index: 3;

}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
.slide-enter-to, .slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}



</style>