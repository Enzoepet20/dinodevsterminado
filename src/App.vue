<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
import { useThemeStore } from './stores/ThemeStore';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid';

// Instancia del store
const themeStore = useThemeStore();

// Estado del menú
const isMenuOpen = ref(false);

function changeTheme() {
  themeStore.cambioDeTema();
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>


<template>
  <div :class="{ 'dark': themeStore.isDark }" class="wrapper transition-ease-linear">
    <div class="btn-wrapper">
      <div class="toggle-btn">
        <label for="toggle" class="toggle-label">
          <div class="relative">
            <input @click="changeTheme" type="checkbox" id="toggle" class="sr-only" />
            <div class="toggle-bg"></div>
            <div class="dot">
              <MoonIcon v-if="!themeStore.isDark" class="moon-icon" />
              <SunIcon v-if="themeStore.isDark" class="sun-icon" />
            </div>
          </div>
        </label>
      </div>
    </div>

    <header>
      <img alt="Dinos Devs Logo" class="logo" src="@/assets/logoDinosDevs.png" width="160" height="160" />

      <button class="menu-toggle" @click="toggleMenu">☰</button>

      <nav :class="{ 'open': isMenuOpen }">
        <RouterLink to="/" @click="toggleMenu">Home</RouterLink>
        <RouterLink to="/informacion" @click="toggleMenu">Información</RouterLink>
        <RouterLink to="/juegos" @click="toggleMenu">Juegos</RouterLink>
        <RouterLink to="/realidad-aumentada" @click="toggleMenu">Realidad Aumentada</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>

/* .wrapper {
  height: auto;
  width: 100%;
  background: #aa2525;
  transition: background-color 0.3s ease;
} */

.wrapper.dark {
  background: #434343;
}

.btn-wrapper {
  position: absolute;
  right: 1px;
}

input:checked ~ .dot {
  transform: translateX(1.5rem);
  background-color: rgb(77, 148, 255);
}

.label-text {
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.label-text.dark {
  color: white;
}

.todo {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
header {
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #38532c;
}

.logo {
  display: block;
  /* Elimina margin: 0 auto; para alinear a la izquierda */
  margin-left: 20px; /* Si quieres un pequeño espacio desde el borde izquierdo */
}

.menu-toggle {
  background: none;
  border: none;
  font-size: 2rem;
  display: none;
}

nav {
  font-size: 25px;
  text-align: right;
  margin-top: 2rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color: rgb(5, 4, 4);
}

nav a:hover {
  cursor: url('src/assets/garra2.png'), default;

}

nav a.router-link-exact-active {
  color: green;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  nav {
    color: black;
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    width: 50%;
    background-color: #fcfffaec;
    text-align: center;
    padding: 1rem 0;
    margin-right: 20px;
  }
  nav.open {
    display: flex;
  }

}

.toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  margin-right: 30px;
}

.toggle-label {
  display: flex;
  align-items: center;
  justify-content: center;

}

.toggle-bg {
  width: 3.5rem;
  height: 2rem;
  background-color: #2a2b2a;
  border-radius: 9999px;
  position: relative;
  transition: background-color 0.3s ease;
}

.dot {
  position: absolute;
  left: 1.25rem;
  top: 1.2rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgb(0, 0, 0);
  border-radius: 9999px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.moon-icon {
  width: 1rem;
  height: 1.5rem;
  color: white;
}

.sun-icon {
  width: 1.5rem;
  height: 1.4rem;
  color: #fbbf24;
}

.sr-only {
  display: none;
}


</style>
