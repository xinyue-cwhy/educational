<template>
  <div>
    <lf_first>
      <div class="content">
        <table class="cjcx" key="cjcx">
          <tr>
            <th>课程名称</th>
            <th>成绩</th>
            <th>学分</th>
            <th>绩点</th>
            <th>学分绩点</th>
          </tr>
          <tr v-for="item in cj">
            <td>{{item.sub}}</td>
            <td>{{item.subsuccess}}</td>
            <td>{{item.xf}}</td>
            <td>{{item.jd}}</td>
            <td>{{item.xfjd}}</td>
          </tr>
          <tr>
            <td>平均学分绩点</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{{this.pjjd}}</td>
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
  name: "scjglcx",
  components:{
    lf_first
  },
  data(){
    return{
      cj:[],
      id:this.$route.query.s_id,
      pjjd:null
    }
  },
  mounted() {
    let name=this.id
    let zcj=0
    let zxf=0
    axios.post('api/user/selectcj',{
      name
    }).then(res=>{
      this.cj=res.data
      console.log(this.cj);
      for (let i in this.cj) {
        zxf+=parseInt(this.cj[i].xf)
        this.cj[i].jd=(Number(this.cj[i].subsuccess.match(/^\d+(?:\.\d{0,2})?/))/10-5).toFixed(1)
        zcj+=this.cj[i].jd*(Number(this.cj[i].xf.match(/^\d+(?:\.\d{0,2})?/))).toFixed(2)
        this.cj[i].xfjd=this.cj[i].jd*(Number(this.cj[i].xf.match(/^\d+(?:\.\d{0,2})?/))).toFixed(2)
      }
      this.pjjd=(zcj/zxf).toFixed(2)

    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
.cjcx{
  border: 1px black solid;
  border-collapse: collapse;
  position: absolute;
  left: 20%;
  text-align: center;
  width: 60%;
}
.cjcx>tr>th{
  border: 1px black solid;
  background-color: #d2d1d1;
  height: 4%;
}
.cjcx>tr>td{
  border: 1px black solid;
  width: 3%;
}
.content{
  width: 90%;
  height: 447px;
  left: 4%;
  position: absolute;
  top: 7%;
  overflow-y: scroll;/*设置滚动*/
  background-color: #f1f1fa;
}
</style>