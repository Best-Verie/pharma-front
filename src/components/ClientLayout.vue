<script lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header />
  <main>
    <slot></slot>
  </main>
  <Footer />
</template>

<style>
a {
  cursor: pointer;
}
</style>
