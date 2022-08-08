import { defineStore } from 'pinia';
import axios from 'axios';

export const cartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('tercera_cart') || '[]'),
    cartOrder: [],
  }),
  getters: {
    getCart: (state) => state.cart,
    getCartOrder: (state) => state.cartOrder,
  },
  actions: {
    async getCartItems(id: string) {
      try {
        await axios
          .get(`https://tercera.fly.dev/api/v1/cart/customer/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('tercera_token')}`,
            },
          })
          .then((response) => {
            if (response.data.success === true) {
              this.cartOrder = response.data.data;
            }
          });
      } catch (error) {
        console.log('error', error);
      }
    },
    async createCart(product: any) {
      try {
        await axios
          .post(
            'https://tercera.fly.dev/api/v1/cart/',
            { items: product },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('tercera_token')}`,
              },
            }
          )
          .then((response) => {
            if (response.data.success === true) {
              this.cart = response.data.data;
            }
          });
      } catch (error) {
        console.log('error', error);
      }
    },

    async updateCart(id: string, data: any) {
      try {
        data.product.Quantity = 1;
        await axios
          .put(
            `https://tercera.fly.dev/api/v1/cart/${id}`,
            { items: [data.product] },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('tercera_token')}`,
              },
            }
          )
          .then((response) => {
            if (response.data.success === true) {
              this.cart = response.data.data;
            }
          });
      } catch (error) {
        console.log('error', error);
      }
    },

    addToCartLocal(payload: any, quantity?: number) {
      try {
        const cartItem = this.cart.find((item: { HESKU: any }) => item.HESKU === payload?.product.HESKU);

        if (cartItem) {
          if (quantity) {
            cartItem.Quantity = quantity;
          } else {
            cartItem.Quantity += 1;
          }
        } else {
          if (quantity) {
            payload.product.Quantity = quantity;
          } else {
            payload.product.Quantity = 1;
          }
          this.cart.push(payload.product);
        }
        localStorage.setItem('tercera_cart', JSON.stringify(this.cart));
      } catch (error) {
        console.log('error', error);
      }
    },

    incrementQty(id: string) {
      try {
        const cartItem = this.cart.find((item: { HESKU: any }) => item.HESKU === id);
        if (cartItem) {
          cartItem.Quantity += 1;
        }
        localStorage.setItem('tercera_cart', JSON.stringify(this.cart));
      } catch (error) {
        console.log('error', error);
      }
    },

    decrementQty(id: string) {
      try {
        const cartItem = this.cart.find((item: { HESKU: any }) => item.HESKU === id);
        if (cartItem && cartItem.Quantity > 1) {
          cartItem.Quantity -= 1;
        }
        localStorage.setItem('tercera_cart', JSON.stringify(this.cart));
      } catch (error) {
        console.log('error', error);
      }
    },

    removeCartItem(id: string) {
      try {
        const cartItem = this.cart.find((item: { HESKU: any }) => item.HESKU === id);
        if (cartItem) {
          this.cart = this.cart.filter((item: { HESKU: any }) => item.HESKU !== id);
        }
        localStorage.setItem('tercera_cart', JSON.stringify(this.cart));
      } catch (error) {
        console.log('error', error);
      }
    },
  },
});
