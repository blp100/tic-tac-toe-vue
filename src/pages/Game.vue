<script setup>
import TurnStatus from "@/components/TurnStatus.vue";
import RestartButton from "@/components/RestartButton.vue";
import Logo from "@/components/icons/Logo.vue";
import TicTacToeGrid from "@/components/TicTacToeGrid.vue";
import TimesRecordPanel from "@/components/TimesRecordPanel.vue";
import GameOutcomeModal from "@/components/GameOutcomeModal.vue";
import { ref, watch } from "vue";

const props = defineProps({
  gameMode: String,
  playerOneSymbol: String,
});
const { gameMode, playerOneSymbol } = props;

const emit = defineEmits({
  gameReset: Function,
});

const isOpen = ref(false);
const winner = ref("");
const currentPlayer = ref("X");
const checkRestart = ref(false);
const gameRestart = ref(false);
const gameStatus = ref({
  xWins: 0,
  oWins: 0,
  ties: 0,
});
const isGameReset = ref(false);

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
  checkRestart.value = true;
  currentPlayer.value = "X";
  isOpen.value = true;
};

const handleNextRound = () => {
  currentPlayer.value = "X";
  gameRestart.value = true;
  winner.value = "";
};

watch(gameRestart, (newValue) => {
  console.log(newValue);
});
watch(isGameReset, (newValue) => {
  console.log("isGameReset : ", newValue);
  if (newValue) {
    gameRestart.value = true;
    gameStatus.value = {
      xWins: 0,
      oWins: 0,
      ties: 0,
    };
    emit("gameReset");
  }
});
</script>
<template>
  <div class="mx-auto h-screen max-w-[460px] justify-center p-6 md:flex md:p-0">
    <div class="mx-auto flex w-full flex-col justify-center gap-5 md:my-auto">
      <div class="grid w-full grid-cols-3 items-center gap-5">
        <Logo />
        <TurnStatus :currentPlayer="currentPlayer" />
        <RestartButton
          @gameRestart="handleGameRestart"
          class="justify-self-end"
        />
      </div>
      <TicTacToeGrid
        v-model:gameRestart="gameRestart"
        :gameMode="gameMode"
        :playerOneSymbol="playerOneSymbol"
        @onWinnerAnnounced="handleWinnerAnnounced"
        @onCurrentPlayer="handleCurrentPlayer"
      />
      <TimesRecordPanel
        :gameMode="gameMode"
        :gameStatus="gameStatus"
        :playerOneSymbol="playerOneSymbol"
      />
    </div>
  </div>
  <GameOutcomeModal
    v-if="isOpen"
    v-model:isOpen="isOpen"
    :winner="winner"
    :playerRepresentation="playerOneSymbol"
    :gameMode="gameMode"
    v-model:checkRestart="checkRestart"
    v-model:gameRestart="gameRestart"
    v-model:isGameReset="isGameReset"
    @nextRound="handleNextRound"
  />
</template>
