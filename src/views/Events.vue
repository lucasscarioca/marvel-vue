<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import type { EventData } from '@/services/marvel/dto';
import { useMarvelStore } from '@/stores/marvel';
import AppSpinner from '@/components/AppSpinner.vue';
import AppCard from '@/components/AppCard.vue';
import AppIcon from '@/components/AppIcon.vue';
import AppInput from '@/components/AppInput.vue';

const marvelStore = useMarvelStore()

const events = ref<EventData>({})
  const pagination = reactive({
  limit: 6,
  offset: 0,
  nameStartsWith: undefined,
})
const isLoading = ref(false)

onMounted(async () => {
  await listEvents()
})

const nextPage = () => {
  if (events.value.count && events.value.total && (events.value.count + pagination.offset >= events.value.total)) {
    pagination.offset = events.value.total - pagination.limit
    return
  }
  pagination.offset += pagination.limit
  listEvents()
}

const previousPage = () => {
  if (pagination.offset <= 0) {
    pagination.offset = 0
    return
  }
  pagination.offset -= pagination.limit
  listEvents()
}

const listEvents = async () => {
  if (!pagination.nameStartsWith) pagination.nameStartsWith = undefined
  isLoading.value = true
  events.value = await marvelStore.events.list(pagination)
  isLoading.value = false
}
</script>

<template>
  <div v-if="isLoading" class="row mt-4 justify-content-center">
    <AppSpinner />
  </div>
  <div v-else-if="events" class="mt-4">
    <div class="text-end pe-2 pe-lg-4 text-muted d-flex justify-content-end align-items-center gap-2">
      <AppInput v-model="pagination.nameStartsWith" @keyup.enter="pagination.offset = 0; listEvents()" placeholder="Search..." type="text" />
      <select v-model="pagination.limit" @change="listEvents" class="form-select w-auto m-0">
        <option>6</option>
        <option>12</option>
        <option>24</option>
      </select>
      <span>
        {{ pagination.offset }}
      </span>
       - 
      <span>
        {{ (events.count || 0) + pagination.offset }}
      </span>
      of
      <span>
        {{ events.total }}
      </span>
      <span role="button" @click="previousPage">
        <AppIcon name="chevron-back" class="fs-4 text-white border rounded-circle bg-primary"/>
      </span>
      <span role="button" @click="nextPage">
        <AppIcon name="chevron-forward" class="fs-4 text-white border rounded-circle bg-primary"/>
      </span>
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
