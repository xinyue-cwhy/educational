<template>
  <div class="content">
    <!-- 软件项目管理    软件建模与分析    云计算与物联网技术 路由与交换技术-->
    <table class="tab" key="kccx">
      <tr>
        <th>课程</th>
        <th>书籍</th>
        <th>描述</th>
        <th>价格</th>
      </tr>
      <tr v-for="item in base">
<!--        <td><img :src="item.src"></td>-->
        <td>{{item.subname}}</td>
        <td>{{item.bookname}}</td>
        <td>{{item.account}}</td>
        <td>￥{{item.price}}</td>
      </tr>
    </table>
    <label id="price">总价格：￥{{fullprice}}</label>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "kccx2",
  data(){
    return{
      base:[],
    }
  },
  computed:{
    fullprice(){
      return this.base.reduce(function (m,n){
        return m+n.price;
      },0)
    }
  },
  mounted() {
    axios.post('api/user/inbook').then(res=> {
      for (const i in res.data) {
        if(res.data[i].major==='网络'){
          this.base.push(res.data[i])
        }
      }
      console.log(this.base);
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
@import "../../../../../../assets/css/kcb.css";
img{
  width: 25%;
}
table>tr>td{
  width: 5%;
  /*font-size: 14px;*/
}
</style>