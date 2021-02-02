<template>
  <div>
    <lf_first>
      <label>专业：<span id="specialty">计算机科学与技术</span></label>
      <slot>
        <kcd1 v-if="flag" :status="this.status"></kcd1>
        <kcd2 v-else :status="this.status"></kcd2>
      </slot>
      <button @click="qh">切换</button>
    </lf_first>
  </div>
</template>

<script>
import lf_first from "@/views/loginto/lfchild/lf_first";
import kcd1 from "@/views/loginto/lfchild/importviw/stu/stuchild/kcd1";
import Kcd2 from "@/views/loginto/lfchild/importviw/stu/stuchild/kcd2";
export default {
  name: "skcb",
  components:{
    Kcd2,
    lf_first,
    kcd1
  },
  data(){
    return{
      flag:true,
      status:this.$route.query.s_status
    }
  },
  methods:{
    qh(){
      var specialty=document.getElementById('specialty')
      this.flag=!this.flag
      if(this.flag){
        specialty.innerText='计算机科学与技术'
      }
      else {
        specialty.innerText='网络工程'
      }
    }
  }
}
</script>

<style scoped>

</style>