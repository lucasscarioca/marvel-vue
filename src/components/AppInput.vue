<script lang="ts" setup>
import { vMaska } from 'maska';
import type { InputHTMLAttributes } from 'vue';

withDefaults(defineProps<{
  modelValue: string,
  label: string,
  placeholder?: string,
  required?: boolean,
  errorMsg?: string,
  type: InputHTMLAttributes['type'],
  invalid?: boolean,
  mask?: string,
}>(), {
  modelValue: '',
  label: '',
  type: 'text',
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number): void
}>()

const input = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="mb-3">
    <label :for="label" class="form-label">
      {{ label }}
    </label>
    <textarea v-if="type === 'textarea'" class="form-control" :id="label" rows="4"
      :value="modelValue" @input="input" :placeholder="placeholder"
    >
    </textarea>
    <input v-else :type="type" class="form-control" :id="label" :value="modelValue" @input="input"
      :placeholder="placeholder" :required="required" :class="invalid && 'border border-primary'"
      v-maska :data-maska="mask" :maxlength="type === 'tel' ? 16 : undefined"
    >
    <div v-if="errorMsg && invalid" class="text-primary mt-2">
      {{ errorMsg }}
    </div>
  </div>
</template>
