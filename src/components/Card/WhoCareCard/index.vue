<template>
  <div class="ad-card-box">
    <!-- 标题开始 -->
    <div class="ad-big-title">有人“管”的体检</div>
    <div class="ad-small-title">
      <span>您的健康问题，爱康一管到底</span>
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
        <div class="card-content-container">
          <h4 class="card-content-title">
            体检报告看不懂, <strong>谁来管？</strong>
          </h4>
          <p class="card-text">
            窦性心律失常、屈光不正...类似这样的专业术语出现在体检报告中，很多人都是一头雾水。爱康有人“管”的体检iKangCare+计划可以为客户提供爱康APP、官方微信、全国体检中心、400电话以及外派上门服务,
            为客户提供专业、详尽的体检报告解读服务。
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "who-care-card",
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
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: #333;
    padding-top: 20px;
    box-sizing: border-box;
    margin-bottom: 5px;
    position: relative;
  }
  .ad-small-title {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 14px;
    color: #999;
    font-weight: 400;
  }
  .card-box-wrap {
    width: 1200px;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    .card-box {
      box-shadow: 1px 1px 15px 0px rgba(0, 0, 0, 0.2);
      &:nth-child(even) {
        margin-left: 30px;
        margin-right: 30px;
      }
      img {
        height: auto;
        // width: 380px;
      }
      .card-content-container {
        width: 100%;
        height: 194px;
        text-align: center;
        background: #fff;
        .card-content-title {
          padding: 18px 0 12px 0;
          height: 28px;
          font-size: 20px;
          font-weight: 600;
          color: #2d2c2c;
          line-height: 28px;
          strong {
            color: #ff6732;
          }
        }
        .card-text {
          padding: 0 30px;
          font-weight: 300;
          color: #666;
          line-height: 19px;
          text-align: left;
          letter-spacing: 0.8px;
        }
      }
    }
  }
}
</style>
