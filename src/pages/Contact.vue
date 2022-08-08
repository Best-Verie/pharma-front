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
        <h1 class="font-semibold text-5xl">Contact</h1>
      </div>
    </section>
    <section class="px-10 xl:px-64 py-10 mt-20">
      <div class="flex flex-col lg:flex-row justify-between lg:items-center">
        <div class="mb-10">
          <h2 class="mb-8 text-xl font-semibold">Contact Us</h2>
          <ul class="text-lg">
            <li class="mb-5">0788318062</li>
            <li class="mb-5">Kigali,Rwanda</li>
            <li class="mb-5">tercera@gmail.com</li>
          </ul>
        </div>
        <img src="../assets/img/map.jpg" alt="map" class="lg:w-2/3" />
      </div>
    </section>
  </ClientLayout>
</template>

<script lang="ts">
import ClientLayout from "../components/ClientLayout.vue";
export default { components: { ClientLayout } };
</script>

<style></style>
