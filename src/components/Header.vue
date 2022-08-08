<template>
  <header class="flex flex-col justify-between items-center text-base">
    <div
      class="px-10 xl:px-44 pt-2 justify-between items-center w-full hidden lg:flex"
    >
      <div class="flex items-center">
        <div class="flex items-center mr-3">
          <img
            src="../assets/icons/heart.svg"
            alt="heart icon"
            class="w-4 h-4"
          />
          <p class="text-gray-400 text-sm ml-3">
            Welcome {{ store?.user?.name }}. We provides
            <span class="text-blue-500 font-semibold">Covid-19</span> medical
            accessories
          </p>
        </div>
        <div class="bg-blue-500 flex items-center rounded-full px-5 py-1 w-max">
          <img
            src="../assets/icons/phone.svg"
            alt="phone icon"
            class="w-5 h-5"
          />
          <p class="text-white font-semibold ml-3">0788318062</p>
        </div>
      </div>
      <div class="flex items-center">
        <div class="flex items-center mr-5">
          <img
            src="../assets/icons/account.svg"
            alt="cart icon"
            class="w-5 h-5"
          />
          <div>
            <router-link
              to="/login"
              class="text-zinc-400 text-sm ml-1 font-semibold hover:text-blue-500"
              >My account</router-link
            >
          </div>
        </div>
        <div class="flex items-center mr-5">
          <img src="../assets/icons/cart.svg" alt="cart icon" class="w-6 h-6" />
          <div class="relative">
            <router-link
              to="/cart"
              class="text-zinc-400 text-sm ml-1 font-semibold hover:text-blue-500"
              >Cart</router-link
            >
            <p
              class="bg-red-500 text-white rounded-full w-4 h-4 text-center text-xs absolute top-0 right-7"
            >
              {{ storeCart.cart.length }}
            </p>
          </div>
        </div>
        <div class="flex items-center">
          <img
            src="../assets/icons/heart-outline.svg"
            alt="cart icon"
            class="w-5 h-5"
          />
          <router-link
            to="/wishlist"
            class="text-zinc-400 text-sm ml-1 font-semibold hover:text-blue-500"
          >
            Wishlist
          </router-link>
        </div>
      </div>
    </div>
    <span class="my-2 h-1 border-b border-b-gray-200 w-full hidden lg:block" />
    <Navigation />
  </header>
</template>

<script lang="ts">
import Navigation from "./Navigation.vue";
import { authStore } from "../store/authStore";
import { cartStore } from "../store/cartStore";

export default {
  components: { Navigation },
  setup() {
    const store = authStore();
    const storeCart = cartStore();
    return {
      store,
      storeCart,
    };
  },
};
</script>

<style></style>
