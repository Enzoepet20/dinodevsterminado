<template>
  <div class="container">
    <h1 class="text-3xl font-bold text-center mt-8">¡DINOSDEVS TE DA LA BIENVENIDA!</h1>
    <h2 class="text-xl text-center mt-4">¿Qué encontrarás?</h2>

    <!-- Sección de Características -->
    <div class="feature-container">
      <div class="card">
        <div class="card-header">🦕 <strong>Explora el Mundo Jurásico</strong></div>
        <div class="card-body">
          Sumérgete en un mundo lleno de información emocionante sobre estos majestuosos reptiles prehistóricos.
        </div>
      </div>

      <div class="card">
        <div class="card-header">🦖 <strong>Juegos y Retos</strong></div>
        <div class="card-body">
          Pon a prueba tu conocimiento en divertidos juegos y gana puntos.
        </div>
      </div>

      <div class="card">
        <div class="card-header">🔍 <strong>Realidad Aumentada</strong></div>
        <div class="card-body">
          ¡Mira a los dinosaurios en 3D en tu propio espacio, como si estuvieran vivos!
        </div>
      </div>
    </div>

    <!-- Sección de Autenticación -->
    <h2 class="text-xl font-semibold text-center mt-8">¿Listo para la aventura?</h2>
    <div class="button-container">
     <button
  v-if="!isAuthenticated && !showLogin"
  @click="showLogin = true"
  class="btn-estilos bg-green-500 hover:bg-green-700 text-green"
>
  Iniciar sesión
</button>


      <button
        v-if="isAuthenticated"
        @click="logout"
        class="btn-estilos bg-red-600 hover:bg-red-700"
      >
        Cerrar sesión
      </button>
    </div>

    <!-- Formulario de autenticación -->
    <AuthForm v-if="showLogin" @close="showLogin = false" class="mt-6" />
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router'; // Importa el enrutador
import AuthForm from '../components/AuthForm.vue';

export default {
  name: 'DinoHome',
  components: {
    AuthForm,
  },
  setup() {
    const authStore = useAuthStore();
    const isAuthenticated = computed(() => authStore.isAuthenticated);
    const showLogin = ref(false);
    const router = useRouter(); // Accede al enrutador

    const logout = () => authStore.logout();

    // Redirige a Juegos cuando el usuario está autenticado
    onMounted(() => {
      if (isAuthenticated.value) {
        router.push('/juegos'); // Redirige al usuario a la página de juegos
      }
    });

    return {
      isAuthenticated,
      showLogin,
      logout,
    };
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('@/assets/fondoinicio.jpg') no-repeat center center;
  background-size: cover;
  padding: 40px;
  animation: fadeIn 1s ease-in;
  font-family: 'Raleway', sans-serif;
  text-align: center;
}

h1, h2 {
  font-family: 'Franklin Gothic Medium', Arial, sans-serif;
  text-shadow: 5px 5px 6px rgba(0, 0, 0, 1);
}

h1 {
  color: #f5fffb;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

h2 {
  color: #e1ff74;
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 2rem;
}

.feature-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  animation: fadeIn 1.5s ease-in-out;
}

.card {
  width: 90%;
  max-width: 300px;
  background: #fcf7d098;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 4px 6px 18px rgba(0, 0, 0, 0.836);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-header {
  font-size: 1.3rem;
  color: #063b11;
  font-weight: 600;
}

.card-body {
  font-size: 1.1rem;
  color: #000;
  margin-top: 0.5rem;
}

/* Botones */
.button-container {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.btn-estilos {
  color: #fff;
  border: none;
  padding: 12px 30px;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.897);
}

.btn-estilos:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Responsivo */
@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  .btn-estilos {
    padding: 10px 20px;
    font-size: 1rem;
  }

  .feature-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }
}
</style>
