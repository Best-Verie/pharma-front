<template>
  <div class="flex">
    <Sidebar :isSuperAdmin="isSuperAdmin" />
    <div class="w-full xl:w-10/12 2xl:w-full xl:ml-52 site-body">
      <Header />
      <main class="main-content">
        <slot></slot>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import Sidebar from "./Sidebar.vue";
import Header from "./AdminHeader.vue";
import Footer from "./AdminFooter.vue";
export default {
  name: "AdminLayout",
  components: {
    Sidebar,
    Header,
    Footer,
  },
  setup() {
    const currentUser = JSON.parse(
      localStorage.getItem("tercera_user") || "{}"
    );
    const isSuperAdmin = currentUser.role === "SYSTEM_ADMIN";

    return {
      isSuperAdmin,
    };
  },
};
</script>

<style>
a {
  cursor: pointer;
}
.site-body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.main-content {
  flex: 1;
}
</style>
