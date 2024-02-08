<script setup>
import { toRefs, watch } from "vue";
import IconO from "./icons/IconO.vue";
import IconX from "./icons/IconX.vue";

const props = defineProps({
  isOpen: Boolean,
  winner: String,
  playerRepresentation: String,
  gameMode: String,
  checkRestart: Boolean,
  isGameReset: Boolean,
});

const {
  isOpen,
  winner,
  playerRepresentation,
  gameMode,
  checkRestart,
  isGameReset,
} = props;

const emit = defineEmits({
  "update:isOpen": Function,
  "update:checkRestart": Function,
  "update:gameRestart": Function,
  "update:isGameReset": Function,
  nextRound: Function,
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

const buttonTxt = {
  confirm: {
    restart: "YES, RESTART",
    continue: "NEXT ROUND",
  },
  cancel: {
    restart: "NO, CANCEL",
    continue: "QUIT",
  },
};

const isComputerMode = gameMode === "vsComputer";
const isPlayerWinner = winner === playerRepresentation;
const whoIsWinner = isComputerMode
  ? isPlayerWinner
    ? "win"
    : "lose"
  : isPlayerWinner
    ? "p1win"
    : "p1lose";

const systemMsg = winner === "" ? msg.restart : msg[winner];
const systemTitle = winner !== "" ? title[gameMode][whoIsWinner] : "";

const handleCancelBtn = (event) => {
  // Cancel Restart
  if (checkRestart) {
    emit("update:isOpen", false);
    emit("update:checkRestart", false);
    // Quit game and clear game status
  } else {
    emit("update:isOpen", false);
    emit("update:isGameReset", true);
  }
};
const handleConfirmBtn = (event) => {
  // Restart the game, and keep game status
  if (checkRestart) {
    emit("update:isOpen", false);
    emit("update:checkRestart", false);
    emit("update:gameRestart", true);
    // Next round, update game status
  } else {
    emit("update:isOpen", false);
    emit("nextRound");
  }
};
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
            class="mx-auto rounded-[10px] bg-silver pb-[17px] pl-[17px] pr-4 pt-[15px] shadow-[0px_-4px_0px_0px_#6B8997_inset]"
            @click="handleCancelBtn"
          >
            <h4 class="text-center text-dark-navy">
              {{
                checkRestart
                  ? buttonTxt.cancel.restart
                  : buttonTxt.cancel.continue
              }}
            </h4>
          </button>
          <button
            class="mx-auto rounded-[10px] bg-light-yellow pb-[17px] pl-[17px] pr-4 pt-[15px] shadow-[0px_-4px_0px_0px_#CC8B13_inset]"
            @click="handleConfirmBtn"
          >
            <h4 class="text-center text-dark-navy">
              {{
                checkRestart
                  ? buttonTxt.confirm.restart
                  : buttonTxt.confirm.continue
              }}
            </h4>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
