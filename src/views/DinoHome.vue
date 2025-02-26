<template>
  <div class="container">
    <h1 class="text-3xl font-bold text-center mt-8">¡DINOSDEVS TE DA LA BIENVENIDA!</h1>
    <h2 class="text-xl text-center mt-4">¿Qué encontrarás?</h2>

    <!-- Cards -->
    <div class="feature-container flex flex-wrap justify-center gap-4 mt-4">
      <div class="card w-full sm:w-[45%] lg:w-[30%] aspect-square bg-green-800 rounded-xl shadow-lg transform transition-transform hover:scale-105">
        <div class="card-header text-white text-lg font-semibold p-4">🦕 <strong>Explora el Mundo Jurásico</strong></div>
        <div class="card-body text-gray-200 text-base p-4">
          Sumérgete en un mundo lleno de información emocionante sobre estos majestuosos reptiles prehistóricos.
        </div>
      </div>

      <div class="card w-full sm:w-[45%] lg:w-[30%] aspect-square bg-green-800 rounded-xl shadow-lg transform transition-transform hover:scale-105">
        <div class="card-header text-white text-lg font-semibold p-4">🦖 <strong>Juegos y Retos</strong></div>
        <div class="card-body text-gray-200 text-base p-4">
          Pon a prueba tu conocimiento en divertidos juegos y gana puntos.
        </div>
      </div>

      <div class="card w-full sm:w-[45%] lg:w-[30%] aspect-square bg-green-800 rounded-xl shadow-lg transform transition-transform hover:scale-105">
        <div class="card-header text-white text-lg font-semibold p-4">🔍 <strong>Realidad Aumentada</strong></div>
        <div class="card-body text-gray-200 text-base p-4">
          ¡Mira a los dinosaurios en 3D en tu propio espacio, como si estuvieran vivos!
        </div>
      </div>
    </div>

    <!-- Sección adicional -->
    <h2 class="text-xl font-semibold text-center mt-8">¿Listo para la aventura?</h2>

    <!-- Botones de autenticación -->
    <div class="button-container flex justify-center gap-4 mt-4">
      <button
        v-if="!isAuthenticated"
        @click="showLogin = true"
        class="btn-estilos bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700"
      >
        Iniciar sesión
      </button>
      <button
        v-if="isAuthenticated"
        @click="logout"
        class="btn-estilos bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700"
      >
        Cerrar sesión
      </button>
    </div>

    <!-- Formulario de autenticación -->
    <AuthForm v-if="showLogin" @close="showLogin = false" class="mt-6" />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth'; // Importamos Pinia
import AuthForm from '../components/AuthForm.vue'; // Un solo formulario para login y registro

export default {
  name: 'DinoHome',
  components: {
    AuthForm,
  },
  setup() {
    const authStore = useAuthStore();
    const isAuthenticated = computed(() => authStore.isAuthenticated);
    const showLogin = ref(false);

    const logout = () => authStore.logout();

    return {
      isAuthenticated,
      showLogin,
      logout,
    };
  },
};
</script>

<style scoped>
/* Estructura base */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('@/assets/fondoinicio.jpg') no-repeat center center;
  background-size: cover;
  padding: 40px;
  animation: fadeIn 1s ease-in;
  font-family: 'Raleway', sans-serif;
  text-align: center;
}

h1 {
  color: #f5fffb;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-shadow: rgb(0, 2, 1) 5px 5px 6px;
  animation: fadeIn 1s ease-in-out;
}

h2 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #e1ff74;
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 2rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 1) 5px 5px 6px;
  animation: fadeIn 1s ease-in-out;
}

.feature-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  animation: fadeIn 1.5s ease-in-out;
  overflow: hidden;
}

.card {
  max-width: 90%;
  background: #fcf7d098;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 4px 6px 18px rgba(0, 0, 0, 0.836);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-header {
  font-size: 1.3rem;
  color: #063b11;
  font-weight: 600;
}

.card-body {
  font-size: 1.1rem;
  color: #000000;
  margin-top: 0.5rem;
}

/* Botones */
.button-container {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
}

.btn-estilos {
  background-color: #155335;
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
  background-color: #225c22;
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
