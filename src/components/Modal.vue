<script setup>
import IconO from "./icons/IconO.vue";
import IconX from "./icons/IconX.vue";

const { isOpen } = defineExpose(["isOpen"]);
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
        <h4 class="text-silver">OH NO, YOU LOST…</h4>
        <div class="mt-4 flex gap-6">
          <IconO class="fill-light-yellow" />
          <IconX class="hidden fill-light-blue" />
          <h1 class="text-light-yellow">TAKES THE ROUND</h1>
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
