<script setup>
const { gameMode, playerOneSymbol, gameStatus } = defineProps({
  gameMode: String,
  playerOneSymbol: String,
  gameStatus: {
    xWins: Number,
    oWins: Number,
    ties: Number,
  },
});

let xPlayer,
  oPlayer = "";

if (gameMode === "vsComputer") {
  if (playerOneSymbol === "X") {
    xPlayer = "YOU";
    oPlayer = "CPU";
  } else if (playerOneSymbol === "O") {
    xPlayer = "CPU";
    oPlayer = "YOU";
  }
} else if (gameMode === "vsPlayer") {
  if (playerOneSymbol === "X") {
    xPlayer = "P1";
    oPlayer = "P2";
  } else if (playerOneSymbol === "O") {
    xPlayer = "P2";
    oPlayer = "P1";
  }
}
</script>
<template>
  <div class="flex w-full gap-5 text-center">
    <div class="flex-1 rounded-[15px] bg-light-blue pb-[13px] pt-[11px]">
      <p>X ({{ xPlayer }})</p>
      <h2>{{ gameStatus.xWins }}</h2>
    </div>
    <div class="flex-1 rounded-[15px] bg-silver pb-[13px] pt-[11px]">
      <p>TIES</p>
      <h2>{{ gameStatus.ties }}</h2>
    </div>
    <div class="flex-1 rounded-[15px] bg-light-yellow pb-[13px] pt-[11px]">
      <p>O ({{ oPlayer }})</p>
      <h2>{{ gameStatus.oWins }}</h2>
    </div>
  </div>
</template>
