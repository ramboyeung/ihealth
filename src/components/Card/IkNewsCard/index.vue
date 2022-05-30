<template>
  <div class="ad-card-box">
    <!-- 标题开始 -->
    <div class="ad-big-title">爱康资讯</div>
    <div class="ad-small-title">
      <span>实时资讯，价值传递，成就未来</span>
    </div>
    <!-- 标题结束 -->
    <div class="news-box">
      <!-- 左侧公司动态部分 -->
      <ul class="info-company">
        <div class="info-company-title-box">
          <span>公司动态</span>
          <span>查看全部</span>
        </div>
        <li v-for="i in 2" :key="i" class="news-wrap">
          <router-link class="news-img-box" tag="div" to="/home">
            <img
              src="~@/assets/images/ad/company-news.jpg"
              alt=""
              :width="fWidth"
            />
          </router-link>
          <router-link class="news-context-box" tag="div" to="/home">
            <h4 class="news-title">又上热搜！AI正在解锁癌症早筛“新姿势”</h4>
            <p class="news-text">
              全国肿瘤防治宣传周期间，爱康集团创始人、董事长兼CEO张黎刚接受北京日报社专访，给出癌症防治的另一个解决方案——AI正在解锁癌症早筛“新姿势”。
            </p>
          </router-link>
        </li>
      </ul>

      <!-- 右侧健康绿皮书部分 -->
      <ul class="info-health">
        <div class="info-health-title-box">
          <span>健康绿皮书</span>
          <span>查看全部</span>
        </div>
        <li v-for="i in 2" :key="i" class="health-item-wrap">
          <router-link class="health-book-box" tag="div" to="/home">
            <img
              src="~@/assets/images/ad/health-book.jpg"
              alt=""
              :width="fWidth"
            />
          </router-link>
          <router-link class="health-text-box" tag="div" to="/home">
            <h4>
              《2022版太平人寿VIP客户健康绿皮书》发布：体检是早发现重大疾病的重要途径
            </h4>
            <p>2022-04-28</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ik-news-card",
  props: {
    fWidth: Number
  }
};
</script>

<style lang="scss" scoped>
//定义公共样式：标题
.sw {
  display: flex;
  justify-content: space-between;
}
@mixin pubTitle {
  @extend .sw;
  span {
    &:first-child {
      font-size: 18px;
      color: #2d2c2c;
      font-weight: 600;
    }
    &:last-child {
      cursor: pointer;
      color: #666;
    }
  }
}

.ad-card-box {
  width: 1200px;
  margin: 0 auto 122px;
  .ad-big-title {
    width: 100%;
    text-align: center;
    font-size: 23px;
    font-weight: 700;
    color: #333;
    padding-top: 100px;
    box-sizing: border-box;
    margin-bottom: 5px;
    position: relative;
  }
  .ad-small-title {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 12px;
    color: #83817f;
    font-weight: 400;
  }
  .news-box {
    @extend .sw;
    .info-company {
      border-right: 1px dashed #e3e3e3;
      width: 790px;
      padding-right: 40px;
      .info-company-title-box {
        @include pubTitle;
      }
      .news-wrap {
        @extend .sw;
        padding: 25px 0;
        .news-img-box {
          box-sizing: border-box;
          padding-right: 30px;
          img {
            cursor: pointer;
            width: 160px;
            height: 90px;
          }
        }
        .news-context-box {
          h4 {
            cursor: pointer;
            padding-top: 6px;
            height: 22px;
            font-size: 16px;
            font-weight: 600;
            color: #2d2c2c;
            line-height: 22px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          p {
            cursor: pointer;
            padding-top: 16px;
            height: 40px;
            font-weight: 300;
            color: #666;
            line-height: 19px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }
      }
    }
    .info-health {
      width: 344px;
      .info-health-title-box {
        @include pubTitle;
      }
      .health-item-wrap {
        padding-top: 25px;
        box-sizing: border-box;
        @extend .sw;
        .health-book-box {
          padding-left: 12px;
          padding-right: 12px;
          box-sizing: border-box;
          img {
            width: 60px;
            height: 60px;
          }
        }
        .health-text-box {
          h4 {
            cursor: pointer;
            height: 40px;
            font-size: 14px;
            font-weight: 400;
            color: #2d2c2c;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          p {
            padding-top: 5px;
            height: 19px;
            font-weight: 300;
            color: #999;
            line-height: 19px;
          }
        }
      }
    }
  }
}
</style>
