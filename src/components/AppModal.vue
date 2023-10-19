<script setup lang="ts">
import { Modal } from 'bootstrap';
import { reactive, onMounted } from 'vue'
import AppButton from './AppButton.vue';

const props = defineProps<{
  title: string,
  onClose: () => void,
}>()

const state = reactive<{modal: Modal|null}>({
    modal: null,
})

onMounted(() => {
    state.modal = new Modal('#modal', {})
})

function openModal()
{
    state.modal?.show()
}

function closeModal()
{
    state.modal?.hide()
    props.onClose()
}

defineExpose({
  openModal,
})
</script>

<template>
  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-title" id="modalLabel">{{ title }}</span>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
          <AppButton type="button" @click="closeModal" class="w-100 w-lg-auto px-lg-4 py-lg-2">Close</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-content {
  min-height: 200px;
}
@media (min-width: 992px) {
  .w-lg-auto {
    width: auto !important;
  }
}
</style>