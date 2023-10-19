<script lang="ts" setup>
import type { ButtonHTMLAttributes } from 'vue';

defineProps<{
  disabled?: boolean,
  type: ButtonHTMLAttributes['type']
}>()
</script>

<template>
  <button :type="type"
    class="btn btn-primary" :disabled="disabled"
  >
    <slot>Submit</slot>
  </button>
</template>

<style scoped>
.btn-primary {
  --bs-btn-bg: #ec1d24 !important;
  --bs-btn-border-color: #ec1d24 !important;
  --bs-btn-hover-bg: #9f0013 !important;
  --bs-btn-hover-border-color: #9f0013 !important;
  --bs-btn-active-bg: #ec1d24 !important;
  --bs-btn-active-border-color: #ec1d24 !important;
  --bs-btn-disabled-color: #767676 !important;
  --bs-btn-disabled-bg: #cccccc !important;
  --bs-btn-disabled-border-color: #cccccc !important;
}
.btn {
  max-width: 100% !important;
  min-width: fit-content !important;
}
</style>