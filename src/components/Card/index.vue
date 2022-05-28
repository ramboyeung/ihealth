<template>
  <div class="card-box">
    <router-link
      class="card-box"
      tag="div"
      :to="item.href"
      v-for="item in imgData"
      :key="item.id"
    >
      <img :src="item.imgUrl" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    imgData: Array
  }
};
</script>

<style lang="scss" scoped>
.card-box {
  cursor: pointer;
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  img {
    width: 380px;
    &:nth-child(2) {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>
