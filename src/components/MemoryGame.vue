<template>
  <div class="memory-game">
    <h2>Juego de Memoria: Dinosaurios</h2>
    <div class="game-board">
      <div
        class="card"
        v-for="(card, index) in shuffledCards"
        :key="index"
        @click="flipCard(card)"
        :class="{'flipped': card.flipped || card.matched}"
      >
        <div class="card-inner">
          <div class="card-front">
            <img v-if="card.flipped || card.matched" :src="card.image" alt="Dinosaurio" />
          </div>
          <div class="card-back">
            <div class="card-back-content">?</div>
          </div>
        </div>
      </div>
    </div>
    <p v-if="gameOver" class="game-over">¡Juego Terminado! Has ganado.</p>
  </div>
</template>

<script>
import dino1 from '@/assets/dino1.png';
import dino2 from '@/assets/dino2.png';
import dino3 from '@/assets/dino3.png';

export default {
  data() {
    return {
      cards: [
        { image: dino1, flipped: false, matched: false },
        { image: dino1, flipped: false, matched: false },
        { image: dino2, flipped: false, matched: false },
        { image: dino2, flipped: false, matched: false },
        { image: dino3, flipped: false, matched: false },
        { image: dino3, flipped: false, matched: false },
      ],
      flippedCards: [],
      gameOver: false,
    };
  },
  computed: {
    shuffledCards() {
      return this.shuffleCards([...this.cards]);
    }
  },
  methods: {
    shuffleCards(cards) {
      return cards.sort(() => Math.random() - 0.5);
    },
    flipCard(card) {
      if (this.flippedCards.length === 2 || card.flipped || card.matched) return;

      card.flipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        setTimeout(this.checkMatch, 1000);
      }
    },
    checkMatch() {
      const [card1, card2] = this.flippedCards;

      if (card1.image === card2.image) {
        card1.matched = true;
        card2.matched = true;
      } else {
        card1.flipped = false;
        card2.flipped = false;
      }

      this.flippedCards = [];

      if (this.cards.every(card => card.matched)) {
        this.gameOver = true;
      }
    }
  }
};
</script>

<style scoped>
.memory-game {
  background-color: #2e4d3d;
  color: #f0ead2;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  font-family: 'Raleway', sans-serif;

  height: 100vh; /* Ocupa toda la altura de la ventana */
  display: flex;
  justify-content: center; /* Centra el contenido */
  align-items: center; /* Centra el contenido en el eje vertical */
  flex-direction: column;
}

h2 {
  font-size: 2.5rem;
  color: #d4c9a1;
  margin-bottom: 30px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas */
  grid-template-rows: repeat(2, 1fr);    /* 2 filas */
  gap: 10px; /* Espaciado reducido entre las cartas */
  margin-top: 20px;
  justify-items: center;
  width: 60%; /* Limita el tamaño de la caja de cartas */
  max-width: 600px; /* Establece un ancho máximo */
}

.card {
  width: 150px;
  height: 150px;
  background-color: #3c6652;
  color: #f0ead2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s, box-shadow 0.3s ease, background-color 0.4s;
  overflow: hidden;
}

/* Animación de hover similar a los botones de juegos */
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  visibility: hidden;
  transition: visibility 0.5s ease;
}

.card.flipped img {
  visibility: visible;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

.card-front,
.card-back {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.card-front {
  background-color: #3c6652;
  z-index: 1;
}

.card-back {
  background-color: #2e4d3d;
  transform: rotateY(180deg);
  z-index: 0;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-back-content {
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
}

/* Efecto de transición en el hover (luz en el centro) */
.card:before {
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

.card:hover:before {
  top: -70%;
  left: -70%;
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(45deg);
  width: 250%;
  height: 250%;
}

.game-over {
  margin-top: 20px;
  font-size: 1.5rem;
  color: #d4c9a1;
  font-weight: 500;
  transition: opacity 0.5s ease;
}
</style>
