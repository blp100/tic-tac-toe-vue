<script setup>
import { ref, onMounted, watchEffect, computed, watch } from "vue";
import TicTacToeButton from "./TicTacToeButton.vue";

const props = defineProps({
  gameRestart: Boolean,
  gameMode: String,
  playerOneSymbol: String,
});
const { gameRestart, gameMode, playerOneSymbol } = props;

const emit = defineEmits({
  onWinnerAnnounced: Function,
  onCurrentPlayer: Function,
  "update:gameRestart": Function,
});

// Initial values for each button
const gridValues = ref(Array(9).fill(""));
const currentPlayer = ref("X");
const isGameOvered = ref(false);

watch(
  () => props.gameRestart,
  (newValue) => {
    console.log("Watch triggered. gameRestart:", newValue);
    if (newValue) {
      reset();
      // Reset checkRestart to false
      emit("update:gameRestart", false);
    }
  },
);

onMounted(() => {
  if (gameMode === "vsComputer" && playerOneSymbol === "O") {
    generateComputerMove();
  }
});

const reset = () => {
  gridValues.value = Array(9).fill("");
  currentPlayer.value = "X";
  isGameOvered.value = false;
  if (gameMode === "vsComputer" && playerOneSymbol === "O") {
    generateComputerMove();
  }
};

const checkWinner = () => {
  // Check tie
  if (gridValues.value.every((value) => value !== "")) {
    announceGameResult("tie");
  }
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      gridValues.value[i * 3] !== "" &&
      gridValues.value[i * 3] === gridValues.value[i * 3 + 1] &&
      gridValues.value[i * 3] === gridValues.value[i * 3 + 2]
    ) {
      announceGameResult(gridValues.value[i * 3]);
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      gridValues.value[i] !== "" &&
      gridValues.value[i] === gridValues.value[i + 3] &&
      gridValues.value[i] === gridValues.value[i + 6]
    ) {
      announceGameResult(gridValues.value[i]);
    }
  }

  //Check diagonals
  if (
    gridValues.value[0] !== "" &&
    gridValues.value[0] === gridValues.value[4] &&
    gridValues.value[0] === gridValues.value[8]
  ) {
    announceGameResult(gridValues.value[0]);
  }
  if (
    gridValues.value[2] !== "" &&
    gridValues.value[2] === gridValues.value[4] &&
    gridValues.value[2] === gridValues.value[6]
  ) {
    announceGameResult(gridValues.value[2]);
  }
};

const announceGameResult = (winner) => {
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
  if (gameMode === "vsComputer" && !isGameOvered.value) {
    generateComputerMove();
  }
  emitCurrentPlayer(); 
};

// Computer Move. at now, It's set as random step
const generateComputerMove = () => {
  //Random Step
  let randomIndex = Math.floor(Math.random() * 9);
  while (gridValues.value[randomIndex] !== "") {
    randomIndex = Math.floor(Math.random() * 9);
  }
  gridValues.value[randomIndex] = currentPlayer.value;
  checkWinner();
  currentPlayer.value = currentPlayer.value === "X" ? "O" : "X";
};
</script>

<template>
  <div class="mt-11 grid grid-cols-3 gap-5 md:mt-0">
    <TicTacToeButton
      v-for="(value, index) in gridValues"
      :key="index"
      :value="value"
      :disabled="isGameOvered || value !== ''"
      :currentPlayer="currentPlayer"
      @buttonClick="handleButtonClick(index)"
    />
  </div>
</template>
