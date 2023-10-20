<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { CharacterData } from '@/services/marvel/dto'
import AppCard from '@/components/AppCard.vue';
import AppSpinner from '@/components/AppSpinner.vue';
import { useMarvelStore } from '@/stores/marvel';
import AppIcon from '@/components/AppIcon.vue';
import AppInput from '@/components/AppInput.vue';

const marvelStore = useMarvelStore()

const characters = ref<CharacterData>({})
const pagination = reactive({
  limit: 6,
  offset: 0,
  nameStartsWith: undefined,
})
const isLoading = ref(true)

onMounted(async () => {
  await listCharacters()
})

const nextPage = () => {
  if (characters.value.count && characters.value.total && (characters.value.count + pagination.offset >= characters.value.total)) {
    pagination.offset = characters.value.total - pagination.limit
    return
  }
  pagination.offset += pagination.limit
  listCharacters()
}

const previousPage = () => {
  if (pagination.offset <= 0) {
    pagination.offset = 0
    return
  }
  pagination.offset -= pagination.limit
  listCharacters()
}

const listCharacters = async () => {
  if (!pagination.nameStartsWith) pagination.nameStartsWith = undefined
  isLoading.value = true
  characters.value = await marvelStore.characters.list(pagination)
  isLoading.value = false
}
</script>

<template>
  <div v-if="isLoading" class="row mt-4 justify-content-center">
    <AppSpinner />
  </div>
  <div v-else-if="characters" class="mt-4">
    <div class="text-end pe-2 pe-lg-4 text-muted d-flex justify-content-end align-items-center gap-2">
      <AppInput v-model="pagination.nameStartsWith" @keyup.enter="pagination.offset = 0; listCharacters()" placeholder="Search..." type="text" />
      <select v-model="pagination.limit" @change="listCharacters" class="form-select w-auto m-0">
        <option>6</option>
        <option>12</option>
        <option>24</option>
      </select>
      <span>
        {{ pagination.offset }}
      </span>
       - 
      <span>
        {{ (characters.count || 0) + pagination.offset }}
      </span>
      of
      <span>
        {{ characters.total }}
      </span>
      <span role="button" @click="previousPage">
        <AppIcon name="chevron-back" class="fs-4 text-white border rounded-circle bg-primary"/>
      </span>
      <span role="button" @click="nextPage">
        <AppIcon name="chevron-forward" class="fs-4 text-white border rounded-circle bg-primary"/>
      </span>
    </div>
    <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 justify-content-center justify-content-lg-start row-gap-4 column-gap-4 mt-2">
      <AppCard v-for="char of characters.results" :key="char.name" :img-alt="char.name"
        route-name="CharacterDetails" :slug="char.name" :id="char.id"
        :img-src="`${char.thumbnail?.path}.${char.thumbnail?.extension}`"
      >
        <template v-slot:title>
          <span class="fw-bold text-decoration-underline">
            {{ char.name?.toUpperCase() }}
          </span>
        </template>
      </AppCard>
    </div>
  </div>
</template>
