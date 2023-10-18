<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import AppIcon from './AppIcon.vue';
const route = useRoute()
const router = useRouter()

const navigate = (name: string) => {
  if (route.name !== name) {
    router.push({name})
  }
}
</script>

<template>
  <div class="container m-0 p-0">
    <div class="row align-items-center m-0 p-0">
      <div role="button" class="col-auto m-0 p-0" @click="navigate('Home')">
        <AppIcon name="home" icon-class="text-muted fs-6 me-2" />
      </div>
      <span class="col-auto m-0 p-0 text-muted fs-7" v-for="crumbs of route.meta.breadcrumbs" :key="crumbs">
        <span v-if="route.params.slug">
          <span role="button" @click="navigate(crumbs)">
            {{ crumbs }}
          </span>
          <span class="mx-2">/</span>
          {{ route.params.slug }}
        </span>
        <span v-else>
          {{ crumbs }}
        </span>
      </span>
    </div>
  </div>
</template>
