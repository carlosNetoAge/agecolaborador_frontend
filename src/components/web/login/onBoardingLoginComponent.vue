<script setup lang="ts">

</script>

<template>
  <div class="onboarding__login">
    <img src="@/assets/img/web/login/onboarding/ilustration.png" alt="">
    <p>Descomplique sua rotina com ferramentas que fazem a diferença no seu dia a dia!</p>
    <h1>Portal Age Telecom</h1>
  </div>
</template>

<style scoped lang="scss">

.onboarding__login {
  @include container(60%, 100%, 12vh 0, $bg: #EBF3FE);
  @include flex(column, flex-start, center, $gap: 2vh);
  img {
    width: 30vw;
    height: auto;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: #8c929d;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #031147;
  }
}


</style>