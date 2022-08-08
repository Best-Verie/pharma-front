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
        <h1 class="font-semibold text-5xl">Login</h1>
      </div>
    </section>
    <section
      class="
        p-10
        xl:py-20 xl:px-32
        border-2 border-blue-100
        my-10
        flex flex-col
        justify-center
        rounded-sm
        xl:mx-auto xl:w-1/2
        mx-5
      "
    >
      <h2 class="text-3xl font-medium mb-20 text-center">Login</h2>
      <form @submit.prevent="submit">
        <div class="flex flex-col mb-10">
          <label>Phone Number</label>
          <input
            type="text"
            class="border-2 border-blue-100 px-5 py-4 my-2"
            placeholder="Enter your phone number"
            v-model="data.phoneNumber"
          />
        </div>

        <div class="flex flex-col">
          <label>Password</label>
          <input
            type="password"
            class="border-2 border-blue-100 px-5 py-4 my-2"
            placeholder="Enter your password"
            v-model="data.password"
          />
        </div>
        <div class="mt-10">
          <button
            class="bg-blue-500 text-white rounded w-full py-3 text-xl"
            type="submit"
            v-if="!store.isLoading"
          >
            Login
          </button>
          <div
            role="status"
            class="grid place-items-center"
            v-show="store.isLoading"
          >
            <svg
              class="
                inline
                mr-2
                w-8
                h-8
                text-gray-200
                animate-spin
                dark:text-gray-600
                fill-blue-600
                justify-center
              "
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
          <div
            class="flex items-center justify-center text-lg font-medium mt-12"
          >
            <p class="text-center my-5">Don't have account?</p>
            &nbsp; &nbsp;
            <router-link
              class="text-blue-500 underline rounded-full py-3"
              to="/register"
            >
              Register
            </router-link>
          </div>
        </div>
      </form>
    </section>
  </ClientLayout>
</template>

<script lang="ts">
import { onMounted, reactive, watchEffect } from "vue";
import { authStore } from "../store/authStore";
import ClientLayout from "../components/ClientLayout.vue";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  setup() {
    const store = authStore();
    const router = useRouter();
    const data = reactive({
      phoneNumber: "",
      password: "",
    });

    watchEffect(() => {
      if (store.isLoggedIn) {
        store.isLoading = false;
      }
    });

    const submit = async () => {
      await store.login(data);
      store.isLoading = true;
      store.isLoggedIn = true;
      router.push("/dashboard");
    };

    onMounted(() => {
      if (store.isLoggedIn) {
        router.push("/dashboard");
      }
    });
    return {
      data,
      store,
      submit,
    };
  },
  components: { ClientLayout },
};
</script>

<style></style>
