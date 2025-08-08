import './styles/index.less'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { useAuthStore } from '@/stores/auth'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// 检查登录状态
const authStore = useAuthStore(pinia)
authStore.checkLoginStatus()

// 等待路由准备就绪后再挂载应用
router.isReady().then(() => {
    console.log('Router is ready')
    console.log('Initial route:', router.currentRoute.value.path)
    app.mount('#app')
}).catch((error) => {
    console.error('Router initialization failed:', error)
    app.mount('#app')
})
