<template>
<szimg>
  <swiper :imgSrcs="szimg">
    <swiper-item v-for="item in szimg">
    </swiper-item>
  </swiper>
</szimg>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/swiper/Swiper";
import szimg from "@/assets/img/szimg/szimg";
export default {
  name: "First",
  components:{
    Swiper,
    SwiperItem,
    szimg
  },
  props:{
    szimg:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>

</style>