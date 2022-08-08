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
        <h1 class="font-semibold text-3xl xl:text-5xl">Product Details</h1>
      </div>
    </section>
    <section
      class="flex flex-col lg:flex-row justify-between px-10 xl:px-64 my-10"
    >
      <div class="md:w-1/2 md:mx-auto">
        <div class="flex justify-between mb-10">
          <img
            src="../assets/img/facemasks.png"
            class="border-2 border-stone-300 p-5 w-24 h-24"
          />
          <img
            src="../assets/img/facemasks.png"
            class="border-2 border-stone-300 p-5 w-24 h-24"
          />
          <img
            src="../assets/img/facemasks.png"
            class="border-2 border-stone-300 p-5 w-24 h-24"
          />
        </div>
        <img
          src="../assets/img/facemasks.png"
          class="border-2 border-stone-300 p-5 w-full"
        />
      </div>
      <div class="xl:w-3/6 xl:ml-20 mt-10 xl:mt-0">
        <p class="uppercase text-stone-400 font-semibold">Tercera Pharmacy</p>
        <p class="font-bold text-4xl">
          {{ product.StoreProductName }}
        </p>
        <div class="flex mt-2">
          <div class="flex">
            <img src="../assets/icons/star-review.svg" class="w-5 h-5 mr-2" />
            <img src="../assets/icons/star-review.svg" class="w-5 h-5 mr-2" />
            <img src="../assets/icons/star-review.svg" class="w-5 h-5 mr-2" />
            <img src="../assets/icons/star-review.svg" class="w-5 h-5 mr-2" />
            <img src="../assets/icons/star.svg" class="w-5 h-5 mr-2" />
          </div>
          <p class="font-semibold text-stone-400">(05)Reviews</p>
        </div>
        <p class="font-semibold text-orange-700 text-2xl mt-2">
          {{ product.Price }} RWF
        </p>
        <p class="text-blue-500 font-semibold text-xl mt-5">
          {{ product.StockQty }} in stock
        </p>
        <div class="flex flex-col lg:flex-row mt-7">
          <div
            class="flex justify-between bg-red-100 rounded-full py-3 px-3 xl:w-44 lg:mr-10 mb-5 lg:mb-0"
          >
            <p
              class="text-stone-500 text-center text-lg bg-white px-2.5 decrement-icon rounded-full"
              @click="decrement"
            >
              -
            </p>
            <p class="text-stone-500 text-center text-lg">{{ Quantity }}</p>
            <p
              class="text-stone-500 text-center text-lg bg-white px-2 rounded-full increment-icon"
              @click="increment"
            >
              +
            </p>
          </div>
          <button
            class="rounded-full px-14 py-3 bg-orange-700 text-white"
            @click="handleAddToCart({ product })"
          >
            Add to cart +
          </button>
        </div>

        <div class="flex mt-5">
          <p class="font-semibold">SKU:</p>
          <p class="text-stone-400 ml-5">012345</p>
        </div>
      </div>
    </section>
  </ClientLayout>
</template>

<script lang="ts">
import { cartStore } from "../store/cartStore";
import { productStore } from "../store/productStore";
import { ref } from "vue";
import { useRoute } from "vue-router";
import ClientLayout from "../components/ClientLayout.vue";

interface Product {
  HESKU: string;
  LAST_UPDATE_DATE: string;
  Price: string;
  StockQty: number;
  StoreProductName: string;
}
export default {
  setup() {
    const storeCart = cartStore();
    const route = useRoute();
    let Quantity = ref(1);
    const storeProduct = productStore();
    const product: Product = storeProduct.product.filter(
      (product: Product) => product.HESKU === route?.params?.id
    )[0];
    const decrement = () => {
      if (Quantity.value > 1) {
        Quantity.value--;
      }
    };
    const increment = () => {
      if (product.StockQty > Quantity.value) {
        Quantity.value++;
      }
    };
    const handleAddToCart = (data: any) => {
      storeCart.addToCartLocal(data, Quantity.value);
    };
    return {
      decrement,
      Quantity,
      increment,
      storeProduct,
      handleAddToCart,
      product,
    };
  },
  components: { ClientLayout },
};
</script>

<style>
.decrement-icon {
  cursor: pointer;
}
.increment-icon {
  cursor: pointer;
}
</style>
