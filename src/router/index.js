import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const home=()=>import('../views/home/home')
const caregory=()=>import('../views/caregory/caregory')
const cart=()=>import('../views/cart/cart')
const profile=()=>import('../views/profile/profile')
const detail=()=>import('../views/detail/detail')
const routes=[
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/caregory',
    component:caregory
  },
  {
    path: '/cart',
    component:cart
  },
  {
    path: '/profile',
    component:profile
  },
  {
    path: '/detail/:iid',
    component:detail
  }

]

const router=new Router({
  routes,
  mode:'history'
})
export default router
