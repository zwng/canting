<template>
  <div class="side-menu-overlay" v-if="isOpen" @click="closeMenu">
    <div class="side-menu" @click.stop>
      <!-- 关闭按钮 -->
      <div class="menu-header">
        <div class="close-btn" @click="closeMenu">
          <span>×</span>
        </div>
      </div>

      <!-- 菜单项 -->
      <div class="menu-items">
        <div class="menu-item" :class="{ active: currentRoute === '/' }" @click="navigateTo('/')">
          <div class="menu-icon home-icon"></div>
          <span class="menu-text">首页</span>
        </div>

        <div
          class="menu-item"
          :class="{ active: currentRoute === '/products' }"
          @click="navigateTo('/products')"
        >
          <div class="menu-icon search-icon"></div>
          <span class="menu-text">所有产品</span>
        </div>

        <div
          class="menu-item"
          :class="{ active: currentRoute === '/reservation' }"
          @click="navigateTo('/reservation')"
        >
          <div class="menu-icon list-icon"></div>
          <span class="menu-text">堂食订位</span>
        </div>

        <div
          class="menu-item"
          :class="{ active: currentRoute === '/profile' }"
          @click="navigateTo('/profile')"
        >
          <div class="menu-icon user-icon"></div>
          <span class="menu-text">我的</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const router = useRouter()
const route = useRoute()

// 计算当前路由路径
const currentRoute = computed(() => route.path)

const closeMenu = () => {
  emit('close')
}

const navigateTo = (path: string) => {
  router.push(path)
  closeMenu()
}
</script>

<style lang="less" scoped>
.side-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.side-menu {
  width: 280px;
  background-color: @white;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.menu-header {
  padding: @spacing-lg;
  border-bottom: 1px solid @gray;
  display: flex;
  justify-content: flex-end;
}

.close-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: @gray-light;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: @gray;
  }

  span {
    font-size: 20px;
    color: @text-color;
    font-weight: 600;
  }
}

.menu-items {
  flex: 1;
  padding: @spacing-lg 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: @spacing-lg @spacing-xl;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: @gray-light;
  }

  &.active {
    background-color: rgba(255, 107, 53, 0.1);

    .menu-text {
      color: @primary-color;
      font-weight: 600;
    }

    .menu-icon {
      &.home-icon {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff6b35'%3E%3Cpath d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/%3E%3C/svg%3E");
      }

      &.search-icon {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff6b35'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E");
      }

      &.list-icon {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff6b35'%3E%3Cpath d='M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z'/%3E%3C/svg%3E");
      }

      &.user-icon {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff6b35'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E");
      }
    }
  }
}

.menu-icon {
  width: 24px;
  height: 24px;
  margin-right: @spacing-lg;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &.home-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/%3E%3C/svg%3E");
  }

  &.search-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E");
  }

  &.list-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z'/%3E%3C/svg%3E");
  }

  &.user-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E");
  }
}

.menu-text {
  font-size: @font-size-md;
  color: @text-color;
  font-weight: 500;
}
</style>
