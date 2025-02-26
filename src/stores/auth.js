import { defineStore } from 'pinia';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    isDetermined: false,  // Indica si Firebase ha determinado el estado de autenticación
  }),
  actions: {
    // Actualiza el estado de autenticación
    setAuthState(user) {
      this.user = user;
      this.isAuthenticated = !!user;
      this.isDetermined = true;  // Marcar como determinado
    },

    // Función para verificar el estado de autenticación en Firebase
    checkAuthState() {
      return new Promise((resolve) => {
        onAuthStateChanged(auth, (currentUser) => {
          this.setAuthState(currentUser);
          resolve();
        });
      });
    },

    // Función de login
    async login(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.setAuthState(userCredential.user);
      } catch (error) {
        console.error('Error en el login:', error.message);
      }
    },

    // Función de registro
    async register(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        this.setAuthState(userCredential.user);
      } catch (error) {
        console.error('Error al registrar usuario:', error.message);
      }
    },

    // Función de logout
    async logout() {
      try {
        await signOut(auth);
        this.setAuthState(null);
      } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
      }
    },
  },
  persist: true, // Esto mantiene el estado entre recargas de página
});
