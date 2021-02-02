<template>
  <div>
    <div class="title">
      <label>账户管理</label><label id="showmsg"></label><span>安全等级：<label id="yb">100</label></span>
    </div>
    <div class="yhgl">
      <pre><label> 密码</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<label>{{this.res.pwd}}</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span @click="xmima" id="xmima">修改</span><label v-show="this.mima">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<label>新密码</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input id="mima">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span @click="qmima">确认</span></label></pre><br>
      <pre><label> 邮箱</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<label>{{this.res.email}}</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span @click="xemail" id="xemail">修改</span><label v-show="email">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<label>新邮箱</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input id="email">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span @click="qemail">确认</span></label></pre><br>
      <pre><label> 手机号码</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<label>{{this.res.phone}}</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span @click="xphone" id="xphone">修改</span><label v-show="phone">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<label>新号码</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input id="phone">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span @click="qphone">确认</span></label></pre><br>
      <pre><label> 密保问题 </label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<label id="show">{{this.res.mibao}}</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span @click="xmibao" id="xmibao">修改</span><label v-show="mibao">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<label>新密保</label>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input id="mibao">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span @click="qmibao">确认</span></label></pre>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "tsyhgl",
  props:['s_id','s_status'],
  data(){
    return{
      f:false,
      url:[
        {surl:'api/user/selectUser'},
        {turl:'api/user/selectTuser'},
        {surl1:'api/user/updatesp'},
        {turl2:'api/user/updatetp'},
        {surl3:'api/user/updatese'},
        {turl4:'api/user/updatete'},
        {surl5:'api/user/updatess'},
        {turl6:'api/user/updatets'},
        {surl7:'api/user/updatesm'},
        {turl8:'api/user/updatetm'},
      ],
      inurl:'',
      res:[],
      id:this.s_id,
      status:this.s_status,
      mima:false,
      email:false,
      phone:false,
      mibao:false
    }
  },
  mounted() {
    let name=this.id
    let url=''
    if(this.status=='学生'){
      url=this.url[0].surl
    }else {
      url=this.url[1].turl
    }
    axios.post(url,{
      name
    }).then(res=> {
      this.res=res.data[0]
      // 测试完成后需要注释掉
    }).catch(err=>{
      console.log(err);
    })
    var show=document.getElementById('show')
    if(this.res.mibao!=''){
      show.innerHTML='已设置'
    }
    else {
      show.innerHTML='未设置'
    }
  },
  methods:{
    xmima(){
      if(xmima.innerHTML=='取消'){
        this.mima=false
        xmima.innerHTML='修改'
      }else {
        xmima.innerHTML='取消'
        this.mima=true
      }
    },
    qmima(){
      if(this.status=='学生'){
        this.inurl=this.url[2].surl1
      }else {
        this.inurl=this.url[3].turl2
      }
      let name=this.id
      var mima=document.getElementById('mima').value.replace(/\s/gi, '');
      if(mima==''||mima.length!=7){
        showmsg.innerHTML='密码为7位有效数字或字母'
        return
      }
      showmsg.innerHTML=''
      let pwd=mima;
      axios.post(this.inurl,{
        pwd,name
      }).then(res=> {
        this.res.pwd=mima
        this.mima=false
        xmima.innerHTML='修改'
        alert('修改成功')
        // 测试完成后需要注释掉
      }).catch(err=>{
        console.log(err);
      })
    },
    xemail(){
      if(xemail.innerHTML=='取消'){
        this.email=false
        xemail.innerHTML='修改'
      }else {
        xemail.innerHTML='取消'
        this.email=true
      }
    },
    qemail(){
      var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
      if(this.status=='学生'){
        this.inurl=this.url[4].surl3
      }else {
        this.inurl=this.url[5].turl4
      }
      let name=this.id
      var el=document.getElementById('email').value.replace(/\s/gi, '');
      if(el==''||!reg.test(el)){
        showmsg.innerHTML='非有效邮箱名'
        return
      }
      showmsg.innerHTML=''
      let email=el
      axios.post(this.inurl,{
        email,name
      }).then(res=> {
        this.res.email=el
        this.email=false
        xemail.innerHTML='修改'
        alert('修改成功')
        // 测试完成后需要注释掉
      }).catch(err=>{
        console.log(err);
      })
    },
    xphone(){
      if(xphone.innerHTML=='取消'){
        this.phone=false
        xphone.innerHTML='修改'
      }else {
        xphone.innerHTML='取消'
        this.phone=true
      }
    },
    qphone(){
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if(this.status=='学生'){
        this.inurl=this.url[6].surl5
      }else {
        this.inurl=this.url[7].turl6
      }
      let name=this.id
      var sj=document.getElementById('phone').value.replace(/\s/gi, '');
      if(sj==''||!myreg.test(sj)){
        showmsg.innerHTML='非有效手机号'
        return
      }
      showmsg.innerHTML=''
      let phone=sj
      axios.post(this.inurl,{
        phone,name
      }).then(res=> {
        this.res.phone=sj
        this.phone=false
        xphone.innerHTML='修改'
        alert('修改成功')
        // 测试完成后需要注释掉
      }).catch(err=>{
        console.log(err);
      })
    },
    xmibao(){
      if(xmibao.innerHTML=='取消'){
        this.mibao=false
        xmibao.innerHTML='修改'
      }else {
        xmibao.innerHTML='取消'
        this.mibao=true
      }
    },
    qmibao(){
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if(this.status=='学生'){
        this.inurl=this.url[8].surl7
      }else {
        this.inurl=this.url[9].turl8
      }
      let name=this.id
      var mb=document.getElementById('mibao').value.replace(/\s/gi, '');
      if(mb==''||!myreg.test(mb)){
        showmsg.innerHTML='非有效手机号'
        return
      }
      showmsg.innerHTML=''
      let mibao=mb
      axios.post(this.inurl,{
        mibao,name
      }).then(res=> {
        this.res.mibao=mb
        this.mibao=false
        xmibao.innerHTML='修改'
        alert('修改成功')
        // 测试完成后需要注释掉
        var yb=document.getElementById('yb')
        if(this.res.mibao!=''){
          show.innerHTML='已设置'
          yb.innerHTML='100'
        }
        else {
          show.innerHTML='未设置'
          yb.innerHTML='90'
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.title{
  width: 100%;
  font-family: 等线;
  font-style: oblique;
  font-size: 17px;
}
.title>span{
  position: absolute;
  left: 90%;
}
.title>label{
  color: #9c202f;
}
.title>span>label{
  color: #9c202f;
}
.yhgl{
  width: 40%;
  position: absolute;
  left: 10%;
  top:20%;
  text-align:center;
}
.yhgl>pre>span{
  color: #9e9192;
  cursor: pointer;
}
.yhgl>pre>span:hover{
  color: #b62eb6;
}
.yhgl>pre>label>span{
  color: #9e9192;
  cursor: pointer;
}
.yhgl>pre>label>span:hover{
  color: #b62eb6;
}
#show{
  color: #b62eb6;
}
#showmsg{
  left: 36%;
  position: absolute;;
}
</style>