<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { CharacterData } from '@/services/marvel/dto'
import AppCard from '@/components/AppCard.vue';
import AppSpinner from '@/components/AppSpinner.vue';
import { useMarvelStore } from '@/stores/marvel';

const marvelStore = useMarvelStore()

const characters = ref<CharacterData>({})
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true
  characters.value = await marvelStore.listCharacters()
  isLoading.value = false
})
</script>

<template>
  <div v-if="isLoading" class="row justify-content-center">
    <AppSpinner />
  </div>
  <div v-else-if="characters">
    <div>{{ characters.count }} of {{ characters.total }}</div>
    <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-center">
      <AppCard v-for="char of characters.results" :key="char.name" :img-alt="char.name"
        route-name="CharacterDetails" :slug="char.name" :id="char.id"
        :img-src="`${char.thumbnail?.path}.${char.thumbnail?.extension}`"
      >
        <template v-slot:title>
          <span class="fw-bold text-decoration-underline ps-5">
            {{ char.name }}
          </span>
        </template>
      </AppCard>
    </div>
  </div>
</template>
