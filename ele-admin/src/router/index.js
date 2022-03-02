import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect:'/index',
    // meta:{title:'首页'},
    component: HomeView,
    children: [
      {
        path: '/index',
        name: 'index',
        meta:{title:'首页'},
        component: () => import('../views/layout/index/index.vue')
      },
      {
        path: '/stats',
        name: 'stats',
        meta:{title:'数据统计'},
        component: () => import('../views/layout/stats/index.vue')
      },
      {
        path: '/message',
        name: 'message',
        meta:{title:'信息管理'},
        component: () => import('../views/layout/message/index.vue'),
        children:[
          {
            path: '/message/list',
            name: 'messageList',
            meta:{title:'列表展示'},
            component: () => import('../views/layout/message/index.vue')
          }
        ]
      },
      {
        path: '/user',
        name: 'user',
        meta:{title:'用户管理'},
        component: () => import('../views/layout/user/index.vue'),
        children:[
          {
            path: '/user/list',
            name: 'userList',
            meta:{title:'列表展示'},
            component: () => import('../views/layout/user/index.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由拦截  登录检测
// router.beforeEach(function(to,from,next){
//   if (!sessionStorage.getItem('username')) {
//     if (to.path !== '/login') { //用户没有登录而且去的网页也不是登录页面时，强制跳转到登录页面
//       next('/login')
//     }
//   };
//   next();
// })
export default router