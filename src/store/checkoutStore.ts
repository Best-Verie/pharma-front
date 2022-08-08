import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import router from "../router";

const $toast = useToast();
export const checkoutStore = defineStore("checkout", {
  state: () => ({
    checkout: [],
  }),
  getters: {
    getCheckout: (state) => state.checkout,
  },
  actions: {
    async placeOrderMOMO(data: any) {
      try {
        await axios
          .post("https://tercera.fly.dev/api/v1/payments/momo-payment", data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tercera_token")}`,
            },
          })
          .then((response) => {
            if (response.data.status === "success") {
              this.checkout = response.data.data;
              $toast.success(`${response.data.message}.`, {
                position: "top-right",
                duration: 5000,
              });
            }
            setTimeout(() => {
              router.push("/review");
              window.open(response.data.data.link, "_blank");
            }, 5000);
          });
      } catch (error) {
        console.log("error", error);
      }
    },
    async placeOrderCARD(data: any) {
      try {
        await axios
          .post("https://tercera.fly.dev/api/v1/payments/card-payment", data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tercera_token")}`,
            },
          })
          .then((response) => {
            if (response.data.body.status === "success") {
              this.checkout = response.data.body.data;
              $toast.success(
                `${response.data.body.data.chargeResponseMessage}.`,
                {
                  position: "top-right",
                  duration: 5000,
                }
              );
              setTimeout(() => {
                router.push("/review");
              }, 5000);
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    },
  },
});
