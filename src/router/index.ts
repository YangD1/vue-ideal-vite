import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routesModules: any = import.meta.globEager('./modules/*.ts')
const routesModuleKeys: Array<any> = Object.keys(routesModules)

let routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "demo" */ '../views/AboutView.vue')
  }
]

routesModuleKeys.forEach(key => {
  routes.push(...routesModules[key].default)
})

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router