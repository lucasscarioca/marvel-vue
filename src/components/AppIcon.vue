<script lang="ts" setup>
defineProps<{
  name: string,
  iconClass?: string,
}>()
</script>

<template>
  <ion-icon :class="iconClass" :name="name"></ion-icon>
</template>

<style scoped>
</style>