<template>
  <div class="footer-point">
    <div class="wrap pc">
      <ul>
        <li>
          <span class="iconfont icon-guanfang2"></span
          ><span
            ><h3>官方直营</h3>
            <p>一百余家直营体检中心线上预约、专注健康体检17年</p></span
          >
        </li>
        <li>
          <span class="iconfont icon-V"></span
          ><span
            ><h3>团队优势</h3>
            <p>拥有成熟的技术开发和专业的团队客服坐席为您服务</p></span
          >
        </li>
        <li>
          <span class="iconfont icon--yiliao-yisheng"></span
          ><span
            ><h3>专业保证</h3>
            <p>拥有三甲医院返聘医师、国际先进设备、高质量的服务</p></span
          >
        </li>
        <li>
          <span class="iconfont icon-tui2"></span
          ><span
            ><h3>售后服务</h3>
            <p>未消费订单及时退、过期退、体检保障和隐私保障</p></span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.footer-point {
  background-color: #f1f1f1;
}
.pc.wrap,
.pc.wrap {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.footer-point .pc ul {
  padding: 20px 0;
  border-bottom: 1px solid #e3e3e3;
  overflow: hidden;
}
.footer-point .pc ul li {
  float: left;
  margin-right: 60px;
  width: 251px;
}
.footer-point .pc ul li span:first-of-type {
  float: left;
  margin: 8px 0;
  width: 44px;
  color: #3f3c3c;
  font-size: 44px;
}
.iconfont {
  font-family: iconfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.footer-point .pc ul li span:last-of-type {
  float: right;
  width: 180px;
}
.footer-point .pc ul li span:last-of-type h3 {
  margin-bottom: 4px;
  color: #2d2c2c;
  font: 700 14px/20px PingFangSC-Semibold;
  letter-spacing: 2px;
}
.footer-point .pc ul li span:last-of-type p {
  color: #555151;
  font: 400 12px/16px PingFangSC-Regular;
  letter-spacing: 1.5px;
}
.footer-point .pc ul li:nth-of-type(4n) {
  margin-right: 0;
}
</style>
