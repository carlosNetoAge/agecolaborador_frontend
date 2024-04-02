<script setup lang="ts">


import {defineProps} from 'vue';

const props = defineProps({
  data: Object
});

const dataSeller = props.data;



</script>

<template>
  <div class="grid__container">
    <div class="grid__item" style="height: 70%">
      <h2>Níveis de comissionamento vigente</h2>
      <div class="steps__container">
        <div class="box" :class="{'check__dedicated' : dataSeller.contracts.dedicated >= 1}">
          <div class="level">
            <div class="icon">
              1
            </div>
            <div class="rule">
              <span>1 à 2 links dedicados</span>
              <span>40%</span>
            </div>
          </div>
          <div class="divisor">
            <div></div>
          </div>
        </div>
        <div class="box" :class="{'check__dedicated' : dataSeller.contracts.dedicated >= 3}">
          <div class="level">
            <div class="icon">
              2
            </div>
            <div class="rule">
              <span>3 à 4 links dedicados</span>
              <span>50%</span>
            </div>
          </div>
          <div class="divisor">
            <div></div>
          </div>
        </div>
        <div class="box" :class="{'check__dedicated' : dataSeller.contracts.dedicated >= 5}">
          <div class="level">
            <div class="icon">
              3
            </div>
            <div class="rule">
              <span>5 à 9 links dedicados</span>
              <span>60%</span>
            </div>
          </div>
          <div class="divisor">
            <div></div>
          </div>
        </div>
        <div class="box" :class="{'check__dedicated' : dataSeller.contracts.dedicated >= 10}">
          <div class="level">
            <div class="icon">
              4
            </div>
            <div class="rule">
              <span>10 ou mais links dedicados</span>
              <span>70%</span>
            </div>
          </div>
        </div>

      </div>
      <div class="steps__container">
        <div class="box" :class="{'check__business' : dataSeller.contracts.business >= 10}">
          <div class="level">
            <div class="icon">
              1
            </div>
            <div class="rule">
              <span>10 à 14 empresariais</span>
              <span>30%</span>
            </div>
          </div>
          <div class="divisor">
            <div></div>
          </div>
        </div>
        <div class="box" :class="{'check__business' : dataSeller.contracts.business >= 15}">
          <div class="level">
            <div class="icon">
              2
            </div>
            <div class="rule">
              <span>15 à 24 empresariais</span>
              <span>50%</span>
            </div>
          </div>
          <div class="divisor">
            <div></div>
          </div>
        </div>
        <div class="box" :class="{'check__business' : dataSeller.contracts.business >= 25}">
          <div class="level">
            <div class="icon">
              3
            </div>
            <div class="rule">
              <span>25 ou mais empresariais</span>
              <span>60%</span>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="grid__item" style="height: 30%">
      <h2>Percentual à receber sob a fatura paga</h2>

      <div class="percent__invoice__paid">
        <div class="percent__invoice">
          <div class="info">
            <span>Link Dedicado</span>
            <span>{{ dataSeller.percentInvoiceDedicated * 100 }}%</span>
          </div>
          <div class="progress" id="dedicated">
            <progress :value="dataSeller.percentInvoiceDedicated * 100" max="100"></progress>
          </div>
        </div>
        <div class="percent__invoice">
          <div class="info">
            <span>Empresarial</span>
            <span>{{ dataSeller.percentInvoiceBusiness * 100 }}%</span>
          </div>
          <div class="progress">
            <progress :value="dataSeller.percentInvoiceBusiness * 100" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.percent__invoice__paid {
  @include flex(column, center, initial, 2vh);
  height: 90%;

  .percent__invoice {

    .info {
      @include flex(row, space-between, center, 0);
    }

    .progress {
      width: 100%;

      progress {
        width: 100%;
        height: 1.5vh;
        border-radius: 5px;
        background-color: #F6F6F6;
        border: none;
        appearance: none;
        box-shadow: $global-box-shadow;

        &::-webkit-progress-bar {
          background-color: #F6F6F6;
          border-radius: 5px;
        }
        &::-webkit-progress-value {
          background-color: #08C293;
          border-radius: 5px;
        }
      }
    }

    #dedicated {
      progress {
        &::-webkit-progress-value {
          background-color: #5950E8;
        }
      }
    }
  }
}

.steps__container {
  @include flex(column);
  margin-top: 1vh;

  .box {
    @include flex(column);

    .level {
      @include flex(row, flex-start, center, .5vw);


      .icon {
        width: 1.8vw;
        height: 1.8vw;
        @include flex(row, center, center);
        border-radius: 50%;
        background-color: #cccccc30;
        border: 2px solid #cccccc;
        font-size: 1.2rem;
        font-weight: 500;
        color: #333333;
      }

      .rule {
        @include flex(row, space-between, center);
        border-bottom: 2px solid #cccccc60;

        width: 80%;
        span {
          font-size: 1.2rem;
          font-weight: 400;
          color: #666666;
        }

        span:nth-child(2) {
          font-weight: 500;
          color: #333;
        }
      }

    }

    .divisor {
      @include flex(row, center, center);
      width: 1.8vw;
      height: 3vh;

      div {
        width: 2px;
        height: 100%;
        background-color: #cccccc;
      }
    }

  }

  .check__business {
    .level {
      .icon {
        background-color: #08C29330;
        border: 2px solid #08C293;
        color: #08C293;

      }
      .rule {
        span:nth-child(2) {
          color: #08C293;
        }
      }
    }

    .divisor {
      div {
        background-color: #08C293;
      }
    }
  }

  .check__dedicated {
    .level {
      .icon {
        background-color: #6860BD30;
        border: 2px solid #6860BD;
        color: #6860BD;
      }
      .rule {
        span:nth-child(2) {
          color: #6860BD;
        }
      }
    }

    .divisor {
      div {
        background-color: #6860BD;
      }
    }
  }
}


</style>