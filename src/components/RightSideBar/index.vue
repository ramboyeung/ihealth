<template>
  <div class="customer_wrap">
    <div class="customer_wrap pc" style="z-index: 2500">
      <div class="hower_box first">
        <div class="context">
          <i class="iconfont icon-zixun"></i><span>购买咨询</span>
        </div>
        <div class="consult_box">
          <div class="see" style="border-radius: 4px">
            <div class="see_item">常规体检咨询</div>
            <div class="see_item">高端体检咨询</div>
            <div class="see_item">企业体检咨询</div>
          </div>
          <div class="nosee"></div>
        </div>
      </div>
      <div class="hower_box">
        <div class="context">
          <i class="iconfont icon-zhinengkeji-icon-10"></i><span>企业咨询</span>
        </div>
        <div class="follow_box">
          <div class="see" style="border-radius: 4px">
            <div class="title" style="color: rgb(102, 102, 102)">
              企业健康顾问
            </div>
            <div class="code">
              <img
                src="https://static-newmall.health.ikang.com/img/80.6e48426c.png"
                alt="img"
              />
            </div>
          </div>
          <div class="nosee"></div>
        </div>
      </div>
      <div class="hower_box" style="border-radius: 4px">
        <div
          class="context"
          style="border-bottom: 1px solid rgb(238, 238, 238)"
        >
          <i class="iconfont icon-kefudianhua"></i><span>电话</span>
        </div>
        <div class="phone_box">
          <div class="see" style="border-radius: 4px">
            <div class="title__box">
              <div class="group_title">售后咨询</div>
              <div class="title">团购咨询</div>
            </div>
            <div class="title_phone__box">
              <div class="title_phone">4008-100-120</div>
              <div class="title_phone">010-85550223</div>
              <div class="title_phone">010-85550262</div>
              <div class="title_phone">010-85550225</div>
              <div class="title_phone">010-85550222</div>
            </div>
          </div>
          <div class="nosee"></div>
        </div>
      </div>
      <div class="hower_box" style="">
        <div class="context" style="border-bottom: none">
          <i class="iconfont icon-fanhuidingbu"></i><span>回顶部</span>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
/* **公共样式** */
.iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  color: #666;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.hower_box {
  width: 72px;
  height: 72px;

  position: relative;
  cursor: pointer;
  z-index: 1;
  text-align: center;
}
.hower_box:not(.first) {
  border-top: 1px solid #ccc;
}
.hower_box > div > span {
  font-size: 12px;
  color: #666;
  width: 72px;
  height: 72px;
  position: relative;
  cursor: pointer;
  z-index: 1;
  margin-top: 5px;
}
.consult_box,
.follow_box,
.phone_box {
  display: none;
}
.hower_box:hover .consult_box,
.hower_box:hover .follow_box,
.hower_box:hover .phone_box {
  display: block;
  // position: absolute;
  // left: -72px;
  // top: -30px;
}
.hower_box:hover > .context > .iconfont,
.hower_box:hover > .context > span {
  color: #ff6110 !important;
}
.hower_box .context {
  position: relative;
  z-index: 1;
  padding: 11px 0;
  width: 50px;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #eee;
}

/* **正文样式开始** */
.customer_wrap {
  width: 72px;
  background: #fff;
  background: #f9f9f9;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: fixed;
  top: 62px;
  right: 0;
  z-index: 2800;
}

.customer_wrap .hower_box .context .iconfont {
  font-size: 30px;
  color: #666;
}

.customer_wrap .hower_box .consult_box {
  position: absolute;
  top: 0;
  left: -158px;
  width: 158px;
}
.customer_wrap .hower_box:hover .consult_box .see {
  box-sizing: border-box;
  padding: 0 35px 0 33px;
  width: 152px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.8);
}
.customer_wrap .hower_box:hover .consult_box .see .see_item:hover {
  color: #ff6110 !important;
}
.customer_wrap .hower_box .consult_box .see .see_item {
  font-size: 12px;
  padding: 12px 0 13px 0;
  border-bottom: 1px solid #eee;
  text-align: center;
  color: #666;
}
.customer_wrap .hower_box .consult_box .nosee {
  background: transparent;
}
.customer_wrap .hower_box .follow_box {
  position: absolute;
  top: 0;
  left: -126px;
  width: 120px;
  height: 133px;
  border-radius: 4px;
}
.customer_wrap .hower_box .follow_box .see {
  box-sizing: border-box;
  padding: 0 3px 0 4px;
  width: 120px;
  height: 138px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 10%);
}
.customer_wrap .hower_box .follow_box .see .title {
  padding: 10px 20px 0;
  font-size: 12px;
}
.customer_wrap .hower_box .follow_box .see .code {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding-top: 5px;
  margin: 0 auto 5px;
}
.customer_wrap .hower_box .follow_box .see .code img {
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;
}
.customer_wrap .hower_box .follow_box .nosee {
  background: transparent;
  height: 133px;
}
.customer_wrap .hower_box .phone_box {
  position: absolute;
  top: 0;
  left: -214px;
  width: 214px;
  border-radius: 4px;
}
.customer_wrap .hower_box .phone_box .see {
  box-sizing: border-box;
  padding: 0 3px 24px 4px;
  width: 208px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 10%);
  display: -ms-flexbox;
  display: flex;
}
.customer_wrap .hower_box .phone_box .see .title__box {
  margin: 0 10px 0 11px;
  font-size: 12px;
  font-weight: 400;
  color: #666;
}
.customer_wrap .hower_box .phone_box .see .title_phone__box {
  font-size: 17px;
  font-weight: 700;
  color: #ff6110;
  padding-top: 16px;
  box-sizing: border-box;
}
.customer_wrap .hower_box .phone_box .see .title_phone__box :first-child {
  margin-top: 24px;
}
.customer_wrap .hower_box .phone_box .see .title__box .group_title {
  margin-top: 28px;
  margin-bottom: 18px;
}
.customer_wrap .hower_box .phone_box .see .title__box {
  margin: 0 10px 0 11px;
  font-size: 12px;
  font-weight: 400;
  color: #666;
}
.customer_wrap .hower_box .phone_box .see .title_phone__box .title_phone {
  margin-top: 12px;
}
.customer_wrap .hower_box .phone_box .see .title_phone__box :last-child {
  margin-bottom: 0;
}
.customer_wrap .hower_box .phone_box .nosee {
  background: transparent;
  height: 60px;
}
</style>
