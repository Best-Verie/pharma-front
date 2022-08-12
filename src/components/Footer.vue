<template>
  <footer class="px-10 xl:px-64 pt-20 pb-5">
    <div class="flex justify-between flex-col lg:flex-row">
      <div class="mb-10 lg:mb-0">
        <h5 class="text-lg font-semibold">About Company</h5>
        <p class="text-stone-400 w-64">
          But must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born
        </p>
        <div class="flex mt-5">
          <img src="../assets/icons/facebook.svg" alt="" class="w-7 h-7 mr-5" />
          <img src="../assets/icons/twitter.svg" alt="" class="w-7 h-7 mr-5" />
          <img
            src="../assets/icons/instagram.svg"
            alt=""
            class="w-7 h-7 mr-5"
          />
        </div>
      </div>
      <div>
        <h5 class="text-lg font-semibold mb-2">Payment Methods</h5>
        <img src="../assets/icons/momo.svg" alt="" class="w-20 h-20" />
        <img src="../assets/icons/visa.svg" alt="" class="w-20 h-20" />
      </div>
    </div>
    <div
      class="
        border-t-4 border-t-stone-200
        flex
        justify-between
        flex-col
        md:flex-row
      "
    >
      <p class="pt-4">
        Copyright 2022 <span class="text-orange-600">Tercera</span>. All rights
        reserved
      </p>
      <div class="flex pt-4 flex-col md:flex-row">
        <router-link to="/" class="mr-5">Home</router-link>
        <router-link to="/" class="mr-5">About us</router-link>
        <router-link to="/">Service</router-link>
      </div>
    </div>
  </footer>
</template>

<style></style>
