<script setup lang="ts">

</script>

<template>
  <div class="social_media__container">
    <div class="follow__us">
      <div></div>
      <span>Siga-nos</span>
      <div></div>
    </div>
    <div class="social_media__icons">
      <div class="box__icon">
        <a href="https://www.instagram.com/agetelecom/" target="_blank">
          <img src="@/assets/img/web/login/socialMedias/instagram.png" alt="instagram">
        </a>
      </div>
      <div class="box__icon">
        <a href="https://www.facebook.com/AgeTelecom/" target="_blank">
          <img src="@/assets/img/web/login/socialMedias/facebook.png" alt="facebook">
        </a>
      </div>
      <div class="box__icon">
        <a href="https://twitter.com/AgeTelecom" target="_blank">
          <img src="@/assets/img/web/login/socialMedias/twitter.png" alt="twitter">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.social_media__container {
  @include container(100%, 100%);
  @include flex(column, $gap: 5vh);
  z-index: 3;

  .follow__us {
    @include flex(row, space-between, center, 1vw);

    div {
      width: 33%;
      height: 1px;
      background-color: #cccccc70;
    }

    span {
      font-size: 1.2rem;
      font-weight: 400;
      color: #A1A8B6;
    }
  }

  .social_media__icons {
    width: 100%;
    @include flex(row, space-between, center);

    .box__icon {
      width: calc((100% / 3 ) - 1vw);

      a {
        border: 1px solid #cccccc30;
        border-radius: 5px;
        display: block;
        height: 6vh;
        box-shadow: $global-box-shadow;
        @include flex(row, center, center);
        background-color: #ffffff;

        img {
          width: 1.5vw;
          height: auto;
        }

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
}

</style>