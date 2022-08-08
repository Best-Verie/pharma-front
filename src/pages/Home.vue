<template>
  <ClientLayout>
    <Hero />
    <section class="px-4 xl:px-20 py-10">
      <HeroProductList :heroProducts="heroProducts" />
    </section>
    
    <Services/>
    <section class="px-10 xl:px-64 py-10 mt-20">
      <div
        class="
          flex
          xl:items-center xl:justify-between
          mb-24
          flex-col
          xl:flex-row
        "
      >
        <h2 class="flex flex-col">
          <span class="font-medium text-4xl mb-2"> Popular Products </span>
        </h2>
        <router-link
          to="/shop"
          class="border-b-2 border-b-black font-medium w-40"
        >
          View all products
        </router-link>
      </div>
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-10
          relative
        "
      >
        <ProductCard :products="storeProduct.product.slice(0, 8)" />
      </div>
    </section>
    <SpecialHero/>
    <section
      class="
        bg-stone-100
        px-10
        lg:px-52
        py-20
        flex flex-col
        xl:flex-row
        justify-between
        items-center
      "
    >
      <div
        class="
          bg-white
          rounded
          w-96
          p-5
          flex
          mb-10
          xl:mb-0
          items-center
          cursor
          ml-2
        "
      >
        <img src="../assets/icons/shipping.svg" alt="" class="w-16 h-16 mr-5" />
        <div>
          <h4 class="text-xl font-semibold mb-2">Delivery</h4>
          <p>Sed perspicia unde omnis iste nat error voluptate accus</p>
        </div>
      </div>
      <div
        class="
          bg-white
          rounded
          w-96
          p-5
          flex
          mb-10
          xl:mb-0
          items-center
          cursor
          ml-2
        "
      >
        <img src="../assets/icons/money.svg" alt="" class="w-16 h-16 mr-5" />

        <div>
          <h4 class="text-xl font-semibold mb-2">Money Back</h4>
          <p>Sed perspicia unde omnis iste nat error voluptate accus</p>
        </div>
      </div>
      <div
        class="
          bg-white
          rounded
          w-96
          p-5
          flex
          mb-10
          xl:mb-0
          items-center
          cursor
          ml-2
        "
      >
        <img src="../assets/icons/lock.svg" alt="" class="w-16 h-16 mr-5" />

        <div>
          <h4 class="text-xl font-semibold mb-2">100% Secure</h4>
          <p>Sed perspicia unde omnis iste nat error voluptate accus</p>
        </div>
      </div>
    </section>
    <ContactMessage/>
  </ClientLayout>
</template>

<script lang="ts">
import Hero from "../components/Hero.vue";
import HeroProductList from "../components/HeroProductList.vue";
import ProductCard from "../components/ProductCard.vue";
import Articles from "../components/Articles.vue";
import Carousel from "../components/Carousel.vue";
import { ref } from "vue";
import HeroProduct from "../types/heroProducts";
import Companies from "../components/Companies.vue";
import thermometer from "../assets/img/thermometer.jpg";
import temperature from "../assets/img/temperature.jpg";
import oximeter from "../assets/img/oximeter.jpg";
import facemask from "../assets/img/facemask.jpg";
import gloves from "../assets/img/gloves.jpg";
import { productStore } from "../store/productStore";
import { authStore } from "../store/authStore";
import ClientLayout from "../components/ClientLayout.vue";
import ContactMessage from "../components/contactMessage.vue";
import SpecialHero from "../components/SpecialHero.vue";
import Services from "../components/Services.vue";
export default {
  components: {
    Hero,
    HeroProductList,
    ProductCard,
    Articles,
    Carousel,
    Companies,
    ClientLayout,
    ContactMessage,
    SpecialHero,
    Services
},
  setup() {
    const heroProducts = ref<HeroProduct[]>([
      {
        image: thermometer,
        title: "Digital Meter",
        subtitle: "Thermometer",
      },
      {
        image: temperature,
        title: "Gun Covid - 19",
        subtitle: "Thermometer",
      },
      {
        image: oximeter,
        title: "Pulse",
        subtitle: "Thermometer",
      },
      {
        image: facemask,
        title: "Pulse",
        subtitle: "Thermometer",
      },
      {
        image: gloves,
        title: "Pulse",
        subtitle: "Thermometer",
      },
    ]);
    const storeProduct = productStore();
    const storeAuth = authStore();
    const products = storeProduct.getProducts();
    return {
      heroProducts,
      storeAuth,
      products,
      storeProduct,
    };
  },
};
</script>

<style></style>
