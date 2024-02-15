<script setup>
import IconO from "./icons/IconO.vue";
import IconX from "./icons/IconX.vue";

const { currentPlayer } = defineProps({ currentPlayer: String });
</script>
<template>
  <div
    class="flex items-center gap-2 rounded-[10px] bg-semi-dark-navy px-[15px] pb-[13px] pt-[9px] shadow-[0px_-4px_0px_0px_#10212A_inset] md:gap-3 md:px-[30px] md:pb-[19px] md:pt-[13px]"
  >
    <IconO
      v-if="currentPlayer === 'O'"
      class="h-4 w-4 fill-silver md:h-5 md:w-5"
    />
    <IconX v-else class="h-4 w-4 fill-silver md:h-5 md:w-5" />
    <h4 class="text-body md:text-heading-xs font-bold text-silver">TURN</h4>
  </div>
</template>
