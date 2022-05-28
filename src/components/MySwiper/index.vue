<template>
  <div class="swiper-box">
    <div class="inp-wrap-layout">
      <div class="inp-wrap">
        <div class="phone_me">
          <div class="select">
            <span @click="cur = 0" :class="{ active: cur === 0 }">预约</span>
            <span @click="cur = 1" :class="{ active: cur === 1 }">查报告</span>
            <div class="line-layout">
              <div
                class="line"
                :style="{ left: cur === 0 ? '8px' : '70px' }"
              ></div>
            </div>
          </div>
          <div class="form_input">
            <input
              type="text"
              placeholder="请输入手机号"
              class="inp phone-inp"
            />
            <div class="msg_box">
              <input
                type="text"
                placeholder="请输入短信验证码"
                class="inp msg-inp"
              />
              <button class="btn">获取验证码</button>
            </div>
            <div class="accept_box">
              <input type="checkbox" class="check-inp" /><span
                class="check-text"
                >同意《爱康用户协议》《爱康隐私条款》</span
              >
            </div>
            <button class="btn">{{ cur === 0 ? "预约" : "查报告" }}</button>
            <div class="login-text">
              <span>账号密码登录</span>
              <span>旧版卡密登录</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banners" :key="item.id">
          <img :src="item.imgUrl" @click="goPage(item.href)" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev side-btn"></div>
      <div class="swiper-button-next side-btn"></div>
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
// 需要安装swiper,官网4-7版本用法基本一致，本案例使用的版本是3.4.2，引入swiper.css和js即可使用
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
export default {
  name: "mySwiper",
  data () {
    return {
      cur: 0,
      banners: [
        {
          href: "/home",
          imgUrl: require("@/assets/images/Swiper_img/webp1.webp"),
          id: "1"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/Swiper_img/webp2.webp"),
          id: "2"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/Swiper_img/webp3.webp"),
          id: "3"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/Swiper_img/webp4.webp"),
          id: "4"
        }
      ]
    }
  },
  mounted () {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination', // 分页器
      nextButton: '.swiper-button-next', // 前进按钮
      prevButton: '.swiper-button-prev', // 后退按钮
      loop: true, // 循环
      paginationClickable: true, // 分页器点击
      spaceBetween: 30, // swiper-slide 间的距离为30
      autoplay: 3000, // 时长
      autoplayDisableOnInteraction: false // 点击不会取消自动
    });
    console.log(swiper);
  },
  methods: {
    goPage (url) {
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" scoped>
// **公共样式开始***
.inp {
  box-sizing: border-box;
  padding-left: 10px;
  border: 1px solid #eee;
  /*去除阴影*/
  box-shadow: none;
  /*去除边框*/
  // border: none;
  /*去除聚焦input的蓝色边框*/
  outline: none;
  /*禁止拖拽*/
  resize: none;
  /*去除iOS默认样式*/
  -webkit-appearance: none;
  /*去除点击时背景高亮样式*/
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.btn {
  background: #ff6732;
  width: 238px;
  height: 42px;
  outline: none;
  letter-spacing: 1px;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  // border-radius: 5px;
}
// ***公共样式结束*****

// *****输入框样式开始*****
.inp-wrap-layout {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}
.inp-wrap {
  position: absolute;
  left: 0;
  top: 32px; // 本项目轮播图高度是自动的，量得为440px，所以只需要设置top=(440-376)/2px就是居中(只能采用此法)
  z-index: 10;
  width: 298px;
  height: 376px;
  background: #fff;
}

.phone_me {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 238px;
  margin: auto;
  .select {
    font-size: 16px;
    position: relative;
    height: 40px;
    span {
      margin-bottom: 10px;
      cursor: pointer;
      &:nth-child(2) {
        margin-left: 25px;
      }
    }
    // 字体被点击激活的样式
    .active {
      font-weight: 600;
      font-size: 20px;
      color: #333;
      transform: scale(1.3);
      transition: all 0.3s;
    }
    // 下划线激活的样式(无法配合动画效果，取消)
    // .active:after {
    //   position: absolute;
    //   content: "";
    //   width: 15px;
    //   height: 2px;
    //   background: #333;
    //   left: 35%;
    //   bottom: 0;
    //   transition: all 0.3s;
    // }
    .line-layout {
      position: relative;
      .line {
        position: absolute;
        // left: 8px;/* 激活时动态控制left */
        height: 3px;
        width: 24px;
        background: #333;
        margin-top: 10px;
        transition: all 0.3s;
      }
    }
  }
  .form_input {
    .phone-inp {
      margin-top: 30px;
      display: block;
      width: 100%;
      height: 40px;
    }
    .msg_box {
      margin: 24px 0;
      height: 40px;
      display: flex;
      .msg-inp {
        width: 139px;
        height: 100%;
      }
      .btn {
        width: 96px;
        height: 100%;
        font-size: 12px;
      }
    }
    .accept_box {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      margin-top: 10px;
      width: 100%;
      .check-inp {
        width: 12px;
        height: 12px;
      }
      .check-text {
        margin-left: 2px;
        font-size: 12px;
        color: #999;
      }
    }
    .login-text {
      margin: 10px 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #555151;
      span:hover {
        color: #ff6732;
      }
    }
  }
}
// *****输入框样式结束*****

// *****轮播图样式开始*****
.swiper-box {
  position: relative;
}

.swiper-container {
  width: 100%;
  height: auto;
}
::v-deep .swiper-pagination-bullet {
  background-color: red; // 透明度没法改（只能去动源码），颜色能改
  width: 20px;
  height: 20px;
}
::v-deep .swiper-pagination-bullet-active {
  background-color: yellow;
}

.side-btn {
  background-color: rgba(0, 0, 0, 0.5);
  height: 60px;
  width: 40px;
}
.swiper-button-prev {
  left: 385px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ff6732'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next {
  right: 100px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ff6732'%2F%3E%3C%2Fsvg%3E");
}

.swiper-slide img {
  width: auto;
  height: 100%;
  cursor: pointer;
}
// *****轮播图样式结束*****
</style>
