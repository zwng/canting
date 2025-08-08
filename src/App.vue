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
  overflow: hidden;
}

.router-view {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
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
