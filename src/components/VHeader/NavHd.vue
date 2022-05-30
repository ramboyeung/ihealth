<template>
  <!-- 页面导航按钮链接区域 -->
  <div class="nav-wrap">
    <div class="nav">
      <div class="nav-item" v-for="(item, index) in hd" :key="index">
        <router-link
          :to="{
            path: item.path,
            query: { product_first_type_id: item.product_first_type_id },
          }"
          :target="
            item.text === '首页' || item.text === '体检超市'
              ? '_self'
              : '_blank'
          "
          tag="a"
          >{{ item.text }}</router-link
        >
        <div class="sub-nav-wrap">
          <div class="sub-nav">
            <ul>
              <li v-for="(itm, idx) in item.children" :key="idx">
                <img :src="itm.imgSrc" alt="" /><span>{{ itm.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hd: [
        { text: "首页", path: "/home" },
        { text: "热销体检", path: "/searchList", product_first_type_id: 232 },
        {
          text: "口腔护理",
          path: "/searchList",
          product_first_type_id: 171,
          children: [
            { text: "入职", path: "/home", imgSrc: "https://static-upyunmall.health.ikang.com/image/category/20210521/a89c0f855d164d23a1b5523fd9cd333e.jpg" },
            { text: "首页22", path: "/home", imgSrc: "https://static-upyunmall.health.ikang.com/image/category/20210521/a89c0f855d164d23a1b5523fd9cd333e.jpg" },
            { text: "首额而出页", path: "/home", imgSrc: "https://static-upyunmall.health.ikang.com/image/category/20210521/a89c0f855d164d23a1b5523fd9cd333e.jpg" },
            { text: "首若干个页", path: "/home", imgSrc: "https://static-upyunmall.health.ikang.com/image/category/20210521/a89c0f855d164d23a1b5523fd9cd333e.jpg" },
            { text: "首regression页", path: "/home", imgSrc: "https://static-upyunmall.health.ikang.com/image/category/20210521/a89c0f855d164d23a1b5523fd9cd333e.jpg" },
            { text: "首归属感页", path: "/home", imgSrc: "https://static-upyunmall.health.ikang.com/image/category/20210521/a89c0f855d164d23a1b5523fd9cd333e.jpg" },
            { text: "首发热页", path: "/home", imgSrc: "https://static-upyunmall.health.ikang.com/image/category/20210521/a89c0f855d164d23a1b5523fd9cd333e.jpg" },
            { text: "首页大商股份", path: "/home", imgSrc: "https://static-upyunmall.health.ikang.com/image/category/20210521/a89c0f855d164d23a1b5523fd9cd333e.jpg" },
            { text: "首个页", path: "/home", imgSrc: "https://static-upyunmall.health.ikang.com/image/category/20210521/a89c0f855d164d23a1b5523fd9cd333e.jpg" }
          ]
        },
        { text: "疫苗注射", path: "/searchList", product_first_type_id: 640 },
        { text: "基因检测", path: "/searchList", product_first_type_id: 743 },
        { text: "健康好物", path: "/searchList", product_first_type_id: 422 },
        { text: "体检超市", path: "/tjMarket" },
        { text: "企业团检", path: "/searchList", product_first_type_id: 1111 },
        { text: "体检分院", path: "/searchList", product_first_type_id: 2222 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// 默认是.router-link-active，路由激活时的样式类名可通过路由更改
::v-deep .current {
  color: #ff6732 !important;
  background-color: pink;
}

.nav-wrap {
  height: 40px;
  min-width: 1200px;
  position: relative; //relative设在nav-wrap还是nav，效果不一样，具体看需求
}
.nav {
  display: flex;
  align-items: center;
  width: 1200px;
  margin: 30px auto 0;
}
.nav-item {
  flex: 1;
}
.nav-item a {
  font-size: 16px;
  color: #333;
  display: block;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  text-align: center;
}
.nav-item:hover a {
  color: #ff6732;
}
.nav-item:hover .sub-nav-wrap {
  display: block;
  z-index: 15;
}
.sub-nav-wrap {
  display: none;
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: #fff;
}
.sub-nav {
  width: 1200px; // 去掉则是占全宽，保留则是占版心
  margin: 0 auto;
  display: flex;
  background-color: #fff;
}
.sub-nav ul:not(:empty) {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 30px;
}
.sub-nav li {
  width: 20%;
  margin-bottom: 30px;
  cursor: pointer;
}
.sub-nav img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
}
.sub-nav span {
  margin-left: 10px;
  font-size: 14px;
}
</style>
