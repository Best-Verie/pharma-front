<template>
  <AdminLayout>
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
              class="bg-gray-50 border h-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full px-2.5"
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
        <router-link
          class="bg-blue-900 text-white py-2 px-4 rounded-lg"
          to="/create-offer"
          >Create Offer</router-link
        >
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">Label</th>
              <th scope="col" class="px-6 py-3">Deadline</th>
              <th scope="col" class="px-6 py-3">Discount</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody v-for="(offerItem, index) in storeOffer?.offers" :key="index">
            <tr class="bg-white border-b hover:bg-gray-50">
              <td class="px-6 py-4">{{ offerItem.label }}</td>
              <td class="px-6 py-4">{{ offerItem.deadline }}</td>
              <td class="px-6 py-4">{{ offerItem.discount }} RWF</td>
              <td class="px-6 py-4">
                <span
                  class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
                  >{{ offerItem.status }}</span
                >
              </td>
              <td class="underline cursor-pointer hover:text-blue-500">
                <button @click="handleOfferDetails({ offerItem })">
                  View more
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex justify-end mt-20">
        <vue-awesome-paginate
          :total-items="offerLn"
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
import router from "../router";
import { offerStore } from "../store/offerStore";
import { ref } from "vue";
export default {
  components: { AdminLayout },
  setup() {
    const storeOffer = offerStore();
    storeOffer.getOffers();
    const handleOfferDetails = (offer: any) => {
      localStorage.setItem("tercera_selectedOffer", JSON.stringify(offer));
      router.push("/offer-details");
    };
    const offerLn = storeOffer.offers.length;
    const currentOfferPage = ref(storeOffer.offers.slice(0, 20));
    const onClickHandler = (page: number) => {
      const start = (page - 1) * 20;
      const end = page * 20;
      currentOfferPage.value = storeOffer.offers.slice(start, end);
    };
    return {
      storeOffer,
      offerLn,
      onClickHandler,
      handleOfferDetails,
    };
  },
};
</script>

<style></style>
