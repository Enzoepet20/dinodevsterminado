import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  // Cargar el estado desde localStorage o usar falso por defecto
  const isDark = ref(localStorage.getItem('theme') === 'dark');

  // Computed para el modo
  const mode = computed(() => (isDark.value ? 'Dark Mode' : 'Light Mode'));

  // Método para cambiar el tema
  const cambioDeTema = () => {
    isDark.value = !isDark.value;
  };

  // Watch para guardar cambios en localStorage
  watch(isDark, (newValue) => {
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
  });

  return { isDark, mode, cambioDeTema };
});
