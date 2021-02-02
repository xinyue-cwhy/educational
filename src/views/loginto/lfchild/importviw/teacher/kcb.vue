<template>
  <div>
    <lf_first>
      <label>专业：<span id="specialty">计算机科学与技术</span></label>
      <slot>
        <kcd1 v-if="flag" :id="id"></kcd1>
        <kcd2 v-else :id="id"></kcd2>
      </slot>
      <button @click="specialty">切换</button>
    </lf_first>
  </div>

</template>

<script>
import lf_first from "@/views/loginto/lfchild/lf_first";
import Kcd1 from "@/views/loginto/lfchild/importviw/stu/stuchild/kcd1";
import Kcd2 from "@/views/loginto/lfchild/importviw/stu/stuchild/kcd2";
export default {
  name: "kcb",
  components:{
    Kcd2,
    Kcd1,
    lf_first
  },
  data(){
    return{
      flag:true,
      id:this.$route.query.s_id
    }
  },
  methods:{
    specialty(){
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