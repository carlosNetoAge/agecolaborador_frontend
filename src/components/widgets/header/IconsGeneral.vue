<script setup lang="ts">

import {useUserNotification} from "@/stores/counter";
import {computed, ref} from "vue";
import logo from '@/assets/img/company/logo_orange.png';
import excelIcon from '@/assets/img/app/ageReport/excel.png'
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";

const notificationsMng = useUserNotification();

const notifications = ref(notificationsMng.getNotification);

const notificationsStatus = ref(false);

const updateNotifications = (index) => {
  notificationsMng.updateNotification(index);
}

const hasUnreadNotifications = computed(() => {
  const notifications = notificationsMng.getNotification || [];
  return notifications.some((notification) => !notification.read);
});

const getReport = (report) => {
  AXIOS({
    method: 'get',
    url: `/agereport/reports/download/${report.assignment_id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookie.get('token')}`,
    },
    responseType: 'blob',
  }).then((res) => {


    let blob = new Blob([res.data],
        { type: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    let link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = report.name
    link.click()

  })
};

const removeNotifications = () => {
  notificationsMng.clearAllNotifications();
  notifications.value = notificationsMng.getNotification;
}

</script>

<template>
  <div class="icons">
    <div class="icon">
      <svg @click="notificationsMng.activateModal(true)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M23.259,16.2l-2.6-9.371A9.321,9.321,0,0,0,2.576,7.3L.565,16.35A3,3,0,0,0,3.493,20H7.1a5,5,0,0,0,9.8,0h3.47a3,3,0,0,0,2.89-3.8ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm9.165-4.395a.993.993,0,0,1-.8.395H3.493a1,1,0,0,1-.976-1.217l2.011-9.05a7.321,7.321,0,0,1,14.2-.372l2.6,9.371A.993.993,0,0,1,21.165,17.605Z"/></g></svg>
      <div v-if="hasUnreadNotifications" @click="notificationsMng.activateModal(true)" class="alert"></div>
      <div class="tooltip">
        <span>Notificações</span>
      </div>

      <div v-if="notificationsMng.getStatusModal" class="notifications">
        <div class="title">
          <span>Notificações</span>

          <div class="check-notifications" @click="removeNotifications()">
            Remover notificações
          </div>
        </div>
        <div class="body-notifications">
          <div @click="updateNotifications(index)" class="notification" v-for="(notification, index) in notifications" :key="index">
            <div class="content-notification">
             <div class="header">
               <img :src="logo" alt="">
               <div class="description">
                 <span>{{notification.title}}</span>
                 <p>{{notification.message}}</p>
               </div>
               <div v-if="!notification.read" class="read"></div>

             </div>

              <div v-if="notification.command == 'report-download'" class="reports">
                <div class="report">
                  <img :src="excelIcon" alt="">
                  <span>{{notification.report.name}}</span>
                  <button @click="getReport(notification.report)">
                    Download
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
<!--    <div class="icon">-->
<!--      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.018,8.785a3.01,3.01,0,0,0-4.254.2l-3.217,3.535A3.144,3.144,0,0,0,12.857,11H3a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H13.448l9.787-10.985A3.022,3.022,0,0,0,23.018,8.785Zm-1.276,2.9L12.552,22H3a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h9.857a1.142,1.142,0,0,1,.163,2.273l-5.162.737.284,1.98,5.161-.738a3.156,3.156,0,0,0,2.513-2.058l4.427-4.864a1,1,0,0,1,.7-.329,1.029,1.029,0,0,1,.728.262A1.015,1.015,0,0,1,21.742,11.684ZM10.423,9.15,11,9.559l.577-.409C12.03,8.83,16,5.942,16,3.2A3.109,3.109,0,0,0,13,0a3.009,3.009,0,0,0-2,.727A3.009,3.009,0,0,0,9,0,3.109,3.109,0,0,0,6,3.2C6,5.942,9.97,8.83,10.423,9.15ZM9,2a.94.94,0,0,1,1,1h2a.94.94,0,0,1,1-1,1.115,1.115,0,0,1,1,1.2c0,1.074-1.6,2.768-3,3.881-1.24-1-3-2.727-3-3.881A1.115,1.115,0,0,1,9,2Z"/></svg>-->
<!--      <div class="tooltip">-->
<!--        <span>Sugestões</span>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<style scoped lang="scss">

.icons {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1vh 3vw;
  @include flex(row, flex-start, center, .5vw);
  z-index: 99;
  .icon {
    position: relative;
    padding: 7px 10px;
    border-radius: 5px;
    transition: background-color ease-in-out .3s;

    .alert {
      position: absolute;
      bottom: 5px;
      right: 4px;
      width: 15px;
      height: 15px;
      background-color: #F28622;
      border-radius: 50%;
      border: 3px solid #fff;
      z-index: 3;
      cursor: pointer;
      animation: ping 1s ease-in-out infinite;


      &:hover ~ .tooltip {
        display: block;
      }
    }

    @keyframes ping {
      0% {
        transform: scale(.8); /* Estado inicial */
      }
      50% {
        transform: scale(1); /* Expande no meio do ciclo */
      }
      100% {
        transform: scale(.8); /* Volta ao estado original */
      }
    }

    .notifications {
      width: 25vw;
      max-height: 65vh;
      position: absolute;
      background-color: #FFFFFF;
      right: -2vw;
      top: 7vh;
      box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
      border-radius: 10px;
      cursor: default;
      opacity: 0;
      animation: appears-notification 0.3s ease-in-out forwards;
      overflow-y: auto;

      .title {
        @include flex(row, space-between, center);
        padding: 1.5vh 1vw;
        border-bottom: 2px solid #E0E0E090;

        span {
          font-size: 1.5rem;
          font-weight: 500;
          color: #333333;
        }

        .check-notifications {
          font-size: 1rem;
          color: #333333;
          cursor: pointer;
          transition: color ease-in-out .3s;

          &:hover {
            color: #007BFF;
          }
        }
      }

      .body-notifications {
        width: 100%;
        height: 100%;

        .notification {
          position: relative;

          .content-notification {
            padding: 1.5vh 1vw;
            border-bottom: 1px solid #E0E0E090;
            @include flex(column, flex-start, initial, 1vh);

            .header {
              @include flex(row, flex-start, center);
              position: relative;

              img {
                width: 2.5vw;
                height: auto;
                border-radius: 50%;
              }

              .description {
                margin-left: 1vw;
                span {
                  font-size: 1.4rem;
                  font-weight: 500;
                  color: #333333;
                }

                p {
                  font-size: 1.1rem;
                  color: #333333;
                }
              }

              .read {
                position: absolute;
                top: 40%;
                right: 3%;
                width: 12px;
                height: 12px;
                background-color: #F28622;
                border-radius: 50%;
                animation: ping 1s ease-in-out infinite;
                border: 2px solid #E9F3FE;

              }
            }

            .reports {
              margin-top: 1vh;
              width: 100%;

              .report {
                @include flex(row, flex-start, center);
                padding: 2vh 1vw;
                border-radius: 5px;
                background-color: #EBF3FE;

              }

              img {
                width: 2vw;
                height: auto;
              }

              span {
                font-size: 1.1rem;
                color: #333333;
                margin-left: 1vw;
                font-weight: 500;
              }

              button {
                margin-left: auto;
                padding: 5px 10px;
                background-color: #52ADE2;
                color: #fff;
                border-radius: 5px;
                font-weight: 500;
                font-size: 1.2rem;
                cursor: pointer;
                border: 2px solid #FFFFFF;

                &:hover {
                  opacity: .9;
                }
              }
            }

          }


        }
      }


    }

    @keyframes appears-notification {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }


    svg {
      fill: #747A87;
      transition: fill ease-in-out .3s;
      width: 1.5vw;
      height: auto;
      cursor: pointer;
      z-index: 9;

      &:hover + .tooltip {
        display: block;
      }
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




  }
}

</style>