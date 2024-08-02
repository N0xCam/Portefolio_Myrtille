import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MyPortefolio.vue'
import TheError from '../views/TheError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MyPortefolio.vue')
    },
    {
      path: '/TheError',
      name: 'TheError',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TheError.vue')
    }
  ]
})

export default router
