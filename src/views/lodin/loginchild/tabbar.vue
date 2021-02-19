<template>
  <!--下方有需要注释的部分-->
  <div>
    <form>
      <div class="radio">
        <input type="radio" name="student" class="status" value="学生">学生
        <input type="radio" name="student" class="status" value="教师">教师
      </div>
      <div class="init">
        <input type="text" placeholder="   学工号" id="id" v-model="id"><br>
        <label></label><br>
        <input type="password" placeholder="   密码" id="pwd" v-model="pwd"><br>
        <label></label><br>
      </div>
      <button type="button" @click="lffirst">登录</button><br>
      <label id="reget">忘记密码？</label>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "tabbar",
  data(){
    return{
      url:[
        {surl:'api/user/selectUser'},
        {turl:'api/user/selectTuser'}
      ],
      //身份
      status:null,
      //id
      id:null,
      //pwd
      pwd:null,
      result:false
    }
  },
  methods: {
    lffirst(){
      //身份选了老师还是学生 好判断isshow 是true还是false
      var resualt=false;
      var radioview=document.getElementsByClassName('status');
      for (let i = 0; i < radioview.length; i++) {
        if (radioview[i].checked){
          this.status=radioview[i].value;
          resualt=true;
          break;
        }
      }
      if(!resualt){
        alert('请选择登录者身份');
        return resualt
      }
      //开启数据库（根据身份选择开启的数据库表）
      //id//连接数据库验证学工号密码
      var idview=document.getElementById('id').value
      if(idview==''||idview == undefined || idview == null){
        alert('请输入学工号')
        return
      }
      else{
        var pwdview=document.getElementById('pwd').value
        if(pwdview==''||pwdview == undefined || pwdview == null){
          alert('请输入密码')
          return
        }
        else {
          //数据库登录验证 1
          let name=idview
          let pwd=pwdview
          let url=''
          if(this.status=='学生'){
            url=this.url[0].surl
          }else {
            url=this.url[1].turl
          }
          axios.get(url,{
            name,pwd
          }).then(res=>{
            if(res.data.length!=0){
              if(pwdview===res.data[0].pwd){
                this.id=idview
                //把用户选择传过去
                this.$router.replace({path:"/loginfirst",
                  query:{status:this.status,id:this.id}});
              }
              else {
                alert('用户名或密码不正确')
                return
              }
            }
            else {
              alert('用户名或密码不正确')
              return
            }
          }).catch(err=>{
            //测试完成后需要注释掉
            console.log(err)
          })
          // 1
        }
      }
    }
  }
}
</script>

<style scoped>
.radio{
  left: 28%;
  top: 22%;
  width: 40%;
  position: absolute;
  display: flex;
  font-size: 13px;
  color: #826f6f;
}
.radio>input{
  flex: 1;
}
.init{
  top:33%;
  left:18%;
  position: absolute;
}
.init>input{
  width: 200px;
  height: 28px;
  border-radius: 10px;
}
button{
  position: absolute;
  top: 71%;
  left: 10%;
  width: 265px;
  height: 30px;
  background-color: #2fbbbb;
}
#reget{
  position: absolute;
  top: 90%;
  left: 5%;
  font-size: 12px;
  color: #797676;
}
</style>