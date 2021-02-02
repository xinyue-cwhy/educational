<template>
  <div>
    <lf_first>
      <label>专业：
        <select id="specialty" @change="indexSelect($event)">
          <option disabled="disabled" selected="selected">-请选择专业-</option>
          <option value="计算机科学与技术">计算机科学与技术</option>
          <option value="网络工程">网络工程</option>
        </select>
      </label>
      <label id="tig" v-show="!z_flag">请先选择专业</label>
      <slot>
        <div v-show="z_flag" class="view">
          <kccx1 v-if="flag" :value="value"></kccx1>
          <kccx2 v-else :value="value"></kccx2>
        </div>
      </slot>
    </lf_first>
  </div>
</template>

<script>
import lf_first from "@/views/loginto/lfchild/lf_first";
import Kccx1 from "@/views/loginto/lfchild/importviw/stu/stuchild/kccx1";
import Kccx2 from "@/views/loginto/lfchild/importviw/stu/stuchild/kccx2";
export default {
  name: "skccx",
  components:{
    Kccx2,
    Kccx1,
    lf_first
  },
  data(){
    return{
      flag:false,
      z_flag:false,
      value:null
    }
  },
  methods:{
    indexSelect(e){
      this.z_flag=true
      var text=e.target.value
      this.value=e.target.value
      if(text=='计算机科学与技术'){
        this.flag=true
      }
      else {
        this.flag=false
      }
    }
  }
}
</script>

<style scoped>
select{
  text-align: center;
}
#tig{
  position: absolute;
  top: 40%;
  left: 40%;
  color: #ffffff;
  font-size: 40px;
  font-family: 华文楷体;
  font-style: italic;
  text-decoration: underline;
}
</style>