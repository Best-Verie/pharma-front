<template>
  <div
    v-for="product in products"
    :key="product.HESKU"
    class="
      w-64
      hover:backdrop-blur-sm hover:bg-white
      p-3
      cursor-pointer
      product-card
      relative
      mx-auto
    "
  >
    <img
      src="../assets/img/facemasks.png"
      alt=""
      class="mx-auto mb-10 product-card-img"
    />
    <div
      class="
        flex
        items-center
        justify-center
        mb-5
        product-card-actions
        absolute
        left-20
        bottom-28
      "
    >
      <button
        class="w-9 h-9 bg-blue-500 rounded-full p-2 mr-5 hidden"
        @click="handleAddToWishlist({ product })"
      >
        <img src="../assets/icons/heart-outline-white.svg" alt="" />
      </button>
      <button
        class="w-9 h-9 bg-blue-500 rounded-full p-2 mr-5 hidden"
        @click="handleAddToCart({ product, quantity: 1 })"
      >
        <img src="../assets/icons/cart-white.svg" alt="" />
      </button>
    </div>
    <router-link
      :to="`/product/${product.HESKU}`"
      @click="handleSelectedProduct({ product })"
    >
      <p class="uppercase text-zinc-500 text-base font-medium text-center">
        {{ product.StoreProductName }}
      </p>
      <p class="uppercase text-red-500 text-base font-medium text-center">
        {{ product.Price }} RWF
      </p>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { cartStore } from "../store/cartStore";
import Product from "../types/product";
import { wishlistStore } from "../store/wishlistStore";
import { authStore } from "../store/authStore";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

export default defineComponent({
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
    },
  },
  setup() {
    const $toast = useToast();
    const storeCart = cartStore();
    const authUstore = authStore();
    const openModal = ref(false);

    const storeWishlist = wishlistStore();
    const handleAddToCart = (product: any) => {
      storeCart.addToCartLocal(product);

      $toast.success(`This item has been added to cart`, {
        position: "top-right",
        duration: 4000,
      });
    };

    const handleAddToWishlist = (product: any) => {
      if (authUstore.isLoggedIn == true) {
        storeWishlist.addToWishlist(product);
      } else {
        $toast.success(
          `To add products to wishlist you need an account with us. Please log in to an existing account or create a new one.`,
          {
            position: "top-right",
            duration: 4000,
          }
        );
      }
    };
    const handleSelectedProduct = (product: any) => {
      localStorage.removeItem("tercera_selectedProduct");
      localStorage.setItem("tercera_selectedProduct", JSON.stringify(product));
    };

    return {
      handleAddToCart,
      storeWishlist,
      handleAddToWishlist,
      handleSelectedProduct,
      openModal,
    };
  },
});
</script>

<style>
.product-card:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.product-card:hover .product-card-actions img {
  display: block;
}
.product-card:hover .product-card-actions button {
  display: block;
}

.product-card:hover .product-card-img {
  opacity: 0.3;
}
</style>
