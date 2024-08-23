import { createRouter, createWebHistory } from 'vue-router'
import MyPortefolio from '../views/MyPortefolio.vue'
import TheError from '../views/TheError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MyPortefolio',
      component: MyPortefolio
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: TheError
    },
  ]
})

export default router
