<template>
  <div class="home-wrap">
    <MySwiper />
    <Card :imgData="imD" />
  </div>
</template>

<script>
import MySwiper from "@/components/MySwiper"
import Card from "@/components/Card"
export default {
  name: 'Home',
  components: {
    MySwiper, Card
  },
  data () {
    return {
      imD: [
        {
          href: "/home",
          imgUrl: require("@/assets/images/Swiper_img/webp1.webp"),
          id: "1"
        },
        {
          href: "/tjMarket",
          imgUrl: require("@/assets/images/Swiper_img/webp2.webp"),
          id: "2"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/Swiper_img/webp3.webp"),
          id: "3"
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
