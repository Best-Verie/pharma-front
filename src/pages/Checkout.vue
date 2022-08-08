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
        <h1 class="font-semibold text-5xl">Checkout</h1>
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
          v-for="(orderItem, index) in storeCart?.cart"
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
                :to="`/product/:${orderItem.HESKU}`"
                class="text-stone-500 text-center text-lg"
                >{{ orderItem.StoreProductName }}</router-link
              >
            </td>
            <td>
              <p class="text-stone-500 text-center text-lg">
                {{ orderItem.Price }} RWF
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
                  {{ orderItem.Quantity }}
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
                {{ orderItem.Price * orderItem.Quantity }} RWF
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
          <h2 class="text-xl font-medium mb-5">Order Totals</h2>
          <div class="flex justify-between border border-blue-100 p-2">
            <p>Subtotal</p>
            <p>{{ totalPrice }} RWF</p>
          </div>
          <div
            class="flex justify-between border border-t-0 border-blue-100 p-2"
          >
            <p>Total</p>
            <p>{{ totalPrice }} RWF</p>
          </div>
          <div class="flex items-center">
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
              @click="
                handlePayWithMomo({
                  cart_item: storeCart?.cartOrder[2]?.id,
                  delivery_fee: 200,
                  status: 'PENDING',
                })
              "
            >
              Pay with Momo
            </button>
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
              @click="
                handlePayWithCard({
                  cart_item: storeCart?.cartOrder[2]?.id,
                  delivery_fee: 200,
                  status: 'PENDING',
                })
              "
            >
              Pay with Card
            </button>
          </div>
        </div>
      </div>
    </section>
  </ClientLayout>
</template>

<script lang="ts">
import { ref } from "vue";
import router from "../router";
import { authStore } from "../store/authStore";
import { cartStore } from "../store/cartStore";
import { orderStore } from "../store/orderStore";
import ClientLayout from "../components/ClientLayout.vue";

export default {
  setup() {
    let Quantity = ref(1);
    const storeOrder = orderStore();
    const storeAuth = authStore();
    const storeCart = cartStore();
    storeOrder.getOrders();
    storeCart.getCartItems(storeAuth.user.id);
    const handlePayWithMomo = (data: any) => {
      storeOrder.makeOrder(data);
      router.push("/paymomo");
    };
    const handlePayWithCard = (data: any) => {
      storeOrder.makeOrder(data);
      router.push("/paycard");
    };
    const decrement = (id: string) => {
      if (Quantity.value > 1) {
        Quantity.value--;
        storeCart.decrementQty(id);
      }
    };
    const increment = (id: string, stockQty: number) => {
      if (stockQty > Quantity.value) {
        Quantity.value++;
        storeCart.incrementQty(id);
      }
    };
    const handleRemoveCartItem = (id: string) => {
      storeCart.removeCartItem(id);
    };
    let totalPrice = 0;
    storeCart.cart.forEach((item: any) => {
      totalPrice += item.Price * item.Quantity;
    });
    return {
      storeOrder,
      storeAuth,
      storeCart,
      handlePayWithMomo,
      handlePayWithCard,
      decrement,
      increment,
      handleRemoveCartItem,
      totalPrice,
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
