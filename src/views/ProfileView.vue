<template>
  <div class="profile-view">
    <HeaderBar />

    <!-- 用户信息区域 -->
    <div class="user-section">
      <div class="user-avatar">
        <div class="avatar-icon">🛍️</div>
      </div>
      <div class="user-info">
        <div v-if="authStore.isLoggedIn" class="user-details">
          <div class="user-name">{{ authStore.userInfo.name || '用户' }}</div>
          <div class="logout-btn" @click="logout">退出登录</div>
        </div>
        <div v-else class="login-text" @click="goToLogin">登录/注册</div>
      </div>
    </div>

    <!-- 我的订单 -->
    <div class="order-section">
      <div class="section-header">
        <h3>我的订单</h3>
        <a href="#" class="view-all">查看全部订单 ></a>
      </div>
      <div class="order-status">
        <div class="status-item">
          <div class="status-icon">💰</div>
          <span>待付款</span>
        </div>
        <div class="status-item">
          <div class="status-icon">📦</div>
          <span>交易完成</span>
        </div>
        <div class="status-item">
          <div class="status-icon">❌</div>
          <span>交易关闭</span>
        </div>
      </div>
    </div>

    <!-- 个人设置 -->
    <div class="settings-section">
      <div class="setting-item">
        <div class="setting-icon">🎫</div>
        <span>我的优惠券</span>
        <div class="arrow">></div>
      </div>
      <div class="setting-item">
        <div class="setting-icon">👤</div>
        <span>个人资料</span>
        <div class="arrow">></div>
      </div>
      <div class="setting-item">
        <div class="setting-icon">🔒</div>
        <span>修改密码</span>
        <div class="arrow">></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import HeaderBar from '@/components/HeaderBar.vue'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const goToLogin = () => {
  router.push('/login')
}

const logout = () => {
  authStore.logout()
  alert('已退出登录')
}
</script>

<style lang="less" scoped>
.profile-view {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-bottom: @tab-bar-height;
}

.user-section {
  background: linear-gradient(135deg, @primary-color, darken(@primary-color, 15%));
  padding: @spacing-xl @spacing-lg;
  text-align: center;
  color: @white;
  margin-bottom: @spacing-lg;
  margin-top: @header-height;
}

.user-avatar {
  margin-bottom: @spacing-md;
}

.avatar-icon {
  width: 60px;
  height: 60px;
  background-color: @white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 24px;
}

.user-info {
  .login-text {
    font-size: @font-size-lg;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  .user-details {
    text-align: center;
  }

  .user-name {
    font-size: @font-size-lg;
    font-weight: 500;
    margin-bottom: @spacing-sm;
  }

  .logout-btn {
    font-size: @font-size-sm;
    opacity: 0.8;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
}

.order-section {
  background-color: @white;
  margin: @spacing-lg;
  border-radius: @border-radius;
  padding: @spacing-lg;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: @spacing-lg;
  padding-bottom: @spacing-md;
  border-bottom: 1px solid #f0f0f0;

  h3 {
    color: #2c3e50;
    font-size: @font-size-lg;
    font-weight: 600;
    margin: 0;
  }

  .view-all {
    color: @primary-color;
    text-decoration: none;
    font-size: @font-size-sm;
  }
}

.order-status {
  display: flex;
  justify-content: space-around;
}

.status-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: @spacing-xs;
  color: #2c3e50;
  font-size: @font-size-sm;

  .status-icon {
    font-size: 20px;
    margin-bottom: @spacing-xs;
  }
}

.settings-section {
  background-color: @white;
  margin: @spacing-lg;
  border-radius: @border-radius;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.setting-item {
  display: flex;
  align-items: center;
  padding: @spacing-lg;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f9fa;
  }

  .setting-icon {
    font-size: 18px;
    margin-right: @spacing-md;
    width: 20px;
    text-align: center;
  }

  span {
    flex: 1;
    color: #2c3e50;
    font-size: @font-size-md;
  }

  .arrow {
    color: #95a5a6;
    font-size: @font-size-sm;
  }
}
</style>
