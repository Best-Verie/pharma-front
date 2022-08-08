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
        <h1 class="font-semibold text-5xl">Payment with Momo</h1>
      </div>
    </section>
    <section
      class="p-10 xl:py-20 xl:px-32 border-2 border-blue-100 my-10 flex flex-col justify-center rounded-sm xl:mx-auto xl:w-1/2 mx-5"
    >
      <h2 class="text-3xl font-medium mb-20 text-center">
        Checkout using your MOMO account
      </h2>
      <form @submit.prevent="submit">
        <div class="flex items-center">
          <h5 class="font-medium text-lg">Amount To Pay:</h5>
          <p class="ml-5">{{ storeCart?.cart[0]?.totalPrice }} RWF</p>
        </div>
        <div class="flex flex-col mt-5">
          <label>First name</label>
          <input
            type="text"
            class="border-2 border-blue-100 px-5 py-4 my-2"
            placeholder="Enter your first name"
            v-model="data.firstname"
          />
        </div>
        <div class="flex flex-col mt-5">
          <label>Last name</label>
          <input
            type="text"
            class="border-2 border-blue-100 px-5 py-4 my-2"
            placeholder="Enter your last name"
            v-model="data.lastname"
          />
        </div>
        <div class="flex flex-col mt-5">
          <label>Email</label>
          <input
            type="text"
            class="border-2 border-blue-100 px-5 py-4 my-2"
            placeholder="Enter your email"
            v-model="data.email"
          />
        </div>
        <div class="flex flex-col mt-5">
          <label>Phone number</label>
          <input
            type="text"
            class="border-2 border-blue-100 px-5 py-4 my-2"
            placeholder="Enter your momo phone number"
            v-model="data.phonenumber"
          />
        </div>
        <div class="mt-10">
          <button
            class="bg-blue-500 text-white rounded w-full py-3 text-xl"
            type="submit"
          >
            Place Order
          </button>
        </div>
      </form>
    </section>
  </ClientLayout>
</template>

<script lang="ts">
import { reactive } from "vue";
import { cartStore } from "../store/cartStore";
import { checkoutStore } from "../store/checkoutStore";
import ClientLayout from "../components/ClientLayout.vue";

export default {
  name: "Login",
  setup() {
    const storeCart = cartStore();
    const storeCheckout = checkoutStore();
    const data = reactive({
      phonenumber: "",
      firstname: "",
      lastname: "",
      amount: "10",
      email: "",
      is_mobile_money_gh: 1,
      redirect_url: "https://rave-webhook.herokuapp.com/receivepayment",
      device_fingerprint: "69e6b7f0b72037aa8428b70fbe03986c",
      txRef: "MC-" + Math.floor(Math.random() * 1000000),
      orderRef: "MC_" + Math.floor(Math.random() * 1000000),
    });
    function generateRandomNumber() {
      return Math.floor(Math.random() * 1000000);
    }
    const submit = async () => {
      storeCheckout.placeOrderMOMO(data);
    };
    return {
      data,
      submit,
      generateRandomNumber,
      storeCart,
    };
  },
  components: { ClientLayout },
};
</script>

<style></style>
