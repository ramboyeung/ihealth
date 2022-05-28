<template>
  <div class="header">
    <!-- layout样式控制头部内容的宽度 -->
    <div class="layout">
      <!-- 左侧LOGO区域. 由于LOGO可点击, 因此使用a标签 -->
      <router-link class="logo" to="/home">
        <img src="../../assets/images/Pic_logo15th@2x.536a1e7b.png" alt="" />
      </router-link>
      <!-- 右侧搜索区域 -->
      <div class="searchbar">
        <!-- 搜索框按钮区域 -->
        <div class="searchbox">
          <input class="search-input" type="text" placeholder="团体精选" />
          <!-- search-btn: 控制按钮样式, search-goods/search-shop: 控制按钮背景色 -->
          <a href="javascript:;" class="search-btn search-goods">搜索</a>
          <div class="search-shop"><a href="javascript:;">购物车</a></div>
        </div>
        <!-- 搜索关键词链接区域 -->
        <div class="keywords">
          <a href="#" v-for="(item, index) in keywords" :key="index">{{
            item.wd
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: [{ wd: "入职" }, { wd: "女性" }, { wd: "中老年" }, { wd: "君安" }]
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
}
.layout {
  width: 1200px;
  display: flex;
  justify-content: space-between;
}
.logo img {
  height: 100%;
  width: 240px;
}
.searchbar .searchbox {
  height: 44px;
  display: flex;
  justify-content: flex-start;
}
.searchbar .search-input {
  height: 30px;
  width: 340px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 400;
  border: 2px solid #ff6732;
  border-right: none;
  outline: none;
}

.searchbar .search-btn {
  height: 44px;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
  padding: 0 20px;
  color: #fff;
  margin-right: 40px;
}
.searchbar .search-btn:hover {
  background: rgb(245, 202, 9);
  color: red;
  font-weight: 700;
}

.searchbar .search-goods {
  background-color: #ff6732;
  font-size: 16px;
}

.searchbar .search-shop {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 44px;
  border: 1px solid #eee;
  font-size: 14px;
  cursor: pointer;
}
.searchbar .search-shop a {
  color: #2d2c2c;
}
.searchbar .search-shop:hover a {
  color: #ff6732;
}
.searchbar .keywords {
  margin-top: 8px;
}
.searchbar .keywords a {
  margin-right: 8px;
  height: 22px;
  padding: 4px 8px;
  margin-bottom: 8px;
  background: #f5f5f5;
  line-height: 22px;
  color: #555151;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
}
.nav-hd {
  width: 100%;
  display: flex;
}
</style>
