<template>
  <div class="side-bar">
    <div class="side-bar-item-box">
      <i class="icon">ffgdgf</i>
      <span>购买咨询</span>
    </div>
    <div class="side-bar-item-box">
      <i class="icon">ffgdgf</i>
      <span>购买咨询</span>
    </div>
    <div class="side-bar-item-box">
      <i class="icon">ffgdgf</i>
      <span>购买咨询</span>
    </div>
    <div class="side-bar-item-box">
      <i class="icon">ffgdgf</i>
      <span>购买咨询</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "side-bar"
};
</script>

<style lang="scss" scoped>
.side-bar {
  position: fixed;
  right: 0;
  top: 62px;
  width: 72px;
  background: #ccc;
  z-index: 15;
  .side-bar-item-box {
    width: 50px;
    height: 72px;
    border-bottom: 1px solid #eee;
    margin: 0 auto;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    align-items: center; // 子级水平居中
    justify-content: center;
    .icon {
    }
    span {
      font-size: 12px;
      color: #666;
      padding-top: 5px;
      box-sizing: border-box;
    }
  }
}
</style>
