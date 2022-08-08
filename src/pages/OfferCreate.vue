<template>
  <AdminLayout>
    <section
      class="p-10 xl:py-20 xl:px-32 my-10 flex flex-col rounded-sm xl:mx-auto xl:w-2/3 mx-5"
    >
      <form @submit.prevent="submit">
        <div class="flex justify-between items-center">
          <div class="flex flex-col mb-10 w-1/2 mr-5">
            <label>Label</label>
            <input
              type="text"
              class="border-2 border-blue-100 px-5 py-4"
              placeholder=""
              v-model="data.label"
            />
          </div>
          <div class="flex flex-col mb-10 w-1/2 relative">
            <label>Products</label>
            <input
              type="search"
              v-model="searchText"
              placeholder="Search product"
              class="px-5 py-4 bg-white border-2 border-blue-100"
            />
            <ul
              class="bg-white border-2 border-blue-100 px-5 h-52 overflow-auto absolute top-24"
              v-if="searchText && !selectedProduct"
            >
              <li
                v-for="data in filteredList()"
                :key="data"
                class="py-2 cursor-pointer"
                @click="selectProduct(data)"
              >
                {{ data.StoreProductName }}
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex flex-col mb-10 w-1/2 mr-5">
            <label>Discount</label>
            <input
              type="number"
              class="border-2 border-blue-100 px-5 py-4 my-2"
              placeholder=""
              v-model="data.discount"
            />
          </div>
          <div class="flex flex-col mb-10 w-1/2">
            <label>Description</label>
            <input
              type="text"
              class="border-2 border-blue-100 px-5 py-4 my-2"
              placeholder=""
              v-model="data.description"
            />
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex flex-col mb-10 w-1/2 mr-5">
            <label>Status</label>
            <select
              class="px-5 py-4 bg-white border-2 border-blue-100"
              @change="handleChange"
            >
              <option value="OPEN">OPEN</option>
              <option value="CLOSED">CLOSED</option>
            </select>
          </div>
          <div class="flex flex-col mb-10 w-1/2">
            <label>Deadline</label>
            <input
              type="date"
              class="border-2 border-blue-100 px-5 py-4 my-2"
              v-model="data.deadline"
            />
          </div>
        </div>
        <div class="mt-10">
          <button
            class="bg-blue-500 text-white rounded w-full py-3 text-xl"
            type="submit"
          >
            Create offer
          </button>
        </div>
      </form>
    </section>
  </AdminLayout>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import AdminLayout from "../components/AdminLayout.vue";
import { offerStore } from "../store/offerStore";
import { productStore } from "../store/productStore";
export default {
  components: { AdminLayout },
  setup() {
    const storeOffer = offerStore();
    const storeProduct = productStore();
    const data = reactive({
      label: "",
      medicines: [],
      discount: "",
      description: "",
      status: "",
      deadline: "",
    });

    storeOffer.getOffers();
    storeProduct.getProducts();
    const submit = () => {
      storeOffer.createOffer(data);
    };
    const handleChange = (e: any) => {
      data.status = e.target.value;
    };

    let searchText = ref("");
    let selectedProduct = ref("");
    function filteredList() {
      return storeProduct.product.filter((data: any) =>
        data.StoreProductName.toLowerCase().includes(
          searchText.value.toLowerCase()
        )
      );
    }

    console.log("selectedProduct", selectedProduct.value);
    const selectProduct = (product: any) => {
      data.medicines.push(product);
      searchText.value = product.StoreProductName;
      selectedProduct.value = product.StoreProductName;
    };

    return {
      storeOffer,
      data,
      submit,
      handleChange,
      storeProduct,
      searchText,
      filteredList,
      selectProduct,
    };
  },
};
</script>

<style></style>
