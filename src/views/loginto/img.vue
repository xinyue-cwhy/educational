<template>
  <div>
    <lf_first>
      <img src="../../assets/img/login_img/login.jpg">
    </lf_first>
  </div>
</template>

<script>
import lf_first from "@/views/loginto/lfchild/lf_first";
export default {
  name: "",
  components:{
    lf_first
  }
}
</script>

<style scoped>
img{
  position: absolute;;
  width:100%;
  height: 400px;
  filter:alpha(opacity=30);-moz-opacity:0.3;opacity:0.30;
}
</style>