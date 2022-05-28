<template>
  <div class="ad-card-box">
    <div class="ad-big-title">企业团检</div>
    <div class="ad-small-title">
      <span>打造企业专属健康福利体检 </span
      ><span class="look-more">查看更多</span>
    </div>
    <router-link class="big-img-box" tag="div" to="/">
      <img src="~@/assets/images/ad/webp.webp-big-ad.webp" alt="" />
    </router-link>
    <div class="img-card-wrap">
      <router-link class="card-box" tag="div" to="/">
        <div class="img-container">
          <img src="~@/assets/images/ad/webp.webp-report.webp" alt="" />
          <div class="mask">
            <p>控制体重，维持身体健康</p>
          </div>
        </div>
        <p class="title">维他纤维 水溶性膳食纤维 成人装（30条）</p>
        <span class="recommend-price">¥169</span>
      </router-link>
      <router-link class="card-box" tag="div" to="/">
        <div class="img-container">
          <img src="~@/assets/images/ad/webp.webp-report.webp" alt="" />
          <div class="mask">
            <p>控制体重，维持身体健康</p>
          </div>
        </div>
        <p class="title">维他纤维 水溶性膳食纤维 成人装（30条）</p>
        <span class="recommend-price">¥169</span>
      </router-link>
      <router-link class="card-box" tag="div" to="/">
        <div class="img-container">
          <img src="~@/assets/images/ad/webp.webp-report.webp" alt="" />
          <div class="mask">
            <p>控制体重，维持身体健康</p>
          </div>
        </div>
        <p class="title">维他纤维 水溶性膳食纤维 成人装（30条）</p>
        <span class="recommend-price">¥169</span>
      </router-link>
      <router-link class="card-box" tag="div" to="/">
        <div class="img-container">
          <img src="~@/assets/images/ad/webp.webp-report.webp" alt="" />
          <div class="mask">
            <p>控制体重，维持身体健康</p>
          </div>
        </div>
        <p class="title">维他纤维 水溶性膳食纤维 成人装（30条）</p>
        <span class="recommend-price">¥169</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ad-card"
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
    // background: #09f;
  }
  .ad-small-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 400;
    color: #999;
    .look-more {
      cursor: pointer;
    }
  }
  .big-img-box {
    width: 100%;
    height: 300px;
    cursor: pointer;
  }
  .img-card-wrap {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    .card-box {
      cursor: pointer;
      width: 278px;
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      .img-container {
        position: relative;
        width: 278px;
        img {
          height: auto;
          width: 100%;
        }
        .mask {
          display: none;
        }
        &:hover .mask {
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          padding: 5px;
          box-sizing: border-box;
          z-index: 15;
          font-size: 12px;
          color: #fff;
          line-height: 18px;
          padding: 8px 16px;
          text-align: left;
          overflow: hidden;
          max-height: 88px;
          background-color: rgba(0, 0, 0, 0.65);
        }
      }
      .title {
        width: 278px;
        height: 28px;
        font-size: 20px;
        font-weight: 600;
        color: #2d2c2c;
        margin-top: 7px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .recommend-price {
        font-size: 20px;
        font-weight: 400;
        color: #ff6732;
        margin-right: 13px;
        margin-top: 7px;
        margin-bottom: 7px;
      }
    }
  }
}
</style>
