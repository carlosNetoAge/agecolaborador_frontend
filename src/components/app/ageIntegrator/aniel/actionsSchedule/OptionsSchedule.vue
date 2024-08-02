<script setup lang="ts">

import calendar from '@/assets/img/app/ageIntegrator/aniel/schedule.png'
import approval from '@/assets/img/app/ageIntegrator/aniel/approval.png'
import preApproval from '@/assets/img/app/ageIntegrator/aniel/pre_approval.png'
import register from '@/assets/img/app/ageIntegrator/aniel/register.png'
import starFull from '@/assets/img/app/ageIntegrator/aniel/star_full.png'
import star from '@/assets/img/app/ageIntegrator/aniel/star.png'
import confirm from '@/assets/img/app/ageIntegrator/aniel/confirm.png'
import pending from '@/assets/img/app/ageIntegrator/aniel/not_sending.png'
import service from '@/assets/img/app/ageIntegrator/aniel/service.png'
import protocol from '@/assets/img/app/ageIntegrator/aniel/protocol.png'
import sendConfirm from '@/assets/img/app/ageIntegrator/aniel/send_confirm.png'
import carDisplacement from '@/assets/img/app/ageIntegrator/aniel/car_displacement.png'
import identify from '@/assets/img/app/ageIntegrator/aniel/identify.png'
import cellphone from '@/assets/img/app/ageIntegrator/aniel/cellphone.png'
import email from '@/assets/img/app/ageIntegrator/aniel/email.png'
import contract from '@/assets/img/app/ageIntegrator/aniel/contract.png'
import address from '@/assets/img/app/ageIntegrator/aniel/address.png'
import numberPlate from '@/assets/img/app/ageIntegrator/aniel/number_plate.png'
import neighborhood from '@/assets/img/app/ageIntegrator/aniel/neighborhood.png'
import city from '@/assets/img/app/ageIntegrator/aniel/city.png'
import copy from '@/assets/img/app/ageIntegrator/aniel/copy.png'

import {defineEmits} from "vue";

const emit = defineEmits(['closeModal']);


const close = () => {
  emit('closeModal');
}

const copyToClipboard = () => {
  const formattedItem = `*Nome:* Luana Silva de Souza,\n*Celular:* (61) 99999-9999,\n*Contrato:* 10293,\n*Endereço:* Qn 7D conjunto 30, casa 209, Planaltina, Brasília/DF,\n*Serviço:* Plano Combo ativação,\n*Protocolo:* 192812,\n*Agendamento:* 01/08/2024 08:00`
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(formattedItem).then(() => {
    }).catch(err => {
      console.error('Erro ao copiar para a área de transferência: ', err)
    })
  } else {
    // Método alternativo para copiar para a área de transferência
    const textArea = document.createElement('textarea')
    textArea.value = formattedItem
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
    } catch (err) {
      console.error('Erro ao copiar para a área de transferência: ', err)
    }
    document.body.removeChild(textArea)
  }
}

</script>

<template>
  <div class="modal">
    <div class="card">
      <div class="close__btn">
        <svg
            @click="close"
            xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.707,14.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"/></svg>
      </div>
      <h3>Informações sobre a ordem de serviço - <b>EM DESENVOLVIMENTO</b></h3>

      <div class="content__info">
        <div class="info">
          <table>
            <tr>
              <th>
                Nome
              </th>
              <th>Celular</th>
              <th>E-mail</th>
              <th>Contrato</th>
            </tr>
            <tr>
              <td>
                <div class="flex">
                  <img :src="identify" alt="calendar">
                  <span>Luana Silva de Souza</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="cellphone" alt="calendar">
                  <span>(61) 99999-9999</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="email" alt="calendar">
                  <span>
                    luanasilva@agelelecom.com.br
                  </span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="contract" alt="contrato">
                  <span>182712</span>
                </div>
              </td>
            </tr>
            <tr>
              <th>Endereço</th>
              <th>Número</th>
              <th>Bairro</th>
              <th>Cidade</th>
            </tr>
            <tr>
              <td>
                <div class="flex">
                  <img :src="address" alt="endereço">
                  <span>Qn 7d conjunto 30 quadra 2</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="numberPlate" alt="número">
                  <span>Casa 209</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="neighborhood" alt="número">
                  <span>Planaltina</span>
                </div>
              </td>
              <td><div class="flex">
                <img :src="city" alt="número">
                <span>Brasília - DF</span>
              </div></td>
            </tr>
          </table>
        </div>
        <div class="info_service">
          <table>
            <tr>
              <th>Serviço</th>
              <th>Sub Serviço</th>
              <th>Protocolo</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>
                <div class="flex">
                  <img :src="service" alt="calendar">
                  <span>Ativação</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="service" alt="calendar">
                  <span>Plano combo ativação</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="protocol" alt="calendar">
                  <span>182712</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="carDisplacement" alt="calendar">
                  <span>OS em deslocamento</span>
                </div>
              </td>
            </tr>
            <tr>
              <th>Agendamento</th>
              <th>Atendimento</th>
              <th>Deslocamento</th>
              <th>Nota do atendimento</th>
            </tr>
            <tr>
              <td>
                <div class="flex">
                  <img :src="calendar" alt="calendar">
                  <span>01/08/2024 08:00</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="confirm" alt="calendar">
                  <span>Confirmado</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="pending" alt="calendar">
                  <span>Pendente</span>
                </div>
              </td>
              <td>
                  <div class="flex">
                    <img :src="starFull" alt="star">
                    <img :src="starFull" alt="star">
                    <img :src="starFull" alt="star">
                    <img :src="star" alt="star">
                    <img :src="star" alt="star">
                  </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="actions">
          <h4>Ações disponíveis</h4>

          <div class="buttons">
            <button @click="copyToClipboard">
              <img :src="sendConfirm" alt="enviar confirmação">
              <span>Enviar confirmação</span>
            </button>
            <button>
              <img :src="approval" alt="aprovar">
              <span>Aprovar</span>
            </button>
            <button>
              <img :src="preApproval" alt="pré aprovar">
              <span>Pré aprovar</span>
            </button>
            <button>
              <img :src="calendar" alt="reagendar">
              <span>Reagendar</span>
            </button>
            <button @click="copyToClipboard">
              <img :src="copy" alt="copiar">
              <span>Copiar informações</span>
            </button>
            <button>
              <img :src="register" alt="histórico">
              <span>Histórico</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">

.modal {
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  @include flex(row, center, center);

  .card {
    width: 80vw;
    height: 90vh;
    background-color: #E9F3FE;
    border-radius: 10px;

    .close__btn {
      width: 100%;
      @include flex(row, flex-end, center, 0);
      padding: 10px;
      svg {
        width: 25px;
        height: auto;
        fill: #F23E2F;
        cursor: pointer;
        transition: fill ease-in-out .2s;
        &:hover {
          opacity: .9;
        }
      }
    }

    h3 {
      font-size: 2rem;
      color: #333;
      text-align: center;
      font-weight: 500;

      b {
        font-weight: 600;
        color: #F15043;
      }
    }

    .content__info {
      display: grid;
      grid-template-columns: calc(80% - 1vw) 20%;
      grid-template-rows: 35% 35% 30%;
      grid-template-areas: 'info actions'
                            'info2 actions';
      width: 100%;
      padding: 2vh 2vw;
      gap: 2vh;
      height: 80%;

      .info {
        height: 100%;
        padding: 20px;
        max-height: 100%;
        border-radius: 10px;
        background-color: #fff;
        grid-area: info;
        position: relative;

        table {
          width: 100%;
          border-collapse: collapse;

          tr {
            width: 100%;
          }

          th {
            background-color: #F9F9FB;
            color: #333;
            padding: 10px;
            text-align: left;
            font-size: 1.2rem;
            font-weight: 500;
            width: calc(100% /4);

          }

          td {
            padding: 10px;
            font-size: 1.2rem;
            text-align: left;
            width: calc(100% /4);
            font-weight: 600;

          }

          .flex {
            @include flex(row, flex-start, center, .5vw);

            span {
              user-select: text;
            }

            img {
              width: 1.2vw;
              height: auto;
            }
          }

        }

        .copy {
          position: absolute;
          top: -3vh;
          left: -1vw;
          border: none;
          cursor: pointer;
          background-color: #F9F9FB;
          padding: 10px;
          border-radius: 50%;

          img {
            width: 1.5vw;
            height: auto;
          }
        }
      }

      .info_service {
        height: 100%;
        padding: 20px;
        max-height: 100%;
        border-radius: 10px;
        background-color: #fff;
        grid-area: info2;

        table {
          width: 100%;
          border-collapse: collapse;

          tr {
            width: 100%;
          }

          th {
            background-color: #F9F9FB;
            color: #666;
            padding: 10px;
            text-align: left;
            font-size: 1.2rem;
            font-weight: 500;
            width: calc(100% /4);
          }

          td {
            padding: 10px;
            font-size: 1.2rem;
            text-align: left;
            user-select: text;
            font-weight: 600;
            width: calc(100% /4);

          }

          .flex {
            @include flex(row, flex-start, center, .5vw);

            span {
              user-select: text;
            }

            img {
              width: 1.2vw;
              height: auto;
            }
          }

        }
      }

      .actions {
        height: 100%;
        background-color: #fff;
        border-radius: 10px;
        grid-area: actions;
        padding: 1vh 1vw;

        h4 {
          font-size: 1.4rem;
          text-align: center;
          font-weight: 500;
          color: #333;
        }

        .buttons {
          @include flex(column, flex-start, center, 1.5vh);
          padding: 2vh 0;
          button {
            @include flex(row, flex-start, center, 1vw);
            width: 100%;
            padding: 10px 10px 10px 15px;
            border: 1px solid #cccccc70;
            color: #333;
            font-weight: 500;
            border-radius: 10px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background-color ease-in-out .2s;
            &:hover {
              background-color: #cccccc20;
            }

            img {
              width: 1vw;
              height: auto;
            }
          }
        }
      }

    }
  }
}

</style>