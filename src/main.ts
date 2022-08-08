import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import { createPinia } from 'pinia';
import ToastPlugin from 'vue-toast-notification';
import VueAwesomePaginate from 'vue-awesome-paginate';
import vSelect from 'vue-select';
import vue3StarRatings from 'vue3-star-ratings';
import 'vue-awesome-paginate/dist/style.css';
import 'vue-select/dist/vue-select.css';
import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

const pinia = createPinia();
createApp(App)
  .use(pinia)
  .use(router)
  .use(ToastPlugin, { position: 'top' })
  .use(VueAwesomePaginate)
  .component('v-select', vSelect)
  .component('vue3-star-ratings', vue3StarRatings)
  .mount('#app');
