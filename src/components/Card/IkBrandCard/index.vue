<template>
  <div class="ad-card-box">
    <!-- 标题开始 -->
    <div class="ad-big-title">爱康集团品牌</div>
    <div class="ad-small-title">
      <span
        >健康体检 | 疾病检测 | 综合门诊 | 齿科服务 |私人医生 | 职场医疗 |
        疫苗接种 | 抗衰老 | 移动医疗</span
      >
    </div>
    <!-- 标题结束 -->

    <!-- 图片部分 -->
    <div class="card-box-wrap">
      <div class="card-box-wrap-layout">
        <router-link
          class="card-box"
          tag="div"
          :to="item.href"
          v-for="item in imgData"
          :key="item.id"
        >
          <img :src="item.imgUrl" alt="" :width="fWidth" />
          <div class="card-text-wrap">
            <p class="card-text">卓尔不凡*悦享健康</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ik-brand-card",
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
    font-size: 23px;
    font-weight: 700;
    color: #333;
    padding-top: 100px;
    box-sizing: border-box;
    margin-bottom: 5px;
    position: relative;
  }
  .ad-small-title {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 16px;
    color: #000;
    font-weight: 400;
  }
  .card-box-wrap {
    width: 1200px;
    margin: 15px auto;
    .card-box-wrap-layout {
      // 多个图片项的容器
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .card-box {
        // 单个图片项的容器
        width: 14.2%;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        border: 1px solid #e1e0df;
        &:nth-child(even) {
          margin-left: 2.2%;
          margin-right: 2.2%;
        }
        &:hover {
          border: 1px solid #ff6110;
          cursor: pointer;
        }
        &:hover .card-text-wrap {
          display: block;
          border: 1px solid #ff6110;
          border-top: none;
          .card-text {
            display: block;
          }
        }
        img {
          height: auto;
          margin-bottom: 10px;
          // width: 380px;
        }
        .card-text-wrap {
          display: none;
          position: absolute;
          bottom: -32px;
          display: block;
          width: 100%;
          text-align: center;
          background: #fff;
          height: auto;
          z-index: 100;
          .card-text {
            display: none;
            padding: 0 30px;
            box-sizing: border-box;
            font-weight: 300;
            color: #666;
            line-height: 19px;
            text-align: left;
            letter-spacing: 0.8px;
            height: auto;
            z-index: 100;
            margin: 10px auto;
          }
        }
      }
    }
  }
}
</style>
