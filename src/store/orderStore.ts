import { defineStore } from 'pinia';
import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

const $toast = useToast();
export const orderStore = defineStore('order', {
  state: () => ({
    order: [],
    selectedOrder: JSON.parse(localStorage.getItem('tercera_selectedOrder') || '{}'),
  }),
  getters: {
    getOrder: (state) => state.order,
  },
  actions: {
    async getOrders() {
      try {
        await axios
          .get('https://tercera.fly.dev/api/v1/order/all', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('tercera_token')}`,
            },
          })
          .then((response) => {
            if (response.data.success === true) {
              this.order = response.data.data;
            }
          });
      } catch (error) {
        console.log('error', error);
      }
    },

    async changeOrderStatus(orderId: string, status: string) {
      try {
        await axios
          .put(`https://tercera.fly.dev/api/v1/order/status/${orderId}/${status}`, undefined, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('tercera_token')}`,
            },
          })
          .then((response) => {
            if (response.data.success === true) {
              return response.data.data;
            }
          });
      } catch (error) {
        console.log('error', error);
      }
    },
    async makeOrder(data: any) {
      try {
        await axios
          .post('https://tercera.fly.dev/api/v1/order', data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('tercera_token')}`,
            },
          })
          .then((response) => {
            if (response.data.success === true) {
              this.order = response.data.data;
              $toast.success(`${response.data.message}.`, {
                position: 'top-right',
                duration: 5000,
              });
            }
          });
      } catch (error) {
        console.log('error', error);
      }
    },
  },
});
