<script setup>
import Game from "./pages/Game.vue";
import NewGameMenu from "./pages/NewGameMenu.vue";

import { ref } from "vue";

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
};

const handleGameReset = () => {
  currentPage.value = "GameMenu";
};
</script>

<template>
  <main
    class="container h-screen"
  >
    <NewGameMenu
      v-if="currentPage === 'GameMenu'"
      @startGame="handleStartGame"
    />
    <Game
      v-else
      v-model:gameMode="gameMode"
      :playerOneSymbol="playerRepresentation"
      @gameReset="handleGameReset"
    />
  </main>
</template>
