<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid py-3 px-3">
      <RouterLink class="navbar-brand" to="/">
        <img alt="Marvel logo" src="@/assets/logo.svg" width="139" height="56" class="d-inline-block align-text-top">
      </RouterLink>
      <button type="button" class="navbar-toggler border-0"
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation" @click="toggle"
      >
        <ion-icon v-if="isOpen" name="close-outline"></ion-icon>
        <ion-icon v-else name="reorder-three-outline"></ion-icon>
      </button>
      <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
        <hr class="hr"/>
        <ul class="navbar-nav gap-2">
          <li class="nav-item">
            <RouterLink class="nav-link text-white fs-5 fw-bold" aria-current="page" to="/">HOME</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white fs-5 fw-bold" to="/characters">CHARACTERS</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white fs-5 fw-bold" to="/comics">COMICS</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white fs-5 fw-bold" to="/events">EVENTS</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white fs-5 fw-bold" to="/contact">CONTACT</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
ion-icon {
  font-size: 48px;
  color: white;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.navbar-collapse.show, .navbar-collapse.collapsing {
  transition: none;
}

.navbar-collapse.show {
  height: 100vh;
  width: 100vw;
  background-color: var(--bs-primary);
  top: 100px;
  left: 0;
}
</style>
