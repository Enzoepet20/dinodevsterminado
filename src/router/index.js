// router.js
import { createRouter, createWebHistory } from 'vue-router'
import DinoHome from '@/views/DinoHome.vue'
import DinoMenu from '@/views/DinoMenu.vue'
import DinoJuegos from '@/views/DinoJuegos.vue'
import DinoInformacion from '@/views/DinoInformacion.vue'
import RealidadAumentada from '@/views/RealidadAumentada.vue'
import MemoryGame from '@/components/MemoryGame.vue'
import SopaDeLetras from '@/components/SopaDeLetras.vue'

const routes = [
  { path: '/', component: DinoHome },
  { path: '/menu', component: DinoMenu },
  { path: '/juegos', component: DinoJuegos },
  { path: '/informacion', component: DinoInformacion },
  { path: '/realidad-aumentada', component: RealidadAumentada },
  { path: '/memory-game', component: MemoryGame },
  { path: '/sopa-de-letras', component: SopaDeLetras },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
