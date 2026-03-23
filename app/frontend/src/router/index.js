import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import AuthenticatedLayout from "../layouts/AuthenticatedLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: "/admin",
      component: AuthenticatedLayout,
      // beforeEnter: [requireAuth, requireAdmin],
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import('../views/admin/Dashboard.vue'),
          meta: { title: 'Dashboard' },
        },
        {
          path: "/products",
          name: "products",
          component: () => import('../views/admin/Inventory/Products/Products.vue'),
          meta: { title: 'Products' },
        },
      ],
    },
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title'
})

export default router
