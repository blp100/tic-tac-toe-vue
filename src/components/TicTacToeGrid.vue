<script setup>
import { ref } from "vue";
import TicTacToeButton from "./TicTacToeButton.vue";

const emit = defineEmits({
  winnerAnnounced: Function,
});

// Initial values for each button
const gridValues = ref(Array(9).fill(""));
const currentPlayer = ref("X");
const isGameOvered = ref(false);

const checkWinner = () => {
  if (
    gridValues.value[0] === gridValues.value[1] &&
    gridValues.value[1] === gridValues.value[2] &&
    gridValues.value[0] !== ""
  ) {
    announceWinner(gridValues.value[0]);
  }
};

const announceWinner = (winner) => {
  // Emit a custom event to notify the parent component about the winner
  emit("winnerAnnounced", winner);
  // Disable the board when a winner is announced
  isGameOvered.value = true;
};

// Handle the Tic Tac Toe button click in the parent component
const handleButtonClick = (index) => {
  //BUTTON CLICK DIDN'T WORK!!!
  // Set 'X' for the clicked button as an example
  console.log(index);
  gridValues.value[index] = currentPlayer.value;
  currentPlayer.value = currentPlayer.value === "X" ? "O" : "X";

  checkWinner();
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
