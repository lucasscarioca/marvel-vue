<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ComicData } from '@/services/marvel/dto';
import AppSpinner from '@/components/AppSpinner.vue';
import AppCard from '@/components/AppCard.vue';
import { useMarvelStore } from '@/stores/marvel'

const marvelStore = useMarvelStore()

const comics = ref<ComicData>({})
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true
  comics.value = await marvelStore.comics.list()
  isLoading.value = false
})
</script>

<template>
  <div v-if="isLoading" class="row mt-4 justify-content-center">
    <AppSpinner />
  </div>
  <div v-else-if="comics" class="mt-4">
    <div class="text-end pe-2 pe-lg-4 text-muted">{{ comics.count }} of {{ comics.total }}</div>
    <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-center justify-content-lg-start row-gap-4 column-gap-4 mt-2">
      <AppCard v-for="com of comics.results" :key="com.title" :img-alt="com.title"
        :img-src="`${com.thumbnail?.path}.${com.thumbnail?.extension}`"
      >
        <template v-slot:title>
          <span class="fw-bold text-decoration-underline">
            {{ com.title }}
          </span>
        </template>
        <template v-slot:description>
          <span>
            PAGES: {{ com.pageCount }}
          </span>
        </template>
      </AppCard>
    </div>
  </div>
</template>
