<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import AppModal from '@/components/AppModal.vue';
import { computed, reactive, ref } from 'vue';
import { validateEmail, validatePhone } from '@/utils'
import { useRouter } from 'vue-router';

const router = useRouter()

const formErrors = reactive({
  name: false,
  email: false,
  phone: false,
})

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const validForm = computed(() => {
  return !!formData.name && !formErrors.name 
  && !!formData.email && !formErrors.email 
  && !!formData.phone && !formErrors.phone
})

const modal = ref<InstanceType<typeof AppModal & { openModal: () => void}>>()

const showModal = () => {
  modal.value?.openModal()
}

const submit = () => {
  let err = false
  err = checkName()
  err = checkEmail()
  err = checkPhone()
  if (!err) {
    showModal()
  }
}

const checkName = () => {
  formErrors.name = !formData.name
  return formErrors.name
}
const checkEmail = () => {
  formErrors.email = !validateEmail(formData.email)
  return formErrors.email
}
const checkPhone = () => {
  formErrors.phone = !validatePhone(formData.phone)
  return formErrors.phone
}
</script>

<template>
  <div class="pt-3">
    <form @submit.prevent="submit" novalidate class="row">
      <div class="col-lg-8">
        <AppInput v-model="formData.name" label="Name" placeholder="Ex.: Your full name"
          required error-msg="Please enter a name" type="text" :invalid="formErrors.name"
          @update:model-value="checkName" class="w-lg-75"
        />
      </div>
      <div class="col-lg-8">
        <AppInput v-model="formData.email" label="Email" placeholder="myemail@email.com"
          required error-msg="Please enter a valid email" type="email" :invalid="formErrors.email"
          @update:model-value="checkEmail" class="w-lg-75"
        />
      </div>
      <div class="col-lg-8">
        <AppInput v-model="formData.phone" label="Phone" placeholder="Ex.: (99) 9 9999-9999"
          required error-msg="Invalid phone" type="tel" :invalid="formErrors.phone"
          @update:model-value="checkPhone" mask="(##) # ####-####" class="w-lg-75"
        />
      </div>
      <div class="col-lg-8">
        <AppInput v-model="formData.message" label="Message" class="w-lg-75"
          placeholder="Ex.: Contact message for marvel" type="textarea"
        />
      </div>
      <div class="col-lg-8">
        <AppButton type="submit" :disabled="!validForm" class="w-lg-auto w-100 px-lg-4 py-lg-2">
          Send
        </AppButton>
      </div>
    </form>
  </div>
  <AppModal @close="router.push({name: 'Home'})" title="Message sent successfully!" ref="modal">
    <template v-slot:body>
      <span class="p-2">
        Thank you, we'll reach you as soon as possible
      </span>
    </template>
  </AppModal>
</template>

<style scoped>
@media (min-width: 992px) {
  .w-lg-auto {
    width: auto !important;
  }
  .w-lg-75 {
    width: 75% !important;
  }
}
</style>
