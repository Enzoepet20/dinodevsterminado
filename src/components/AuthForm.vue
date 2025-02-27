<template>
  <div class="auth-form">
    <h2>{{ isLogin ? 'Iniciar Sesión' : 'Registrarse' }}</h2>

    <form @submit.prevent="handleSubmit">
      <div v-if="error" class="error-message">{{ error }}</div>

      <div class="input-group">
        <label for="email">Correo electrónico</label>
        <input v-model="email" id="email" type="email" placeholder="Correo electrónico" required />
      </div>

      <div class="input-group">
        <label for="password">Contraseña</label>
        <input v-model="password" id="password" type="password" placeholder="Contraseña" required />
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Cargando...' : (isLogin ? 'Ingresar' : 'Registrarse') }}
      </button>
    </form>

    <p @click="toggleMode">
      {{ isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión' }}
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const isLogin = ref(true);
    const error = ref(null);
    const loading = ref(false);
    const authStore = useAuthStore();
    const router = useRouter();
    const route = useRoute();

    const handleSubmit = async () => {
      error.value = null;
      loading.value = true;

      try {
        if (isLogin.value) {
          await authStore.login(email.value, password.value);
        } else {
          await authStore.register(email.value, password.value);
        }

        const redirectTo = route.query.redirect || '/juegos';
        router.push(redirectTo);
      } catch (err) {
        error.value = getErrorMessage(err.code);
      } finally {
        loading.value = false;
      }
    };

    const toggleMode = () => {
      isLogin.value = !isLogin.value;
      error.value = null;
    };

    const getErrorMessage = (errorCode) => {
      const errorMessages = {
        'auth/user-not-found': 'Usuario no encontrado.',
        'auth/wrong-password': 'Contraseña incorrecta.',
        'auth/email-already-in-use': 'El correo ya está registrado.',
        'auth/weak-password': 'La contraseña es demasiado débil.',
        'auth/invalid-email': 'Correo inválido.',
        'auth/network-request-failed': 'Error de conexión. Revisa tu internet.',
      };

      return errorMessages[errorCode] || 'Error en la autenticación. Intenta de nuevo.';
    };

    return { email, password, isLogin, error, loading, handleSubmit, toggleMode };
  }
};
</script>

<style scoped>
.auth-form {
  max-width: 350px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
}

p {
  cursor: pointer;
  color: #007bff;
  text-decoration: underline;
  margin-top: 15px;
}

p:hover {
  text-decoration: none;
}
</style>
