<template>
  <div class="reservation-view">
    <HeaderBar />

    <div class="form-wrapper">
      <!-- 姓名 -->
      <div class="form-group required">
        <label class="form-label">您的姓名：</label>
        <input v-model="form.name" type="text" class="form-input" placeholder="请输入您的姓名" />
      </div>

      <!-- 联系方式 -->
      <div class="form-group required">
        <label class="form-label">您的联系方式：</label>
        <input
          v-model="form.contact"
          type="text"
          class="form-input"
          placeholder="请输入您的联系方式"
        />
      </div>

      <!-- 就餐人数 -->
      <div class="form-group required">
        <label class="form-label">就餐人数：</label>
        <div class="radio-group">
          <label class="radio-item" v-for="option in peopleOptions" :key="option.value">
            <input
              type="radio"
              class="radio"
              name="people"
              :value="option.value"
              v-model="form.people"
            />
            <span>{{ option.label }}</span>
          </label>
        </div>
      </div>

      <!-- 门店选择 -->
      <div class="form-group">
        <label class="form-label">门店选择：</label>
        <select v-model="form.store" class="form-input select">
          <option value="" disabled>请选择想要的门店</option>
          <option v-for="s in stores" :key="s" :value="s">{{ s }}</option>
        </select>
      </div>

      <!-- 就餐时间 -->
      <div class="form-group">
        <label class="form-label">就餐时间</label>
        <input
          v-model="form.time"
          type="datetime-local"
          class="form-input"
          placeholder="请选择就餐时间"
        />
      </div>

      <!-- 其他要求 -->
      <div class="form-group">
        <label class="form-label">其他要求：</label>
        <textarea v-model="form.note" class="form-textarea" rows="4" placeholder="请输入详情" />
      </div>

      <!-- 提交按钮 -->
      <div class="actions">
        <button class="submit-btn" @click="submit">马上提交</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import HeaderBar from '@/components/HeaderBar.vue'

const form = reactive({
  name: '',
  contact: '',
  people: '',
  store: '',
  time: '',
  note: '',
})

const stores = ['环球港店', '万达广场店', '市中心店']

const peopleOptions = [
  { value: '1', label: '1人' },
  { value: '2', label: '2人' },
  { value: '3', label: '3人' },
  { value: '4', label: '4人' },
  { value: '5', label: '5人' },
  { value: '6+', label: '6人以上' },
]

const submit = () => {
  // 简单校验
  if (!form.name.trim()) {
    return alert('请输入您的姓名')
  }
  if (!form.contact.trim()) {
    return alert('请输入您的联系方式')
  }
  if (!form.people) {
    return alert('请选择就餐人数')
  }

  // 模拟提交
  console.log('提交订位：', JSON.stringify(form, null, 2))
  alert('提交成功，我们会尽快与您联系确认！')
  // 重置
  form.name = ''
  form.contact = ''
  form.people = ''
  form.store = ''
  form.time = ''
  form.note = ''
}
</script>

<style lang="less" scoped>
.reservation-view {
  min-height: 100vh;
  background-color: #f8f9fa;
  padding-bottom: @tab-bar-height;
}

.form-wrapper {
  padding: calc(@header-height + @spacing-lg) @spacing-lg @spacing-xxl;
}

.form-group {
  margin-bottom: @spacing-lg;
  background-color: @white;
  border-radius: @border-radius;
  padding: @spacing-lg;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  &.required .form-label::after {
    content: ' *';
    color: #ff6b6b;
    font-weight: 400;
  }
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
  border: 1px solid #e1e8ed;
  border-radius: @border-radius;
  background-color: #fafbfc;
  font-size: @font-size-md;
  color: #2c3e50;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    border-color: @primary-color;
    background-color: @white;
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }
}

.select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%2395a5a6'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
}

.form-textarea {
  width: 100%;
  padding: @spacing-md;
  border: 1px solid #e1e8ed;
  border-radius: @border-radius;
  background-color: #fafbfc;
  font-size: @font-size-md;
  color: #2c3e50;
  outline: none;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    border-color: @primary-color;
    background-color: @white;
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }
}

.radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: @spacing-lg;
}

.radio-item {
  display: inline-flex;
  align-items: center;
  gap: @spacing-xs;
  color: #2c3e50;
  cursor: pointer;
  padding: @spacing-xs @spacing-sm;
  border-radius: @border-radius;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8f9fa;
  }
}

.radio {
  width: 16px;
  height: 16px;
  accent-color: @primary-color;
}

.actions {
  margin-top: @spacing-xl;
}

.submit-btn {
  width: 100%;
  height: 48px;
  border: none;
  border-radius: @border-radius;
  background: linear-gradient(135deg, @primary-color, darken(@primary-color, 10%));
  color: @white;
  font-size: @font-size-lg;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);

  &:hover {
    background: linear-gradient(135deg, darken(@primary-color, 5%), darken(@primary-color, 15%));
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(255, 107, 53, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
  }
}
</style>
