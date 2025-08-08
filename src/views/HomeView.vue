<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue'
import HeaderBar from '@/components/HeaderBar.vue'
import img011 from '@/assets/images/011_AD0IsZnBDBAEGAAg26XL-wUohMuo1AMwmwI4rgI!800x800.png'
import img024 from '@/assets/images/024_AD0IsZnBDBAEGAAgi6zL-wUo7_y8mgUwdDh0!800x800.png'
import img015 from '@/assets/images/015_AD0IsZnBDBAEGAAg4-nL-wUo8MDP-AIwVjhf!800x800.png'
import img031 from '@/assets/images/031_AD0IsZnBDBAEGAAgncb5-wUo05ewrQUw7gU4jwg!800x800.png'
import img023 from '@/assets/images/023_AD0IsZnBDBAEGAAg96TL-wUo2NnrwAEw4wM4kwI!800x800.png'
import img033 from '@/assets/images/033_AD0IsZnBDBAEGAAgwar6-wUooPzQ-gQwygI4ygI!800x800.png'
import img004 from '@/assets/images/004_AD0IsZnBDBAEGAAg1NLL-wUo9tOmywYwogQ4xQI!800x800.png'
import img002 from '@/assets/images/002_AD0IsZnBDBACGAAgtKDL-wUonIe4jgUw7gU47gU!450x450.jpg'

const isLoading = ref(true)
const loadedImages = ref(0)
const totalImages = ref(8) // 总共需要加载的图片数量

const rankingItems = [
  {
    name: '意面套餐',
    price: '¥29.00',
    sales: 155,
    imageSrc: img011,
  },
  {
    name: '炒饭套餐',
    price: '¥35.00',
    sales: 100,
    imageSrc: img024,
  },
  {
    name: '米饭套餐',
    price: '¥45.00',
    sales: 98,
    imageSrc: img015,
  },
]

onMounted(async () => {
  console.log('HomeView mounted')
  // 等待DOM更新完成
  await nextTick()
  console.log('HomeView DOM updated')
})

const onImageLoad = () => {
  console.log('Hero image loaded successfully')
  loadedImages.value++
  checkAllImagesLoaded()
}

const onImageError = (event: Event) => {
  console.error('Hero image failed to load:', event)
  loadedImages.value++
  checkAllImagesLoaded()
}

const checkAllImagesLoaded = () => {
  if (loadedImages.value >= totalImages.value) {
    setTimeout(() => {
      isLoading.value = false
    }, 500) // 延迟500ms确保过渡效果
  }
}
</script>

<template>
  <div class="home-view">
    <!-- Loading 显示 -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <div class="loading-text">正在加载...</div>
      </div>
    </div>

    <!-- 主要内容 -->
    <div v-show="!isLoading" class="main-content">
      <HeaderBar />

      <!-- 测试内容，确保页面能正确显示 -->
      <div
        style="
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          background: red;
          color: white;
          padding: 10px;
          display: none;
        "
      >
        测试内容 - 如果看到这个说明页面正常加载
      </div>

      <!-- 顶部背景图片区域 -->
      <div class="hero-section">
        <div class="hero-background">
          <img :src="img031" alt="美食背景" @load="onImageLoad" @error="onImageError" />
          <div class="hero-title-image">
            <img :src="img023" alt="健康美味" @load="onImageLoad" @error="onImageError" />
          </div>
        </div>
        <div class="hero-content">
          <div class="hero-text">
            <p class="hero-subtitle">满足你的味蕾!</p>
            <div class="hero-badge">尽享快乐"食"光</div>
          </div>
        </div>
      </div>

      <div class="content">
        <!-- 新品推荐区域 -->
        <div class="new-recommendations">
          <div class="section-header">
            <div class="recommendation-badge">新品推荐</div>
          </div>

          <div class="recommendation-content">
            <div class="main-recommendation">
              <div class="food-image">
                <img :src="img033" alt="减脂沙拉套餐" @load="onImageLoad" @error="onImageError" />
              </div>
              <div class="food-info">
                <div class="food-name">减脂沙拉套餐鸡胸肉</div>
                <div class="food-price">¥29.00</div>
              </div>
            </div>

            <div class="sales-ranking">
              <div class="ranking-title">月销售排行榜</div>
              <div class="ranking-inner">
                <div class="ranking-list">
                  <div v-for="(item, index) in rankingItems" :key="index" class="ranking-item">
                    <div class="ranking-pic">
                      <img
                        :src="item.imageSrc"
                        :alt="item.name"
                        @load="onImageLoad"
                        @error="onImageError"
                      />
                      <div class="ranking-badge" :class="'rank-' + (index + 1)">
                        {{ index + 1 }}
                      </div>
                    </div>
                    <div class="ranking-info">
                      <div class="ranking-price">{{ item.price }}</div>
                      <div class="ranking-sales">月销售 {{ item.sales }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 其他推荐内容 -->
        <div class="other-recommendations">
          <div class="recommendation-card">
            <div class="food-image">
              <img :src="img004" alt="辣子鸡丁" @load="onImageLoad" @error="onImageError" />
            </div>
            <div class="food-info">
              <div class="food-name">辣子鸡丁</div>
              <div class="food-price">¥32.00</div>
            </div>
          </div>
          <div class="recommendation-card">
            <div class="food-image">
              <img :src="img002" alt="青椒牛肉" @load="onImageLoad" @error="onImageError" />
            </div>
            <div class="food-info">
              <div class="food-name">青椒牛肉</div>
              <div class="food-price">¥39.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// Loading 样式
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: @white;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  text-align: center;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid @gray-light;
  border-top: 3px solid @primary-color;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto @spacing-md;
}

.loading-text {
  color: @text-color;
  font-size: @font-size-md;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// 主要内容
.main-content {
  width: 100%;
  height: 100%;
}

.home-view {
  min-height: 100vh;
  background-color: @secondary-color;
  padding-bottom: calc(@tab-bar-height + @spacing-lg);
}

.hero-section {
  position: relative;
  overflow: hidden;
  margin-top: @header-height;
}

.hero-background {
  position: relative;
  z-index: 1;
  background-color: transparent;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.hero-content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: @spacing-xl;
  padding-bottom: @spacing-xxl;
  pointer-events: none; // 防止遮挡点击事件
}

.hero-text {
  text-align: center;
  color: @white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  pointer-events: auto; // 恢复文本的点击事件
}

.hero-title-image {
  margin-bottom: @spacing-md;
  position: absolute;
  top: 13%; //离顶部60px，避免被导航栏遮挡
  right: 22%; // 距离右边30px
  transform: scale(1.5); // 适中的缩放比例
  z-index: 3; // 确保在最上层

  img {
    max-width: 180px; // 适中的图片大小
    height: auto;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
}

.hero-subtitle {
  font-size: @font-size-lg;
  margin-bottom: @spacing-lg;
  opacity: 0.9;
  font-weight: 500;
}

.hero-badge {
  display: inline-block;
  background-color: rgba(139, 69, 19, 0.9);
  color: @white;
  padding: @spacing-sm @spacing-lg;
  border-radius: 20px;
  font-size: @font-size-sm;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.content {
  padding-top: 0;
}

.new-recommendations {
  padding: @spacing-lg;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, @primary-color, @secondary-color);
    border-radius: 2px;
  }
}

.section-header {
  display: flex;
  justify-content: center;
  margin-bottom: @spacing-lg;
}

.recommendation-badge {
  background-color: @primary-color;
  color: @white;
  padding: @spacing-sm @spacing-lg;
  border-radius: 20px;
  font-size: @font-size-md;
  font-weight: 600;
}

.recommendation-content {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: @spacing-lg;
  align-items: stretch;
}

.main-recommendation,
.sales-ranking {
  box-sizing: border-box;
  width: 100%;
  min-width: 0; // 允许在网格中收缩，确保等宽
}

.main-recommendation {
  flex: 1;
  background-color: @white;
  border-radius: @border-radius-large;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
}

.food-image {
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: @border-radius-large @border-radius-large 0 0;
  }
}

.food-info {
  padding: @spacing-lg;
}

.food-name {
  font-size: @font-size-md;
  color: @text-color;
  font-weight: 600;
  margin-bottom: @spacing-sm;
}

.food-price {
  font-size: @font-size-lg;
  color: @primary-color;
  font-weight: 700;
}

.sales-ranking {
  flex: 1;
  background: linear-gradient(135deg, #f39c12, @primary-color);
  border-radius: @border-radius-large;
  padding: @spacing-md;
  color: @white;
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.25);
  display: flex;
  flex-direction: column;
}

.ranking-title {
  font-size: @font-size-xl;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: @spacing-sm;
}

.ranking-inner {
  background-color: @white;
  border-radius: @border-radius;
  padding: @spacing-sm;
}

.ranking-list {
  display: flex;
  flex-direction: column;
  gap: @spacing-md;
}

.ranking-item {
  display: flex;
  align-items: center;
  gap: @spacing-sm;
}

.ranking-pic {
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.ranking-badge {
  position: absolute;
  top: -6px;
  left: -6px;
  background: @primary-color;
  color: @white;
  font-weight: 800;
  font-size: @font-size-sm;
  padding: 4px 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.ranking-badge.rank-1 {
  background: linear-gradient(180deg, #ff6b6b, #ff3b30);
}
.ranking-badge.rank-2 {
  background: linear-gradient(180deg, #ffb142, #f39c12);
}
.ranking-badge.rank-3 {
  background: linear-gradient(180deg, #ffd86b, #f1c40f);
}

.ranking-info {
  flex: 1;
}

.ranking-price {
  font-size: @font-size-xl;
  color: @primary-color;
  font-weight: 800;
  margin-bottom: 2px;
}

.ranking-sales {
  font-size: @font-size-md;
  color: #9aa1a7;
}

.other-recommendations {
  padding: 0 @spacing-lg @spacing-lg;
  display: flex;
  gap: @spacing-lg;
  margin-bottom: @spacing-xxl;
}

.recommendation-card {
  flex: 1;
  background-color: @white;
  border-radius: @border-radius-large;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  .food-image {
    height: 120px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: @border-radius-large @border-radius-large 0 0;
    }
  }

  .food-info {
    padding: @spacing-md;
  }

  .food-name {
    font-size: @font-size-sm;
    color: @text-color;
    font-weight: 600;
    margin-bottom: @spacing-xs;
  }

  .food-price {
    font-size: @font-size-md;
    color: @primary-color;
    font-weight: 700;
  }
}
</style>
