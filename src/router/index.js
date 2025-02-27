import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import DinoHome from '@/views/DinoHome.vue';
import DinoMenu from '@/views/DinoMenu.vue';
import DinoJuegos from '@/views/DinoJuegos.vue';
import DinoInformacion from '@/views/DinoInformacion.vue';
import RealidadAumentada from '@/views/RealidadAumentada.vue';
import MemoryGame from '@/components/MemoryGame.vue';
import SopaDeLetras from '@/components/SopaDeLetras.vue';
import AuthForm from '@/components/AuthForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DinoHome
  },
  { path: '/menu', component: DinoMenu },
  { path: '/informacion', component: DinoInformacion },
  { path: '/login', component: AuthForm },
  { path: '/juegos', component: DinoJuegos, meta: { requiresAuth: true } },
  { path: '/realidad-aumentada', component: RealidadAumentada, meta: { requiresAuth: true } },
  { path: '/memory-game', component: MemoryGame, meta: { requiresAuth: true } },
  { path: '/sopa-de-letras', component: SopaDeLetras, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/' },  // Redirección para rutas no encontradas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// **Guard de autenticación**
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const { isAuthenticated } = storeToRefs(authStore);

  // Llamada al método para verificar el estado de autenticación
  if (authStore.isDetermined) {
    // Solo comprobamos el estado una vez que Firebase haya determinado si el usuario está autenticado
    if (to.meta.requiresAuth && !isAuthenticated.value) {
      next('/login');  // Si no está autenticado, redirige a login
    } else {
      next();  // Si está autenticado o la ruta no requiere autenticación, permite el acceso
    }
  } else {
    // Si Firebase está determinando el estado de autenticación, esperamos
    next();  // Esto puede ser ajustado si quieres mostrar un estado de carga
  }
});

export default router;
