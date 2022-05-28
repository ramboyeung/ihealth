<template>
  <div class="ad-card-box">
    <!-- 标题开始 -->
    <div class="ad-big-title">企业团检</div>
    <div class="ad-small-title">
      <span>打造企业专属健康福利体检 </span
      ><span class="look-more">查看更多</span>
    </div>
    <!-- 标题结束 -->

    <!-- 图片部分 -->
    <div class="card-box-wrap">
      <router-link
        class="card-box"
        tag="div"
        :to="item.href"
        v-for="item in imgData"
        :key="item.id"
      >
        <img :src="item.imgUrl" alt="" :width="fWidth" />
        <p class="card-content">肝癌如何筛查</p>
        <p class="card-date">2021-12-14</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "say-health-card",
  props: {
    imgData: Array,
    fWidth: Number
  }
};
</script>

<style lang="scss" scoped>
.ad-card-box {
  width: 1200px;
  margin: 0 auto;
  .ad-big-title {
    width: 100%;
    font-size: 34px;
    font-weight: 700;
    color: #333;
    padding-top: 20px;
    box-sizing: border-box;
    margin-bottom: 15px;
    position: relative;
  }
  .ad-small-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 16px;
    color: #999;
    font-weight: 400;
    .look-more {
      cursor: pointer;
    }
  }
  .card-box-wrap {
    width: 1200px;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    .card-box {
      cursor: pointer;
      img {
        height: auto;
        // width: 380px;
      }
      .card-content {
        display: block;
        font-size: 20px;
        font-weight: 600;
        color: #2d2c2c;
        height: 56px;
        line-height: 28px;
        margin-bottom: 10px;
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .card-date {
        font-size: 16px;
        color: #999;
        line-height: 22px;
      }
    }
  }
}
</style>
