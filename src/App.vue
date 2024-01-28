<script setup>
import Modal from "./components/Modal.vue";
import Game from "./pages/Game.vue";
import NewGameMenu from "./pages/NewGameMenu.vue";

import { ref } from "vue";

const isOpen = ref(false);
const winner = ref("");
const currentPage = ref("GameMenu");
const playerRepresentation = ref("");
const gameMode = ref("");

const handleStartGame = (selectedPlayer, mode) => {
  // Switch to the TicTacToeGame page when the game starts
  currentPage.value = "TicTacToeGame";

  // Setup Game Mode
  gameMode.value = mode;
  // Pass the selected player representation to the TicTacToeGame component
  playerRepresentation.value = selectedPlayer;

  console.log(gameMode.value, playerRepresentation.value)
};

const handleWinnerPassed = (data) => {
  // Set the winner data for the modal
  winner.value = data;
  isOpen.value = true;

  console.log(
    gameMode.value,
    winner.value,
    isOpen.value,
    playerRepresentation.value,
  );
};
</script>

<template>
  <main class="container mx-auto flex h-screen items-center justify-center">
    <NewGameMenu
      v-if="currentPage === 'GameMenu'"
      @startGame="handleStartGame"
    />
    <Game v-else @winnerPassed="handleWinnerPassed" />
    <Modal
      v-if="isOpen"
      :isOpen="isOpen"
      :winner="winner"
      :playerRepresentation="playerRepresentation"
      :gameMode="gameMode"
    />
  </main>
</template>
