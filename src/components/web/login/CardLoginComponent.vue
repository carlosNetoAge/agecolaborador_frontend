<script setup lang="ts">

import FormCardLoginComponent from "@/components/web/login/FormCardLoginComponent.vue";
import SocialMediaCardLoginComponent from "@/components/web/login/SocialMediaCardLoginComponent.vue";


</script>

<template>
 <div class="card__login">

   <div class="header__card">
     <h1>Entre</h1>
     <p>Faça login com sua conta.</p>
   </div>

    <FormCardLoginComponent />

    <SocialMediaCardLoginComponent />

   <div id="copy">
      <span>&copy; 2024 Age Fibra. Todos os direitos reservados.</span>
   </div>

   <div id="term">
     <span>Termos de uso</span>
   </div>

   <div id="logo">
     <img src="@/assets/img/company/logo_grey.png" alt="">
   </div>
 </div>
</template>

<style scoped lang="scss">

.card__login {
  @include container(40%, 100%, 5vh 8vw, $bg: #ffffff);
  @include flex(column, flex-start, initial, 3vh);
  position: relative;

  .header__card {
    @include flex(column, $gap: .2vh);
    text-align: left;
    z-index: 3;

    h1 {
      font-size: 2.5rem;
      font-weight: 600;
      color: #031147;
    }

    p {
      font-size: 1.5rem;
      font-weight: 400;
      color: #A1A8B6;
    }
  }

  #copy, #term {
    position: absolute;
    bottom: 1.2vh;
    font-size: 1rem;
    color: #666666;
    font-weight: 400;
    z-index: 3;

    span {
      cursor: pointer;

      &:hover {
        color: #333333;
      }
    }
  }

  #copy { left: 1vw; }
  #term { right: 1vw; }


  #logo {
    position: absolute;
    bottom: -35vh;
    right: -15vw;
    z-index: 0;

    img {
      width: 35vw;
      height: auto;
      opacity: .2;
    }

  }
}



</style>