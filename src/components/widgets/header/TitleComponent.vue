<script setup lang="ts">

import { infoPage } from "@/stores/counter";

const info = infoPage();

</script>

<template>
  <div class="title__container">
    <h1>{{ info.title }}</h1>
    <p>{{ info.subtitle }}</p>
  </div>
</template>

<style scoped lang="scss">

.title__container {
  grid-area: header;
  @include flex(column, flex-end, initial);
  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #333
  }
  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: #777;
  }
}


</style>