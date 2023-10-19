<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import { type MarvelService } from '@/services/marvel'
import type { CharacterData, CharacterQuery } from '@/services/marvel/dto'

const router = useRouter()
const marvel = inject('marvel') as MarvelService

const characters = ref<CharacterData>({})
const isLoading = ref(true)

const listCharacters = async (query: CharacterQuery = {limit: 6, offset: 0}) => {
  isLoading.value = true
  const result = await marvel.characters.list(query)
  isLoading.value = false
  return result
}

onMounted(async () => {
  characters.value = await listCharacters()
})
</script>

<template>
  <div>
    <button @click="router.push({name: 'CharacterDetails', params: {slug: 'Homem Aranha'}})">
      teste
    </button>
    <div v-if="isLoading" class="row justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="characters">
      <div>{{ characters.count }} of {{ characters.total }}</div>
      <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-center">
        <div class="col row row-cols-1 p-2" v-for="char of characters.results" :key="char.name">
          <div class="col">
            <img :alt="char.name ? `${char.name} image` : 'Character image'"
              :src="`${char.thumbnail?.path}.${char.thumbnail?.extension}`"
              class="char-img"
            >
          </div>
          <span class="col mt-3 fw-bold text-decoration-underline">
            {{ char.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.char-img {
  height: 183px;
  width: 80%;
  border-radius: 4px;
}
</style>