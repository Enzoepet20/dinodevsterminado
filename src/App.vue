<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive } from 'vue';
import { useThemeStore } from './stores/ThemeStore';


import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'




// instanciar useThemeStore

const themeStore = useThemeStore()

// crear variable reactiva con objeto useStore

const theme = reactive(themeStore)

function changeTheme() {
  themeStore.cambioDeTema();
}
</script>

<template>
<!-- para cambiar de modo claro a oscuro -->
  <div :class="{'dark': themeStore.isDark}" class="wrapper transition-ease-linear">
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
      <img
        alt="Dinos Devs Logo"
        class="logo"
        src="@/assets/logoDinosDevs.png"
        width="160"
        height="160"
      />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/informacion">Información</RouterLink>
        <RouterLink to="/juegos">Juegos</RouterLink>
        <RouterLink to="/realidad-aumentada">Realidad Aumentada</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>

.wrapper {
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  transition: background-color 0.3s ease;
}

.wrapper.dark {
  background: #434343;
}

.btn-wrapper {
  position: absolute;
  right: 1px;
}

/* color de fondo cuado esta en sol */
input:checked~.dot {
  transform: translateX(1.5rem);
  background-color: rgb(77, 148, 255);
}

.label-text {
  color: black;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 25px;
  text-align: center;
  margin-top: 2rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  gap: 15px;
  text-decoration: none;
  color: black;
  cursor: pointer; /* El cursor normal por defecto */
}

nav a:hover {
  cursor: url('src/assets/garra2.png'), pointer; /* Ruta relativa */
}

nav a:first-of-type {
  margin-left: 0; /* Quitar margen del primer enlace */
}

nav a.router-link-exact-active {
  color: green;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;
    padding-right: 50px;
    margin-top: 1rem;
  }
}

/* Estilos específicos para el botón del toggle */
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
  cursor: pointer;
}

.toggle-bg {
  width: 3.5rem;
  height: 2rem;
  background-color: #2a2b2a;
  border-radius: 9999px;
  position: relative; /* Necesario para posicionar el 'dot' dentro */
  transition: background-color 0.3s ease; /* Transición suave para el fondo */
}

.dot {
  position: absolute;
  left: 1.25rem; /* Alineación inicial del 'dot' a la izquierda */
  top: 1.2rem; /* Alineación vertical */
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgb(0, 0, 0);
  border-radius: 9999px; /* Hacer el 'dot' redondo */
  transition: transform 0.3s ease, background-color 0.3s ease; /* Transiciones suaves */
}

.moon-icon {
  width: 1rem;
  height: 1.5rem;
  color: white;
}

.sun-icon {
  width: 1.5rem;
  height: 1.4srem;
  color: #fbbf24;

}

.sr-only{
  display: none;
}

</style>
