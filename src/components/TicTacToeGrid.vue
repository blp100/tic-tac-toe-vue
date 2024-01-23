<script setup>
import { ref } from "vue";
import TicTacToeButton from "./TicTacToeButton.vue";

const emit = defineEmits({
  onWinnerAnnounced: Function,
  onCurrentPlayer: Function,
});

// Initial values for each button
const gridValues = ref(Array(9).fill(""));
const currentPlayer = ref("X");
const isGameOvered = ref(false);

const checkWinner = () => {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      gridValues.value[i * 3] !== "" &&
      gridValues.value[i * 3] === gridValues.value[i * 3 + 1] &&
      gridValues.value[i * 3] === gridValues.value[i * 3 + 2]
    ) {
      announceWinner(gridValues.value[i * 3]);
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      gridValues.value[i] !== "" &&
      gridValues.value[i] === gridValues.value[i + 3] &&
      gridValues.value[i] === gridValues.value[i + 6]
    ) {
      announceWinner(gridValues.value[i]);
    }
  }

  //Check diagonals
  if (
    gridValues.value[0] !== "" &&
    gridValues.value[0] === gridValues.value[4] &&
    gridValues.value[0] === gridValues.value[8]
  ) {
    announceWinner(gridValues.value[0]);
  }
  if (
    gridValues.value[2] !== "" &&
    gridValues.value[2] === gridValues.value[4] &&
    gridValues.value[2] === gridValues.value[6]
  ) {
    announceWinner(gridValues.value[2]);
  }
};

const announceWinner = (winner) => {
  // Emit a custom event to notify the parent component about the winner
  emit("onWinnerAnnounced", winner);
  // Disable the board when a winner is announced
  isGameOvered.value = true;
};

const emitCurrentPlayer = () => {
  emit("onCurrentPlayer", currentPlayer.value);
};

// Handle the Tic Tac Toe button click in the parent component
const handleButtonClick = (index) => {
  
  gridValues.value[index] = currentPlayer.value;
  checkWinner();
  currentPlayer.value = currentPlayer.value === "X" ? "O" : "X";
  emitCurrentPlayer();
};
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <TicTacToeButton
      v-for="(value, index) in gridValues"
      :key="index"
      :value="value"
      :disabled="isGameOvered || value !== ''"
      @buttonClick="handleButtonClick(index)"
    />
  </div>
</template>
