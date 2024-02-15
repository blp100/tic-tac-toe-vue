<script setup>
import IconO from "./icons/IconO.vue";
import IconX from "./icons/IconX.vue";
import IconOOutline from "./icons/IconOOutline.vue";
import IconXOutline from "./icons/IconXOutline.vue";

const { value, disabled } = defineProps({
  value: String,
  disabled: Boolean,
  currentPlayer: String,
});
const emit = defineEmits({ buttonClick: Function });

const handleClicked = () => {
  if (!disabled) {
    // Emit a custom event to notify the parent about the button click
    emit("buttonClick");
  }
};
</script>
<template>
  <button
    class="group rounded-[15px] bg-semi-dark-navy px-7 pb-8 pt-6 shadow-[0px_-8px_0px_0px_#10212A_inset] md:p-[38px]"
    :disabled="disabled"
    @click="handleClicked"
  >
    <!-- Add animation when display markers, Group-disabled didn't work -->
    <IconO
      v-show="value === 'O'"
      class="mx-auto h-10 w-10 fill-light-yellow opacity-100 md:h-16 md:w-16"
    />
    <IconX
      v-show="value === 'X'"
      class="mx-auto h-10 w-10 fill-light-blue opacity-100 md:h-16 md:w-16"
    />
    <IconOOutline
      v-show="currentPlayer === 'O' && !disabled"
      class="mx-auto h-10 w-10 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100 md:h-[66px] md:w-[66px]"
    />
    <IconXOutline
      v-show="currentPlayer === 'X' && !disabled"
      class="mx-auto h-10 w-10 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100 md:h-16 md:w-16"
    />
  </button>
</template>
