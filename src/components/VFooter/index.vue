<template>
  <div class="footer">
    <!-- 底部在此组合 -->
    <ad></ad>
    <copy-right></copy-right>
  </div>
</template>

<script>
import ad from "./Ad";
import copyRight from "./CopyRight";
export default {
  data () {
    return {};
  },
  components: { ad, copyRight }
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  background-color: #e3e3e3;
}
</style>
