<script setup lang="ts">
import BottomTabBar from '@/components/BottomTabBar.vue'
</script>

<template>
  <div id="app">
    <div class="router-view">
      <router-view />
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
  overflow: hidden; // 保持这个，防止整体滚动
}

.router-view {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: relative; // 添加相对定位
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
