<template>
  <div>
    <lf_first>
      <label id="sub" v-if="this.res.length!=0">根据您的id，您需要给
        <span>{{this.res[this.name].sub1}}</span>和
        <span>{{this.res[this.name].sub2}}</span>上成绩
      </label>
      <div class="mm">
        <label>
          <select id="specialty" @change="indexSelect($event)" v-if="this.res.length!=0">
            <option disabled="disabled" selected="selected">-请选择课程-</option>
            <option :value="this.res[this.name].sub1">{{this.res[this.name].sub1}}</option>
            <option :value="this.res[this.name].sub2">{{this.res[this.name].sub2}}</option>
          </select>
        </label>
        <label><input placeholder="学生ID" id="sf"></label>
        <label><input placeholder="分数" id="code"></label>
        <label><button @click="update">确认</button></label>
      </div>
      <div class="content">
       <table class="cjcx" key="cjcx">
          <tr>
            <th>学生ID</th>
            <th>课程名称</th>
            <th>成绩</th>
          </tr>
          <tr v-for="item in cj">
            <td>{{item.name}}</td>
            <td>{{item.sub}}</td>
            <td>{{item.subsuccess}}</td>
          </tr>
        </table>
      </div>
    </lf_first>
  </div>
</template>

<script>
import lf_first from "@/views/loginto/lfchild/lf_first";
import axios from "axios";
export default {
  name: "cjgl",
  components:{
    lf_first
  },
  data(){
    return{
      select:null,
      cj:[],
      res:[],
      id:this.$route.query.s_id,
      name:null,
      cjin:[],
      nr:[],
      nrin:{},
      bz:false
    }
  },
  mounted() {
    axios.post('api/user/selectT').then(res=> {
      this.res=res.data
      for (const id in this.res) {
        if(this.id==this.res[id].name){
          this.name=id
        }
      }
    }).catch(err=>{
      console.log(err);
    })
    axios.post('api/user/cjselect').then(res=> {
      this.cj=res.data
    }).catch(err=>{
      console.log(err);
    })
  },
  methods:{
    indexSelect(e){
      this.select=e.target.value
      this.cjin=[]
      this.nrin=[]
      axios.post('api/user/cjselect').then(res=>{
        this.nr=res.data
        for (const id in this.nr) {
          if(e.target.value==this.nr[id].sub){
            this.cjin.push(id)
          }
        }
        for (const i in this.cjin) {
          this.nrin.push(this.nr[this.cjin[i]])
        }
        this.cj=this.nrin
      }).then(err=>{
        console.log(err);
      })
    },
    update(){
      var id=document.getElementById('sf').value.replace(/\s/gi, '');
      var code=document.getElementById('code').value.replace(/\s/gi, '');
      let sub= this.select
      let subsuccess=code
      let name=id
      for (const key in this.cj) {
        if(this.cj[key].name==id){
          this.bz=true
          console.log(this.cj[key].name);
          if(code>0&&code<=100){
            axios.post('api/user/updatecj',{
              subsuccess,name,sub
            }).then(res=> {
              alert('成绩已上传')
              this.cj[key].subsuccess=subsuccess
              // 测试完成后需要注释掉
            }).catch(err=>{
              console.log(err);
            })
          }
          else {
            alert('成绩输入不规范')
          }
        }
      }
      if(this.bz==false){
        alert('未查询到相关用户')
      }
    }
  }
}
</script>

<style scoped>
#sub{
  left: 28%;
  top:2%;
  position: absolute;
  font-size: 18px;
  color: silver;
}
#sub>span{
  color: #9b9bef;
}
.mm{
  left: 10%;
  top:20%;
  position: absolute;
  display: flex;
  width: 69%;
  background-color: #f8f1f1;
  text-align: center;
}
.mm>label{
  flex: 1;
}
.content{
  left: 10%;
  top:30%;
  position:absolute;
  width: 69%;
  height: 280px;
  background-color: #f1f1fa;
  overflow-y: scroll;
}
.content>table{
  width: 98%;
  top:1%;
  left: 1%;
  box-shadow: 0px 10px 13px #e7dddd;
  box-shadow: 0px 0px 13px #e7dddd;
}
.content>table>tr>td{
  background-color: white;
}
.content>table>tr>th{
  background-color: #dbd3d3;
}
</style>