<template>
  <AdminLayout v-show="reviews">
    <section class="px-10 pt-5">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <div class="flex items-center mb-5 lg:mb-0">
          <p class="mr-3">Show</p>
          <select
            id="entries"
            class="bg-white h-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-16 px-2.5"
          >
            <option selected value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <p class="ml-3">Entries</p>
        </div>
        <form class="flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 h-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full px-2.5"
              placeholder="Search"
              required
            />
          </div>
          <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-900 rounded-lg border border-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">Reviewer name</th>
              <th scope="col" class="px-6 py-3">Message</th>
              <th scope="col" class="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b hover:bg-gray-50"
              v-for="review in allReviews"
              :key="review.id"
            >
              <td class="pl-2 flex flex-col items-center lg:flex-row py-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                  alt=""
                  class="w-12 h-12 mr-5 rounded-full"
                />

                <p>{{ review?.createdBy?.name }}</p>
              </td>
              <td class="px-6 py-4">{{ review?.message }}</td>
              <td class="px-6 py-4">{{ dateParser(review?.createdAt) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-end mt-20">
        <vue-awesome-paginate
          :total-items="reviewLn"
          :items-per-page="10"
          :max-pages-shown="5"
          :current-page="1"
          :on-click="onClickHandler"
        />
      </div>
    </section>
  </AdminLayout>
</template>

<script lang="ts">
import AdminLayout from "../components/AdminLayout.vue";
import { reviewsStore } from "../store/reviewsStore";
import { ref } from "vue";
export default {
  components: { AdminLayout },

  setup() {
    const store = reviewsStore();
    const reviews = store.fetchReviews();
    const allReviews = store.getReviews;

    const dateParser = (value: string) => {
      const date = new Date(value);
      return date.toLocaleString(["en-US"], {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    const reviewLn = store.reviews.length;
    const currentReviewPage = ref(store.reviews.slice(0, 20));
    const onClickHandler = (page: number) => {
      const start = (page - 1) * 20;
      const end = page * 20;
      currentReviewPage.value = store.reviews.slice(start, end);
    };
    return {
      reviews,
      dateParser,
      reviewLn,
      onClickHandler,
      allReviews,
    };
  },
};
</script>

<style></style>
