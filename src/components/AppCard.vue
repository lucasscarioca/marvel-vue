<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps<{
  imgAlt?: string,
  imgSrc: string,
  routeName?: string,
  slug?: string,
  id?: number,
  sideImage?: boolean,
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
  <div class="row p-2 p-lg-0 gap-2 gap-lg-0" :role="routeName ? 'button' : undefined"
    @click="routeName ? navigate() : undefined"
  >
    <div :class="sideImage ? 'col-lg-6' : 'col-12'">
      <img :alt="`${imgAlt ?? 'Card'} image`"
        :src="imgSrc" class="card-img"
      >
    </div>
    <div :class="sideImage ? 'col-lg-6' : 'col-12'">
      <div class="row">
        <div class="col-lg-12 pt-3 pt-lg-1">
          <slot name="title"></slot>
        </div>
        <div class="col-lg-12 pt-2">
            <slot name="description"></slot>
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-else class="row row-cols-1 p-2" :role="routeName ? 'button' : undefined"
    @click="routeName ? navigate() : null"
  >
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
  </div> -->
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