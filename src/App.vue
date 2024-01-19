<script setup>
import Modal from './components/Modal.vue';
import Game from './pages/Game.vue';
import NewGameMenu from './pages/NewGameMenu.vue';
</script>

<template>
  <main class="container mx-auto flex justify-center items-center h-screen">
    <Game />
    <Modal />
  </main>
</template>
