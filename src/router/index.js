import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PhotoView from '../views/PhotoView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Déclaration des routes statiques Home et Search
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    // Déclaration de la route dynamique Photo, qui prend id en paramètre (on le récupère dans sa View)
    {
      path: '/photo/:id',
      name: 'photo',
      component: PhotoView
    },
  ]
})

export default router
