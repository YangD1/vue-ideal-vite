import { RouteRecordRaw } from 'vue-router'
const demo: Array<RouteRecordRaw> = [
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/demo/index.vue')
  }
]
export default demo;