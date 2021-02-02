import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const first=()=>import('../views/first/First')
const login=()=>import('../views/lodin/login')
const tabbar=()=>import('../views/lodin/loginchild/tabbar')
const tabbar2=()=>import('../views/lodin/loginchild/tabbar2')
const loginfirst=()=>import('../views/loginto/loginfirst')
const img=()=>import('@/views/loginto/img')
//教师模块
const kcb=()=>import('@/views/loginto/lfchild/importviw/teacher/kcb')
const cjgl=()=>import('@/views/loginto/lfchild/importviw/teacher/cjgl')
const kcgl=()=>import('@/views/loginto/lfchild/importviw/teacher/kcgl')
const yhgl=()=>import('@/views/loginto/lfchild/importviw/teacher/yhgl')
//学生模块
const skcb=()=>import('@/views/loginto/lfchild/importviw/stu/skcb')
const skccx=()=>import('@/views/loginto/lfchild/importviw/stu/skccx')
const scjcx=()=>import('@/views/loginto/lfchild/importviw/stu/scjcx')
const syhgl=()=>import('@/views/loginto/lfchild/importviw/stu/syhgl')

const routes=[
  {
    path: '/',
    redirect: '/first'
  },
  {
    path: '/first',
    component: first,
    meta: {
      title: '教务管理系统'
    }
  },
  {
    path: '/login',
    name:'login',
    component: login,
    meta:{
      title:"统一身份登录"
    },
    children:[
      {
        path: '',
        redirect:'/login/tabbar'
      },
      {
        path: 'tabbar',
        component: tabbar,
      },{
        path: 'tabbar2',
        component: tabbar2,
      }
    ]
  },
  {
    path: '/loginfirst',
    meta:{
      title:"教务系统"
    },
    component: loginfirst,
    children:[
        //教师模块
      {
        path: '',
        redirect:'/loginfirst/img'
      },
      {
        path: 'img',
        component: img,
      },
      {
        path: 'kcb',
        component: kcb,
      },
      {
        path: 'kcgl',
        component: kcgl,
      },
      {
        path: 'cjgl',
        component: cjgl,
      },
      {
        path: 'yhgl',
        component: yhgl,
      },
        //学生模块
      {
        path: 'skcb',
        component: skcb,
      },{
        path: 'skccx',
        component: skccx,
      },{
        path: 'scjcx',
        component: scjcx,
      },{
        path: 'syhgl',
        component: syhgl,
      },
    ]
  }/*,
  {
    path: '/profile',
    component:profile
  },
  {
    path: '/detail/:iid',
    component:detail
  }*/

]

const router=new Router({
  base: process.env.BASE_URL,
  routes,
  //mode:'history'
})
/*用于改页面title*/
router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title
  next()
})
//重写页面跳转方法  解决控制台报 Uncaught（in promise）问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
export default router
