<template>
  <div class="back">
  <div class="text">
    <b>统一身份认证服务</b><br>
    <label>安全提示:
    <ul>
      <li>首次完成身份认证后，请务必在"个人中心"修改初始密码，绑定邮箱和手机号</li>
      <li>请不要将自己的用户名和密码告诉他人</li>
      <li>在您办理完统一身份认证相关业务后，请点击右上角的"安全退出"按钮</li>
      <li>为了您的安全，请不定期修改密码</li>
    </ul>
      咨询电话: 6645761
    </label>
  </div>
  <div class="form">
<!--router-link 显示
    router-view 接收
    路由children弄一下
    首页vue-cli2-->
    <div class="span">
    <span :class="{'active':istrue}" @click="click"><router-link to="/login/tabbar">账号登录</router-link></span>
    <span :class="{'active':istrue1}" @click="click1"><router-link to="/login/tabbar2">身份认证</router-link></span>
    </div>
    <div class="views">
    <router-view></router-view>
    </div>
  </div>
  <div class="bottom">
    <p>Copyright心悦2021</p>
  </div>
  </div>
</template>

<script>
import tabbar from "@/views/lodin/loginchild/tabbar";
import tabbar2 from "@/views/lodin/loginchild/tabbar2";
export default {
  name: "login",
  components:{
    tabbar,
    tabbar2
  },
  data(){
    return {
      istrue:true,
      istrue1:false
    }
  },
  methods:{
    click(){
      this.istrue=true
      this.istrue1=false
      this.$router.replace("/login/tabbar")
    },
    click1(){
      this.istrue1=true
      this.istrue=false
      this.$router.replace("/login/tabbar2")
    }
  }
}
</script>

<style scoped>
.back{
  background-color: royalblue;
  height: 563px;
}
.text{
  width: 38%;
  height: 38%;
  left: 13%;
  top:23%;
  position: absolute;
  color: white;
}
.text>b{
  font-size: 30px;
}
.text>label{
  top: 35%;
  position: absolute;
  font-size: 14px;
}
.form{
  width: 24%;
  height: 47%;
  left: 59%;
  top:23%;
  box-shadow: 0 0 13px #a09d9d;
  position: absolute;
}
.span{
  display: flex;
  height: 20%;
  text-align: center;
  cursor: pointer;
}
.active{
  background-color:rgba(255,251,240,0.7);
}
.span>span{
  font-size: 16px;
  flex: 1;
  border-radius: 10px;
}
a{
  text-decoration:none;
  color: #282323;
}
.views{
  background-color:rgba(255,251,240,0.7);
  width: 100%;
  height: 80%;
  border-radius: 1px;
}
.bottom{
  top: 90%;
  width: 100%;
  height: 10%;
  position: absolute;
}
.bottom>p{
  color: black;
  position: absolute;
  top: 5%;
  left: 44%;
}
</style>