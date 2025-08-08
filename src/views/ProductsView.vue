<template>
  <div class="products-view">
    <HeaderBar />

    <!-- 搜索栏 -->
    <div class="search-section">
      <div class="search-bar">
        <input type="text" placeholder="请输入关键字..." class="search-input" />
        <div class="search-icon"></div>
      </div>
    </div>

    <!-- 优惠券区域 -->
    <div class="coupon-section">
      <div class="coupon-list">
        <div class="coupon-item">
          <div class="coupon-value">¥20</div>
          <div class="coupon-condition">满100可用</div>
          <button class="coupon-btn">立即领取</button>
        </div>
        <div class="coupon-item">
          <div class="coupon-value">¥10</div>
          <div class="coupon-condition">满70可用</div>
          <button class="coupon-btn">立即领取</button>
        </div>
        <div class="coupon-item">
          <div class="coupon-value">¥5</div>
          <div class="coupon-condition">满50可用</div>
          <button class="coupon-btn">立即领取</button>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 左侧分类导航 -->
      <div class="category-sidebar">
        <div
          v-for="category in categories"
          :key="category.id"
          class="category-item"
          :class="{ active: selectedCategory === category.id }"
          @click="selectCategory(category.id)"
        >
          {{ category.name }}
        </div>
      </div>

      <!-- 右侧产品列表 -->
      <div class="products-list">
        <div v-for="product in filteredProducts" :key="product.id" class="product-item">
          <div class="product-image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="product-info">
            <div class="product-name">{{ product.name }}</div>
            <div class="product-price">¥{{ product.price }}</div>
          </div>
          <div class="product-action">
            <div class="cart-icon" @click="addToCart(product)">
              <span>🛒</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import HeaderBar from '@/components/HeaderBar.vue'

// 分类数据
const categories = [
  { id: 'cake', name: '蛋糕' },
  { id: 'japanese', name: '日式' },
  { id: 'western', name: '西餐' },
  { id: 'chinese', name: '中式' },
]

// 产品数据
const products = [
  {
    id: 1,
    name: '巧克力切片',
    price: '59.00',
    category: 'cake',
    image: '/static/033_AD0IsZnBDBAEGAAgwar6-wUooPzQ-gQwygI4ygI!800x800.png',
  },
  {
    id: 2,
    name: '慕斯蛋糕',
    price: '59.00',
    category: 'cake',
    image: '/static/032_AD0IsZnBDBAEGAAgwKr6-wUo2YLkzAQwygI4rAM!800x800.png',
  },
  {
    id: 3,
    name: '芝士蛋糕',
    price: '68.00',
    category: 'cake',
    image: '/static/031_AD0IsZnBDBAEGAAgncb5-wUo05ewrQUw7gU4jwg!800x800.png',
  },
  {
    id: 4,
    name: '寿司拼盘',
    price: '88.00',
    category: 'japanese',
    image: '/static/030_AD0IsZnBDBAEGAAgktb5-wUo2IrU9QUwHjge!800x800.png',
  },
  {
    id: 5,
    name: '意大利面',
    price: '45.00',
    category: 'western',
    image: '/static/029_AD0IsZnBDBAEGAAgjqzL-wUogPC6zgYw7gU4rAM!800x800.png',
  },
  {
    id: 6,
    name: '宫保鸡丁',
    price: '38.00',
    category: 'chinese',
    image: '/static/028_AD0IsZnBDBAEGAAgi6zL-wUosNy1lgUwogE4owE!800x800.png',
  },
]

const selectedCategory = ref('cake')

const selectCategory = (categoryId: string) => {
  selectedCategory.value = categoryId
}

const filteredProducts = computed(() => {
  return products.filter((product) => product.category === selectedCategory.value)
})

const addToCart = (product: any) => {
  console.log('添加到购物车:', product.name)
  // 这里可以添加购物车逻辑
}
</script>

<style lang="less" scoped>
.products-view {
  min-height: 100vh;
  background-color: @background-color;
  padding-bottom: @tab-bar-height;
}

// 搜索栏样式
.search-section {
  padding: @spacing-lg;
  padding-top: calc(@header-height + @spacing-lg);
  background-color: @white;
  border-bottom: 1px solid @gray;
}

.search-bar {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  flex: 1;
  height: 40px;
  padding: 0 @spacing-lg 0 @spacing-lg;
  border: 1px solid @gray;
  border-radius: 20px;
  font-size: @font-size-md;
  outline: none;

  &:focus {
    border-color: @primary-color;
  }

  &::placeholder {
    color: @text-light;
  }
}

.search-icon {
  position: absolute;
  right: @spacing-lg;
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

// 优惠券区域样式
.coupon-section {
  padding: @spacing-lg;
  background-color: @white;
  border-bottom: 1px solid @gray;
}

.coupon-list {
  display: flex;
  gap: @spacing-md;
  overflow-x: auto;
  padding-bottom: @spacing-sm;
}

.coupon-item {
  min-width: 120px;
  background: linear-gradient(135deg, @primary-color, #ff8c42);
  border-radius: @border-radius;
  padding: @spacing-md;
  color: @white;
  text-align: center;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
}

.coupon-value {
  font-size: @font-size-xl;
  font-weight: 700;
  margin-bottom: @spacing-xs;
}

.coupon-condition {
  font-size: @font-size-xs;
  margin-bottom: @spacing-sm;
  opacity: 0.9;
}

.coupon-btn {
  background-color: @white;
  color: @primary-color;
  border: none;
  border-radius: 12px;
  padding: @spacing-xs @spacing-sm;
  font-size: @font-size-xs;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: @gray-light;
  }
}

// 主要内容区域
.main-content {
  display: flex;
  flex: 1;
  background-color: @white;
}

// 左侧分类导航
.category-sidebar {
  width: 80px;
  background-color: @gray-light;
  border-right: 1px solid @gray;
}

.category-item {
  padding: @spacing-lg @spacing-md;
  text-align: center;
  font-size: @font-size-sm;
  color: @text-color;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid @gray;

  &:hover {
    background-color: @white;
  }

  &.active {
    background-color: @white;
    color: @primary-color;
    font-weight: 600;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background-color: @primary-color;
    }
  }
}

// 右侧产品列表
.products-list {
  flex: 1;
  padding: @spacing-lg;
  display: flex;
  flex-direction: column;
  gap: @spacing-lg;
}

.product-item {
  display: flex;
  align-items: center;
  padding: @spacing-md;
  background-color: @white;
  border-radius: @border-radius;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.product-image {
  width: 80px;
  height: 80px;
  border-radius: @border-radius;
  overflow: hidden;
  margin-right: @spacing-lg;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product-info {
  flex: 1;
}

.product-name {
  font-size: @font-size-md;
  color: @text-color;
  font-weight: 600;
  margin-bottom: @spacing-xs;
}

.product-price {
  font-size: @font-size-lg;
  color: @primary-color;
  font-weight: 700;
}

.product-action {
  margin-left: @spacing-lg;
}

.cart-icon {
  width: 40px;
  height: 40px;
  background-color: @primary-color;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: darken(@primary-color, 10%);
    transform: scale(1.1);
  }

  span {
    font-size: 18px;
  }
}
</style>
