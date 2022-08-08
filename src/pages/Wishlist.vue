<template>
  <ClientLayout>
    <section class="relative">
      <img
        src="../assets/img/registerhero.jpg"
        alt="Hero image"
        class="h-72 xl:h-full"
      />
      <div
        class="
          absolute
          top-20
          left-10
          xl:top-40 xl:left-64
          bg-white
          border-l-4 border-l-blue-500
          p-10
        "
      >
        <h1 class="font-semibold text-5xl">Wishlist</h1>
      </div>
    </section>
    <section class="my-10 px-10 xl:px-72">
      <table class="w-full block md:table overflow-x-auto lg:overflow-hidden">
        <thead>
          <tr>
            <th class="text-stone-500 p-2">Images</th>
            <th class="text-stone-500 p-2">Product</th>
            <th class="text-stone-500 p-2">Unit Price</th>
            <th class="text-stone-500 p-2">Stock Quantity</th>
            <th class="text-stone-500 p-2">Remove</th>
          </tr>
        </thead>
        <tbody class="px-5">
          <tr
            v-for="(wishlistItem, index) in storeWishlist.wishlist.items"
            :key="index"
          >
            <td>
              <img
                src="../assets/img/inhaler.png"
                alt="product image"
                class="w-12 mx-auto py-10"
              />
            </td>
            <td>
              <router-link
                :to="`/product/${wishlistItem.HESKU}`"
                class="text-stone-500 text-center text-lg"
                >{{ wishlistItem.StoreProductName }}</router-link
              >
            </td>
            <td>
              <p class="text-stone-500 text-center text-lg">
                {{ wishlistItem.Price }} RWF
              </p>
            </td>
            <td>
              <p class="text-stone-500 text-center text-lg">
                {{ wishlistItem.StockQty }}
              </p>
            </td>
            <td>
              <button
                @click="handleRemoveFromWishlist(wishlistItem)"
                class="text-stone-500 text-center text-lg font-bold w-full"
              >
                x
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </ClientLayout>
</template>

<script lang="ts">
import { wishlistStore } from "../store/wishlistStore";
import { authStore } from "../store/authStore";
import ClientLayout from "../components/ClientLayout.vue";

export default {
  setup() {
    const storeWishlist = wishlistStore();
    const storeAuth = authStore();
    const handleRemoveFromWishlist = (product: any) => {
      storeWishlist.removeFromWishlist(product);
    };
    return {
      storeWishlist,
      storeAuth,
      handleRemoveFromWishlist,
    };
  },
  components: { ClientLayout },
};
</script>

<style>
td,
th {
  border: 3px solid #eff6ff;
}
</style>
