<template>
  <AdminLayout>
    <div
      class="
        flex flex-col
        xl:flex-row
        items-center
        justify-between
        p-10
        w-2/3
        border border-stone-200
        mx-auto
        mt-20
      "
    >
      <div class="flex justify-between flex-wrap text-sm mr-10">
        <div
          v-for="(order, index) in orderItem.cart_item.items"
          :key="index"
          class="mb-5"
        >
          <img
            src="../assets/img/facemasks.png"
            alt=""
            class="w-20 h-20 mb-5"
          />
          <p class="w-52">Product name: {{ order.StoreProductName }}</p>
          <p>Price per unit: {{ order.Price }} RWF</p>
          <p>Quantity: {{ order.Quantity }}</p>
        </div>
      </div>

      <div class="xl:w-3/6 mt-10 xl:mt-0">
        <p class="mb-10 font-bold text-xl">
          Order status: {{ orderItem?.status }}
        </p>

        <p class="font-semibold text-orange-700 text-lg mt-2">
          Total Price:
          {{ orderItem?.cart_item?.totalPrice }} RWF
        </p>
        <p class="font-semibold mt-2">
          Delivery Fee:
          {{ orderItem?.delivery_fee }} RWF
        </p>

        <select
          v-if="isAdmin"
          class="relative mt-5 px-2 py-1 bg-white border border-gray-500"
          @change="handleChange"
        >
          <option value="PENDING">PENDING</option>
          <option value="APPROVED">APPROVED</option>
          <option value="DELIVERED">DELIVERED</option>
          <option value="REJECTED">REJECTED</option>
        </select>
      </div>
    </div>
  </AdminLayout>
</template>

<script lang="ts">
import AdminLayout from "../components/AdminLayout.vue";
import { orderStore } from "../store/orderStore";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";

interface Order {
  cart_item: object;
  status: string;
  createdAt: string;
  delivery_fee: number;
  id: string;
  updatedAt: string;
}
export default {
  components: { AdminLayout },
  setup() {
    const storeOrder = orderStore();
    const route = useRoute();
    const currentUser = JSON.parse(
      localStorage.getItem("tercera_user") || "{}"
    );

    const isAdmin = computed(() => {
      return currentUser.role !== "CLIENT";
    });

    const orderItem = computed(() => {
      return storeOrder.order.find(
        (order: Order) => order.id === route.params.id
      );
    });
    const handleChange = async (e: any) => {
      await storeOrder.changeOrderStatus(
        route.params.id.toString(),
        e.target.value
      );
      await storeOrder.getOrders();
    };
    return {
      orderItem,
      isAdmin,
      handleChange,
    };
  },
};
</script>

<style></style>
