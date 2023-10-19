<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Comic, Character } from '@/services/marvel/dto'
import { useMarvelStore } from '@/stores/marvel';
import { useRoute } from 'vue-router';
import AppSpinner from '@/components/AppSpinner.vue';
import AppCard from '@/components/AppCard.vue';

const route = useRoute()
const marvelStore = useMarvelStore()

const character = ref<Character>({})
const characterComics = ref<Comic[]>([])
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true
  character.value = await marvelStore.findCharacter(+route.params.id)
  isLoading.value = false
  characterComics.value = await marvelStore.listCharacterComics(+route.params.id)
})
</script>

<template>
  <div v-if="isLoading" class="row justify-content-center">
    <AppSpinner />
  </div>
  <div v-else-if="character" class="row gap-3 justify-content-center">
    <img class="char-img" :alt="`${character.name ?? 'Character'} image`"
      :src="`${character.thumbnail?.path}.${character.thumbnail?.extension}`"
    >
    <div class="fw-bold fs-3">
      {{ character.name?.toUpperCase() }}
    </div>
    <div>
      {{ character.description }}
    </div>
    <div class="fw-bold fs-3 my-4">
      COMICS
    </div>
    <div v-if="!characterComics.length" class="row justify-content-center">
      <AppSpinner />
    </div>
    <div v-else class="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-center">
      <AppCard v-for="comic of characterComics" :key="comic.id"
        :img-alt="comic.title" route-name="Comics"
        :img-src="`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`"
      >
        <template v-slot:title>
          <span class="fw-bold">
            {{ comic.title?.toUpperCase() }}
          </span>
        </template>
        <template v-slot:description>
          <span>
            PAGES: {{ comic.pageCount }}
          </span>
        </template>
      </AppCard>
    </div>
  </div>
</template>

<style scoped>
.char-img {
  height: 324px;
  width: 330px;
}
@media screen and (max-width: 992px) {
  .char-img {
    height: auto;
    width: auto;
  }
}
</style>
