import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'


// @ts-ignore
const routesModules: any = import.meta.globEager('./modules/*.ts')
const routesModuleKeys: Array<any> = Object.keys(routesModules)

// @ts-ignore
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

routesModuleKeys.forEach(item => {
  routes.push(...routesModules[item].default)
})

console.log(routes)
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/'),
  routes
})

export default router