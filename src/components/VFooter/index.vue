<template>
  <div class="footer">
    <!-- 底部在此组合 -->
    <ad-top></ad-top>
    <ad-mid></ad-mid>
    <copy-right></copy-right>
  </div>
</template>

<script>
import adTop from "./AdTop";
import adMid from "./AdMid";
import copyRight from "./CopyRight";
export default {
  data () {
    return {};
  },
  components: {
    adTop,
    adMid,
    copyRight
  }
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  background-color: #e3e3e3;
}
</style>
