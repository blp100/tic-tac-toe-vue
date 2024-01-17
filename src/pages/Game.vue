<script setup>
import TurnStatus from "@/components/TurnStatus.vue";
import RestartButton from "@/components/RestartButton.vue";
import Logo from "@/components/icons/Logo.vue";
import TicTacToeGrid from "@/components/TicTacToeGrid.vue";
import TimesRecordPanel from "@/components/TimesRecordPanel.vue";
</script>
<template>
  <div class="m-auto flex flex-col items-center gap-5">
    <div class="grid grid-cols-3 w-[460px] items-center gap-5">
      <Logo />
      <TurnStatus />
      <RestartButton class="justify-self-end" />
    </div>
    <TicTacToeGrid />
    <TimesRecordPanel />
  </div>
</template>
