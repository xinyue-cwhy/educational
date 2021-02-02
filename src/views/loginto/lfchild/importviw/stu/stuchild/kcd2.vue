<template>
  <div class="kcb">
<!--    有数据再渲染-->
    <table key="kcb" id="kcd2" v-if="this.timetable1s.length!=0">
      <tr>
        <th colspan="2">年 级</th>
<!-- 软件项目管理    软件建模与分析    云计算与物联网技术 路由与交换技术-->
        <th colspan="5">2017年级 网络工程专业</th>
      </tr>
      <tr>
        <td>时间</td>
        <td>节次</td>
        <td>课程名称</td>
        <td>学分</td>
        <td>任课教师</td>
        <td>教室地点</td>
        <td>上课人数</td>
      </tr>
      <!--      星期一-->
      <tr>
        <td rowspan="5">星期一</td>
        <td>1-2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <!--  Javascript  Angular.js  Vue.js React.js-->
      <tr>
        <td>3-4</td>
        <td>{{this.timetable1s[2].sub1}}**</td>
        <td>{{this.timetable1s[2].credit1}}</td>
        <td>{{this.timetable1s[2].relname}}</td>
        <td>312</td>
        <td>36</td>
      </tr>
      <tr>
        <td>5-6</td>
        <td>{{this.timetable1s[3].sub1}}</td>
        <td>{{this.timetable1s[3].credit1}}</td>
        <td>{{this.timetable1s[3].relname}}</td>
        <td>215</td>
        <td>36</td>
      </tr>
      <tr>
        <td>7-8</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>9-10</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <!--     星期二 -->
      <tr>
        <td rowspan="5">星期二</td>
        <td>1-2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <!--  Javascript  Angular.js  Vue.js React.js-->
      <tr>
        <td>3-4</td>
        <td>{{this.timetable1s[2].sub2}}</td>
        <td>{{this.timetable1s[2].credit2}}</td>
        <td>{{this.timetable1s[2].relname}}</td>
        <td>201</td>
        <td>36</td>
      </tr>
      <tr>
        <td>5-6</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>7-8</td>
        <td>{{this.timetable1s[3].sub2}}*</td>
        <td>{{this.timetable1s[3].credit2}}</td>
        <td>{{this.timetable1s[3].relname}}</td>
        <td>309</td>
        <td>36</td>
      </tr>
      <tr>
        <td>9-10</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <!--     星期三 -->
      <tr>
        <td rowspan="5">星期三</td>
        <td>1-2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <!--  Javascript  Angular.js  Vue.js React.js-->
      <tr>
        <td>3-4</td>
        <td>{{this.timetable1s[2].sub1}}</td>
        <td>{{this.timetable1s[2].credit1}}</td>
        <td>{{this.timetable1s[2].relname}}</td>
        <td>201</td>
        <td>36</td>
      </tr>
      <tr>
        <td>5-6</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>7-8</td>
        <td>{{this.timetable1s[3].sub2}}**</td>
        <td>{{this.timetable1s[3].credit2}}</td>
        <td>{{this.timetable1s[3].relname}}</td>
        <td>309</td>
        <td>36</td>
      </tr>
      <tr>
        <td>9-10</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <!--     星期四 -->
      <tr>
        <td rowspan="5">星期四</td>
        <td>1-2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <!--  Javascript  Angular.js  Vue.js React.js-->
      <tr>
        <td>3-4</td>
        <td>{{this.timetable1s[2].sub1}}</td>
        <td>{{this.timetable1s[2].credit1}}</td>
        <td>{{this.timetable1s[2].relname}}</td>
        <td>215</td>
        <td>36</td>
      </tr>
      <tr>
        <td>5-6</td>
        <td>{{this.timetable1s[3].sub1}}</td>
        <td>{{this.timetable1s[3].credit1}}</td>
        <td>{{this.timetable1s[3].relname}}</td>
        <td>312</td>
        <td>36</td>
      </tr>
      <tr>
        <td>7-8</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>9-10</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <!--     星期五 -->
      <tr>
        <td rowspan="5">星期五</td>
        <td>1-2</td>
        <td>{{this.timetable1s[2].sub2}}*</td>
        <td>{{this.timetable1s[2].credit2}}</td>
        <td>{{this.timetable1s[2].relname}}</td>
        <td>312</td>
        <td>36</td>
      </tr>
      <!--  Javascript  Angular.js  Vue.js React.js-->
      <tr>
        <td>3-4</td>
        <td>{{this.timetable1s[3].sub2}}**</td>
        <td>{{this.timetable1s[3].credit2}}</td>
        <td>{{this.timetable1s[3].relname}}</td>
        <td>309</td>
        <td>36</td>
      </tr>
      <tr>
        <td>5-6</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>7-8</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>9-10</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <button @click="same" id="same" v-show="hidden">高亮显示</button>
    <label id="meg"></label>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "kcd2",
  props:['id','status'],
  data(){
    return{
      timetable1s:[],
      name:null,
      flag:false,
      hidden:true,
      s_status:this.status
    }
  },
  mounted() {
    if(this.s_status=='学生'){
      this.hidden=false
    }
  },
  methods:{
    same(){
      axios.post('api/user/selectT').then(res=>{
        this.timetables=res.data
        for (const id in this.timetables) {
          if(this.id==this.timetables[id].name){
            this.name=id
          }
        }
        var tb = document.getElementById('kcd2');    // table 的 id
        var rows = tb.rows;                           // 获取表格所有行
        for(var i = 0; i<rows.length; i++ ){
          for(var j = 0; j<rows[i].cells.length; j++ ){
            if(this.timetables[this.name].relname==rows[i].cells[j].innerHTML){
              rows[i].style.color='red'
              this.flag=true
            }
          }
        }
        if (!this.flag){
          alert('当前班级未查询到您的课次')
        }else {
          var meg=document.getElementById('meg')
          meg.innerText='查询到如下内容'
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  },
  created() {
    axios.post('api/user/selectT').then(res=>{
      this.timetable1s=res.data
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
@import "../../../../../../assets/css/kcb.css";
</style>