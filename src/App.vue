<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue'
import AppBreadCrumbs from './components/AppBreadCrumbs.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <AppNavbar />
  <div class="h-100 py-4 px-3 overflow-auto">
    <AppBreadCrumbs />
    <RouterView />
  </div>
</template>
