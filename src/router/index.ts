import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Map from '../views/Map.vue'
import Landing from '../views/Landing.vue'
import Transport from '../views/Transport.vue'
import Login from "@/views/UserLogin/Login.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    component: About    
  },
  {
    path: '/map',
    component: Map
  },
  {
    path: '/landing',
    component: Landing
  },
  {
    path: '/transport',
    component: Transport
  },
  {
     path: '/login',
     component: Login
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
