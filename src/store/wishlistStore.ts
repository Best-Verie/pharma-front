import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
const $toast = useToast();

export const wishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlist: [],
  }),
  getters: {
    getWishlist: (state) => state.wishlist,
  },
  actions: {
    async getWishlistItems() {
      try {
        await axios
          .get('https://tercera.fly.dev/api/v1/wish-list/customer', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('tercera_token')}`,
            },
          })
          .then((response) => {
            if (response.data.success === true) {
              $toast.success(`${response.data.message}.`, {
                position: 'top-right',
                duration: 8000,
              });
              this.wishlist = response.data.data;
            }
          });
      } catch (error) {
        console.log('error', error);
      }
    },
    async addToWishlist(payload: any) {
      try {
        const currentUser = JSON.parse(localStorage.getItem('tercera_user') || '{}');
        payload.product.Quantity = 1;
        await axios
          .post(
            'https://tercera.fly.dev/api/v1/wish-list/',
            { items: [payload.product], customer: currentUser.id, totalPrice: payload.product.Price },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('tercera_token')}`,
              },
            }
          )
          .then((response) => {
            if (response.data.success === true) {
              this.wishlist = response.data.data;
            }
          });
      } catch (error) {
        console.log('error', error);
      }
    },
    async removeFromWishlist(product: any) {
      try {
        const productExists = this.wishlist.find((item: any) => item.id === product.id);
        if (productExists) {
          const index = this.wishlist.findIndex((item: any) => item.id === product.id);
          this.wishlist.splice(index, 1);
        }
        localStorage.setItem('tercera_wishlist', JSON.stringify(this.wishlist));
      } catch (error) {
        console.log('error', error);
      }
    },
  },
});
