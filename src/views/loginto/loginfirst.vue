<template>
  <div>
    <div class="tabbar">
      <span>信息展示如下</span>
    </div>
    <div id="peopleview">
<!-- 用户输入 根据  lodin/loginchild/button 决定      -->
      <label>ID:<span id="id">{{id}}</span></label>
      <label>身份:<span id="status">{{status}}</span></label>
    </div>
<!--   确定教师 学生组件排放位置 -->
    <div class="leftbar">
         <!-- 给子组件传是教师还是学生     -->
      <leftbar :z_status="this.$route.query.status"
               :z_id="this.$route.query.id"
      ></leftbar>
    </div>
<!--    确定教师 学生组件内容摆放位置-->
    <div class="iffirst">
      <lf_first>
        <router-view></router-view>
      </lf_first>
    </div>
  </div>
</template>

<script>
import lf_first from "@/views/loginto/lfchild/lf_first";
import leftbar from "@/views/loginto/lfchild/leftbar";
export default {
  name: "loginfirst",
  components:{
    lf_first,
    leftbar,
  },
  data(){
    return{
      //学工号
      id:this.$route.query.id,
      //身份
      status:this.$route.query.status
    }
  },
 /* mounted(){
    //把传过来的id，status保存起来
    this.id=this.$route.query.id
    this.status=this.$route.query.status
  }*/
}
</script>

<style scoped>
.tabbar{
  height: 50px;
  background-color: #a2c3d4;
  color: white;
}
.tabbar>span {
  top: 10px;
  left: 45%;
  font-size: 20px;
  position: absolute;
}
#peopleview{
  height: 29px;
  background-color: silver;
  box-shadow: 0px 1px 3px white;
  display: flex;
  text-align: center;
  color: white;
}
#peopleview>label{
  flex:1;
  margin-top: 5px;
  font-size: 14px;
}
.leftbar{
  top: 20%;
  position: absolute;
  width: 9%;
  height: 50%;
  box-shadow: 0px 10px 13px #888888;
  box-shadow: 0px 0px 13px #888888;
  background-color: rgba(162,195,212,0.5);
}
.iffirst{
  position: absolute;
  top: 13%;
  left: 9% ;
  width: 91%;
  height: 77%;
  background-color: rgba(223, 241, 250, 0.5);
}
</style>