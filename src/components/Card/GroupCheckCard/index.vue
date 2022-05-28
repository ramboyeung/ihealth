<template>
  <div class="group-check-card-wrap">
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
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "group-check-card",
  props: {
    imgData: Array,
    fWidth: Number
  }
};
</script>

<style lang="scss" scoped>
.group-check-card-wrap {
  width: 100%;
  height: 616px;
  background: url("~@/assets/images/ad/background.jpg") 50% no-repeat;
  background-size: cover;
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
          &:nth-child(2) {
            margin-left: 10px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
