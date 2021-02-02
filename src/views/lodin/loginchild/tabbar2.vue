<template>
  <div>
    <form>
      <div class="radio">
        <input type="radio" name="student" value="学生" class="status">学生
        <input type="radio" name="student" value="教师" class="status">教师
      </div>
      <div class="init">
        <input type="text" placeholder="   学工号" id="id"><br>
        <label></label><br>
        <input type="text" placeholder="   验证码" id="yzm">
        <div id="randmview">
          <label id="randm"></label>
        </div><br>
        <label></label><br>
      </div>
      <button type="button" @click="lffirst">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "tabbar2",
  data(){
    return{
      //身份
      status:null,
      //id
      id:null,
      //yzm
      randm:null
    }
  },
  mounted() {
    do
     var out = Math.floor(Math.random()*10000);
    while( out < 1000 )
    var randm=document.getElementById('randm')
    randm.innerText=out
    this.randm=out
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
      //开启数据库（根据身份选择开启的数据库）
      //id//连接数据库验证学工号 验证完删除
      var idview=document.getElementById('id').value
      if(idview==''||idview == undefined || idview == null){
        alert('请输入学工号')
        return
        //连接数据库
      }
      else{
        var yzm=document.getElementById('yzm').value
        if(yzm==''||yzm == undefined || yzm == null){
          alert('请输入验证码')
          return
        }
        if(yzm!=this.randm){
          alert('验证码输入不正确')
          return
        }
          this.id=idview
      }
      //把用户选择传过去
      this.$router.replace({path:"/loginfirst",
        query:{status:this.status,id:this.id}});
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
#id{
  width: 200px;
  height: 28px;
  border-radius: 10px;
}
#yzm{
  width: 100px;
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
#randmview{
  width: 76px;
  height: 33px;
  position: absolute;
  top: 51%;
  left: 62%;
  background-color:rgba(255,251,240,0.7);
  border-radius: 10px;
}
#randm{
  top: 6px;
  left: 21px;
  position: absolute;
  font-style: italic;
  color: #8d8585;
}
</style>