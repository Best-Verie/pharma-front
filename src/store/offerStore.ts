import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import router from "../router";

const $toast = useToast();
export const offerStore = defineStore("offer", {
  state: () => ({
    offers: [],
    selectedOffer: JSON.parse(
      localStorage.getItem("tercera_selectedOffer") || "{}"
    ),
  }),
  getters: {
    getOffer: (state) => state.offers,
  },
  actions: {
    async getOffers() {
      try {
        await axios
          .get("https://tercera.fly.dev/api/v1/offers", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tercera_token")}`,
            },
          })
          .then((response) => {
            if (response.status === 200) {
              this.offers = response.data;
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    },

    async changeOffer(offerId: string, data: any) {
      try {
        await axios
          .put(`https://tercera.fly.dev/api/v1/offer/status/${offerId}`, data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tercera_token")}`,
            },
          })
          .then((response) => {
            if (response.data.success === true) {
              localStorage.setItem(
                "tercera_selectedOffer",
                JSON.stringify(response.data.data)
              );
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    },
    async createOffer(data: any) {
      try {
        await axios
          .post("https://tercera.fly.dev/api/v1/offers", data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tercera_token")}`,
            },
          })
          .then((response) => {
            if (response.data.success === true) {
              this.offers = response.data.data;
              router.push("/offers");
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    },
  },
});
