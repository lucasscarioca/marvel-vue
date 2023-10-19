import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Welcome,
      meta: {
        breadcrumbs: ['Home']
      }
    },
    {
      path: '/characters',
      name: 'Characters',
      component: () => import('../views/Characters.vue'),
      meta: {
        breadcrumbs: ['Characters']
      }
    },
    {
      path: '/characters/:id/:slug',
      name: 'CharacterDetails',
      component: () => import('../views/CharacterDetails.vue'),
      meta: {
        breadcrumbs: ['Characters']
      }
    },
    {
      path: '/comics',
      name: 'Comics',
      component: () => import('../views/Comics.vue'),
      meta: {
        breadcrumbs: ['Comics']
      }
    },
    {
      path: '/events',
      name: 'Events',
      component: () => import('../views/Events.vue'),
      meta: {
        breadcrumbs: ['Events']
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue'),
      meta: {
        breadcrumbs: ['Contact']
      }
    }
  ]
})

export default router
