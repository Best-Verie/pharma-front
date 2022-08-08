import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home.vue';
import AdminHome from '../pages/AdminHome.vue';
import Register from '../pages/Register.vue';
import Cart from '../pages/Cart.vue';
import ProductDetails from '../pages/ProductDetails.vue';
import Shop from '../pages/Shop.vue';
import Wishlist from '../pages/Wishlist.vue';
import Contact from '../pages/Contact.vue';
import Login from '../pages/Login.vue';
import Checkout from '../pages/Checkout.vue';
import PayMomo from '../pages/PayMomo.vue';
import PayCard from '../pages/PayCard.vue';
import Search from '../pages/Search.vue';
import Reviews from '../pages/Reviews.vue';
import Review from '../pages/Review.vue';
import ReviewDetails from '../pages/ReviewDetails.vue';
import Orders from '../pages/Orders.vue';
import OrderDetails from '../pages/OrderDetails.vue';
import Offers from '../pages/Offers.vue';
import Profile from '../pages/Profile.vue';
import OfferDetails from '../pages/OfferDetails.vue';
import OfferCreate from '../pages/OfferCreate.vue';
import Customers from '../pages/Customers.vue';
import Products from '../pages/Products.vue';
import AdminProductsDetails from '../pages/AdminProductDetails.vue';

const history = createWebHistory();
const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: AdminHome,
      meta: { requiresAuth: true },
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/product/:id',
      name: 'Product Details',
      component: ProductDetails,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/search/:query',
      name: 'Search',
      component: Search,
    },
    {
      path: '/wishlist',
      name: 'Whislist',
      component: Wishlist,
      meta: { requiresAuth: true },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
      meta: { requiresAuth: true },
    },
    {
      path: '/paymomo',
      name: 'PayMomo',
      component: PayMomo,
      meta: { requiresAuth: true },
    },
    {
      path: '/paycard',
      name: 'PayCard',
      component: PayCard,
      meta: { requiresAuth: true },
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers,
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/products',
      name: 'Products',
      component: Products,
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/products/:id',
      name: 'AdminProductDetails',
      component: AdminProductsDetails,
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews,
      meta: { requiresAdmin: true },
    },
    {
      path: '/review',
      name: 'Review',
      component: Review,
    },

    {
      path: '/review-details',
      name: 'Review Details',
      component: ReviewDetails,
      meta: { requiresAuth: true },
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders,
      meta: { requiresAuth: true },
    },
    {
      path: '/offers',
      name: 'Offers',
      component: Offers,
      meta: { requiresAdmin: true },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: '/order/:id',
      name: 'Order Details',
      component: OrderDetails,
      meta: { requiresAuth: true },
    },
    {
      path: '/offer-details',
      name: 'Offer Details',
      component: OfferDetails,
      meta: { requiresAuth: true },
    },
    {
      path: '/create-offer',
      name: 'Create Offer',
      component: OfferCreate,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('tercera_token')) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    }
  } else if (to.matched.some((record) => record.meta.requiresAdmin)) {
    const currentUser = JSON.parse(localStorage.getItem('tercera_user') || '{}');
    if (currentUser.role == 'SYSTEM_ADMIN') {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});
export default router;
