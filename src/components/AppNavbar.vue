<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import AppIcon from './AppIcon.vue';

const router = useRouter()
const route = useRoute()
const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
const navigate = (name: string) => {
  toggle()
  router.push({name})
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary p-0 sticky-top">
    <div class="container-fluid py-3 px-3 px-lg-6">
      <span class="navbar-brand">
        <img alt="Marvel logo" src="/logo.svg" class="nav-logo d-inline-block align-text-top">
      </span>
      <button type="button" class="navbar-toggler border-0"
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation" @click="toggle"
      >
        <AppIcon v-if="isOpen" name="close-outline" icon-class="text-white fs-xl"/>
        <AppIcon v-else name="reorder-three-outline" icon-class="text-white fs-xl" />
      </button>
      <div class="collapse navbar-collapse flex-grow-0 z-1" id="navbarSupportedContent">
        <hr class="hr d-lg-none"/>
        <ul class="navbar-nav gap-2">
          <li class="nav-item">
            <a role="button" class="nav-link text-white fs-5 fw-bold"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              @click="navigate('Home')"
            >
              HOME
            </a>
            <hr v-if="route.name === 'Home'" class="d-none d-lg-block hr border border-white border-4 opacity-100 p-0 m-0"/>
          </li>
          <li class="nav-item">
            <a role="button" class="nav-link text-white fs-5 fw-bold"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              @click="navigate('Characters')"
            >
              CHARACTERS
            </a>
            <hr v-if="route.name === 'Characters'" class="d-none d-lg-block hr border border-white border-4 opacity-100 p-0 m-0"/>
          </li>
          <li class="nav-item">
            <a role="button" class="nav-link text-white fs-5 fw-bold"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              @click="navigate('Comics')"
            >
              COMICS
            </a>
            <hr v-if="route.name === 'Comics'" class="d-none d-lg-block hr border border-white border-4 opacity-100 p-0 m-0"/>
          </li>
          <li class="nav-item">
            <a role="button" class="nav-link text-white fs-5 fw-bold"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              @click="navigate('Events')"
            >
              EVENTS
            </a>
            <hr v-if="route.name === 'Events'" class="d-none d-lg-block hr border border-white border-4 opacity-100 p-0 m-0"/>
          </li>
          <li class="nav-item">
            <a role="button" class="nav-link text-white fs-5 fw-bold"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              @click="navigate('Contact')"
            >
              CONTACT
            </a>
            <hr v-if="route.name === 'Contact'" class="d-none d-lg-block hr border border-white border-4 opacity-100 p-0 m-0"/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (min-width: 992px) {
  .px-lg-6 {
    padding-right: 5rem !important;
    padding-left: 5rem !important;
  }
}
.nav-logo {
  width: 139px;
  height: 56px;
}
.navbar-toggler:focus {
  box-shadow: none;
}
.navbar-collapse.collapsing {
  transition: none;
}
@media screen and (max-width: 992px) {
  .nav-logo {
    width: 118px;
    height: 48px;
  }
  .navbar-collapse {
    position: absolute;
    background-color: var(--bs-primary);
    top: calc(1rem + 56px);
    left: 0;
    width: 100vw;
    padding: 0 1rem 0 1rem;
    transition: height 0.1s ease;
  }
  .navbar-collapse.show {
    height: calc(100vh - calc(1rem + 56px)) !important;
  }
  .navbar-collapse.collapsing {
    height: 0 !important;
    transition: height 0.1s ease;
  }
}

.nav-item .hr {
  translate: 0 350%;
}
</style>
