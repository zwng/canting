<template>
  <div class="register-view">
    <HeaderBar />

    <div class="register-container">
      <!-- 注册表单 -->
      <div class="register-form">
        <div class="form-group">
          <label class="form-label">账号</label>
          <input
            v-model="form.account"
            type="text"
            class="form-input"
            placeholder="请输入账号(必填)"
          />
        </div>

        <div class="form-group">
          <label class="form-label">密码</label>
          <input
            v-model="form.password"
            type="password"
            class="form-input"
            placeholder="请输入密码(必填)"
          />
        </div>

        <div class="form-group">
          <label class="form-label">密码</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            class="form-input"
            placeholder="请输入确认密码(必填)"
          />
        </div>

        <div class="form-group">
          <label class="form-label">姓名</label>
          <input
            v-model="form.name"
            type="text"
            class="form-input"
            placeholder="请输入姓名(必填)"
          />
        </div>

        <div class="form-group">
          <label class="form-label">邮箱</label>
          <input v-model="form.email" type="email" class="form-input" placeholder="请输入邮箱" />
        </div>

        <div class="form-group">
          <label class="form-label">手机</label>
          <div class="phone-input">
            <div class="country-code">
              <span>+86</span>
              <div class="arrow">▼</div>
            </div>
            <input
              v-model="form.phone"
              type="tel"
              class="form-input phone-field"
              placeholder="请输入手机(必填)"
            />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">备注</label>
          <input v-model="form.notes" type="text" class="form-input" placeholder="请输入备注" />
        </div>

        <button class="register-btn" @click="handleRegister">注册</button>
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
  confirmPassword: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
})

const handleRegister = () => {
  // 必填项校验
  if (!form.account.trim()) {
    return alert('请输入账号')
  }
  if (!form.password.trim()) {
    return alert('请输入密码')
  }
  if (!form.confirmPassword.trim()) {
    return alert('请输入确认密码')
  }
  if (form.password !== form.confirmPassword) {
    return alert('两次输入的密码不一致')
  }
  if (!form.name.trim()) {
    return alert('请输入姓名')
  }
  if (!form.phone.trim()) {
    return alert('请输入手机号')
  }

  // 模拟注册
  console.log('注册信息：', form)
  alert('注册成功！')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.register-view {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-bottom: @tab-bar-height;
}

.register-container {
  padding: calc(@header-height + @spacing-xl) @spacing-lg @spacing-xxl;
  max-width: 400px;
  margin: 0 auto;
}

.register-form {
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

.phone-input {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e8ed;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-bottom-color: @primary-color;
  }
}

.country-code {
  display: flex;
  align-items: center;
  gap: @spacing-xs;
  padding: 0 @spacing-md;
  color: #2c3e50;
  font-size: @font-size-md;
  border-right: 1px solid #e1e8ed;
  min-width: 60px;

  .arrow {
    font-size: @font-size-xs;
    color: #95a5a6;
  }
}

.phone-field {
  border: none;
  flex: 1;
}

.register-btn {
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
</style>
