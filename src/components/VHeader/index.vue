<template v-slot:vFooter>
  <!-- index组合各组件成为头部(在首页的子路由中使用，login和rigster不是子路由) -->
  <div class="vheader">
    <topBar></topBar>
    <logo-nav></logo-nav>
    <nav-hd></nav-hd>
  </div>
</template>

<script>
import topBar from "./TopBar.vue";
import logoNav from "./LogoNavBar.vue";
import navHd from "./NavHd";

export default {
  name: "vheader",
  data () {
    return {};
  },
  components: {
    topBar,
    logoNav,
    navHd
  }
};
</script>

<style lang="scss" scoped>
</style>
