<template>
  <div
    class="block p-6 w-64 xl:w-52 2xl:w-80 mb-8 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
    v-for="summary in summaries"
  >
    <h2 class="text-center">{{ summary.title }}</h2>
    <p class="text-gray-600 text-center">{{ summary.description }}</p>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import Summary from "../types/summary";

export default {
  props: {
    summaries: {
      type: Array as PropType<Summary[]>,
      required: true,
    },
  },
};
</script>

<style></style>
