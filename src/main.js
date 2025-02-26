import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 
import { useAuthStore } from './stores/auth';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia); // 🔥 Se debe usar antes de llamar al store

const authStore = useAuthStore();
onAuthStateChanged(auth, (user) => {
  authStore.setAuthState(user);
});

app.use(router);
app.mount('#app');
