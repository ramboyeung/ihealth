<template>
  <div class="topbar">
    <!-- layout样式控制页眉内容的宽度 -->
    <div class="layout">
      <!-- 页眉左侧内容. topbar-items: 统一控制链接样式, topbar-items-right: 控制居左  -->
      <div class="topbar-items-left">
        <ul class="topbar-items">
          <li class="item" v-for="(item, index) in tit" :key="index">
            <div class="self-trigger">{{ item.text }}</div>
            <div class="li-cart">
              <div class="li-cart-top">
                <img
                  src="https://static-newmall.health.ikang.com/img/Header_Pic_ikck.08266436.png"
                  alt=""
                  style="width: 100%"
                />
              </div>
              <div class="li-cart-bottom">
                <div
                  class="line"
                  style="
                    position: relative;
                    width: 100%;
                    height: 1px;
                    top: 0;
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACWAAAAACCAYAAADc6efsAAAAAXNSR0IArs4c6QAAAKlJREFUeAHt2DEKwzAQRNFF97/inkVC/Q6q1D1DGqcIPOLhy9Xd+34qXL7n4//h+QjzUPbBPtgH+2AfZgH7aB/to32c16H0k/On87f3D96/hIHUT/pJP+mnMA/6ST/pJ/2kn8JA6if9pJ/0U5gH/aSf9JN+0k9hIH/30wq/6zYBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIPAQOtCZoC9WHkhYAAAAASUVORK5CYII=);
                    background-size: auto 100%;
                  "
                ></div>
                <p>
                  爱康集团旗下的齿科领域专业连锁服务品牌，拥有国际先进的齿科设备和知名的专家团队。
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 页眉右侧内容. topbar-items: 统一控制链接样式, topbar-items-right: 控制居右  -->
      <div class="topbar-items-right">
        <ul class="topbar-items">
          <li class="item no-line">
            <router-link to="/login">登录</router-link> /
            <router-link to="/rigster">注册</router-link>
          </li>
          <li class="item"><a href="#">个人中心</a></li>
          <li class="item"><a href="#">我的订单</a></li>
          <li class="item"><a href="#">下载发票</a></li>
          <li class="item"><a href="#">我的福卡</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tit: [
        { text: "爱康国宾" },
        { text: "爱康卓悦" },
        { text: "爱康君安" },
        { text: "爱康齿科" },
        { text: "爱康门诊" },
        { text: "爱康健维" },
        { text: "体检宝" },
        { text: "爱康APP" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  height: 40px;
  background: #f5f5f5;
  position: relative;
}
.layout {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.topbar-items-left {
  height: 100%;
}
.topbar-items-right {
  height: 100%;
}
.topbar-items {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
}
.topbar-items li {
  position: relative;
  height: 100%;
  width: 80px;
  padding: 12px 0;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 6;
}
.topbar-items li .self-trigger {
  width: 80px;
  height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #2d2c2c;
  line-height: 17px;
}
.topbar-items li .li-cart {
  display: none;
}
.topbar-items-left li:hover {
  background: #ff6732;
}
.topbar-items-left li:hover .li-cart {
  display: block;
  width: 150px;
  background: #ff6732;
}
.topbar-items-right li:not(.no-line):before {
  content: "";
  width: 1px;
  height: 12px;
  position: absolute;
  top: 50%;
  margin-top: -6px;
  left: 0;
  background: #bebebe;
}
.topbar-items-right li a {
  color: #2d2c2c;
}
.topbar-items-right li a:hover {
  color: #ff6732;
}
</style>
