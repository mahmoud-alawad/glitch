import { createRouter, createWebHistory } from 'vue-router';
// import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/Login.vue'),
      meta: {
        authPage: true,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/Register.vue'),
      meta: {
        authPage: true,
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/auth/Profile.vue'),
      meta: {
        authPage: true,
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/Index.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/views/category/Index.vue'),
    },
    {
      path: '/category/:slug',
      name: 'detail_category',
      component: () => import('@/views/category/Show.vue'),
    },
    {
      path: '/product/:slug',
      name: 'detail_product',
      component: () => import('@/views/product/Show.vue'),
    },

    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/order/Index.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/order/:snap_token',
      name: 'detail_order',
      component: () => import('@/views/order/Show.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/cart/Index.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

export default router;
