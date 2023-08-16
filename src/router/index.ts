import { createRouter,createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'首页',
    component:()=>import('@/pages/home/index.vue')
  },
  {
    path:'/hospital',
    name:'医院',
    component:()=>import('@/pages/hospital/index.vue'),
    children:[
      {
        path:'register',
        name:'预约挂号',
        component:()=>import('@/pages/hospital/register/index.vue')
      },
      {
        path:'detail',
        name:'医院详情',
        component:()=>import('@/pages/hospital/detail/index.vue')
      },
      {
        path:'notice',
        name:'预约通知',
        component:()=>import('@/pages/hospital/notice/index.vue')
      },
      {
        path:'message',
        name:'停诊信息',
        component:()=>import('@/pages/hospital/message/index.vue')
      },
      {
        path:'query',
        name:'查询和取消',
        component:()=>import('@/pages/hospital/query/index.vue')
      },
    ]
  },
]
export default createRouter({
  history:createWebHistory(),
  routes,
  scrollBehavior(to,from,savedPosition){
    return {
      top:0
    }
  }
})

