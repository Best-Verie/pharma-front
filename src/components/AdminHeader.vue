<template>
  <header
    class="flex items-center py-3 justify-end pr-10 border-b border-gray-300"
  >
    <div class="flex items-center cursor-pointer">
      <p class="mr-2">{{ store?.user?.name }}</p>
      <router-link
        to="/profile"
        class="
          relative
          w-8
          h-8
          overflow-hidden
          bg-gray-100
          rounded-full
          dark:bg-gray-600
        "
      >
        <svg
          class="absolute w-10 h-10 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </router-link>
    </div>
    <router-link to="/" class="w-6 h-6 cursor-pointer ml-5">
      <img src="../assets/icons/home-dark.svg" alt="" />
    </router-link>
    <img
      src="../assets/icons/logout.svg"
      alt=""
      class="w-6 h-6 mr-5 cursor-pointer logout-icon"
      @click="logout"
    />
    <img
      src="../assets/icons/menu.svg"
      alt=""
      class="w-5 h-5 ml-10 cursor-pointer xl:hidden"
      @click="toggleMenu"
    />

    <nav
      v-if="open"
      class="absolute top-14 left-0 px-8 py-5 bg-blue-900 w-full xl:hidden"
    >
      <ul>
        <li class="mb-3">
          <router-link
            to="/"
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
        </li>
        <li class="mb-3">
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
              <img
                src="../assets/icons/order.svg"
                alt=""
                class="w-4 h-4 mr-3"
              />
              <span class="flex-1 whitespace-nowrap"> Orders </span>
            </div>
          </router-link>
        </li>

        <li v-show="isSuperAdmin">
          <router-link
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
        </li>

        <li v-show="isSuperAdmin">
          <router-link
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
        </li>
        <li class="mb-3">
          <router-link
            v-show="isSuperAdmin"
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
              <img
                src="../assets/icons/offer.svg"
                alt=""
                class="w-4 h-4 mr-3"
              />
              <span class="flex-1 whitespace-nowrap"> Offers </span>
            </div>
          </router-link>
        </li>
        <li v-show="isSuperAdmin">
          <router-link
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
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { authStore } from "../store/authStore";
export default {
  name: "AdminHeader",
  setup() {
    const store = authStore();
    const currentUser = JSON.parse(
      localStorage.getItem("tercera_user") || "{}"
    );
    const isSuperAdmin = currentUser.role === "SYSTEM_ADMIN";
    const router = useRouter();
    const open = ref(false);
    const toggleMenu = () => {
      open.value = !open.value;
    };

    const logout = () => {
      store.isLoggedIn = false;
      store.user = null;
      localStorage.removeItem("tercera_user");
      localStorage.removeItem("tercera_token");
      router.push("/");
    };
    return {
      logout,
      isSuperAdmin,
      toggleMenu,
      open,
    };
  },
};
</script>

<style>
.logout-icon {
  margin-left: 40px;
}
</style>
