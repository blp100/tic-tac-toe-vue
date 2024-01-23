<script setup>
import IconO from "./icons/IconO.vue";
import IconX from "./icons/IconX.vue";

const { currentPlayer } = defineProps({ currentPlayer: String });
</script>
<template>
  <div
    class="flex w-[140px] items-center gap-3 rounded-[10px] bg-semi-dark-navy px-[30px] pb-[19px] pt-[13px] shadow-[0px_-4px_0px_0px_#10212A_inset]"
  >
    <IconO v-if="currentPlayer === 'O'" class="h-5 w-5 fill-silver" />
    <IconX v-else class="h-5 w-5 fill-silver" />
    <h4 class="text-silver">TURN</h4>
  </div>
</template>
