<template>
  <div>
    <lf_first>
      <label id="sub" v-if="this.res.length!=0">根据您的id，查询到您所受课程为
        <span>{{this.res[this.name].sub1}}</span>和
        <span>{{this.res[this.name].sub2}}</span>
      </label>
      <select id="specialty" @change="indexSelect($event)" v-if="this.res.length!=0">
        <option disabled="disabled" selected="selected">-请选择课程-</option>
        <option :value="this.res[this.name].sub1">{{this.res[this.name].sub1}}</option>
        <option :value="this.res[this.name].sub2">{{this.res[this.name].sub2}}</option>
      </select>
<!--     加个滚动 -->
      <div class="content">
        <ul v-for="(i,index) in account">
          <li>书籍名称：<span>{{i.bookname}}</span></li>
          <li>描述信息：<span>{{i.account}}</span></li>
          <li>售价：<span>{{i.price}}￥</span></li>
          <li><button @click="bookin(index)" class="book">选择</button></li>
        </ul>
      </div>
    </lf_first>
  </div>
</template>

<script>
import lf_first from "@/views/loginto/lfchild/lf_first";
import axios from "axios";
export default {
  name: "kcgl",
  components:{
    lf_first
  },
  data(){
    return{
      id:this.$route.query.s_id,
      res:[],
      name:null,
      books: [],
      book:[],
      account:[],
      bookbtn:[]
    }
  },
  mounted() {
    axios.post('api/user/selectT',).then(res=> {
      this.res=res.data
      for (const id in this.res) {
        if(this.id==this.res[id].name){
          this.name=id
        }
      }
    }).catch(err=>{
      console.log(err);
    })
  },
  methods:{
    indexSelect(e){
      this.book=[]
      this.account=[]
      axios.post('api/user/books').then(res=>{
        this.books=res.data
        for (const id in this.books) {
          if(e.target.value==this.books[id].subname){
            this.book.push(id)
          }
        }
        for (const i in this.book) {
          this.account.push(this.books[this.book[i]])
        }
      }).then(err=>{
        console.log(err);
      })
    },
    bookin(index){
      //添加书目
      console.log(this.account[index]);//subname,bookname,account,price,major
      let subname=this.account[index].subname
      let bookname=this.account[index].bookname
      let account=this.account[index].account
      let price=this.account[index].price
      let major=this.account[index].major
      axios.post('api/user/selecinbook',{
        subname
      }).then(res=> {
        if(res.data.length!=0){
          alert('您已经选过该课程所用书籍')
        }
        else {
          var btn =document.getElementsByClassName('book')
          btn[index].innerHTML='已选择'
          for (let i = 0; i < btn.length; i++) {
            btn[i].disabled=true
          }
          axios.post('api/user/addbooks',{
            subname,bookname,account,price,major
          }).then(res=> {
            alert('您已经成功选择该课程所用书籍')
          }).catch(err=>{
            console.log(err);
          })
        }
      }).catch(err=>{
        console.log(err);
      })
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
#specialty{
  left: 2%;
  top:34%;
  position: absolute;
}
.content{
  width: 47%;
  height: 320px;
  left: 26%;
  top:17%;
  position: absolute;
  font-size: 18px;
  overflow-y: scroll;
  background-color: #f1f1fa;
}
.content>ul>li>span{
  color: #9053a3;
}

</style>