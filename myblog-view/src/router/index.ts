import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/views/blog-layout.vue";

const routes: Array<RouteRecordRaw> = [
    {
      path:'/',
      redirect:'home',
      name:'layout',
      component:Layout,
      children:[
        {
          path:'/home',
          name:'Home',
          component:() => import('@/views/home/blog-home.vue'),
          meta:{
            link0:0
        }
        },
      
      
        {
          path:'/item',
          name:'Item',
          component:() => import('@/views/item/blog-item.vue'),
          meta:{
            link2:2
          }
        },
        {
          path:'/my',
          name:'My',
          component:() => import('@/views/my/blog-my.vue'),
          meta:{
            link6:6
          }
        },
        {
          path:'/notes',
          name:'Notes',
          component:() => import('@/views/notes/blog-notes.vue'),
          meta:{
            link1:1
          }
        },
        {
          path:'/state',
          name:'State',
          component:() => import('@/views/state/blog-state.vue'),
          meta:{
            link4:4
          }
        },
        {
          path:'/article/:id',
          name:'Article',
          component:() => import('@/components/blog-article.vue'),
        }
      ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { left: 0, top: 0 }
  }
})

export default router
