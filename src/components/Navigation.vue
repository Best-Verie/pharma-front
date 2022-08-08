<template>
  <div
    class="
      px-10
      xl:px-44
      pb-5
      pt-5
      lg:pt-0
      flex
      items-center
      justify-between
      w-full
    "
  >
    <router-link to="/" class="flex flex-row items-center">
      <img
        src="../assets/img/terceraLogo.jpg"
        alt="pharmacy logo"
        class="w-40 h-20"
      />
    </router-link>
    <div class="flex items-center justify-between w-3/5" v-show="!isMobile">
      <nav class="flex">
        <router-link
          to="/"
          class="mr-8 hover:text-blue-500 font-semibold text-gray-400"
          >Home</router-link
        >
        <router-link
          to="/shop"
          class="mr-8 hover:text-blue-500 font-semibold text-gray-400"
          >Shop</router-link
        >
        <!-- <div
          class="mr-8 hover:text-blue-500 font-semibold text-gray-400 categories relative cursor-pointer"
        >
          Categories

          <div
            class="absolute w-max py-3 px-5 flex flex-col bg-white border-t-4 border-blue-500 categories-dropdown left-0 top-12 z-50 opacity-0"
          >
            <router-link to="/shop" class="hover:text-blue-500 mb-5">
              Sanitizer</router-link
            >
            <router-link to="/shop" class="hover:text-blue-500 mb-5">
              Face Mask</router-link
            >
            <router-link to="/shop" class="hover:text-blue-500">
              Gloves</router-link
            >
          </div>
        </div> -->
        <router-link
          to="/Contact"
          class="hover:text-blue-500 font-semibold text-gray-400"
          >Contact</router-link
        >
      </nav>
      <div class="relative search-input">
        <input
          v-on:keyup.enter="onEnter"
          type="search"
          v-model="searchInput"
          placeholder="Search"
          class="bg-gray-100 rounded-full px-4 py-3 font-semibold w-full"
        />
      </div>
    </div>
    <button class="block lg:hidden" @click="toggleMobileNav">
      <img src="../assets/icons/menu.svg" alt="menu icon" class="w-8 h-8" />
    </button>
    <transition>
      <nav
        v-show="mobileNav"
        class="
          flex flex-col
          absolute
          top-28
          bg-white
          left-0
          right-0
          px-10
          py-5
          z-50
        "
      >
        <router-link
          to="/"
          class="mb-8 hover:text-blue-500 font-semibold text-gray-400"
          >Home</router-link
        >
        <router-link
          to="/shop"
          class="mb-8 hover:text-blue-500 font-semibold text-gray-400"
          >Shop</router-link
        >
        <router-link
          to="/Categories"
          class="mb-8 hover:text-blue-500 font-semibold text-gray-400"
          >Categories</router-link
        >
        <router-link
          to="/Contact"
          class="mb-8 hover:text-blue-500 font-semibold text-gray-400"
          >Contact</router-link
        >
        <div class="relative">
          <input
            type="search"
            placeholder="Search"
            class="bg-gray-100 rounded-full px-4 py-3 font-semibold w-full"
          />
          <img
            src="../assets/icons/search.svg"
            alt="search icon"
            class="w-4 h-4 absolute right-5 top-4"
          />
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { productStore } from "../store/productStore";
import { mapActions, mapState } from "pinia";

export default defineComponent({
  data() {
    return {
      mobileNav: false,
      isMobile: false,
      searchInput: "",
    };
  },

  async created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  async mounted() {
    await this.getProducts();
  },
  methods: {
    ...mapActions(productStore, ["getProducts", "filterProducts"]),
    onEnter() {
      this.filterProducts(this.searchInput);
      this.$router.push({
        name: "Search",
        params: { query: this.searchInput },
      });
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      if (window.innerWidth <= 1000) {
        this.isMobile = true;
        return;
      }
      this.isMobile = false;
      this.mobileNav = false;
      return;
    },
  },

  computed: {
    ...mapState(productStore, ["product"]),
  },
});
</script>

<style>
.categories:hover .categories-dropdown {
  opacity: 100%;
  color: #9ca3af;
}
.search-input {
  width: 40%;
}
</style>
