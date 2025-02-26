<template>
  <div class="dino-info">
    <div class="bienvenida">
      <img src="@/assets/dinoinfo.jpg" alt="Dinosaurio" class="foto-intro">
      <section class="intro">
        <h1>Bienvenidos al Mundo de los Dinosaurios</h1>
        <p>
          Descubre la asombrosa historia de estas criaturas prehistóricas. Aquí encontrarás
          datos curiosos, descubrimientos recientes y lugares increíbles para aprender y
          explorar más sobre los dinosaurios. ¡Embárcate en este viaje a través del tiempo y
          déjate sorprender por el pasado!
        </p>
      </section>
    </div>

<!-- linea del tiempo -->
<h2 class="linea-titulo">LINEA DEL TIEMPO</h2>
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-dot">
      <i class="fa-solid fa-paw timeline-icon"></i>
    </div>
    <h3>TRIÁSICO</h3>
    <h4>(hace 250-201 millones de años)</h4>
    <p>Período inicial, donde surgieron los primeros dinosaurios. Además, los continentes estaban unidos en un supercontinente llamado Pangea.</p>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot">
      <i class="fa-solid fa-paw timeline-icon"></i>
    </div>
    <h3>JURÁSICO</h3>
    <h4>(hace 201-145 millones de años)</h4>
    <p>Era de los dinosaurios gigantes como el Brachiosaurus y el Stegosaurus. Aparición de las primeras aves, como el Archaeopteryx. También la separación de los continentes dio lugar a nuevos hábitats.</p>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot">
      <i class="fa-solid fa-paw timeline-icon"></i>
    </div>
    <h3>CRETÁCICO</h3>
    <h4>(hace 145-66 millones de años)</h4>
    <p>Dinosaurios famosos como el T-Rex dominaron. Las plantas con flores comenzaron a dominar los ecosistemas.</p>
  </div>

  <div class="timeline-item">
    <div class="timeline-dot">
      <i class="fa-solid fa-paw timeline-icon"></i>
    </div>
    <h3>EXTINCIÓN</h3>
    <h4>(hace 66 millones de años)</h4>
    <p>Fin de la era de los dinosaurios. Más del 75% de las especies desaparecieron. Marcó el fin de la era de los dinosaurios y el inicio del dominio de los mamíferos.</p>
  </div>
</div>



    <RandomDinoInfo />

    <!-- Carrusel -->

  <h1 class="card-titulo">CONOCE A LOS GIGANTES DEL PASADO</h1>
    <div class="carousel">
      <button class="carousel-button prev" @click="prevSlide">❮</button>
      <div class="carousel-track-container">
        <div class="carousel-track" :style="{ transform: `translateX(calc(-${currentIndex} * 100%))` }">
          <div
            class="carousel-slide"
            v-for="(dino, index) in dinosaurios"
            :key="dino.nombreCientifico"
            :class="{ 'is-center': index === currentIndex, 'is-blurred': index !== currentIndex }"
          >
            <DinoCard :dino="dino" />
          </div>
        </div>
      </div>
      <button class="carousel-button next" @click="nextSlide">❯</button>
    </div>
  </div>
</template>

<script>
import DinoCard from "@/components/DinoCard.vue";
import RandomDinoInfo from "@/components/RandomDinoInfo.vue";
import dinosaurios from "@/data/dinosaurios.json";

export default {
  components: { DinoCard, RandomDinoInfo },
  data() {
    return {
      dinosaurios,
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.dinosaurios.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.dinosaurios.length) % this.dinosaurios.length;
    }
  },
};
</script>

<style scoped>
/* Estilo principal */
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

/* Sección de Introducción */
.bienvenida {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: rgba(224, 221, 192, 0.897);

}

.foto-intro {
  width: 300px;
  height: 300px;
  object-fit: cover;
  clip-path: polygon(10% 0%, 90% 0%, 100% 80%, 50% 100%, 0% 80%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding-right: 5%;
}

.intro {
  padding: 40px 20px;
  text-align: center;
  color: #2e4d3d;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 24px;
}

.intro h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.intro p {
  font-size: 20px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: black;
}

/* Sección principal */
.dino-info {
  background-color: #2e4d3d;
  color: #f0ead2;
  padding: 20px;
  font-family: "Raleway", sans-serif;
  text-align: center;
  animation: fadeIn 1s ease-in;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

}

/* linea del tiempo
 */
 .linea-titulo{
  padding-top: 15px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color:#f0ead2;
  text-shadow:rgb(0, 2, 1) 5px 5px 6px;

 }
 .timeline {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 50px 50px;

  padding: 20px 0;
  position: relative;
  border-top: 2px solid #ccc; /* Línea horizontal */
}

.timeline-item {
  text-align: center;
  flex: 1; /* Distribuir los elementos equitativamente */
  position: relative;
}

.timeline-dot {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3b250c;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.932);
  margin: 0 auto;
  top: -10px;
}

.timeline-icon {
  color: #f9d342;
  font-size: 24px;
}

h3 {
  text-shadow:rgb(0, 2, 1) 5px 5px 6px;

  margin-top: 20px;
  font-size: 1.2rem;
  color: #eefff1; /* Color del texto */
}

h4{
  color: rgba(243, 201, 86, 0.89);

}
p {
  font-size: 18px;
  color: #ffffff;
  margin-top: 5px;
}

.card-titulo{
  padding-top: 15px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color:#f0ead2;
  text-shadow:rgb(0, 2, 1) 5px 5px 6px;

 }


/* Carrusel */
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-track-container {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.carousel-slide.is-center {
  transform: scale(1);
  opacity: 1;
}

.carousel-slide.is-blurred {
  filter: blur(3px);
  opacity: 0.5;
}

/* Flechas */
.carousel-button {
  background-color: rgb(71, 53, 41);
  color: white;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
}

.carousel-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

/* Animación */
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

/* Responsivo */
@media (max-width: 768px) {
  .intro h1 {
    font-size: 1.8rem;
  }

  .intro p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .dino-info {
    padding: 10px;
  }

  .intro h1 {
    font-size: 1.5rem;
  }

  .intro p {
    font-size: 0.9rem;
  }
}
</style>
