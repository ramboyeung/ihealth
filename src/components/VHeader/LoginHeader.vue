<template>
  <div class="login-header">
    <div class="layout">
      <!-- 左侧LOGO区域. 由于LOGO可点击, 因此使用a标签 -->
      <router-link class="logo" to="/home">
        <img src="../../assets/images/Pic_logo15th@2x.536a1e7b.png" alt="" />
      </router-link>
      <!-- 右侧文字区域 -->
      <div class="welcome">
        <!-- 登录or注册应该显示的文本 -->
        <span>你好，欢迎<slot></slot>！</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginMsg: "登录"
    };
  }
};
</script>

<style lang="scss" scoped>
.login-header {
  background: #faede6;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: center;
  .layout {
    display: flex;
    justify-content: flex-start;
    width: 1200px;
    display: flex;
    justify-content: flex-start;
    .logo {
      img {
        padding: 5px;
        height: 50px;
        width: 200px;
        height: 40px;
      }
    }
    .welcome {
      margin-left: 30px;
      font-size: 18px;
    }
  }
}
</style>
