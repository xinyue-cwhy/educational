<template>
    <div class="tabbar-items" @click="up">
      <div v-if="!isActive"><slot name="tabbar-icon"></slot></div>
      <div v-else><slot name="tabbar-icon-active"></slot></div>
      <div :style="textcolor"><slot name="tabbar-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: "tabbaritems",
  props:{
    path:String,
    activetextcolor:{
      type:String,
      default:"red"
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    textcolor(){
      return this.isActive?{color:this.activetextcolor}:{}
    }
  },
  methods:{
    up(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tabbar-items{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbar-items img{
  width: 22px;
  height: 22px;
  vertical-align: -3px;
  margin-top: 6px;
}
</style>
