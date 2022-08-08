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
        <h1 class="font-semibold text-5xl">Shop</h1>
      </div>
    </section>
    <section class="px-10 xl:px-64 py-10 mt-20">
      <h2 class="text-center mb-24 text-xl font-semibold">
        Showing 20 of {{ storeProduct.product.length }} products
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 relative"
      >
        <ProductCard :products="currentProductPage" />
      </div>
      <div class="flex justify-center mt-20">
        <vue-awesome-paginate
          :total-items="lnth"
          :items-per-page="20"
          :max-pages-shown="5"
          :current-page="1"
          :on-click="onClickHandler"
        />
      </div>
    </section>
  </ClientLayout>
</template>

<script lang="ts">
import ProductCard from "../components/ProductCard.vue";
import { productStore } from "../store/productStore";
import { ref } from "vue";
import ClientLayout from "../components/ClientLayout.vue";

export default {
  components: {
    ProductCard,
    ClientLayout,
  },
  setup() {
    const storeProduct = productStore();
    const lnth=storeProduct.product.length;

    const products = storeProduct.getProducts();
    const currentProductPage = ref(storeProduct.product.slice(0, 20));
    const onClickHandler = (page: number) => {
      const start = (page - 1) * 20;
      const end = page * 20;
      currentProductPage.value = storeProduct.product.slice(start, end);
    };
    return {
      products,
      storeProduct,
      onClickHandler,
      currentProductPage,
    };
  },
};
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
