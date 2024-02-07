<script setup>
import TurnStatus from "@/components/TurnStatus.vue";
import RestartButton from "@/components/RestartButton.vue";
import Logo from "@/components/icons/Logo.vue";
import TicTacToeGrid from "@/components/TicTacToeGrid.vue";
import TimesRecordPanel from "@/components/TimesRecordPanel.vue";
import GameOutcomeModal from "@/components/GameOutcomeModal.vue";
import { ref } from "vue";

const { gameMode, playerOneSymbol } = defineProps({
  gameMode: String,
  playerOneSymbol: String,
});

const isOpen = ref(false);
const winner = ref("");
const currentPlayer = ref("X");
const shouldRestart = ref(false);
const gameStatus = ref({
  xWins: 0,
  oWins: 0,
  ties: 0,
});


const handleCurrentPlayer = (player) => {
  currentPlayer.value = player;
};

const handleWinnerAnnounced = (data) => {
  // Set the winner data for the modal
  winner.value = data;
  isOpen.value = true;

  if (data === "X") {
    gameStatus.value.xWins += 1;
  } else if (data === "O") {
    gameStatus.value.oWins += 1;
  } else {
    gameStatus.value.ties += 1;
  }
};

const handleGameRestart = () => {
  shouldRestart.value = true;
  currentPlayer.value = "X";
  isOpen.value = true;
};

</script>
<template>
  <div class="m-auto flex flex-col items-center gap-5">
    <div class="grid w-[460px] grid-cols-3 items-center gap-5">
      <Logo />
      <TurnStatus :currentPlayer="currentPlayer" />
      <RestartButton
        @gameRestart="handleGameRestart"
        class="justify-self-end"
      />
    </div>
    <TicTacToeGrid
      v-model:shouldRestart="shouldRestart"
      @onWinnerAnnounced="handleWinnerAnnounced"
      @onCurrentPlayer="handleCurrentPlayer"
    />
    <TimesRecordPanel
      :gameMode="gameMode"
      :gameStatus="gameStatus"
      :playerOneSymbol="playerOneSymbol"
    />
  </div>
  <GameOutcomeModal
    v-if="isOpen"
    :isOpen="isOpen"
    :winner="winner"
    :playerRepresentation="playerOneSymbol"
    :gameMode="gameMode"
    :gemeRestart="shouldRestart"
  />
</template>
