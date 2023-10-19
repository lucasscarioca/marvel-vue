<script setup lang="ts">
</script>

<template>
  <div class="page-content fs-3 fw-bold lh-base text-center">
    <img alt="Marvel logo" src="@/assets/logo-gray.png" class="home-logo">
    <div class="mt-4">
      WELCOME TO MARVEL'S DIRECTORY
    </div>
  </div>
</template>

<style scoped>
.page-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.home-logo {
  height: 131px;
  width: 325px;
}

@media screen and (max-width: 992px) {
  .home-logo {
    height: 75px;
    width: 186px;
  }
}
</style>
