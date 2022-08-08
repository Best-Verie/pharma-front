<template>
  <ClientLayout>
    <section class="relative">
      <img
        src="../assets/img/registerhero.jpg"
        alt="Hero image"
        class="h-72 xl:h-full"
      />
      <div
        class="absolute top-20 left-10 xl:top-40 xl:left-64 bg-white border-l-4 border-l-blue-500 p-10"
      >
        <h1 class="font-semibold text-5xl">Review</h1>
      </div>
    </section>
    <section
      class="p-10 xl:py-20 xl:px-32 border-2 border-blue-100 my-10 flex flex-col justify-center rounded-sm xl:mx-auto xl:w-1/2 mx-5"
    >
      <h2 class="text-3xl font-medium mb-20 text-center">Review</h2>
      <form @submit.prevent="submit">
        <div class="flex flex-col">
          <label>Rating</label>
          <vue3-star-ratings
            v-model="data.rates"
            step="1"
            showControl="false"
          />
        </div>
        <div class="flex flex-col mb-10">
          <label>Message</label>
          <textarea
            type="text"
            class="border-2 border-blue-100 px-5 py-4 my-2"
            placeholder=""
            v-model="data.message"
          />
        </div>

        <div class="mt-10">
          <button
            class="bg-blue-500 text-white rounded w-full py-3 text-xl"
            type="submit"
          >
            Send Review
          </button>
        </div>
      </form>
    </section>
  </ClientLayout>
</template>

<script lang="ts">
import { reactive } from "vue";
import ClientLayout from "../components/ClientLayout.vue";
import { reviewsStore } from "../store/reviewsStore";

export default {
  name: "Review",
  setup() {
    const store = reviewsStore();
    const data = reactive({
      message: "",
      rates: "",
    });

    const submit = async () => {
      await store.postReview(data);
    };

    return {
      data,
      store,
      submit,
    };
  },
  components: { ClientLayout },
};
</script>

<style>
.vue3-star-ratings__wrapper {
  margin-left: 0px !important;
  padding-left: 0px !important;
}
.vue3-star-ratings button {
  display: none !important;
}
</style>
