<template>
  <div class="login-view">
    <HeaderBar />

    <div class="login-container">
      <!-- 图标 -->
      <div class="login-icon">
        <div class="icon-circle">
          <div class="bag-icon">🛍️</div>
        </div>
      </div>

      <!-- 登录表单 -->
      <div class="login-form">
        <div class="form-group">
          <label class="form-label">账号</label>
          <input v-model="form.account" type="text" class="form-input" placeholder="请输入账号" />
        </div>

        <div class="form-group">
          <label class="form-label">密码</label>
          <input
            v-model="form.password"
            type="password"
            class="form-input"
            placeholder="请输入密码"
          />
        </div>

        <button class="login-btn" @click="handleLogin">登录</button>

        <div class="register-link">
          <a href="#" @click="goToRegister">免费注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import HeaderBar from '@/components/HeaderBar.vue'

const router = useRouter()

const form = reactive({
  account: '',
  password: '',
})

const handleLogin = () => {
  if (!form.account.trim()) {
    return alert('请输入账号')
  }
  if (!form.password.trim()) {
    return alert('请输入密码')
  }

  // 模拟登录
  console.log('登录信息：', form)
  alert('登录成功！')
  router.push('/profile')
}

const goToRegister = () => {
  router.push('/register')
}
</script>

<style lang="less" scoped>
.login-view {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-bottom: @tab-bar-height;
}

.login-container {
  padding: calc(@header-height + @spacing-xl) @spacing-lg @spacing-xxl;
  max-width: 400px;
  margin: 0 auto;
}

.login-icon {
  text-align: center;
  margin-bottom: @spacing-xl;
}

.icon-circle {
  width: 80px;
  height: 80px;
  background-color: @white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 2px solid #ffb3c7;
  box-shadow: 0 4px 12px rgba(255, 179, 199, 0.3);

  .bag-icon {
    font-size: 32px;
  }
}

.login-form {
  background-color: @white;
  border-radius: @border-radius;
  padding: @spacing-xl;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.form-group {
  margin-bottom: @spacing-lg;
}

.form-label {
  display: block;
  margin-bottom: @spacing-sm;
  color: #2c3e50;
  font-weight: 500;
  font-size: @font-size-md;
}

.form-input {
  width: 100%;
  height: 44px;
  padding: 0 @spacing-md;
  border: none;
  border-bottom: 1px solid #e1e8ed;
  background-color: transparent;
  font-size: @font-size-md;
  color: #2c3e50;
  outline: none;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    border-bottom-color: @primary-color;
  }
}

.login-btn {
  width: 100%;
  height: 48px;
  border: none;
  border-radius: @border-radius;
  background-color: @primary-color;
  color: @white;
  font-size: @font-size-lg;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: @spacing-lg;

  &:hover {
    background-color: darken(@primary-color, 5%);
  }
}

.register-link {
  text-align: center;
  margin-top: @spacing-lg;

  a {
    color: #7f8c8d;
    text-decoration: none;
    font-size: @font-size-sm;
    transition: color 0.3s ease;

    &:hover {
      color: @primary-color;
    }
  }
}
</style>
