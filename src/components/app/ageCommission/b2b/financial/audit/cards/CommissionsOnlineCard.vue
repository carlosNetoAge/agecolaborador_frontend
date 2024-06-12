<script setup lang="ts">
// import { onMounted, ref } from 'vue'

interface InvoiceItem {
  invoice: any;
}

interface DataSeller {
  invoices?: { [key: string]: InvoiceItem };
}

const props = defineProps<{ data: DataSeller }>();
const dataSeller = props.data;

</script>

<template>
  <div class="flex flex-col justify-between">
    <div class="flex flex-col pl-10 pt-5">
      <h2 class="text-xl ">Níveis de comissionamento vigente</h2>
    </div>
    <div id="links-dedicados" class="my-5">
      <h4 class="min-[1600px]:text-xl text-lg flex flex-col pl-10 pb-4">Links dedicados</h4>
      <div class="max-w-full min-[1600px]:h-24 h-16 mx-auto">	
        <div class="flex pb-1">
          <div class="flex-1">
          </div>
          <div class="flex-1">
            <div 
              class="min-[1600px]:size-20 size-14 mx-auto border-age-blue border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center"
              :class="{'bg-age-blue' : dataSeller.contracts.dedicated >= 1, 'bg-age-lightBlue' : dataSeller.contracts.dedicated < 1}"
              > 
              <span class="text-white text-center min-[1600px]:text-2xl text-xl w-full">
                40%
              </span>
            </div>
          </div>
          <div class="w-1/6 align-center items-center align-middle content-center flex">
            <div class="w-full bg-age-lightBlue rounded items-center align-middle align-center flex-1">
              <div
                class="bg-age-blue leading-none py-1 rounded "
                :style="{width: ((Math.min(Math.max(dataSeller.contracts.dedicated, 1), 3) - 1) * 50) + '%'}"
                ></div>
            </div>
          </div>
          <div class="flex-1">
            <div 
              class="min-[1600px]:size-20 size-14 mx-auto border-age-blue border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center"
              :class="{'bg-age-blue' : dataSeller.contracts.dedicated >= 3, 'bg-age-lightBlue' : dataSeller.contracts.dedicated < 3}"
              > 
              <span class="text-white text-center min-[1600px]:text-2xl text-xl w-full">
                50%
              </span>
            </div>
          </div>
          <div class="w-1/6 align-center items-center align-middle content-center flex">
            <div class="w-full bg-age-lightBlue rounded items-center align-middle align-center flex-1">
              <div
                class="bg-age-blue leading-none py-1 rounded " 
                :style="{width: ((Math.min(Math.max(dataSeller.contracts.dedicated, 3), 5) - 3) * 50) + '%'}"
                ></div>
            </div>
          </div>     
          <div class="flex-1">
            <div 
              class="min-[1600px]:size-20 size-14 mx-auto border-age-blue border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center"
              :class="{'bg-age-blue' : dataSeller.contracts.dedicated >= 5, 'bg-age-lightBlue' : dataSeller.contracts.dedicated < 5}"
              > 
              <span class="text-white text-center min-[1600px]:text-2xl text-xl w-full">
                60%
              </span>
            </div>
          </div>      
          <div class="w-1/6 align-center items-center align-middle content-center flex">
            <div class="w-full bg-age-lightBlue rounded items-center align-middle align-center flex-1">
              <div
                class="bg-age-blue leading-none py-1 rounded "
                :style="{width: ((Math.min(Math.max(dataSeller.contracts.dedicated, 5), 10) - 5) * 20) + '%'}"
              ></div>
            </div>
          </div>
          <div class="flex-1">
            <div 
              class="min-[1600px]:size-20 size-14 mx-auto border-age-blue border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center"
              :class="{'bg-age-blue' : dataSeller.contracts.dedicated >= 10, 'bg-age-lightBlue' : dataSeller.contracts.dedicated < 10}"
              > 
              <span class="text-white text-center min-[1600px]:text-2xl text-xl w-full">
                70%
              </span>
            </div>
          </div>      
          <div class="flex-1">
          </div>		
        </div>
      </div>
      <div class="flex text-xs content-center text-center">
        <div class="w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col">
          <span>1 à 2 links dedicados</span>
        </div>      
        <div class="w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col">
          <span>3 à 4 links dedicados</span>
        </div>      
        <div class="w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col">
          <span>5 à 9 links dedicados</span>
        </div>
        <div class="w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col">
          <span>10 ou mais links dedicados</span>
        </div>
      </div>
    </div>
    <div id="links-empresariais" class="my-5">
      <h4 class="min-[1600px]:text-xl text-lg flex flex-col pl-10 pb-4">Link empresariais</h4>
      <div class="max-w-full min-[1600px]:h-24 h-16 mx-auto pb-4">	
        <div class="flex pb-1">
          <div class="flex-1">
          </div>
          <div class="flex-1">
            <div 
              class="min-[1600px]:size-20 size-14 mx-auto border-age-orange border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center"
              :class="{'bg-age-orange' : dataSeller.contracts.business >= 1, 'bg-age-lightOrange' : dataSeller.contracts.business < 1}"
              > 
              <span class="text-white text-center min-[1600px]:text-2xl text-xl w-full">
                30%
              </span>
            </div>
          </div>
          <div class="w-1/6 align-center items-center align-middle content-center flex">
            <div class="w-full bg-age-lightOrange rounded items-center align-middle align-center flex-1">
              <div
                class="bg-age-orange leading-none py-1 rounded "
                :style="{width: ((Math.min(Math.max(dataSeller.contracts.business, 1), 11) - 1) * 10) + '%'}"
                ></div>
            </div>
          </div>
          <div class="flex-1">
            <div 
              class="min-[1600px]:size-20 size-14 mx-auto border-age-orange border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center"
              :class="{'bg-age-orange' : dataSeller.contracts.business >= 11, 'bg-age-lightOrange' : dataSeller.contracts.business < 11}"
              > 
              <span class="text-white text-center min-[1600px]:text-2xl text-xl w-full">
                50%
              </span>
            </div>
          </div>
          <div class="w-1/6 align-center items-center align-middle content-center flex">
            <div class="w-full bg-age-lightOrange rounded items-center align-middle align-center flex-1">
              <div
                class="bg-age-orange leading-none py-1 rounded " 
                :style="{width: ((Math.min(Math.max(dataSeller.contracts.business, 11), 25) - 11) * 7.1) + '%'}"
                ></div>
            </div>
          </div>     
          <div class="flex-1">
            <div 
              class="min-[1600px]:size-20 size-14 mx-auto border-age-orange border-4 rounded-full min-[1600px]:text-lg text-base text-white flex items-center"
              :class="{'bg-age-orange' : dataSeller.contracts.business >= 25, 'bg-age-lightOrange' : dataSeller.contracts.business < 25}"
              > 
              <span class="text-white text-center min-[1600px]:text-2xl text-xl w-full">
                60%
              </span>
            </div>
          </div>        
          <div class="flex-1">
          </div>		
        </div>
      </div>
      <div class="flex text-xs content-center text-center justify-evenly px-10">
        <div class="w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col">
          <span>1 à 10 empresariais</span>
        </div>      
        <div class="w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col">
          <span>11 à 24 empresariais</span>
        </div>      
        <div class="w-1/4 min-[1600px]:text-lg text-base text-nowrap flex flex-col">
          <span>25 ou mais empresariais</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

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
  @include flex(row, space-around);
  margin-top: 1vh;

  .box {
    @include flex(row);

    .level {
      @include flex(column, space-around, center, .5vw);


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
        @include flex(column, space-between, center, .6vw);
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
      width: 100%;
      height: 3vh;

      div {
        position: absolute;
        z-index: 0;
        width: 13%;
        height: 2px;
        background-color: #cccccc;
      }
    }

  }
}
</style>  