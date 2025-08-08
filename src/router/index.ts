import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ReservationView from '@/views/ReservationView.vue'

// 获取正确的 base URL
const getBaseUrl = () => {
  // 如果是开发环境，使用 '/'
  if (import.meta.env.DEV) {
    return '/'
  }

  // 生产环境使用 import.meta.env.BASE_URL
  return import.meta.env.BASE_URL
}

const router = createRouter({
  history: createWebHistory(getBaseUrl()),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: ReservationView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

// 添加路由守卫
router.beforeEach((to, from, next) => {
  console.log('Route change:', from.path, '->', to.path)
  console.log('Base URL:', import.meta.env.BASE_URL)
  console.log('Current location:', window.location.href)
  next()
})

export default router
