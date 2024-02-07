<script setup>
import IconO from "./icons/IconO.vue";
import IconX from "./icons/IconX.vue";

const { isOpen, winner, playerRepresentation, gameMode } = defineProps({
  isOpen: Boolean,
  winner: String,
  playerRepresentation: String,
  gameMode: String,
  gemeRestart: Boolean,
});

const msg = {
  tie: "ROUND TIED",
  X: "TAKES THE ROUND",
  O: "TAKES THE ROUND",
  restart: "RESTART GAME?",
};
const title = {
  vsComputer: {
    win: "YOU WON!",
    lose: "OH NO, YOU LOST…",
  },
  vsPlayer: {
    p1win: "PLAYER 1 WINS!",
    p1lose: "PLAYER 2 WINS!",
  },
};

const whoIsWinner =
  gameMode === "vsComputer"
    ? winner === playerRepresentation
      ? "win"
      : "lose"
    : winner === playerRepresentation
      ? "p1win"
      : "p1lose";

const systemMsg = winner === "" ? msg["restart"] : msg[winner];
const systemTitle = title[gameMode][whoIsWinner];
</script>

<template>
  <div class="flex justify-center">
    <div
      v-show="isOpen"
      class="absolute inset-0 flex items-center justify-center bg-black/50"
    >
      <div
        class="mx-auto flex w-screen flex-col items-center bg-semi-dark-navy py-[45px]"
      >
        <h4 class="text-silver">{{ systemTitle }}</h4>
        <div class="mt-4 flex gap-6">
          <IconO v-show="winner === 'O'" class="fill-light-yellow" />
          <IconX v-show="winner === 'X'" class="fill-light-blue" />
          <h1
            :class="{
              'text-light-yellow': winner === 'O',
              'text-light-blue': winner === 'X',
              'text-silver': winner !== 'O' && winner !== 'X',
            }"
          >
            {{ systemMsg }}
          </h1>
          <!-- Try change v-show to v-if & v-else -->
        </div>
        <div class="mt-6 flex gap-4">
          <button
            class="mx-auto w-[76px] rounded-[10px] bg-silver pb-[17px] pt-[15px] shadow-[0px_-4px_0px_0px_#6B8997_inset]"
          >
            <h4 class="text-center text-dark-navy">QUIT</h4>
          </button>
          <button
            class="mx-auto w-[146px] rounded-[10px] bg-light-yellow pb-[17px] pt-[15px] shadow-[0px_-4px_0px_0px_#CC8B13_inset]"
          >
            <h4 class="text-center text-dark-navy">NEXT ROUND</h4>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
