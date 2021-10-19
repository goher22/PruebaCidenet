import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/Registro',
    children: [
      {
        path: 'Usuarios',
        component: () => import('../views/Users.vue'),
      },
      {
        path: 'Registro',
        component: () => import('../views/RegisterUser.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
