<script setup>
import TurnStatus from "@/components/TurnStatus.vue";
import RestartButton from "@/components/RestartButton.vue";
import Logo from "@/components/icons/Logo.vue";
import TicTacToeGrid from "@/components/TicTacToeGrid.vue";
import TimesRecordPanel from "@/components/TimesRecordPanel.vue";
import { ref } from "vue";

const { gameMode, playerOneSymbol, gameStatus } = defineProps({
  gameMode: String,
  playerOneSymbol: String,
  gameStatus: {
    xWins: Number,
    oWins: Number,
    ties: Number,
  },
});

const emit = defineEmits({
  winnerPassed: Function,
});

const currentPlayer = ref("X");

const handleWinnerAnnounced = (data) => {
  emit("winnerPassed", data);
};

const handleCurrentPlayer = (player) => {
  currentPlayer.value = player;
};
</script>
<template>
  <div class="m-auto flex flex-col items-center gap-5">
    <div class="grid w-[460px] grid-cols-3 items-center gap-5">
      <Logo />
      <TurnStatus :currentPlayer="currentPlayer" />
      <RestartButton class="justify-self-end" />
    </div>
    <TicTacToeGrid
      @onWinnerAnnounced="handleWinnerAnnounced"
      @onCurrentPlayer="handleCurrentPlayer"
    />
    <TimesRecordPanel
      :gameMode="gameMode"
      :gameStatus="gameStatus"
      :playerOneSymbol="playerOneSymbol"
    />
  </div>
</template>
