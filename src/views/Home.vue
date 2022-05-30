<template>
  <div class="home-wrap">
    <SideBar />
    <MySwiper />
    <ImgCard :imgData="imD" :fWidth="380" />
    <AdCard />
    <AdCard />
    <AdCard />
    <GroupCheck :imgData="imE" :fWidth="380" />
    <SayHealth :imgData="imG" :fWidth="280" />
    <WhoCare :imgData="imF" :fWidth="380" />
    <IkBrand :imgData="imH" :fWidth="142" />
    <IkNews :fWidth="160" />
  </div>
</template>

<script>
import SideBar from "@/components/RightSideBar"
import MySwiper from "@/components/MySwiper"
import ImgCard from "@/components/Card/ImgCard"
import AdCard from "@/components/Card/AdCardItem"
import GroupCheck from "@/components/Card/GroupCheckCard"
import SayHealth from "@/components/Card/SayHealthCard"
import WhoCare from "@/components/Card/WhoCareCard"
import IkBrand from "@/components/Card/IkBrandCard"
import IkNews from "@/components/Card/IkNewsCard"
export default {
  name: 'Home',
  components: {
    SideBar, MySwiper, ImgCard, AdCard, GroupCheck, SayHealth, WhoCare, IkBrand, IkNews
  },
  data () {
    return {
      imD: [
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/webp.webp-ad-s1.webp"),
          id: "1"
        },
        {
          href: "/tjMarket",
          imgUrl: require("@/assets/images/ad/webp.webp-ad-s1.webp"),
          id: "2"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/webp.webp-ad-s1.webp"),
          id: "3"
        }
      ],
      imE: [
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/webp.webp-buy1.webp"),
          id: "1"
        },
        {
          href: "/tjMarket",
          imgUrl: require("@/assets/images/ad/webp.webp-buy1.webp"),
          id: "2"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/webp.webp-buy1.webp"),
          id: "3"
        }
      ],
      imF: [
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/pic_ikangcare+_01@2x.5d79b825.png"),
          id: "1"
        },
        {
          href: "/tjMarket",
          imgUrl: require("@/assets/images/ad/pic_ikangcare+_01@2x.5d79b825.png"),
          id: "2"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/pic_ikangcare+_01@2x.5d79b825.png"),
          id: "3"
        }
      ],
      imG: [
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/say-health.jpg"),
          id: "1"
        },
        {
          href: "/tjMarket",
          imgUrl: require("@/assets/images/ad/say-health.jpg"),
          id: "2"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/say-health.jpg"),
          id: "3"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/say-health.jpg"),
          id: "4"
        }
      ],
      imH: [
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/ik-brand.png"),
          id: "1"
        },
        {
          href: "/tjMarket",
          imgUrl: require("@/assets/images/ad/ik-brand.png"),
          id: "2"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/ik-brand.png"),
          id: "3"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/ik-brand.png"),
          id: "5"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/ik-brand.png"),
          id: "6"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/ik-brand.png"),
          id: "7"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/ik-brand.png"),
          id: "8"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/ik-brand.png"),
          id: "9"
        },
        {
          href: "/home",
          imgUrl: require("@/assets/images/ad/ik-brand.png"),
          id: "10"
        }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
