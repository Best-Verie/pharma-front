import { defineStore } from "pinia";
import axios from "axios";
import "vue-toast-notification/dist/theme-default.css";

export const customersStore = defineStore("customers", {
  state: () => ({
    customers: [],
    isloading: false,
  }),
  getters: {
    getCustomers: (state) => state.customers,
  },
  actions: {
    async fetchCustomers() {
      try {
        await axios
          .get("https://tercera.fly.dev/api/v1/user/profile/me", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tercera_token")}`,
            },
          })
          .then((response) => {
            if (response.data.success === true) {
              this.customers = response.data.data;
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    },
  },
});
