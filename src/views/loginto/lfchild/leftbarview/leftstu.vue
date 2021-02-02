<template>
  <tabbar>
    <ul>
      <li><tabbaritems activetextcolor="#b62eb6">
        <div slot="tabbar-text" @click="skcb" :class="{active:cactive===1}">课程表</div>
      </tabbaritems></li>
      <li><tabbaritems activetextcolor="#b62eb6">
        <div slot="tabbar-text" @click="skccx" :class="{active:cactive===4}">课程查询</div>
      </tabbaritems></li>
<!--    获取到用户输入id 从数据库拿到对应成绩  -->
      <li> <tabbaritems activetextcolor="#b62eb6" >
        <div slot="tabbar-text" @click="ssidc" :class="{active:cactive===2}">成绩查询</div>
      </tabbaritems></li>
<!--    获取到用户输入id 从数据库拿到对应用户信息  -->
      <li> <tabbaritems activetextcolor="#b62eb6" >
        <div slot="tabbar-text" @click="ssidy" :class="{active:cactive===3}">用户管理</div>
      </tabbaritems></li>
    </ul>
  </tabbar>
</template>

<script>
import tabbaritems from "@/components/tar/tabbar/tabbaritems";
import tabbar from "@/components/tar/tabbar/tabbar";
export default {
  name: "leftstu",
  components:{
    tabbaritems,
    tabbar,
  },
  props:['s_id','s_status'],
  data(){
    return{
      id:this.s_id,
      status:this.s_status,
      cactive:0
    }
  },
  methods:{
    //应该可以简便
    skcb(){
      this.$router.replace({path:"/loginfirst/skcb",
        query:{s_status:this.status}});
      this.cactive=1
    },
    skccx(){
      this.$router.replace({path:"/loginfirst/skccx"})
      this.cactive=4
    },
    ssidc(){
      this.$router.replace({path:"/loginfirst/scjcx",
        query:{s_id:this.id}});
      this.cactive=2
    },
    ssidy(){
      this.$router.replace({path:"/loginfirst/syhgl",
        query:{s_id:this.id,s_status:this.status}});
      this.cactive=3
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
ul>li{
  height: 50px;
  font-size: 13px;
  cursor: pointer;
  color: #443232;
}
ul>li:hover{
  color: #b62eb6;
}
.active{
  color: #b62eb6;
}
</style>