<template>
  <div>
    <li style="color: #b62eb6">(*^_^*)</li>
    <slot>
      <!--  两个模板什么时候显示 可以用v-if  根据传过来的status 决定    -->
      <leftstu v-if="isshow" :s_id="id" :s_status="z_status"></leftstu>
      <leftteacher v-else :s_id="id" :s_status="z_status"></leftteacher>
    </slot>
  </div>
</template>

<script>
import leftteacher from "@/views/loginto/lfchild/leftbarview/leftteacher";
import Leftstu from "@/views/loginto/lfchild/leftbarview/leftstu";
export default {
  name: "leftbar",
  components:{
    Leftstu,
    leftteacher
  },
  props: ['z_status','z_id'],
  data(){
    return {
      isshow:true,
      status:this.z_status,
      id:this.z_id
    }
  },
  mounted() {
    if(this.status=='教师'){
      this.isshow=!this.isshow
    }
  }
  /*methods:{
    kcb(){
      this.$router.replace('/loginfirst/kcb')
    },
    kcgl(){
      this.$router.replace('/loginfirst/kcgl')
    },
    cjgl(){
      this.$router.replace('/loginfirst/cjgl')
    },
    yhgl(){
      this.$router.replace('/loginfirst/yhgl')
    },
  }*/
}
</script>

<style scoped>
li{
  position: absolute;
  left: 35%;
  list-style: none;
}
</style>