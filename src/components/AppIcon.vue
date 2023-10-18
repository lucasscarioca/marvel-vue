<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  iconClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <ion-icon :class="iconClass" :name="name"></ion-icon>
</template>

<style scoped>
</style>