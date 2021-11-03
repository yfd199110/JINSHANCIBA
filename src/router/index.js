import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import UserCenter from '@/views/UserCenter.vue'
import UserCenter_userInfo from '@/components/UserCenter_userInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userCenter',
    name: 'UserCenter',
    component: UserCenter,
    children: [
      {
        path: '',
        component: UserCenter_userInfo
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
