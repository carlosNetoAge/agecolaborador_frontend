<script setup lang="ts">

import {infoPage} from "@/stores/counter";
import report_generic from '@/assets/img/app/ageReport/report_generic.png';
import report_base from '@/assets/img/app/ageReport/report_base.png';
import report_financial from '@/assets/img/app/ageReport/report_financial.png';
import favorite from '@/assets/img/app/ageReport/favorite.svg';
import noFavorite from '@/assets/img/app/ageReport/no_favorite.svg';
import {computed, ref} from "vue";
import UserManagament from "@/components/icons/UserManagament.vue";
import ReportAdd from "@/components/icons/ReportAdd.vue";
import ReportManagment from "@/components/icons/ReportManagment.vue";
import SearchLoupe from "@/components/icons/SearchLoupe.vue";
import excelIcon from '@/assets/img/app/ageReport/excel.png'
import powerBiIcon from '@/assets/img/app/ageReport/powerbi.svg'
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";


const preloadImages = () => {
  const images = [
    excelIcon,
    powerBiIcon
  ];
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

const info = infoPage();

info.setInfoPage({
  title: 'Relatórios',
  subtitle: 'Todos os relatórios disponíveis para visualização, download ou envio.',
});


const reports  = ref([]);

const favorites = ref(false);
const reportsFiltered = ref([]);

const showFavorites = () => {

  favorites.value = !favorites.value;

  if(favorites.value){
    reports.value = reports.value.filter((report) => report.fav);
  } else{
    reports.value = reports.value.filter((report) => !report.fav);
  }

}

const search = ref('');


const dataFiltered = computed(() => {
  return reports.value
      .filter((report) => {
        return report.nome.toLowerCase().includes(search.value.toLowerCase());
      })
      .sort((a, b) => b.fav - a.fav);
});

const statusRequest = ref(false);

const getReports = () => {
  AXIOS({
    url: 'agereport/reports',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookie.get('token')}`
    },
  }).then((response) => {
    reports.value = response.data;
    statusRequest.value = true;
  }).catch((error) => {
    console.log(error);
  });
}

const hashReport = (report) => {
  const dataHash = {
    reportId: report.id,
    reportType: report.tipo
  }
  return btoa(JSON.stringify(dataHash));

}

preloadImages();
getReports();


</script>

<template>
  <div class="reports">
    <div class="options">
      <div class="search">
        <SearchLoupe/>
        <input type="text" v-model="search" placeholder="Procure pelo nome do relatório...">

      </div>
      <div class="actions">
<!--        <router-link to="/ageReport/relatorio/novo" >-->
<!--          <ReportAdd/>-->
<!--          <div class="tooltip">-->
<!--            <span>Novo relatório</span>-->
<!--          </div>-->
<!--        </router-link>-->
<!--&lt;!&ndash;        <RouterLink to="dayjs">&ndash;&gt;-->
<!--&lt;!&ndash;          <ReportManagment/>&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="tooltip">&ndash;&gt;-->
<!--&lt;!&ndash;            <span>Gerenciar relatórios</span>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </RouterLink>&ndash;&gt;-->
<!--        <router-link to="/ageReport/gerenciamento/permissoes" >-->
<!--          <UserManagament/>-->
<!--          <div class="tooltip">-->
<!--            <span>Gerenciar permissões</span>-->
<!--          </div>-->
<!--        </router-link>-->
      </div>
    </div>
    <div v-if="statusRequest" class="report" v-for="(report, index) in dataFiltered" :key="index"
         :style="{animationDelay: index * .1+'s'}">
      <div class="favorite">
        <img @click="report.fav = !report.fav" v-if="report.fav" :src="favorite" alt="favorite" />
        <img @click="report.fav = !report.fav" v-else :src="noFavorite" alt="noFavorite" />
      </div>
      <router-link :to="`relatorio/${hashReport(report)}`">
        <img class="icon-report" v-if="report.tipo == 'relatorio'" :src="excelIcon" alt="report" />
        <img class="icon-report" v-if="report.tipo == 'dashboard'" :src="powerBiIcon" alt="report" />
        <div class="header">
          <h3>{{report.nome}}</h3>
        </div>
        <p>{{report.descricao}}...</p>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">

.reports {

  @include flex(row, flex-start, initial, 1vw);
  flex-wrap: wrap;
  padding-bottom: 4vh;
  opacity: 0;
  animation: appears 0.5s ease-in-out forwards;


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

  .report {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    cursor: pointer;
    position: relative;
    opacity: 0;
    animation: up-items 0.5s ease-in-out forwards;
    width: calc((100% / 3) - .7vw);
    padding: 2vh 1vw;
    margin: 0;

    a {
      height: 100%;
      @include flex(column, space-between, initial);

    }

    @keyframes up-items {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &:hover {
      box-shadow: rgba(67, 71, 85, 0.47) 0px 0px 0.25em, rgba(90, 125, 188, 0.1) 0px 0.25em 1em;
    }

    .favorite {
      position: absolute;
      top: 0;
      right: 0;
      padding-right: .5vw;
      z-index: 99;
      @include flex(row, flex-start, center, 1vw);

      img {
        width: 1vw;
        height: auto;
        cursor: pointer;

        &:hover {
          opacity: .9;
        }
      }
    }

    .header {
      padding: 0 1.5vw 1vh 1.5vw;

    }

    .icon-report {
      width: 1.5vw;
      height: auto;
      position: absolute;
      top: 1vh;
      left: .5vw;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      color: #333333;
    }

    p {
      font-size: 1.1rem;
      font-weight: 400;
      color: #666666;

    }
  }
}
</style>