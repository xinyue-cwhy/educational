<template>
    <!--    <ul>
          <li style="color: #b62eb6">(*^_^*)</li>
    &lt;!&ndash; 排课     &ndash;&gt;
          <li>课程表</li>
    &lt;!&ndash; 课程用书等书籍信息     &ndash;&gt;
          <li>课程管理</li>
    &lt;!&ndash; 给学生上成绩    &ndash;&gt;
          <li>成绩管理</li>
    &lt;!&ndash; 个人用户    &ndash;&gt;
          <li>用户管理</li>
        </ul>
      </div>-->
    <tabbar>
      <ul>
        <li><tabbaritems activetextcolor="#b62eb6">
          <div slot="tabbar-text" @click="tskcb" :class="{active:cactive===1}">课程表</div>
        </tabbaritems></li>
        <li><tabbaritems activetextcolor="#b62eb6">
          <div slot="tabbar-text" @click="tskcgl" :class="{active:cactive===2}">课程管理</div>
        </tabbaritems></li>
        <li> <tabbaritems activetextcolor="#b62eb6">
          <div slot="tabbar-text" @click="tsidc" :class="{active:cactive===3}">成绩管理</div>
        </tabbaritems></li>
        <li> <tabbaritems activetextcolor="#b62eb6">
          <div slot="tabbar-text" @click="tsidy" :class="{active:cactive===4}">用户管理</div>
        </tabbaritems></li>
      </ul>
    </tabbar>
</template>

<script>
import tabbaritems from "@/components/tar/tabbar/tabbaritems";
import tabbar from "@/components/tar/tabbar/tabbar";
export default {
  name: "leftteacher",
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
    tskcb(){
      this.$router.replace({path:"/loginfirst/kcb",
        query:{s_id:this.id}});
      this.cactive=1
    },
    tskcgl(){
      this.$router.replace({path:"/loginfirst/kcgl",
        query:{s_id:this.id}});
      this.cactive=2
    },
    tsidc(){
      this.$router.replace({path:"/loginfirst/cjgl",
        query:{s_id:this.id}});
      this.cactive=3
    },
    tsidy(){
      this.$router.replace({path:"/loginfirst/yhgl",
        query:{s_id:this.id,s_status:this.status}});
      this.cactive=4
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