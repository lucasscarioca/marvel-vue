<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<template>
  <main>
    CHARACTER DETAILS
    {{ route.meta }}
    {{ route.params }}
  </main>
</template>
