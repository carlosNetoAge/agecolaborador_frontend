<script setup lang="ts">

import SearchLoupe from "@/components/icons/SearchLoupe.vue";
import noData from '@/assets/img/app/ageReport/nodata.svg';
import userImg from '@/assets/img/app/ageReport/user.png';
import excel from '@/assets/img/app/ageReport/excel.png';
import bi from '@/assets/img/app/ageReport/powerbi.svg';


import {computed, onMounted, ref} from "vue";
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";

const page = ref('users');
const userSelected = ref({});

const search = ref('');

const users = ref([]);
const firstConsult = ref(true);
const message = 'Utilize o campo de busca para encontrar usuários.';

const userFiltered = computed(() => {
  return users.value
      .filter((user) => {
        return user.name.toLowerCase().includes(search.value.toLowerCase());
      });
});

const getUsers = () => {
  AXIOS({
    method: 'get',
    url: '/agereport/management/users/byName/'+search.value,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    }
  }).then((response) => {
    firstConsult.value = false;

    response.data.map((user) => {
      if (!users.value.some((u) => u.id === user.id)) {
        users.value.push(user);
      }
    });

  }).catch((error) => {
    console.log(error);
  });
}


const reports = ref([]);
const searchReport = ref('');

const getReports = () => {
  AXIOS({
    method: 'get',
    url: '/agereport/management/users/roles/reports',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    }
  }).then((response) => {
    reports.value = response.data;
  }).catch((error) => {
    console.log(error);
  });
}


const reportFiltered = computed(() => {
  return reports.value
      .filter((report) => {
        return report.nome.toLowerCase().includes(searchReport.value.toLowerCase());
      });
});


const verifyRole = (report) => {

  const releasedReports =
      userSelected.value?.age_report_roles?.relatorios_liberados
          ? JSON.parse(userSelected.value.age_report_roles.relatorios_liberados)
          : [];


  if(releasedReports.length > 0) {
    return releasedReports.some((r) => {
      return r == report.id;
    });
  }
}

const alterRole = (report) => {

  const command = verifyRole(report) ? 'remove' : 'insert';


  AXIOS({
    method: 'post',
    url: '/agereport/management/users/roles',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    },
    data: {
      command: command,
      userId: userSelected.value.id,
      level: userSelected.age_report_roles ? userSelected.age_report_roles.nivel : 'usuario',
      report: [report.id]
    }
  }).then((response) => {

    if (!userSelected.value.age_report_roles) {
      userSelected.value.age_report_roles = { relatorios_liberados: '[]' };
    }

    let relatoriosLiberados = JSON.parse(userSelected.value.age_report_roles.relatorios_liberados);

    if (command === 'insert') {
      relatoriosLiberados.push(report.id);
    } else {
      relatoriosLiberados = relatoriosLiberados.filter((r) => r !== report.id);
    }

    userSelected.value.age_report_roles.relatorios_liberados = JSON.stringify(relatoriosLiberados);

  }).catch((error) => {
    console.log(error);
  });
}

</script>

<template>
  <div class="users-role" v-if="page == 'users'">
    <div class="options">
      <div class="search">
        <SearchLoupe/>
        <input type="text" v-model="search" @keyup.enter="getUsers()" placeholder="Procure pelo nome do usuário...">

      </div>

    </div>

    <div class="users">
      <div class="user" v-for="(user, index) in userFiltered" :key="index">
        <div class="info">
          <img :src="userImg" alt="">
          <span>{{ user.name }}</span>
          <span>{{ user.login }}</span>
        </div>
        <div class="actions">
          <svg @click="[page = 'release', userSelected = user, getReports()]" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M9,12c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm1.75,14.22c-.568-.146-1.157-.22-1.75-.22-3.86,0-7,3.14-7,7,0,.552-.448,1-1,1s-1-.448-1-1c0-4.962,4.038-9,9-9,.762,0,1.519,.095,2.25,.284,.535,.138,.856,.683,.719,1.218-.137,.535-.68,.856-1.218,.719Zm12.371-4.341c-1.134-1.134-3.11-1.134-4.243,0l-6.707,6.707c-.755,.755-1.172,1.76-1.172,2.829v1.586c0,.552,.448,1,1,1h1.586c1.069,0,2.073-.417,2.828-1.172l6.707-6.707c.567-.567,.879-1.32,.879-2.122s-.312-1.555-.878-2.121Zm-1.415,2.828l-6.708,6.707c-.377,.378-.879,.586-1.414,.586h-.586v-.586c0-.534,.208-1.036,.586-1.414l6.708-6.707c.377-.378,1.036-.378,1.414,0,.189,.188,.293,.439,.293,.707s-.104,.518-.293,.707Z"/></svg>

        </div>
      </div>
    </div>

    <div class="not_found" v-if="users.length == 0">
      <h1>{{ firstConsult ? message : 'Nenhum usuário encontrado.' }}</h1>
      <img :src="noData" alt="">
    </div>

  </div>
  <div class="release_reports" v-if="page == 'release'">
    <button class="back" @click="page = 'users'">
      Voltar
    </button>
    <div class="user_info">
      <img :src="userImg" alt="">
      <div class="info">
        <p>{{userSelected.name}}</p>
        <p>{{userSelected.login}}</p>
      </div>
      <span>
        {{ userSelected.age_report_roles?.nivel ? userSelected.age_report_roles.nivel : 'Usuário'}}
      </span>
    </div>

    <div class="options">
      <div class="search">
        <SearchLoupe/>
        <input type="text" v-model="searchReport" placeholder="Procure pelo nome do relatório...">

      </div>

    </div>

    <div class="reports">
      <div class="report" v-for="(report, index) in reportFiltered" :key="index">
        <img :src="excel" alt="" v-if="report.tipo == 'relatorio'">
        <img :src="bi" alt="" v-if="report.tipo == 'dashboard'">
        <span>{{report.nome}}</span>

        <svg @click="alterRole(report)"
            :class="{'active' : verifyRole(report)}" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm6.2,10.512l-4.426,4.345c-.783.768-1.791,1.151-2.8,1.151-.998,0-1.996-.376-2.776-1.129l-1.899-1.867c-.394-.387-.399-1.02-.012-1.414.386-.395,1.021-.4,1.414-.012l1.893,1.861c.776.75,2.001.746,2.781-.018l4.425-4.344c.393-.388,1.024-.381,1.414.013.387.394.381,1.027-.014,1.414Z"/></svg>


      </div>
    </div>
  </div>


</template>

<style scoped lang="scss">

.back {
  cursor: pointer;
  padding: 7px 15px;
  position: relative;
  border-radius: 10px;
  margin-right: auto;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #52ADE2;
  color: #fff;
  &:hover {
    opacity: .9;
  }
}

.options {
  width: calc(100% );
  @include flex(row, flex-start, center, 1vw);

  .search {
    @include flex(row, flex-start, center, .5vw);
    background-color: #fff;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    border-radius: 5px;
    padding: 2px 1vw;
    width: 100%;
    height: 100%;

    svg {
      width: 1vw;
      height: auto;
      fill: #747A87;
    }

    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 5px;
      font-size: 1.4rem;
      padding: 10px 0px;
      outline: none;
      font-weight: 400;
      color: #333333;

    }
  }

  .actions {
    @include flex(row, flex-start, center);


    a {
      cursor: pointer;
      padding: 7px 10px;
      border: 1px solid transparent;
      transition: background-color ease-in-out .3s;
      position: relative;
      border-radius: 5px;

      &:hover .tooltip {
        display: block;
      }

      &:hover {
        background-color: #fff;

        svg {
          fill: #333333;
        }
      }


      .tooltip {
        display: none;
        position: absolute;
        top: 120%;
        left: 50%;
        background-color: #333;
        color: #fff;
        padding: 5px 15px;
        border-radius: 5px;
        font-size: 1.2rem;
        z-index: 99;
        white-space: nowrap;
        animation: appears-tooltip-down-to-up 0.2s ease-in-out forwards;
      }

      svg {
        width: 1.5vw;
        height: auto;
        fill: #747A87;
        transition: fill ease-in-out .3s;

      }

      &:nth-child(1) {
        border-left: none;
      }

    }

  }
}

.users {
  margin-top: 2vh;
  width: 100%;
  @include flex(column, flex-start, initial, 1.5vh);
  max-height: 80vh;
  overflow-y: auto;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #333333;
    padding: 1.5vw 2vw;
    width: 100%;
    border-bottom: 1px solid #E5E5E5;
  }

  .user {
    width: 100%;
    @include flex(row, space-between, center, 1vw);
    padding: 2vh 2vw;
    border-bottom: 1px solid #E5E5E5;
    background-color: #fff;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    border-radius: 5px;

    .info {
      @include flex(row, flex-start, center, 1vw);

      img {
        width: 2vw;
        height: auto;
        border-radius: 50%;
      }

      span:nth-child(2) {
        font-size: 1.4rem;
        font-weight: 500;
        color: #333333;
        user-select: text;
      }

      span:nth-child(3) {
        font-size: 1.2rem;
        font-weight: 500;
        color: #747A87;
        user-select: text;

      }
    }

    .actions {
      @include flex(row, flex-start, center, 1vw);
      select {
        padding: 5px 10px;
        border: 1px solid #E8EBEE;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: 500;
        color: #333333;
        outline: none;
        background-color: #E8EBEE;
      }

      svg {
        width: 1.5vw;
        height: auto;
        fill: #747A87;
        cursor: pointer;
        transition: fill ease-in-out .2s;

        &:hover {
          fill: #333333;
        }
      }

    }
  }


}

.not_found {
  margin-top: 10vh;
  @include flex(column, center, center, 1vw);
  height: 50vh;
  width: 100%;

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    color: #333333;
  }

  img {
    width: 30%;
    height: auto;
  }
}

.release_reports {
  width: 100%;
  @include flex(column, flex-start, center, 1vw);

  .user_info {
    width: 100%;
    @include flex(row, flex-start, center, 1vw);
    padding: 2vh 2vw;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

    img {
      width: 3vw;
      height: auto;
    }

    .info {
      @include flex(row, flex-start, center, 1vw);
      margin-left: 2vw;

      p {
        font-size: 1.4rem;
        font-weight: 500;
        color: #333333;
      }

      p:nth-child(2) {
        font-size: 1.2rem;
        font-weight: 500;
        color: #747A87;
      }


    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
      color: #333333;
      background-color: #E8EBEE;
      padding: 10px 20px;
      border-radius: 10px;
      margin-left: auto;
    }
  }

  .reports {
    width: 100%;
    @include flex(column, flex-start, center, 1vw);
    margin-top: 2vh;

    .report {
      width: 100%;
      @include flex(row, flex-start, center, 1vh);
      padding: 2vh 2vw;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

      img {
        width: 2vw;
        height: auto;
      }

      span {
        font-size: 1.2rem;
        font-weight: 500;
        color: #333333;
        margin-left: 2vw;
      }

      svg {
        width: 1.5vw;
        height: auto;
        fill: #747A87;
        margin-left: auto;
        cursor: pointer;
        transition: fill ease-in-out .2s;

        &:hover {
          fill: #52ADE2;
        }
      }

      .active {
        fill: #52ADE2;


      }

    }

  }
}

</style>