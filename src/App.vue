<script setup lang="ts">
import BottomTabBar from '@/components/BottomTabBar.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  console.log('App mounted')
  console.log('Current route:', router.currentRoute.value.path)
  console.log('Base URL:', import.meta.env.BASE_URL)

  // 如果当前路径不是根路径，尝试重定向到根路径
  if (router.currentRoute.value.path !== '/') {
    console.log('Redirecting to root path')
    router.push('/')
  }
})
</script>

<template>
  <div id="app">
    <div class="router-view">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <BottomTabBar />
  </div>
</template>

<style lang="less">
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  overflow: hidden;
}

.router-view {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

// 过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
