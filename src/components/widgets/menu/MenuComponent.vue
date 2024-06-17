<script setup lang="ts">

import { RouterLink } from "vue-router";

import { stateMenu, useAuthStore } from "@/stores/counter";
import {ref} from "vue";

const actualMenu = ref('home');
const actualSubMenu = ref('');
const beforeSubMenu = ref('');
const authStore = useAuthStore();

const alterStateMenu = () => {
  stateMenu().alternateState(!stateMenu().status);
  beforeSubMenu.value = actualSubMenu.value;
  actualSubMenu.value = '';
}


</script>

<template>
  <div class="menu__container" :class="{'retract' : stateMenu().status}">
    <button @click="alterStateMenu">
      <svg v-if="stateMenu().status" xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="512" height="512"><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm16,0a2.993,2.993,0,0,1-.752,1.987c-.291.327-.574.637-.777.84L11.647,17.7a1,1,0,1,1-1.426-1.4L13.05,13.42c.187-.188.441-.468.7-.759a1,1,0,0,0,0-1.323c-.258-.29-.512-.57-.693-.752L10.221,7.7a1,1,0,1,1,1.426-1.4l2.829,2.879c.2.2.48.507.769.833A2.99,2.99,0,0,1,16,12Z"/></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="512" height="512"><path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM8,12a2.993,2.993,0,0,1,.752-1.987c.291-.327.574-.637.777-.84L12.353,6.3a1,1,0,0,1,1.426,1.4L10.95,10.58c-.187.188-.441.468-.7.759a1,1,0,0,0,0,1.323c.258.29.512.57.693.752L13.779,16.3a1,1,0,0,1-1.426,1.4L9.524,14.822c-.2-.2-.48-.507-.769-.833A2.99,2.99,0,0,1,8,12Z"/></svg>
    </button>
   <div class="content__menu">
     <div class="header__menu" >
       <div class="logo__header">
         <img src="@/assets/img/company/logo_orange.png" alt="logo" />
         <h1>Age</h1>
       </div>
     </div>
     <div class="items__menu">
       <div class="wrapper__menu">
         <span class="title__wrapper">Menu</span>
         <nav>
           <ul class="list__menu">
<!--             <li class="item__menu">-->
<!--               <router-link to="/inicio" :class="{'active__link' : actualMenu == 'home'}" @click="actualMenu = 'home'">-->
<!--                 <div class="active__item">-->
<!--                 </div>-->
<!--                 <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M14,18h-4c-1.103,0-2-.897-2-2v-4c0-1.103,.897-2,2-2h4c1.103,0,2,.897,2,2v4c0,1.103-.897,2-2,2Zm-4-6v4h4.002l-.002-4h-4Zm9,12H5c-2.757,0-5-2.243-5-5V9.724c0-1.665,.824-3.215,2.204-4.145L9.203,.855c1.699-1.146,3.895-1.146,5.594,0l7,4.724c1.379,.93,2.203,2.479,2.203,4.145v9.276c0,2.757-2.243,5-5,5ZM12,1.997c-.584,0-1.168,.172-1.678,.517L3.322,7.237c-.828,.558-1.322,1.487-1.322,2.486v9.276c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V9.724c0-.999-.494-1.929-1.321-2.486L13.678,2.514c-.51-.345-1.094-.517-1.678-.517Z"/></svg>-->
<!--                 <span>Início</span>-->
<!--               </router-link>-->
<!--             </li>-->
             <li class="item__menu">
               <div class="title__submenu" :class="{'active__group' : actualMenu == 'AgeCommission'}">
                 <svg @click="[alterStateMenu(), actualMenu = 'AgeCommission']" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M8,3.62c0-1.45,1.18-2.62,2.62-2.62h.38c0-.55,.45-1,1-1s1,.45,1,1h.27c1.07,0,2.06,.57,2.6,1.5,.28,.48,.11,1.09-.36,1.37-.48,.28-1.09,.11-1.37-.36-.18-.31-.51-.5-.87-.5h-2.64c-.34,0-.62,.28-.62,.62,0,.31,.22,.57,.52,.62l3.28,.55c1.27,.21,2.19,1.3,2.19,2.59,0,1.45-1.18,2.62-2.62,2.62h-.38c0,.55-.45,1-1,1s-1-.45-1-1h-.27c-1.07,0-2.06-.57-2.6-1.5-.28-.48-.11-1.09,.36-1.37,.48-.28,1.09-.11,1.37,.36,.18,.31,.51,.5,.87,.5h2.64c.34,0,.62-.28,.62-.62,0-.31-.22-.57-.52-.62l-3.28-.55c-1.27-.21-2.19-1.3-2.19-2.59Zm12.4-.57c-1.42,.28-2.4,1.61-2.4,3.06v5.05c-.26-.09-.54-.15-.83-.17-.79-.04-1.57,.23-2.17,.77l-3,2.76c-.08-.08-.17-.17-.25-.25l-2.74-2.52c-.6-.54-1.38-.81-2.16-.76-.29,.02-.57,.07-.83,.17V6c0-1.85-1.68-3.31-3.6-2.94-1.42,.28-2.4,1.61-2.4,3.06v9.98c0,2.12,.84,4.16,2.34,5.66l1.95,1.95c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29c.39-.39,.39-1.02,0-1.41l-1.95-1.95c-1.13-1.13-1.76-2.65-1.76-4.24V6c0-.55,.45-1,1-1s1,.45,1,1c0,0,0,8.13,.02,8.19,.04,.63,.28,1.26,.73,1.78l2.62,2.72c.38,.4,1.01,.41,1.41,.03,.4-.38,.41-1.02,.03-1.41l-2.57-2.67c-.32-.38-.31-.94,.02-1.31,.18-.2,.42-.32,.69-.33,.27-.01,.52,.08,.71,.25l2.73,2.52c1.03,.95,1.61,2.28,1.61,3.68v3.56c0,.55,.45,1,1,1s1-.45,1-1v-3.56c0-1.15-.29-2.28-.82-3.28l3.07-2.87c.39-.36,.98-.36,1.38-.01,.43,.39,.45,1.05,.05,1.46l-2.4,2.48c-.38,.4-.37,1.03,.03,1.41,.19,.19,.44,.28,.69,.28,.26,0,.52-.1,.72-.31l2.58-2.68c.44-.52,.67-1.16,.69-1.8,0-.04,0-8.12,0-8.12,0-.55,.45-1,1-1s1,.45,1,1v10.1c0,1.59-.63,3.12-1.76,4.24l-1.95,1.95c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29l1.95-1.95c1.5-1.5,2.34-3.53,2.34-5.66V6c0-1.85-1.68-3.31-3.6-2.94Z"/></svg>
                 <span>Age Comissiona</span>
                 <svg v-if="actualMenu != 'AgeCommission'" @click="actualMenu = 'AgeCommission'" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z"/></svg>
                 <svg v-else @click="[actualMenu = '', actualSubMenu = '']" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/></svg>
               </div>
               <transition name="fade">
                 <ul class="list__submenu" v-if="actualMenu == 'AgeCommission'">
                   <router-link
                       to="/ageCommissiona/b2b/dasboard/executivo"
                       class="item__submenu" :class="{'active__submenu' : actualSubMenu == 'AgeCommissionCommission'}" @click="actualSubMenu = 'AgeCommissionCommission'">
                     <p>Minha Comissão</p>
                   </router-link>
                   <router-link
                       to="/ageCommissiona/b2b/financeiro"
                       class="item__submenu" :class="{'active__submenu' : actualSubMenu == 'AgeCommissionFinancial'}" @click="actualSubMenu = 'AgeCommissionFinancial'">
                     <p>Financeiro</p>
                   </router-link>
                 </ul>
               </transition>
             </li>
             <li class="item__menu">
               <div class="title__submenu" :class="{'active__group' : actualMenu == 'AgeCommunicate'}">
                 <svg @click="[alterStateMenu(), actualMenu = 'AgeCommunicate']" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.074 512.074" style="enable-background:new 0 0 512.074 512.074;" xml:space="preserve" width="512" height="512"><g><path d="M490.727,21.379C473.083,3.489,447.355-3.846,422.93,2.051L96.786,70.595C34.85,79.76-7.929,137.399,1.236,199.334   c3.563,24.079,14.782,46.372,31.997,63.581l34.965,34.987c1.637,1.615,2.552,3.823,2.539,6.123v64.512   c0.047,40.134,32.57,72.657,72.704,72.704h64.512c2.303,0,4.513,0.913,6.144,2.539l34.965,34.965   c21.142,21.282,49.895,33.259,79.893,33.28c12.383-0.01,24.683-2.035,36.416-5.995c40.491-13.447,69.914-48.61,76.011-90.837   l68.544-325.12C516.084,65.391,508.789,39.291,490.727,21.379z M66.599,167c5.798-17.913,21.444-30.848,40.128-33.173   c0.754-0.1,1.5-0.228,2.24-0.384L393.17,73.71L134.738,331.992v-27.968c0.047-19.294-7.637-37.803-21.333-51.392l-34.923-34.965   C65.031,204.511,60.399,184.765,66.599,167z M378.535,403.118c-0.171,0.747-0.277,1.493-0.384,2.24   c-3.705,27.023-28.614,45.926-55.637,42.221c-10.676-1.464-20.581-6.379-28.203-13.997l-34.944-34.944   c-13.596-13.7-32.112-21.383-51.413-21.333h-27.968l258.368-258.432L378.535,403.118z"/></g></svg>
                 <span>Age Comunica</span>
                 <svg v-if="actualMenu != 'AgeCommunicate'" @click="actualMenu = 'AgeCommunicate'" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z"/></svg>
                 <svg v-else @click="[actualMenu = '', actualSubMenu = '']" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/></svg>
               </div>
               <transition name="fade">
                 <ul class="list__submenu" v-if="actualMenu == 'AgeCommunicate'">
                   <router-link
                       to="/ageComunica/relatorio-envio"
                       class="item__submenu" :class="{'active__submenu' : actualSubMenu == 'AgeCommunicateReportSendings'}" @click="actualSubMenu = 'AgeCommunicateReportSendings'">
                     <p>Relatório de envio</p>
                   </router-link>
                 </ul>
               </transition>
             </li>
             <li class="item__menu">
               <div class="title__submenu" :class="{'active__group' : actualMenu == 'AgeIntegrator'}">
                 <svg @click="[alterStateMenu(), actualMenu = 'AgeIntegrator']" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/><path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/><path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/><path d="M14,7h3v3a1,1,0,0,0,2,0V7h3a1,1,0,0,0,0-2H19V2a1,1,0,0,0-2,0V5H14a1,1,0,0,0,0,2Z"/></svg>
                 <span>Age Integrações</span>
                 <svg v-if="actualMenu != 'AgeIntegrator'" @click="actualMenu = 'AgeIntegrator'" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z"/></svg>
                 <svg v-else @click="[actualMenu = '', actualSubMenu = '']" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/></svg>
               </div>
               <transition name="fade">
                 <ul class="list__submenu" v-if="actualMenu == 'AgeIntegrator'">
                   <router-link
                       to="/ageIntegra/agenda-aniel"
                       class="item__submenu" :class="{'active__submenu' : actualSubMenu == 'AgeIntegratorSchedule'}" @click="actualSubMenu = 'AgeIntegratorSchedule'">
                     <p>Agenda Aniel</p>
                   </router-link>
                 </ul>
               </transition>
             </li>
           </ul>
         </nav>
       </div>
       <div class="wrapper__menu" style="margin-top: auto">
         <span class="title__wrapper">Conta</span>
         <nav>
           <ul class="list__menu">
             <li class="item__menu">
               <router-link to="/perfil" :class="{'active__link' : actualMenu == 'account'}" @click="actualMenu = 'account'">
                 <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm1.75,14.22c-.568-.146-1.157-.22-1.75-.22-3.86,0-7,3.14-7,7,0,.552-.448,1-1,1s-1-.448-1-1c0-4.962,4.038-9,9-9,.762,0,1.519,.095,2.25,.284,.535,.138,.856,.683,.719,1.218-.137,.535-.68,.856-1.218,.719Zm12.371-4.341c-1.134-1.134-3.11-1.134-4.243,0l-6.707,6.707c-.755,.755-1.172,1.76-1.172,2.829v1.586c0,.552,.448,1,1,1h1.586c1.069,0,2.073-.417,2.828-1.172l6.707-6.707c.567-.567,.879-1.32,.879-2.122s-.312-1.555-.878-2.121Zm-1.415,2.828l-6.708,6.707c-.377,.378-.879,.586-1.414,.586h-.586v-.586c0-.534,.208-1.036,.586-1.414l6.708-6.707c.377-.378,1.036-.378,1.414,0,.189,.188,.293,.439,.293,.707s-.104,.518-.293,.707Z"/></svg>
                 <span>Perfil</span>
               </router-link>
             </li>
             <li class="item__menu">
               <router-link to="/" @click="authStore.logout">
                 <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.829,9.172,18.95,5.293a1,1,0,0,0-1.414,1.414l3.879,3.879a2.057,2.057,0,0,1,.3.39c-.015,0-.027-.008-.042-.008h0L5.989,11a1,1,0,0,0,0,2h0l15.678-.032c.028,0,.051-.014.078-.016a2,2,0,0,1-.334.462l-3.879,3.879a1,1,0,1,0,1.414,1.414l3.879-3.879a4,4,0,0,0,0-5.656Z"/><path d="M7,22H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7A1,1,0,0,0,7,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7a1,1,0,0,0,0-2Z"/></svg>
                 <span>Sair</span>
               </router-link>
             </li>
           </ul>
         </nav>
       </div>

     </div>

   </div>

  </div>
</template>

<style scoped lang="scss">
.menu__container {
  grid-area: menu;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 3vh 0;
  position: relative;
  transition: all .3s ease-in-out;
  @include flex(column, flex-start, initial);
  box-shadow: $global-box-shadow;

  button {
    border: none;
    outline: none;
    position: absolute;
    top: 10%;
    right: -1.3vw;
    z-index: 3;
    background-color: transparent;

    svg {
      width: 1.5vw;
      height: 1.5vw;
      fill: #42A6DF;
      cursor: pointer;
      transition: opacity .3s ease-in-out;
      &:hover {
        opacity: .9;
      }
    }
  }

  .content__menu {
    @include flex(column, flex-start, initial);
    @include container(100%, 100%);
    overflow: hidden;
    padding: 1vh 0;

    .header__menu {
      @include flex(row, flex-start, center);
      height: 6vh;
      padding: 0 1vw;

      .logo__header {
        @include flex(row, flex-start, center, .5vw);

        img {
          width: 3vw;
          height: auto;
          transition: width .3s ease-in-out;
        }

        h1 {
          font-size: 2.4rem;
          font-weight: 500;
          color: #333;
          transition: opacity .3s ease-in-out;
        }
      }


    }

    .items__menu {
      padding: 3vh 1vw;
      height: 100%;
      @include flex(column, flex-start, intial, 1vh);

      .title__wrapper {
        font-size: 1.2rem;
        font-weight: 500;
        color: #535353;
        margin-bottom: 2vh;

      }

      nav {
        .list__menu {
          @include flex(column, flex-start, initial);
          list-style-type: none;
          padding: 0;

          .item__menu {
            padding: .5vh .2vw;

            a {
              background-color: #ffffff;
              width: 100%;
              padding: 7px 7px;
              border-radius: 5px;
              @include flex(row, flex-start, center, .5vw);
              position: relative;
              transition: background-color .3s ease-in-out, box-shadow .3s ease-in-out;

              .active__item {
                width: 30px;
                height: 45px;
                background-color: transparent;
                position: absolute;
                top: -17%;
                border-radius: 50%;
                animation: appears-selected .4s ease-in-out forwards;
              }

              @keyframes appears-selected {
                from {
                  left: -300%;
                }
                to {
                  left: -30%;
                }
              }

              svg {
                width: 1.4rem;
                height: auto;
                fill: #222;
              }

              span {
                font-size: 1.2rem;
                color: #222;
                font-weight: 500;
              }

              &:hover {
                background-color: #EEEEEE;
                box-shadow: $global-box-shadow;
              }
            }

            .active__link {
              background-color: #EEEEEE;
              box-shadow: $global-box-shadow;

              .active__item {
                animation: active__item__animation .3s ease-in-out forwards;
              }

              @keyframes active__item__animation {
                from {
                  left: -30%;
                }
                to {
                  left: -24%;
                }
              }

              &:hover {
                background-color: #e7e7e7;
              }
            }

            .active__group {
              background-color: #EEEEEE;
              box-shadow: $global-box-shadow;
              border-radius: 5px;

              &:hover {
                background-color: #e7e7e7;
              }
            }

            .title__submenu {
              width: 100%;
              padding: 7px 7px;
              @include flex(row, flex-start, center, .5vw);
              transition: all .3s ease-in-out;

              span {
                font-size: 1.2rem;
                color: #222;
                font-weight: 500;
              }

              svg {
                width: 1.4rem;
                height: auto;
                fill: #222;
              }

              svg:last-child {
                margin-left: auto;
                cursor: pointer;
                width: 1.6rem;
              }

            }

            .list__submenu {
              list-style-type: none;
              padding: 0;
              margin-left: 1vw;
              position: relative;


              .item__submenu {
                padding: 1vh 0 1vh 1.5vw;
                border-bottom: 1px solid transparent; /* Opcional, se você quiser manter um guia de borda */
                border-radius: 10px;
                font-size: 1.2rem;
                color: #666;
                font-weight: 400;
                position: relative;

                &:hover {
                  background-color: transparent;
                }

                &::before {
                  content: ""; /* Necessário para gerar o pseudo-elemento */
                  position: absolute;
                  top: 40%; /* Ajuste conforme necessário */
                  left: 5%; /* Ajuste conforme necessário */
                  width: 8px; /* Define a largura da bola */
                  height: 8px; /* Define a altura da bola para ser igual à largura */
                  border: 1px solid #cccccc;
                  border-radius: 50%; /* Torna o pseudo-elemento uma bola */
                  background-color: #cccccc; /* Cor de fundo da bola */
                }


                p {
                  cursor: pointer;
                  border-radius: 5px;
                  padding: 5px 5px;
                  transition: all .3s ease-in-out;
                  width: 100%;

                  &:hover {
                    background-color: #EEEEEE;
                    box-shadow: $global-box-shadow;
                  }

                }


              }



              .active__submenu {
                p {
                  background-color: #EEEEEE;
                  box-shadow: $global-box-shadow;

                  &:hover {
                    background-color: #e7e7e7;
                  }
                }
              }

            }
          }
        }
      }
    }
  }

  .alternate_menu__header {
    position: absolute;
    top: 5vh;
    right: -1vw;

    button {
      border: none;
      outline: none;
      border-radius: 50%;
      background-color: #f5f5f5;
      width: 2vw;
      height: 2vw;
      cursor: pointer;
    }
  }
}

.retract {

  h1, span, .active__item, .title__submenu > svg:last-child {
    opacity: 0;
    display: none;
  }

  a, .title__submenu {
    justify-content: center !important;
  }

  .title__submenu {
    &:hover {
      background-color: #EEEEEE;
      box-shadow: $global-box-shadow;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .list__submenu {
    display: none;
  }



}

@keyframes retract-menu {
  from {
    opacity: 1;
    display: block;
  }
  to {
    opacity: 0;
    display: none;
  }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>