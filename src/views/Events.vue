<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { EventData } from '@/services/marvel/dto';
import { useMarvelStore } from '@/stores/marvel';
import AppSpinner from '@/components/AppSpinner.vue';
import AppCard from '@/components/AppCard.vue';

const marvelStore = useMarvelStore()

const events = ref<EventData>({})
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true
  events.value = await marvelStore.events.list()
  isLoading.value = false
})
</script>

<template>
  <div v-if="isLoading" class="row mt-4 justify-content-center">
    <AppSpinner />
  </div>
  <div v-else-if="events" class="mt-4">
    <div class="text-end pe-2 pe-lg-4 text-muted">
      {{ events.count }} of {{ events.total }}
    </div>
    <div class="row row-cols-1 row-cols-lg-2 justify-content-center justify-content-lg-start row-gap-4 column-gap-4 pt-2">
      <AppCard v-for="event of events.results" :key="event.title" :img-alt="event.title"
        :img-src="`${event.thumbnail?.path}.${event.thumbnail?.extension}`" side-image
      >
        <template v-slot:title>
          <span class="fw-bold fs-4">
            {{ event.title?.toUpperCase() }}
          </span>
        </template>
        <template v-slot:description>
          <div class="my-2 lh-base overflow-hidden">
            {{ event.description?.toUpperCase() }}
          </div>
          <div v-if="event.start">
            <span class="fw-bold">
              DATE OF THE EVENT:
            </span> {{ new Date(event.start).toLocaleDateString('pt-BR') }}
          </div>
        </template>
      </AppCard>
    </div>
  </div>
</template>
