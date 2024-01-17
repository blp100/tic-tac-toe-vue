<script setup>
import TicTacToeButton from './TicTacToeButton.vue';
</script>
<template>
  <div class="grid grid-cols-3 gap-5">
    <TicTacToeButton v-for="items in 9" />
  </div>
</template>
