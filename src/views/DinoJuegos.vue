<template>
  <div class="juegos-container">
    <div class="botones-superiores">
      <button @click="verRanking">Ranking</button>
      <button @click="verCarrito">
        <i class="fas fa-shopping-cart"></i> Carrito
      </button>
    </div>
    <h2>Juegos de Dinosaurios</h2>
    <div class="juegos-grid">
      <div class="juego-item" @click="seleccionarJuego('memoria')">
        <i class="fas fa-brain"></i>
        <h3>Juego de Memoria</h3>
      </div>
      <div class="juego-item" @click="seleccionarJuego('sopa')">
        <i class="fas fa-search"></i>
        <h3>Sopa de Letras</h3>
      </div>
      <div class="juego-item" @click="seleccionarJuego('rompecabezas')">
        <i class="fas fa-puzzle-piece"></i>
        <h3>Rompecabezas</h3>
      </div>
      <div class="juego-item" @click="seleccionarJuego('pasapalabra')">
        <i class="fas fa-font"></i>
        <h3>Pasa Palabra</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    seleccionarJuego(juego) {
      if (juego === 'memoria') {
        this.$router.push('/memory-game'); // Redirige al juego de memoria
      } else if (juego === 'sopa') {
        this.$router.push('/sopa-de-letras'); // Redirige a la sopa de letras
      } else {
        console.log(`Juego seleccionado: ${juego}`);
      }
    },
    verRanking() {
      console.log('Ver ranking');
    },
    verCarrito() {
      console.log('Ver carrito');
    },
  },
}
</script>

<style scoped>
.juegos-container {
  background-color: #2e4d3d;
  color: #f0ead2;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Georgia', serif;
  text-align: center;
}

.botones-superiores {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  gap: 10px;
}

button {
  background-color: #4a7a5b;
  color: #f0ead2;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
}

button:hover {
  background-color: #5b8e6b;
}

/* Estilo de los botones de juegos */
.juegos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 16px;
}
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
.juego-item {
  background: linear-gradient(135deg, #4a7a5b, #5c8a70);
  color: #f0ead2;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}

.juego-item i {
  font-size: 2rem;
  margin-bottom: 8px;
}

/* Efecto de brillo */
.juego-item:before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(45deg);
  transition: all 0.5s ease;
}

.juego-item:hover:before {
  top: -70%;
  left: -70%;
  background: rgba(255, 255, 255, 0.2);
}

/* Escala y sombra en hover */
.juego-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}
</style>
