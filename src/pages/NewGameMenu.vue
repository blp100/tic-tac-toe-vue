<script setup>
import IconX from "@/components/icons/IconX.vue";
import Logo from "@/components/icons/Logo.vue";
import IconO from "@/components/icons/IconO.vue";
import { ref } from "vue";

const playerRepresentation = ref("X");
const toggleRepresentation = ref("X");

const emit = defineEmits({
  startGame: Function,
});

const startGameWithComputer = () => {
  playerRepresentation.value = toggleRepresentation.value;

  emit("startGame", playerRepresentation.value, "vsComputer");
};

const startGameWithPlayer = () => {
  playerRepresentation.value = toggleRepresentation.value;

  emit("startGame", playerRepresentation.value, "vsPlayer");
};
</script>

<template>
  <div class="mx-auto flex h-screen max-w-[460px] justify-center p-6 md:p-0">
    <div class="m-auto flex w-full flex-col items-center gap-10">
      <Logo />
      <div
        class="w-full rounded-[15px] bg-semi-dark-navy px-6 pb-[30px] pt-6 shadow-[0px_-8px_0px_0px_#10212A_inset]"
      >
        <h4 class="text-heading-xs text-center text-silver">
          PICK PLAYER 1’S MARK
        </h4>
        <div
          class="relative mt-6 flex w-full rounded-[10px] bg-dark-navy px-2 py-[9px] transition-all ease-out"
        >
          <!-- Tansision not working here, fix it later -->
          <Transition
            enter-active-class="duration-300 ease-out"
            enter-from-class="transform scale-95 opacity-95"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="transform scale-95 opacity-95"
            leave-to-class="transform scale-100 opacity-100"
          >
            <div
              class="absolute h-[54px] w-[calc(50%-8px)] transform rounded-[10px] bg-silver duration-300"
              :class="{ 'translate-x-full': toggleRepresentation === 'O' }"
            />
          </Transition>
          <button
            @click="
              () => {
                toggleRepresentation = 'X';
              }
            "
            class="flex h-[54px] w-1/2 justify-center rounded-[10px] hover:bg-silver/5"
          >
            <IconX
              class="z-10 m-auto h-8 w-8 duration-500"
              :class="{
                'fill-dark-navy': toggleRepresentation === 'X',
                'fill-silver': toggleRepresentation === 'O',
              }"
            />
          </button>
          <button
            @click="
              () => {
                toggleRepresentation = 'O';
              }
            "
            class="flex h-[54px] w-1/2 justify-center rounded-[10px] hover:bg-silver/5"
          >
            <IconO
              class="z-10 m-auto h-8 w-8 duration-500"
              :class="{
                'fill-dark-navy': toggleRepresentation === 'O',
                'fill-silver': toggleRepresentation === 'X',
              }"
            />
          </button>
        </div>
        <p class="mb-1.5 mt-[17px] text-center text-silver/50">
          REMEMBER : X GOES FIRST
        </p>
      </div>
      <div class="flex w-full flex-col gap-5">
        <button
          class="mx-0 w-full rounded-[15px] bg-light-yellow pb-[25px] pt-[17px] shadow-[0px_-8px_0px_0px_#CC8B13_inset] hover:bg-light-yellow-hover"
          @click="startGameWithComputer"
        >
          <h3 class="text-heading-s text-center text-dark-navy">
            NEW GAME (VS CPU)
          </h3>
        </button>
        <button
          class="mx-0 w-full rounded-[15px] bg-light-blue pb-[25px] pt-[17px] shadow-[0px_-8px_0px_0px_#118C87_inset] hover:bg-light-blue-hover"
          @click="startGameWithPlayer"
        >
          <h3 class="text-heading-s text-center text-dark-navy">
            NEW GAME (VS PLAYER)
          </h3>
        </button>
      </div>
    </div>
  </div>
</template>
