<template>
  <div class="title1">
    <div class="label">
      <label class="{active:isactive}">学生</label>
      <label >&nbsp;|&nbsp;</label>
      <label class="{active:isactive}">教工</label>
      <label >&nbsp;|&nbsp;</label>
      <label class="{active:isactive}">考生</label>
      <label >&nbsp;|&nbsp;</label>
      <label class="{active:isactive}">访客</label>
    </div>
    <div id="login">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "titlebar",
  methods: {
    login(){
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>
.title1{
  background:url("../../../assets/img/first_img/bg.png");
  width: 100%;
  height: 10%;
  position: fixed;
  z-index: 9999;
}
.label{
  top: 22px;
  left: 70px;
  position: absolute;
  font-size: 14px;
  color: white;
}
.label>label{
  cursor: pointer;
}
#login{
  position: absolute;
  left: 91%;
  top: 20px;
}
#login>button{
  border-radius: 15px;
}
</style>