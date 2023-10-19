<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'
import AppBreadCrumbs from './components/AppBreadCrumbs.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <AppNavbar />
  <div class="h-100 py-4 px-3 px-lg-6 overflow-auto">
    <AppBreadCrumbs />
    <RouterView />
  </div>
</template>

<style scoped>
@media (min-width: 992px) {
  .px-lg-6 {
    padding-right: 5rem !important;
    padding-left: 5rem !important;
  }
}
</style>