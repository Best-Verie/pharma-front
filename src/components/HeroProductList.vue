<template>
  <div
    class="heroProductTop grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8"
  >
    <div class="relative" v-for="heroProduct in heroProducts.slice(0, 3)">
      <img :src="heroProduct.image" alt="" />
      <div class="absolute top-10 xl:top-20 left-5 xl:left-12 right-12">
        <p class="text-zinc-500 xl:text-lg">{{ heroProduct.title }}</p>
        <h2 class="font-medium xl:text-4xl mt-3">{{ heroProduct.subtitle }}</h2>
        <button
          class="border-b-2 border-b-orange-600 text-orange-600 mt-4 text-sm xl:mt-6 uppercase font-medium hover:text-blue-500 hover:border-b-blue-500"
        >
          Shop now +
        </button>
      </div>
    </div>
  </div>
  <div class="heroProductBottom grid grid-cols-1 xl:grid-cols-2 gap-4">
    <div class="relative" v-for="heroProduct in heroProducts.slice(3, 5)">
      <img :src="heroProduct.image" alt="" />
      <div class="absolute top-5 xl:top-20 left-5 xl:left-12 right-12">
        <p class="text-zinc-500 xl:text-lg">{{ heroProduct.title }}</p>
        <h2 class="font-medium xl:text-4xl xl:mt-3">
          {{ heroProduct.subtitle }}
        </h2>
        <button
          class="border-b-2 border-b-orange-600 text-orange-600 mt-4 text-sm xl:mt-6 uppercase font-medium hover:text-blue-500 hover:border-b-blue-500"
        >
          Shop now +
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import HeroProduct from "../types/heroProducts";

export default defineComponent({
  props: {
    heroProducts: {
      type: Array as PropType<HeroProduct[]>,
      required: true,
    },
  },
});
</script>

<style>
.heroProductTop {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
</style>
