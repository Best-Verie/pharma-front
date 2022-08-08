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
        <h1 class="font-semibold text-5xl">Register</h1>
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
      <h2 class="text-3xl font-medium mb-20 text-center">Register</h2>
      <form @submit.prevent="submit">
        <div class="flex flex-col mb-10">
          <label>Name</label>
          <input
            type="text"
            class="border-2 border-blue-100 px-5 py-4 my-2"
            placeholder="Enter your name"
            v-model="data.name"
          />
        </div>
        <div class="flex flex-col mb-10">
          <label>Gender</label>
          <input
            type="text"
            class="border-2 border-blue-100 px-5 py-4 my-2"
            placeholder="Enter your gender"
            v-model="data.gender"
          />
        </div>
        <div class="flex flex-col mb-10">
          <label>Phone Number</label>
          <input
            type="text"
            class="border-2 border-blue-100 px-5 py-4 my-2"
            placeholder="Enter your phone number"
            v-model="data.phoneNumber"
          />
        </div>
        <div class="flex flex-col mb-10">
          <label>Email address</label>
          <input
            type="text"
            class="border-2 border-blue-100 px-5 py-4 my-2"
            placeholder="Enter you email address"
            v-model="data.email"
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
          >
            Register
          </button>
          <div
            class="flex items-center justify-center text-lg font-medium mt-12"
          >
            <p class="text-center my-5">Already have account?</p>
            &nbsp; &nbsp;
            <router-link
              class="text-blue-500 underline rounded-full py-3"
              to="/login"
            >
              Log In
            </router-link>
          </div>
        </div>
      </form>
    </section>
  </ClientLayout>
</template>

<script lang="ts">
import { reactive } from "vue";
import { authStore } from "../store/authStore";
import ClientLayout from "../components/ClientLayout.vue";

export default {
  name: "Register",
  setup() {
    const store = authStore();
    const data = reactive({
      name: "",
      gender: "",
      phoneNumber: "",
      email: "",
      password: "",
    });

    const resetForm = () => {
      Object.assign(data, {
        name: "",
        gender: "",
        phoneNumber: "",
        email: "",
        password: "",
      });
    };

    const submit = async () => {
      store.register(data);
      resetForm();
    };

    return {
      data,
      submit,
    };
  },
  components: { ClientLayout },
};
</script>

<style></style>
