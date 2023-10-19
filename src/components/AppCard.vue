<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps<{
  imgAlt?: string,
  imgSrc: string,
  routeName: string,
  slug?: string,
  id?: number,
}>()

const navigate = () => {
  router.push({
    name: props.routeName,
    params: {
      ...(props.slug ? {
        slug: props.slug,
      } : {}),
      ...(props.id ? {
        id: props.id,
      } : {})
    }
  })
}
</script>

<template>
  <div class="row row-cols-1 p-2" role="button" @click="navigate">
    <div class="col">
      <img :alt="`${imgAlt ?? 'Card'} image`"
        :src="imgSrc"
        class="card-img"
      >
    </div>
    <span class="col mt-3 text-start">
      <slot name="title"></slot>
    </span>
    <span class="col mt-1">
      <slot name="description"></slot>
    </span>
  </div>
</template>

<style scoped>
.card-img {
  width: 100%;
  height: 283px;
  border-radius: 4px;
}
@media screen and (max-width: 992px) {
  .card-img {
    width: 100%;
  }
}
</style>