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
import noInfo from '@/assets/img/app/ageIntegrator/aniel/pending.png'
import danger from '@/assets/img/app/ageIntegrator/aniel/danger.png'

import {defineEmits, ref} from "vue";
import {AXIOS} from "@api/AXIOS";
import Cookie from "js-cookie";

const emit = defineEmits(['closeModal']);
const props = defineProps<{
  osInfo: object,
  permissions: object
}>();

const os = ref(props.osInfo);
const dataOs = ref({})
const permissions = ref(props.permissions)


const buttons = ref({
  sendConfirm: false,
  approval: false,
  preApproval: false,
  reschedule: false,
  copy: false,
  register: false
})


const close = () => {
  emit('closeModal');
}

const getData = () => {
  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-order/data',
    method: 'get',
    headers: {
      'Authorization': 'Bearer '+Cookie.get('token')
    },
    params: {
      protocol: os.value.protocolo
    }
  }).then((res) => {
    dataOs.value = res.data
    buttons.value.sendConfirm = verifyOrderConfirm()
    buttons.value.approval = verifyOrderToApprove()
    buttons.value.preApproval = verifyOrderToPreApprove()
  }).catch((err) => {
    console.error(err)
  })
}

getData();

const copyToClipboard = (data: object) => {
  const formattedItem = `*Nome:* ${data.cliente_nome},\n*Celular:* ${data.celular_1},\n*Contrato:* ${data.contrato_id},\n*Endereço:* ${data.endereco}, ${data.numero}, ${data.area_despacho}, ${data.cidade}/DF,\n*Serviço:* ${data.sub_servico},\n*Protocolo:* ${data.protocolo},\n*Agendamento:* ${formatDateTime(data.data_agendamento)}`
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

const formatDateTime = (dateTime: any) => {
  // Cria um objeto Date a partir da string
  const date = new Date(dateTime);

  // Obtém os componentes da data e hora
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() retorna o mês baseado em zero
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Formata a data e hora
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

const verifyStatusConfirm = (send: string) => {
  switch (send) {
    case 'Confirmado':
      return {
        src: confirm,
        alt: 'confirmado',
        text: 'Confirmado'
      };
    case 'Pendente':
      return {
        src: pending,
        alt: 'pendente',
        text: 'Pendente'
      };
    case 'Atendente':
      return {
        src: confirm,
        alt: 'Confirmado',
        text: 'Confirmado'
      };
    default:
      return {
        src: noInfo,
        alt: 'não enviado',
        text: 'Não enviado'
      };
  }
};

const verifyStatusOrder = (status: string) => {
  const statusMap = {
    'Fechada Produtiva': confirm,
    'Fechada Improdutiva': danger,
    'OS em Deslocamento': carDisplacement,
    'Transbordo da capacidade': danger,
    'Agenda fechada': danger,
    'Fora do período': danger
  };

  return statusMap[status] || noInfo;
};

const verifyOrderToApprove = () => {
  const approvalStatuses = [
    'Transbordo da capacidade',
    'Agenda fechada',
    'Fora do período'
  ];

  const statusTypes = approvalStatuses.includes(dataOs.value.status);
  const permission = permissions.value.approval

  return statusTypes && permission

};

const verifyOrderToPreApprove = () => {
  const approvalStatuses = [
    'Transbordo da capacidade',
    'Agenda fechada',
    'Fora do período'
  ];

  const statusTypes = approvalStatuses.includes(dataOs.value.status);
  const permission = permissions.value.preApproval
  console.log(statusTypes, permissions.value)

  return statusTypes && permission

};

const verifyOrderReschedule = (status: string) => {
  const statusTypes = [
    'OS em Deslocamento',
    'Atendimento Iniciado',
    'Fora do período',
    'Transbordo da capacidade',
    'Agenda fechada',
    'Aberta Aguardando Responsável',
    'Aberta Aguardando Agendamento',
    'Aberta Aguardando Atendimento'
  ];

  return statusTypes.includes(status);
};

const verifyOrderConfirm = () => {

  const statusSending = ['Confirmado', 'Pendente', 'Atendente'];

  const confirm = !statusSending.includes(dataOs.value.confirmacao_cliente)
  const displacement = !statusSending.includes(dataOs.value.confirmacao_deslocamento)
  const status = dataOs.value.status == 'Aberta Aguardando Atendimento'

  return confirm && displacement && status

};

const sendingConfirm = () => {
  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-order/send/confirm ',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    },
    data: {
      protocol: os.value.protocolo
    }
    }).then((res) => {
      getData();
  }).catch((err) => {
    console.error(err)
  })
}


const approveOrder = () => {
  AXIOS({
    url: 'https://v2.ageportal.agetelecom.com.br/integrator/aniel/management-schedule/approval-order',
    method: 'POST',
    data: {
      order: dataOs.value.protocolo
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('token')
    }
  }).then((res) => {
    getData();
  }).catch((err) => {
    console.error(err)
  })

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
        <div class="info" v-if="dataOs.protocolo">
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
                  <span>{{ dataOs.cliente_nome }}</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="cellphone" alt="calendar">
                  <span>{{ dataOs.celular_1 }}</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="email" alt="calendar">
                  <span>
                    {{ dataOs.email }}
                  </span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="contract" alt="contrato">
                  <span>{{ dataOs.contrato_id }}</span>
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
                  <span>{{ dataOs.endereco }}</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="numberPlate" alt="número">
                  <span>{{ dataOs.numero }}</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="neighborhood" alt="número">
                  <span>{{ dataOs.area_despacho }}</span>
                </div>
              </td>
              <td><div class="flex">
                <img :src="city" alt="número">
                <span>{{ dataOs.cidade }} - DF</span>
              </div></td>
            </tr>
          </table>
        </div>
        <div class="info_service" v-if="dataOs.protocolo">
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
                  <span>{{ dataOs.servico }}</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="service" alt="calendar">
                  <span>{{ dataOs.sub_servico }}</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="protocol" alt="calendar">
                  <span>{{ dataOs.protocolo }}</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="verifyStatusOrder(os.status)" alt="calendar">
                  <span>{{ dataOs.status }}</span>
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
                  <span>{{formatDateTime(dataOs.data_agendamento)}}</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="verifyStatusConfirm(dataOs.confirmacao_cliente).src" alt="calendar">
                  <span>{{ verifyStatusConfirm(dataOs.confirmacao_cliente).text }}</span>
                </div>
              </td>
              <td>
                <div class="flex">
                  <img :src="verifyStatusConfirm(dataOs.confirmacao_deslocamento).src" alt="calendar">
                  <span>{{ verifyStatusConfirm(dataOs.confirmacao_deslocamento).text }}</span>
                </div>
              </td>
              <td>
                  <div class="flex">
                    <img :src="starFull" alt="star">
                    <img :src="starFull" alt="star">
                    <img :src="starFull" alt="star">
                    <img :src="starFull" alt="star">
                    <img :src="starFull" alt="star">
                  </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="actions"  v-if="dataOs.protocolo">
          <h4>Ações disponíveis</h4>
          <div class="buttons">
            <button
                @click="sendingConfirm()"
                :disabled="!buttons.sendConfirm"
                :class="{'disabled-button': !buttons.sendConfirm}"
            >
              <img :src="sendConfirm" alt="enviar confirmação">
              <span>Enviar confirmação</span>
            </button>
            <button
                @click="approveOrder()"
                :disabled="!buttons.approval"
                :class="{'disabled-button': !buttons.approval}"
            >
              <img :src="approval" alt="aprovar os">
              <span>Aprovar</span>
            </button>
            <button
                @click=""
                :disabled="!buttons.preApproval"
                :class="{'disabled-button': !buttons.preApproval}"
            >
              <img :src="preApproval" alt="aprovar os">
              <span>Solicitar aprovação</span>
            </button>
            <button
                @click="sendingConfirm(dataOs.protocolo)"
                :disabled="!verifyOrderReschedule(dataOs.status)"
                :class="{'disabled-button': !verifyOrderReschedule(dataOs.status) }"
                disabled
                class="disabled-button"
            >
              <img :src="calendar" alt="reagendar os">
              <span>Reagendar</span>
            </button>
            <button @click="copyToClipboard(dataOs)">
              <img :src="copy" alt="copiar">
              <span>Copiar informações</span>
            </button>
            <button disabled class="disabled-button">
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

          .disabled-button {
            background-color: #cccccc70;
            cursor: not-allowed;
            &:hover {
              background-color: #cccccc70;
            }
          }
        }
      }

    }
  }
}

</style>