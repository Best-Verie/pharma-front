<template>
  <aside class="sidebar hidden fixed w-52 xl:block" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-blue-900 h-screen">
      <img src="../assets/img/terceraLogo.jpg" alt="Logo" class="w-44 h-16" />
      <ul class="space-y-2 mt-5">
        <router-link
          to="/dashboard"
          class="
            flex
            items-center
            p-2
            text-base
            font-normal
            rounded-lg
            text-gray-300
            hover:text-white hover:bg-blue-800
          "
        >
          <div class="flex items-center">
            <img src="../assets/icons/home.svg" alt="" class="w-4 h-4 mr-3" />
            <span class="flex-1 whitespace-nowrap"> Dashboard </span>
          </div>
        </router-link>
        <router-link
          to="/orders"
          class="
            flex
            items-center
            p-2
            text-base
            font-normal
            rounded-lg
            text-gray-300
            hover:text-white hover:bg-blue-800
          "
        >
          <div class="flex items-center">
            <img src="../assets/icons/order.svg" alt="" class="w-4 h-4 mr-3" />
            <span class="flex-1 whitespace-nowrap"> Orders </span>
          </div>
        </router-link>

        <router-link
          v-show="isSuperAdmin"
          to="/customers"
          class="
            flex
            items-center
            p-2
            text-base
            font-normal
            rounded-lg
            text-gray-300
            hover:text-white hover:bg-blue-800
          "
        >
          <div class="flex items-center">
            <img
              src="../assets/icons/account.svg"
              alt=""
              class="w-4 h-4 mr-3"
            />
            <span class="flex-1 whitespace-nowrap"> Customers </span>
          </div>
        </router-link>

        <router-link
          v-show="isSuperAdmin"
          to="/admin/products"
          class="
            flex
            items-center
            p-2
            text-base
            font-normal
            rounded-lg
            text-gray-300
            hover:text-white hover:bg-blue-800
          "
        >
          <div class="flex items-center">
            <img
              src="../assets/icons/account.svg"
              alt=""
              class="w-4 h-4 mr-3"
            />
            <span class="flex-1 whitespace-nowrap"> Products </span>
          </div>
        </router-link>
        <router-link
          v-if="isSuperAdmin"
          to="/offers"
          class="
            flex
            items-center
            p-2
            text-base
            font-normal
            rounded-lg
            text-gray-300
            hover:text-white hover:bg-blue-800
          "
        >
          <div class="flex items-center">
            <img src="../assets/icons/offer.svg" alt="" class="w-4 h-4 mr-3" />
            <span class="flex-1 whitespace-nowrap"> Offers </span>
          </div>
        </router-link>
        <router-link
          v-show="isSuperAdmin"
          to="/reviews"
          class="
            flex
            items-center
            p-2
            text-base
            font-normal
            rounded-lg
            text-gray-300
            hover:text-white hover:bg-blue-800
          "
        >
          <div class="flex items-center">
            <img
              src="../assets/icons/reviews.svg"
              alt=""
              class="w-4 h-4 mr-3"
            />
            <span class="flex-1 whitespace-nowrap"> Reviews </span>
          </div>
        </router-link>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
export default {
  props: {
    isSuperAdmin: {
      type: Boolean,
      default: false,
    },
  },
  
};
</script>

<style>
.sidebar {
  width: 14.3rem;
  z-index: 1;
  overflow-x: hidden;
}
</style>
