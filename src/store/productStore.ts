import { defineStore } from 'pinia';
import axios from 'axios';

interface Product {
  HESKU: string;
  LAST_UPDATE_DATE: string;
  Price: string;
  StockQty: string;
  StoreProductName: string;
}

export const productStore = defineStore('product', {
  state: () => ({
    product: [],
    filteredProducts: [],
  }),
  getters: {
    getProduct: (state) => state.product,
    allProducts: (state) => state.product,
  },
  actions: {
    filterProducts(searchInput: string) {
      this.filteredProducts = this.product.filter((product: Product) => {
        return product.StoreProductName.toLowerCase().includes(searchInput.toString().toLowerCase());
      });
    },
    async getProducts() {
      try {
        await axios
          .get('https://tercera.fly.dev/api/v1/products/products', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('tercera_token')}`,
            },
          })
          .then((response) => {
            if (response.data.success === true) {
              this.product = response.data.data;
            }
            return;
          });
      } catch (error) {
        console.log('error', error);
      }
    },
  },
});
