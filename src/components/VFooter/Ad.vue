<template>
  <div class="footer-layout">
    <div class="links">
      <a href="#">关于本站</a><i class="border">|</i><a href="#">关于我们</a
      ><i class="border">|</i> <a href="#">团队成员</a><i class="border">|</i
      ><a href="#">联系我们</a><i class="border">|</i>
      <a href="#">意见反馈</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.footer-layout {
  height: 80px;
  margin: auto;
}
.links {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}
.links a {
  padding: 0 10px;
  font-size: 14px;
  color: #bfbfbf;
}
.links i {
  padding: 0 10px;
  font-size: 16px;
  color: #bfbfbf;
}
</style>
