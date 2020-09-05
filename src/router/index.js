import Vue from 'vue'
import VueRouter from 'vue-router'
import RallyEstonia from '../views/RallyEstonia.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'RallyEstonia',
    component: RallyEstonia
  },
  {
    path: '/edetabel',
    name: 'ScoreBoard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ScoreBoard" */ '../views/ScoreBoard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
