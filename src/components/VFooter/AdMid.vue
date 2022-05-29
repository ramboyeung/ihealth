<template>
  <div class="footer-service">
    <div class="footer-service_pc">
      <div class="footer-service_pc_container">
        <!-- 左部 -->
        <div class="footer-service_pc__left">
          <ul class="footer-service-logo">
            <img src="~@/assets/images/ad/v-footer-logo.png" alt="" />
            <p>
              爱康集团是中国收入规模领先的中高端连锁体检与健康管理集团,
              是中国体检与健康管理行业第一家上市公司
            </p>
          </ul>
        </div>

        <!-- 中部 -->
        <div class="footer-service_pc__middle">
          <ul>
            <h3>关于爱康</h3>
            <li><i>公司介绍</i></li>
            <li><i>管理团队</i></li>
            <li>
              <i>愿景 使命 价值观</i>
            </li>
          </ul>
          <ul>
            <h3>新闻动态</h3>
            <li><i>公司动态</i></li>
            <li><i>健康绿皮书</i></li>
            <li><i>专题报道</i></li>
          </ul>
          <ul>
            <h3>客户服务</h3>
            <li><i>帮助中心</i></li>
            <li><i>退换货承诺</i></li>
            <li><i>关于发货快递</i></li>
            <li><i>隐私声明</i></li>
          </ul>
          <ul>
            <h3>业务合作</h3>
            <li><i>分销招募</i></li>
            <li><i>网站合作</i></li>
            <li><i>友情链接</i></li>
            <li><i>联系我们</i></li>
          </ul>
        </div>
      </div>

      <!-- 右部 -->
      <div class="footer-service_pc__right">
        <ul>
          <h3>移动端</h3>
          <li>
            <p>爱康商城</p>
            <img
              src="https://static-newmall.health.ikang.com/img/QR_mallAPP@2x.1a23fa2b.png"
              alt=""
            />
          </li>
        </ul>
        <ul>
          <h3>微信公众号</h3>
          <li>
            <p>爱康商城</p>
            <img
              src="https://static-newmall.health.ikang.com/img/QR_ikangWechat@2x.fb9ec023.png"
              alt=""
            />
          </li>
        </ul>
        <ul>
          <h3>爱康APP</h3>
          <li>
            <p></p>
            <img
              src="https://static-newmall.health.ikang.com/img/QR_ikAPP@2x.ce2512cd.png"
              alt=""
            />
          </li>
        </ul>
        <ul>
          <h3>体检宝APP</h3>
          <li>
            <p></p>
            <img
              src="https://static-newmall.health.ikang.com/img/QR_tjbAPP@2x.803aa1b3.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.footer-service {
  background: #f1f1f1;
  .footer-service_pc {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 19px 0;
    .footer-service_pc_container {
      display: flex;
      justify-content: flex-start;
      .footer-service_pc__left {
        .footer-service-logo {
          img {
            display: block;
            width: 135px;
          }
          p {
            padding-top: 7px;
            width: 200px;
            height: 66px;
            font-size: 12px;
            font-weight: 400;
            color: #666;
            line-height: 22px;
          }
        }
      }
      .footer-service_pc__middle {
        display: flex;
        justify-content: flex-start;
        margin-left: 40px;
        ul {
          margin-right: 40px;
          text-align: left;
          color: #2d2c2c;
          h3 {
            padding-bottom: 10px;
            font-size: 14px;
            font-weight: 700;
            line-height: 19px;
            letter-spacing: 1px;
          }
          li {
            width: auto;
            i {
              cursor: pointer;
              font-size: 12px;
              line-height: 21px;
              letter-spacing: 1px;
            }
          }
        }
      }
    }
    .footer-service_pc__right {
      display: flex;
      justify-content: right;

      ul {
        margin-left: 36px;
        h3 {
          text-align: justify;
          text-align-last: justify;
          font-size: 14px;
          font-weight: 700;
          line-height: 19px;
          letter-spacing: 1px;
        }
        li {
          p {
            margin-bottom: 4px;
            font-size: 12px;
            text-align: center;
            color: #999;
            height: 16px;
            line-height: 16px;
            letter-spacing: 1px;
          }
          img {
            width: 80px;
            height: 80px;
            background-color: #fff;
          }
        }
      }
    }
  }
}
// .footer-service
//   .pc.wrap
//   .footer-service_pc
//   .footer-service_pc__left
//   .footer-service-logo {
//   margin-right: 60px;
// }
// .footer-service .pc.wrap .footer-service_pc .footer-service_pc__left ul {
//   margin-right: 40px;
// }
// .footer-service .pc.wrap .footer-service_pc ul {
//   // float: left;
//   background: #b2b;
//   text-align: left;
//   color: #2d2c2c;
// }
// .footer-service
//   .pc.wrap
//   .footer-service_pc
//   .footer-service_pc__left
//   .footer-service-logo
//   img {
//   display: block;
//   width: 135px;
// }
// .footer-service
//   .pc.wrap
//   .footer-service_pc
//   .footer-service_pc__left
//   .footer-service-logo
//   p {
//   padding-top: 7px;
//   width: 200px;
//   height: 66px;
//   font-size: 12px;
//   font-weight: 400;
//   color: #666;
//   line-height: 22px;
// }

// .footer-service .pc.wrap .footer-service_pc .footer-service_pc__left ul h3 {
//   padding-bottom: 10px;
// }
// .footer-service .pc.wrap .footer-service_pc ul h3 {
//   font-size: 14px;
//   font-weight: 700;
//   line-height: 19px;
//   letter-spacing: 1px;
// }
// .footer-service .pc.wrap .footer-service_pc .footer-service_pc__left ul li i {
//   cursor: pointer;
//   font-size: 12px;
//   line-height: 21px;
//   letter-spacing: 1px;
// }
// .footer-service .pc.wrap .footer-service_pc .footer-service_pc__right {
//   background: #09f;
// }
// .footer-service .pc.wrap .footer-service_pc .footer-service_pc__right ul {
//   // float: right;
//   margin-left: 36px;
// }
// .footer-service .pc.wrap .footer-service_pc .footer-service_pc__right ul h3 {
//   text-align: justify;
//   text-align-last: justify;
// }
// .footer-service .pc.wrap .footer-service_pc ul h3 {
//   font-size: 14px;
//   font-weight: 700;
//   line-height: 19px;
//   letter-spacing: 1px;
// }
// .footer-service .pc.wrap .footer-service_pc .footer-service_pc__right ul li p {
//   margin-bottom: 4px;
//   font-size: 12px;
//   text-align: center;
//   color: #999;
//   height: 16px;
//   line-height: 16px;
//   letter-spacing: 1px;
// }
// .footer-service
//   .pc.wrap
//   .footer-service_pc
//   .footer-service_pc__right
//   ul
//   li
//   img {
//   width: 80px;
//   height: 80px;
//   background-color: #fff;
// }
// footer-service_wap {
//   background: rgb(0, 255, 106);
// }
</style>
