<script setup lang="ts">

import CardLoginComponent from "@/components/web/login/CardLoginComponent.vue";
import OnBoardingLoginComponent from "@/components/web/login/onBoardingLoginComponent.vue";
</script>

<template>
  <div class="login__container">
    <div class="content__login">
      <OnBoardingLoginComponent />
      <CardLoginComponent />
    </div>
  </div>
</template>

<style scoped lang="scss">

.login__container {
  @include container(100% !important, 100%, $padding: 4vh 2vw !important, $bg: #fff);
  @include flex($justify: space-between);

  .content__login {
    @include flex(row, space-between, center);
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: $global-box-shadow;
  }
}

</style>