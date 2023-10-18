import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/Characters.vue')
    },
    {
      path: '/comics',
      name: 'comics',
      component: () => import('../views/Comics.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/Events.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
