<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { ComicData } from '@/services/marvel/dto';
import AppSpinner from '@/components/AppSpinner.vue';
import AppCard from '@/components/AppCard.vue';
import AppIcon from '@/components/AppIcon.vue';
import AppInput from '@/components/AppInput.vue';
import { useMarvelStore } from '@/stores/marvel'

const marvelStore = useMarvelStore()

const comics = ref<ComicData>({})
const pagination = reactive({
  limit: 6,
  offset: 0,
  titleStartsWith: undefined,
})
const isLoading = ref(false)

onMounted(async () => {
  await listComics()
})

const nextPage = () => {
  if (comics.value.count && comics.value.total && (comics.value.count + pagination.offset >= comics.value.total)) {
    pagination.offset = comics.value.total - pagination.limit
    return
  }
  pagination.offset += pagination.limit
  listComics()
}

const previousPage = () => {
  if (pagination.offset <= 0) {
    pagination.offset = 0
    return
  }
  pagination.offset -= pagination.limit
  listComics()
}

const listComics = async () => {
  if (!pagination.titleStartsWith) pagination.titleStartsWith = undefined
  isLoading.value = true
  comics.value = await marvelStore.comics.list(pagination)
  isLoading.value = false
}
</script>

<template>
  <div v-if="isLoading" class="row mt-4 justify-content-center">
    <AppSpinner />
  </div>
  <div v-else-if="comics" class="mt-4">
    <div class="text-end pe-2 pe-lg-4 text-muted d-flex justify-content-end align-items-center gap-2">
      <AppInput v-model="pagination.titleStartsWith" @keyup.enter="pagination.offset = 0; listComics()" placeholder="Search..." type="text" />
      <select v-model="pagination.limit" @change="listComics" class="form-select w-auto m-0">
        <option>6</option>
        <option>12</option>
        <option>24</option>
      </select>
      <span>
        {{ pagination.offset }}
      </span>
       - 
      <span>
        {{ (comics.count || 0) + pagination.offset }}
      </span>
      of
      <span>
        {{ comics.total }}
      </span>
      <span role="button" @click="previousPage">
        <AppIcon name="chevron-back" class="fs-4 text-white border rounded-circle bg-primary"/>
      </span>
      <span role="button" @click="nextPage">
        <AppIcon name="chevron-forward" class="fs-4 text-white border rounded-circle bg-primary"/>
      </span>
    </div>
    <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-center justify-content-lg-start row-gap-4 column-gap-4 mt-2">
      <AppCard v-for="com of comics.results" :key="com.title" :img-alt="com.title"
        :img-src="`${com.thumbnail?.path}.${com.thumbnail?.extension}`"
      >
        <template v-slot:title>
          <span class="fw-bold">
            {{ com.title?.toUpperCase() }}
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
