import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";

const $toast = useToast();
const userDataLocal = JSON.parse(localStorage.getItem("tercera_user") || "{}");
const router = useRouter();

export const authStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("tercera_user") || "{}"),
    isLoggedIn: userDataLocal.length != 0 ? true : false,
    isLoading: false,
  }),
  getters: {
    getUser: (state) => state.user,
    logout: (state) => {
      localStorage.removeItem("tercera_user");
      localStorage.removeItem("tercera_token");
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  actions: {
    login: async (userData: any) => {
      try {
        const response = await axios.post(
          "https://tercera.fly.dev/api/v1/auth/login",
          userData
        );
        if (response.data.success === true) {
          $toast.success(`${response.data.message}.`, {
            position: "top-right",
            duration: 8000,
          });
          localStorage.setItem(
            "tercera_user",
            JSON.stringify(response.data.data.payload)
          );
          localStorage.setItem(
            "tercera_token",
            response.data.data.access_token
          );
          router.push("/dashboard");
        }
      } catch (error: any) {
        error?.response?.data?.errors &&
          $toast.error(`${error?.response.data.errors?.phoneNumber}.`, {
            position: "top-right",
            duration: 5000,
          });

        error?.response?.data?.errors &&
          $toast.error(`${error?.response.data.errors?.password}.`, {
            position: "top-right",
            duration: 5000,
          });
      }
    },
    register: (data: any) => {
      axios
        .post("https://tercera.fly.dev/api/v1/user", data)
        .then((response) => {
          if (response.data.success === true) {
            $toast.success(`${response.data.message}.`, {
              position: "top-right",
              duration: 5000,
            });
            router.push("/login");
          }
        })
        .catch((e) => {
          e.response.data.errors &&
            $toast.error(`${e.response.data.errors?.phoneNumber}.`, {
              position: "top-right",
              duration: 5000,
            });
          e.response.data.errors &&
            $toast.error(`${e.response.data.errors?.password}.`, {
              position: "top-right",
              duration: 5000,
            });

          e.response.data.errors &&
            $toast.error(`${e.response.data.errors?.gender}.`, {
              position: "top-right",
              duration: 5000,
            });
        });
    },
  },
});
