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
    class="group h-[140px] w-[140px] rounded-[15px] bg-semi-dark-navy shadow-[0px_-8px_0px_0px_#10212A_inset]"
    :disabled="disabled"
    @click="handleClicked"
  >
    <!-- TODO: Add animation when display markers -->
    <IconO v-show="value === 'O'" class="mx-auto fill-light-yellow opacity-100" />
    <IconX v-show="value === 'X'" class="mx-auto fill-light-blue opacity-100" />
    <IconOOutline
      v-show="currentPlayer === 'O' && !disabled"
      class="mx-auto opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"
    />
    <IconXOutline
      v-show="currentPlayer === 'X' && !disabled"
      class="mx-auto opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100"
    />
  </button>
</template>
