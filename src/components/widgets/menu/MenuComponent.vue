<script setup lang="ts">

import { RouterLink } from "vue-router";

import { stateMenu, useAuthStore } from "@/stores/counter";
import {markRaw, ref} from "vue";

// icons
import HomeIcon from "@/components/widgets/menu/icons/HomeIcon.vue";
import CommissionIcon from "@/components/widgets/menu/icons/CommissionIcon.vue";
import ReportIcon from "@/components/widgets/menu/icons/ReportIcon.vue";
import IntegratorIcon from "@/components/widgets/menu/icons/IntegratorIcon.vue";
import LogoutIcon from "@/components/widgets/menu/icons/LogoutIcon.vue";

const actualMenu = ref('home');
const menuHover = ref('');

const itemsMenu = ref([
  // {
  //   name: 'home',
  //   tooltip: 'Início',
  //   icon: markRaw(HomeIcon),
  //   route: '/inicio'
  // },
  {
    name: 'ageComission',
    tooltip: 'Age Comissiona',
    icon: markRaw(CommissionIcon),
    route: '/ageComissiona/b2b/dashboard/executivo'
  },
  // {
  //   name: 'ageReport',
  //   tooltip: 'Relatórios',
  //   icon: markRaw(ReportIcon),
  //   route: '/ageReport/relatorios'
  // },
  {
    name: 'ageIntegrator',
    tooltip: 'Agenda Aniel',
    icon: markRaw(IntegratorIcon),
    route: '/ageIntegra/agenda-aniel'
  },
  {
    name: 'logout',
    tooltip: 'Sair',
    icon: markRaw(LogoutIcon),
    route: '/'
  },

])


</script>

<template>
  <div class="menu__container retract" :class="{'retract' : stateMenu().status}">
   <div class="content__menu">
     <img src="@/assets/img/company/logo_orange.png" alt="logo" />
     <div class="items__menu">
        <div class="item" v-for="item in itemsMenu" :key="item.name">
          <router-link @mouseleave="menuHover = ''" @mouseover="menuHover = item.name" :class="{'actualMenu': actualMenu == item.name}" :to="item.route" @click="actualMenu = item.name">
            <component :is="item.icon" />
            <div class="tooltip" v-if="menuHover == item.name">
              <span>{{item.tooltip}}</span>
            </div>
          </router-link>
        </div>

     </div>

   </div>

  </div>
</template>

<style scoped lang="scss">
.menu__container {
  width: 4.5%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 0 15px 15px 0;
  padding: 3vh 0;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  @include flex(column, flex-start, initial);
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

  .content__menu {
    @include flex(column, flex-start, initial, 2vh);
    @include container(100%, 100%);

    img {
      width: 2.5vw;
      height: auto;
      margin: 0 auto;
      display: block;
      transition: width .3s ease-in-out;
    }

    .items__menu {
      @include flex(column, flex-start, initial, .5vh);
      height: 90%;

      .item  {
        @include flex(row, center, center);
        a {
          display: inline-flex;
          margin: 0 auto;
          padding: 7px;
          border-radius: 8px;
          transition: background-color .3s ease-in-out;
          position: relative;
          border: 1px solid transparent;


          svg {
            width: 1.2vw;
            height: auto;
            fill: #747A87;
          }


          .tooltip {
            position: absolute;
            top: 5%;
            left: calc(100% + 15px);
            background-color: #333;
            color: #fff;
            padding: 5px 15px;
            border-radius: 5px;
            font-size: 1.2rem;
            white-space: nowrap;
            opacity: 0;
            animation: appears-tooltip-left-to-right .2s ease-in-out forwards;
            box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;


          }
        }

        .actualMenu {
          border: 1px solid #52ADE2;
          background-color: #EBF3FE;

          svg {
            fill: #52ADE2;
          }
        }
      }

      .item:nth-last-child(1) {
        margin-top: auto;
      }

    }
  }

}

@media (max-width: 1400px) {
  .menu__container {
    width: 5%;
    border-radius: 0 20px 20px 0;
    padding: 4vh 0;


    .content__menu {

      img {
        width: 2.3vw;
      }

      .items__menu {

        .item {
          a {
            svg {
              width: 1.3vw;
            }
          }
        }
      }
    }
  }
}




</style>