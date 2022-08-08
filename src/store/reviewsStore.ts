import { defineStore } from "pinia";
import axios from "axios";
import "vue-toast-notification/dist/theme-default.css";

export const reviewsStore = defineStore("reviews", {
  state: () => ({
    reviews: [],
    isloading: false,
  }),
  getters: {
    getReviews: (state) => state.reviews,
  },
  actions: {
    async fetchReviews() {
      try {
        await axios
          .get("https://tercera.fly.dev/api/v1/review/all", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tercera_token")}`,
            },
          })
          .then((response) => {
            if (response.data.success === true) {
              this.reviews = response.data.data;
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    },

    async postReview(data: any) {
      try {
        await axios
          .post("https://tercera.fly.dev/api/v1/review", data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tercera_token")}`,
            },
          })
          .then((response) => {
            if (response.data.success === true) {
              this.reviews = response.data.data;
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    },
  },
});
