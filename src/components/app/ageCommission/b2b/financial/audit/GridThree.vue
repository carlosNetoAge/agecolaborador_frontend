<script setup lang="ts">

import {defineProps} from 'vue';

const props = defineProps({
  data: Object
});

const dataSeller = props.data;


</script>

<template>
  <div class="grid__container">
    <div class="grid__item" style="height: 50%">
      <h2>Composição do comissionamento</h2>

      <div class="info__composition">
        <span>R$ {{(dataSeller.commissionDedicated + dataSeller.commissionBusiness).toFixed(2)}}</span>

        <div class="bar">
          <div class="bar__fill"></div>
          <div class="bar__fill"></div>
          <div class="bar__fill"></div>
          <div class="bar__fill"></div>
        </div>

        <div class="items__container">
          <div class="items__composition">
            <div class="item">
              <div style="background-color: #5950E8">
              </div>
              <span>Link dedicado</span>
            </div>
            <div class="composition">
              <span>R$ {{ dataSeller.commissionDedicated.toFixed(2) }}</span>
            </div>
          </div>
          <div class="items__composition">
            <div class="item">
              <div style="background-color: #15C899">
              </div>
              <span>Empresarial</span>
            </div>
            <div class="composition">
              <span>R$ {{ dataSeller.commissionBusiness.toFixed(2) }}</span>
            </div>
          </div>
          <div class="items__composition">
            <div class="item">
              <div style="background-color: #F3BB1F">
              </div>
              <span>Meta alcançada</span>
            </div>
            <div class="composition">
              <span>R$0</span>
            </div>
          </div>
          <div class="items__composition">
            <div class="item">
              <div style="background-color: #F3460B">
              </div>
              <span>Contrato fidelizado 36 meses</span>
            </div>
            <div class="composition">
              <span>R$0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid__item" style="height: 50%">
      <h2>Composição das vendas</h2>

      <div class="composition__sales">
        <div class="composition">
          <div class="icon" id="dedicated">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12.056,11.211l8.039,6.718-5.694,4.271c-1.422,1.067-3.378,1.067-4.8,0l-6.133-4.6c-.519-.389-1.151-.6-1.8-.6h-.667C.448,17,0,16.552,0,16V4.937c0-.508,.379-.931,.884-.988,1.357-.151,2.579-.696,3.829-1.424,1.798-.925,4.157-.595,5.616,.772l.617,.593-4.007,3.911c-1.073,1.072-1.244,2.767-.398,3.938,.52,.723,1.461,1.259,2.444,1.259,.793,0,1.554-.312,2.104-.863l.967-.925ZM19.954,2.525c-1.69-.845-3.798-.625-5.308,.548l-6.303,6.152c-.371,.372-.455,.967-.181,1.347,.18,.25,.441,.4,.739,.425,.295,.025,.581-.082,.788-.29l3.618-3.429c.949-.901,2.324,.537,1.383,1.445l-1.181,1.097,8.593,7.181h.897c.552,0,1-.448,1-1V4.903c0-.49-.358-.895-.841-.982-1.694-.306-3.205-1.395-3.205-1.395Z"/></svg>
          </div>
          <div class="type">
            <span>Link Dedicado</span>
          </div>
          <div class="value">
            <span>{{dataSeller.contracts.dedicated}}</span>
            <div class="percent">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z"/></svg>
              <span>00,00%</span>
            </div>
          </div>
        </div>
        <div class="composition">
          <div class="icon" id="business">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M24,8L21.754,0H2.246L0,8c0,1.012,.378,1.937,1,2.643v10.357c0,1.654,1.346,3,3,3H12c1.654,0,3-1.346,3-3V11.463c.376-.218,.714-.496,1-.82,.733,.832,1.806,1.357,3,1.357h1c.345,0,.68-.044,1-.127v12.127h2V10.643c.622-.705,1-1.631,1-2.643Zm-12,14H4c-.551,0-1-.449-1-1v-3H13v3c0,.551-.449,1-1,1Zm1-6H3v-4.127c.32,.083,.655,.127,1,.127h1c1.194,0,2.266-.526,3-1.357,.734,.832,1.806,1.357,3,1.357h2v4Zm6-6c-1.103,0-2-.897-2-2h-2c0,1.103-.897,2-2,2h-2c-1.103,0-2-.897-2-2h-2c0,1.103-.897,2-2,2h-1c-1.061,0-1.931-.83-1.996-1.874L3.754,2h3.246v3h2V2h6v3h2V2h3.246l1.75,6.126c-.065,1.044-.936,1.874-1.996,1.874h-1Z"/></svg>
          </div>
          <div class="type">
            <span>Empresarial</span>
          </div>
          <div class="value">
            <span>{{dataSeller.contracts.business}}</span>
            <div class="percent">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z"/></svg>
              <span>00,00%</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<style scoped lang="scss">

.info__composition {
  margin-top: 1vh;
  @include flex(column, space-between, initial, 1vh);
  height: 85%;

  span {
    font-size: 2.4rem;
    font-weight: 500;
    color: #333;
  }

  .bar {
    width: 100%;
    height: 7px;
    border-radius: 5px;
    @include flex(row, flex-start, center, 0);
    overflow: hidden;

    .bar__fill {
      height: 100%;
      box-shadow: $global-box-shadow;

    }

    .bar__fill:nth-child(1) {
      width: 35%;
      background-color: #5950E8;
    }

    .bar__fill:nth-child(2) {
      width: 25%;
      background-color: #15C899;
    }

    .bar__fill:nth-child(3) {
      width: 25%;
      background-color: #F3BB1F;
    }

    .bar__fill:nth-child(4) {
      width: 15%;
      background-color: #F3460B;
    }
  }

  .items__container {
    @include flex(column, flex-start, initial, 1vh);
    .items__composition {
      @include flex(row, space-between, center);
      width: 100%;

      .item {
        @include flex(row, flex-start, center, .5vw);
        width: 50%;

        div {
          width: .5vw;
          height: .5vw;
          border-radius: 50%;
        }


        span {
          font-size: 1.2rem;
          font-weight: 400;
          color: #333;
        }
      }

      .composition {
        span {
          font-size: 1.2rem;
          font-weight: 500;
          color: #333;
        }
      }

    }
  }
}

.composition__sales {
  @include flex(row, space-evenly, center, 0);
  height: 90%;

  .composition {
    margin-top: 1vh;
    @include flex(column, flex-start, center, 1vh);
    text-align: center;
    .icon {
      @include flex(column, center, center, 0);
      width: 4vw;
      height: 4vw;
      border-radius: 50%;
      box-shadow: $global-box-shadow;

      svg {
        width: 1.5vw;
        height: 1.5vw;
      }

    }

    #dedicated {
      background-color: #6860BD30;

      svg {
        fill: #6860BD
      }
    }

    #business {
      background-color: #15C89930;

      svg {
        fill: #15C899
      }
    }
    .type {
      font-size: 1rem;
      font-weight: 400;
      color: #666666;
    }

    .value {
      .percent {
        span {
          font-size: 1rem;
        }
      }
      span {
        font-size: 2.4rem;
        font-weight: 500;
        color: #333;
      }
    }
  }
}

</style>