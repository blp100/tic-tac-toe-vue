<script setup>
import { ref, onMounted, watchEffect, computed, watch } from "vue";
import TicTacToeButton from "./TicTacToeButton.vue";

const props = defineProps({
  shouldRestart: Boolean,
});

const emit = defineEmits({
  onWinnerAnnounced: Function,
  onCurrentPlayer: Function,
  "update:shouldRestart": Function,
});

// Initial values for each button
const gridValues = ref(Array(9).fill(""));
const currentPlayer = ref("X");
const isGameOvered = ref(false);
const couldRestart = computed(() => shouldRestart);
console.log(couldRestart);

watch(
  () => props.shouldRestart,
  (newValue) => {
    console.log("Watch triggered. shouldRestart:", newValue);
    if (newValue) {
      restart();
      // Reset shouldRestart to false
      emit("update:shouldRestart", false);
    }
  },
);

const restart = () => {
  gridValues.value = Array(9).fill("");
  currentPlayer.value = "X";
};

const checkWinner = () => {
  // Check tie
  if (gridValues.value.every((value) => value !== "")) {
    announceWinner("tie");
  }
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
      :currentPlayer="currentPlayer"
      @buttonClick="handleButtonClick(index)"
    />
  </div>
</template>
