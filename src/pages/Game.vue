<script setup>
import TurnStatus from "@/components/TurnStatus.vue";
import RestartButton from "@/components/RestartButton.vue";
import Logo from "@/components/icons/Logo.vue";
import TicTacToeGrid from "@/components/TicTacToeGrid.vue";
import TimesRecordPanel from "@/components/TimesRecordPanel.vue";

const emit = defineEmits({
  winnerPassed: Function,
});

const handleWinnerAnnounced = (data) => {
  emit("winnerPassed", data);
};
</script>
<template>
  <div class="m-auto flex flex-col items-center gap-5">
    <div class="grid w-[460px] grid-cols-3 items-center gap-5">
      <Logo />
      <TurnStatus />
      <RestartButton class="justify-self-end" />
    </div>
    <TicTacToeGrid @winnerAnnounced="handleWinnerAnnounced" />
    <TimesRecordPanel />
  </div>
</template>
