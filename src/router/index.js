import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import NetflixPage from '../views/NetflixPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/netflix',
    name: 'netflix',
    component: NetflixPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
