<template>
  <div class="fswiper">
    <img src="@/assets/img/first_img/1.jpg" hidden class="swi">
    <img src="@/assets/img/first_img/2.jpg" hidden class="swi">
    <img src="@/assets/img/first_img/3.jpg" hidden class="swi">
    <swiper>
      <swiper-item v-for="it in imgSrcs">
        <img :src="it" class="imgs">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper";
import SwiperItem from "@/components/swiper/SwiperItem";
export default {
  name: "szimg",
  components:{
    Swiper,
    SwiperItem,
  },
  mounted() {
    var imgswi=document.getElementsByClassName('swi')
    for (let i = 0; i < imgswi.length; i++) {
      var imgSrc=imgswi[i].src
      this.imgSrcs.push(imgSrc)
    }
  },
  data(){
    return{
      imgSrcs:[]
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.fswiper{
  background-color: rosybrown;
  width: 79%;
  height: 53%;
  left: 12%;
  top:25%;
  position: absolute;
  overflow: hidden;
}
.imgs{
  width: 100%;
  height: 54%;
}
</style>