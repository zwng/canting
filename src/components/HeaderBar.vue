<template>
  <div class="header-bar">
    <div class="header-left">
      <div class="menu-icon" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="header-title">餐饮模板</div>
    <div class="header-right">
      <div class="user-icon" @click="goToProfile">
        <i class="icon-user"></i>
      </div>
    </div>
  </div>

  <!-- 侧边菜单 -->
  <SideMenu :is-open="isMenuOpen" @close="closeMenu" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SideMenu from './SideMenu.vue'

const router = useRouter()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const goToProfile = () => {
  router.push('/profile')
}
</script>

<style lang="less" scoped>
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: @header-height;
  background-color: @white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 @spacing-lg;
  border-bottom: 1px solid @gray;
  z-index: 1000;
}

.header-left,
.header-right {
  width: 44px;
  display: flex;
  align-items: center;
}

.header-title {
  font-size: @font-size-lg;
  font-weight: 600;
  color: @text-color;
  flex: 1;
  text-align: center;
}

.menu-icon {
  width: 20px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  span {
    width: 100%;
    height: 2px;
    background-color: @text-color;
    border-radius: 1px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  &:hover span {
    background-color: @primary-color;
  }

  // 激活状态动画
  &.active {
    span {
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  }
}

.user-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .icon-user {
    width: 20px;
    height: 20px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover .icon-user {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff6b35'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E");
  }
}
</style>
