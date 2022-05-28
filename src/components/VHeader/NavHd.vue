<template>
  <!-- 页面导航按钮链接区域 -->
  <div class="nav-hd">
    <ul class="layout">
      <li class="nav-text" v-for="(item, index) in hd" :key="index">
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
        <div class="show-item">
          <div
            class="show-item-box"
            v-for="(itm, idx) in item.children"
            :key="idx"
          >
            <div class="show-item-box-seat">
              <img :src="itm.imgSrc" alt="" />
              <span>{{ itm.text }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
.nav-hd {
  background: #fff;
  // box-shadow: 0 10px 50px 1px #ccc;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  .layout {
    width: 1200px;
    display: flex;
    align-items: center;
    position: relative;
    .nav-text {
      flex: 1;
      text-align: center;
      &:hover .show-item:not(:empty) {
        display: block;
        position: absolute;
        left: 0;
        background: #fff;
        display: flex;
        width: 100%;
        height: 180px;
        justify-content: flex-start;
        flex-wrap: wrap;
        z-index: 15;
        padding-left: 50px;
        .show-item-box {
          width: 20%;
          // background: #09f;
          margin: 20px 0;
          position: relative;
          .show-item-box-seat {
            position: absolute;
          }
          img {
            margin-left: 0;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            vertical-align: middle;
          }
          span {
            margin-left: 10px;
          }
        }
      }
    }
    .show-item {
      display: none;
    }
    a {
      font-size: 16px;
      color: #333;
    }
    a:hover {
      color: #ff6732;
      text-decoration: none;
    }
    a.actived {
      color: #ff6732;
    }
  }
}
</style>
