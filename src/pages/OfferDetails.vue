<template>
  <AdminLayout>
    <div
      class="flex flex-col xl:flex-row items-center justify-between p-10 w-2/3 border border-stone-200 mx-auto mt-20"
    >
      <img src="../assets/img/facemasks.png" alt="" class="" />
      <div class="xl:w-3/6 mt-10 xl:mt-0">
        <p class="uppercase text-stone-400 font-semibold">
          Offer Id: {{ storeOffer.selectedOffer.offerItem.id }}
        </p>
        <p class="font-bold text-xl">
          {{ storeOffer.selectedOffer.offerItem.label }}
        </p>
        <p class="font-semibold mt-5">
          Discount: {{ storeOffer.selectedOffer.offerItem.discount }} RWF
        </p>
        <div class="relative">
          <select
            class="relative mt-5 px-2 py-1 bg-white border border-gray-500"
            @change="handleChange"
          >
            <option value="CLOSED">CLOSED</option>
            <option value="OPEN">OPEN</option>
          </select>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script lang="ts">
import AdminLayout from "../components/AdminLayout.vue";
import { offerStore } from "../store/offerStore";
export default {
  data() {
    return {
      show: false,
    };
  },
  components: { AdminLayout },
  setup() {
    const storeOffer = offerStore();

    const handleChange = (e: any) => {
      const data = {
        label: storeOffer.selectedOffer.offerItem.label,
        medicines: storeOffer.selectedOffer.offerItem.medicines,
        discount: storeOffer.selectedOffer.offerItem.discount,
        description: storeOffer.selectedOffer.offerItem.description,
        status: e.target.value,
        deadline: storeOffer.selectedOffer.offerItem.deadline,
      };

      storeOffer.changeOffer(storeOffer.selectedOffer.offerItem.id, data);
    };
    return {
      storeOffer,
      handleChange,
    };
  },
};
</script>

<style></style>
