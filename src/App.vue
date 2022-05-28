<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import "~@/assets/css/reset.css";
#app {
  min-width: 1200px;// 让最顶部在窗口缩小时不超宽留白
}
</style>
