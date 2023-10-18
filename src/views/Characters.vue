<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
  <main>
    CHARACTERS
    <button @click="router.push({name: 'CharacterDetails', params: {slug: 'Homem Aranha'}})">
      teste
    </button>
  </main>
</template>
