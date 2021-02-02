<template>
  <div class="kcb">
    <!--    有数据再渲染-->
    <table key="kcb" id="kcd1" v-if="this.timetables.length!=0">
      <tr>
        <th colspan="2">年 级</th>
<!--  CSS3(1-12)   HTML5(1-12)   Javascript(1-12)-->
        <th colspan="5">2017年级 计算机科学与技术专业</th>
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
        <td>{{this.timetables[0].sub1}}</td>
        <td>2</td>
        <td>{{this.timetables[0].relname}}</td>
        <td>309</td>
        <td>56</td>
      </tr>
<!--  Javascript  Angular.js  Vue.js React.js-->
      <tr>
        <td>3-4</td>
        <td>{{this.timetables[1].sub2}}*</td>
        <td>{{this.timetables[1].credit2}}</td>
        <td>{{this.timetables[1].relname}}</td>
        <td>312</td>
        <td>56</td>
      </tr>
      <tr>
        <td>5-6</td>
        <td>{{this.timetables[0].sub2}}</td>
        <td>{{this.timetables[0].credit2}}</td>
        <td>{{this.timetables[0].relname}}</td>
        <td>213</td>
        <td>56</td>
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
        <td>{{this.timetables[1].sub1}}</td>
        <td>{{this.timetables[1].credit1}}</td>
        <td>{{this.timetables[1].relname}}</td>
        <td>312</td>
        <td>56</td>
      </tr>
      <tr>
        <td>5-6</td>
        <td>{{this.timetables[1].sub2}}</td>
        <td>{{this.timetables[1].credit2}}</td>
        <td>{{this.timetables[1].relname}}</td>
        <td>213</td>
        <td>56</td>
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
<!--     星期三 -->
      <tr>
        <td rowspan="5">星期三</td>
        <td>1-2</td>
        <td>{{this.timetables[0].sub1}}*</td>
        <td>{{this.timetables[0].credit1}}</td>
        <td>{{this.timetables[0].relname}}</td>
        <td>309</td>
        <td>56</td>
      </tr>
      <!--  Javascript  Angular.js  Vue.js React.js-->
      <tr>
        <td>3-4</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>5-6</td>
        <td>{{this.timetables[1].sub2}}</td>
        <td>{{this.timetables[1].credit2}}</td>
        <td>{{this.timetables[1].relname}}</td>
        <td>213</td>
        <td>56</td>
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
<!--     星期四 -->
      <tr>
        <td rowspan="5">星期四</td>
        <td>1-2</td>
        <td>{{this.timetables[0].sub1}}</td>
        <td>{{this.timetables[0].credit1}}</td>
        <td>{{this.timetables[0].relname}}</td>
        <td>309</td>
        <td>56</td>
      </tr>
      <!--  Javascript  Angular.js  Vue.js React.js-->
      <tr>
        <td>3-4</td>
        <td>{{this.timetables[1].sub1}}</td>
        <td>{{this.timetables[1].credit1}}</td>
        <td>{{this.timetables[1].relname}}</td>
        <td>213</td>
        <td>56</td>
      </tr>
      <tr>
        <td>5-6</td>
        <td>{{this.timetables[0].sub1}}*</td>
        <td>{{this.timetables[0].credit1}}</td>
        <td>{{this.timetables[0].relname}}</td>
        <td>213</td>
        <td>56</td>
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
        <td>{{this.timetables[0].sub2}}**</td>
        <td>{{this.timetables[0].credit2}}</td>
        <td>{{this.timetables[0].relname}}</td>
        <td>309</td>
        <td>56</td>
      </tr>
      <!--  Javascript  Angular.js  Vue.js React.js-->
      <tr>
        <td>3-4</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>5-6</td>
        <td>{{this.timetables[1].sub1}}*</td>
        <td>{{this.timetables[1].credit1}}</td>
        <td>{{this.timetables[1].relname}}</td>
        <td>213</td>
        <td>56</td>
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
    <button @click="same" id="same">高亮显示</button>
    <label id="meg"></label>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "kcd1",
  props:['id','status'],
  data(){
    return{
      timetables:[],
      name:null,
      flag:false,
      s_status:this.status
    }
  },
  mounted() {
    if(this.s_status=='学生'){
      var same=document.getElementById('same')
      same.hidden=true
    }
    axios.post('api/user/selectT').then(res=>{
      this.timetables=res.data
    }).catch(err=>{
      console.log(err);
    })
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
        var tb = document.getElementById('kcd1');    // table 的 id
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
  }
}
</script>

<style scoped>
@import "../../../../../../assets/css/kcb.css";
</style>