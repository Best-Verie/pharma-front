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
        <h1 class="font-semibold text-5xl">Cart</h1>
      </div>
    </section>
    <section class="my-10 px-10 xl:px-72">
      <table class="w-full block md:table overflow-x-auto lg:overflow-hidden">
        <thead>
          <tr>
            <th class="text-stone-500 p-2">Images</th>
            <th class="text-stone-500 p-2">Product</th>
            <th class="text-stone-500 p-2">Unit Price</th>
            <th class="text-stone-500 p-2">Quantity</th>
            <th class="text-stone-500 p-2">Total</th>
            <th class="text-stone-500 p-2">Remove</th>
          </tr>
        </thead>
        <tbody
          class="px-5"
          v-for="(cartItem, index) in storeCart?.cart"
          :key="index"
        >
          <tr>
            <td>
              <img
                src="../assets/img/inhaler.png"
                alt="product image"
                class="w-12 mx-auto py-10"
              />
            </td>
            <td>
              <router-link
                :to="`/product/${cartItem.HESKU}`"
                class="text-stone-500 text-center text-lg"
                >{{ cartItem.StoreProductName }}</router-link
              >
            </td>
            <td>
              <p class="text-stone-500 text-center text-lg">
                {{ formatCurrency(cartItem.Price) }}
              </p>
            </td>
            <td>
              <div
                class="
                  flex flex-col
                  lg:flex-row
                  justify-between
                  bg-red-100
                  rounded-full
                  py-2
                  px-3
                  w-14
                  lg:w-40
                  mx-auto
                "
              >
                <p
                  class="
                    text-stone-500 text-center text-lg
                    bg-white
                    px-2.5
                    rounded-full
                    cursor-pointer
                  "
                  @click="decrement(cartItem.HESKU)"
                >
                  -
                </p>
                <p class="text-stone-500 text-center text-lg">
                  {{ cartItem.Quantity }}
                </p>
                <p
                  class="
                    text-stone-500 text-center text-lg
                    bg-white
                    px-2
                    rounded-full
                    cursor-pointer
                  "
                  @click="increment(cartItem.HESKU, cartItem.StockQty)"
                >
                  +
                </p>
              </div>
            </td>
            <td>
              <p class="text-stone-500 text-center text-lg">
                {{ formatCurrency(cartItem.Price * cartItem.Quantity) }}
              </p>
            </td>
            <td>
              <p
                class="
                  text-stone-500 text-center text-lg
                  font-bold
                  cursor-pointer
                "
                @click="handleRemoveCartItem(cartItem.HESKU)"
              >
                x
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="xl:flex xl:justify-between">
        <div class="my-10 xl:w-5/12">
          <div class="flex space-x-">
            <button
              class="
                bg-blue-500
                text-white
                rounded-full
                py-2
                text-lg
                px-5
                mt-10
                mr-5
              "
              @click="handleCheckout"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>

        <div
          class="
            p-6
            ml-2
            my-4
            bg-white
            rounded-lg
            border border-gray-200
            shadow-md
            w-full
          "
        >
          <h1 class="mb-3 font-bold text-dark-700">Total Price:</h1>
          <p class="mb-3 font-gray text-gray-700">
            {{ formatCurrency(totalCartPrice()) }}
          </p>
        </div>
      </div>
    </section>
  </ClientLayout>
</template>

<script lang="ts">
import { cartStore } from "../store/cartStore";
import { authStore } from "../store/authStore";
import router from "../router/index";
import { ref } from "vue";
import ClientLayout from "../components/ClientLayout.vue";

export default {
  setup() {
    let Quantity = ref(1);
    const storeCart = cartStore();
    const storeAuth = authStore();

    const handleCheckout = () => {
      storeCart.createCart(storeCart.cart);
      router.push("/checkout");
    };

    const formatCurrency = (value: any) => {
      return value.toLocaleString("kin-RW", {
        style: "currency",
        currency: "RWF",
      });
    };

    const decrement = (id: string) => {
      storeCart.decrementQty(id);
    };
    const increment = (id: string, stockQty: number) => {
      if (stockQty > Quantity.value) {
        storeCart.incrementQty(id);
      }
    };
    const handleRemoveCartItem = (id: string) => {
      storeCart.removeCartItem(id);
    };

    const totalCartPrice = () => {
      let total = 0;
      storeCart.cart.forEach((item: any) => {
        total += item.Price * item.Quantity;
      });
      return total;
    };

    return {
      storeCart,
      storeAuth,
      handleCheckout,
      decrement,
      increment,
      formatCurrency,
      totalCartPrice,
      handleRemoveCartItem,
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
