<template>
  <div class="dino-info">
    <h2>Información de Dinosaurios</h2>
    <div class="dino-grid">
      <DinoCard v-for="dino in dinosaurios" :key="dino.nombreCientifico" :dino="dino" />
    </div>
  </div>
</template>

<script>
import DinoCard from '@/components/DinoCard.vue'
import dinosaurios from '@/data/dinosaurios.json'

export default {
  components: { DinoCard },
  data() {
    return {
      dinosaurios,
    }
  },
}
</script>

<style scoped>
/* Estilo principal */
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

.dino-info {
  background-color: #2e4d3d;
  color: #f0ead2;
  padding: 40px;
  border-radius: 12px;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  animation: fadeIn 1s ease-in;

  width: 100%;
  max-width: 1200px; /* Ajusta el valor para cambiar el ancho máximo */
  margin: 0 auto; /* Centrará el contenedor */
  min-height: 100vh;
  box-sizing: border-box;
}

h2 {
  font-size: 2.5rem;
  color: #d4c9a1;
  margin-bottom: 30px;
  font-weight: 700;
  letter-spacing: 1px;
}

/* Estilo para la cuadrícula */
.dino-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
  transition: grid-template-columns 0.3s ease;
}

/* Estilo individual para cada tarjeta de dinosaurio */
.dino-card {
  background-color: #3c6652;
  color: #f0ead2;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.7s ease-in-out forwards;
}

.dino-card img {
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.dino-card:hover {
  transform: translateY(-10px) scale(1.05);
  background-color: #4a7a5b;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.dino-card:hover img {
  transform: scale(1.1);
}

/* Animación para entrada suave */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .dino-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .dino-grid {
    grid-template-columns: 1fr;
  }
}
</style>
