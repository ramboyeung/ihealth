<template>
  <div class="card-box-wrap">
    <router-link
      class="card-box"
      tag="div"
      :to="item.href"
      v-for="item in imgData"
      :key="item.id"
    >
      <img :src="item.imgUrl" alt="" :width="fWidth" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    imgData: Array,
    fWidth: Number
  }
};
</script>

<style lang="scss" scoped>
.card-box-wrap {
  width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  .card-box {
    cursor: pointer;
    img {
      height: auto;
      // width: 380px;
    }
  }
}
</style>
