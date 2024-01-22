<script setup>
import Modal from "./components/Modal.vue";
import Game from "./pages/Game.vue";
import NewGameMenu from "./pages/NewGameMenu.vue";

import { ref } from "vue";

const isOpen = ref(false);
const winner = ref("");

const handleWinnerPassed = (data) => {
  // Set the winner data for the modal
  winner.value = data;
  isOpen.value = true;
};
</script>

<template>
  <main class="container mx-auto flex h-screen items-center justify-center">
    <Game @winnerPassed="handleWinnerPassed" />
    <Modal :isOpen="isOpen" :winner="winner"/>
  </main>
</template>
