<script setup>
import IconO from "./icons/IconO.vue";
import IconX from "./icons/IconX.vue";
</script>

<template>
  <div class="m-auto flex flex-col items-center gap-10">
    <div class="flex gap-2">
      <IconX class="h-8 w-8 fill-light-blue" />
      <IconO class="h-8 w-8 fill-light-yellow" />
    </div>
    <div
      class="rounded-[15px] bg-semi-dark-navy p-6 shadow-[0px_-8px_0px_0px_#10212A_inset]"
    >
      <h4 class="text-center text-silver">PICK PLAYER 1’S MARK</h4>
      <div class="mt-6 flex rounded-[10px] bg-dark-navy p-2">
        <div
          class="flex h-[54px] w-[198px] justify-center rounded-[10px] bg-silver/5"
        >
          <IconX class="m-auto h-8 w-8 fill-silver" />
        </div>
        <div
          class="flex h-[54px] w-[198px] justify-center rounded-[10px] bg-silver"
        >
          <IconO class="m-auto h-8 w-8 fill-dark-navy" />
        </div>
      </div>
      <p class="mb-1.5 mt-[17px] text-center text-silver/50">
        REMEMBER : X GOES FIRST
      </p>
    </div>
    <div class="flex flex-col gap-5">
      <button
        class="mx-0 w-[460px] rounded-[15px] bg-light-yellow pb-[25px] pt-[17px] shadow-[0px_-8px_0px_0px_#CC8B13_inset]"
      >
        <h3 class="text-center text-dark-navy">NEW GAME (VS CPU)</h3>
      </button>
      <button
        class="mx-0 w-[460px] rounded-[15px] bg-light-blue pb-[25px] pt-[17px] shadow-[0px_-8px_0px_0px_#118C87_inset]"
      >
        <h3 class="text-center text-dark-navy">NEW GAME (VS PLAYER)</h3>
      </button>
    </div>
  </div>
</template>
