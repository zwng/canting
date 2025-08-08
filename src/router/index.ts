import { createRouter, createWebHistory } from 'vue-router'

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
      component: () => import('@/views/HomeView.vue'),
      meta: { title: '首页' }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/ProductsView.vue'),
      meta: { title: '所有产品' }
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: () => import('@/views/ReservationView.vue'),
      meta: { title: '堂食订位' }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
      meta: { title: '我的' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
      meta: { title: '注册' }
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
