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
              class="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full px-2.5"
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
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Product Code</th>
              <th scope="col" class="px-6 py-3">Stock Quantity</th>
              <th scope="col" class="px-6 py-3">Unit Price</th>
              <th scope="col" class="px-6 py-3">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b hover:bg-gray-50"
              v-for="product in currentProductPage"
              :key="product.HESKU"
            >
              <td class="pl-2 flex flex-col items-center lg:flex-row py-4">
                <img
                  :src="`${IMAGE_CDN_URL}/c_fill,g_center,h_60,w_60/${product.HESKU}.png`"
                  alt=""
                  class="w-12 h-12 mr-5 rounded-full"
                />

                <p>{{ product?.StoreProductName }}</p>
              </td>
              <td class="px-6 py-4">{{ product?.HESKU }}</td>
              <td class="px-6 py-4">{{ product?.StockQty }}</td>
              <td class="px-6 py-4">{{ product?.Price }}</td>
              <td class="px-6 py-4">
                {{ dateParser(product?.LAST_UPDATE_DATE) }}
              </td>
              <td
                class="underline cursor-pointer hover:text-blue-500 text-center"
              >
                <button @click="handleProductDetails(product)">
                  View more
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end mt-20">
        <vue-awesome-paginate
          :total-items="prodln"
          :items-per-page="20"
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
import { productStore } from "../store/productStore";
import { IMAGE_CDN } from "../utils/images_cdn";
import router from "../router";
import { ref } from "vue";

export default {
  components: { AdminLayout },

  setup() {
    const storeProduct = productStore();
    const products = storeProduct.getProducts();
    const currentProductPage = ref(storeProduct.product.slice(0, 20));

    const IMAGE_CDN_URL = IMAGE_CDN;
    const prodln = storeProduct.product.length;
    console.log(prodln);

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

    const handleProductDetails = (product: any) => {
      localStorage.setItem("tercera_selectedProduct", JSON.stringify(product));
      router.push(`/admin/products/${product.HESKU}`);
    };
    const onClickHandler = (page: number) => {
      const start = (page - 1) * 20;
      const end = page * 20;
      currentProductPage.value = storeProduct.product.slice(start, end);
    };

    return {
      currentProductPage,
      products,
      dateParser,
      onClickHandler,
      IMAGE_CDN_URL,
      handleProductDetails,
      prodln,
    };
  },
};
</script>

<style></style>
