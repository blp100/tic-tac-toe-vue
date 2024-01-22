<script setup>
import { ref } from "vue";
import IconO from "./icons/IconO.vue";
import IconX from "./icons/IconX.vue";

const { value, disabled } = defineProps({
  value: String,
  disabled: Boolean,
});
const emit = defineEmits({ buttonClick: Function });

const isCircle = ref(value == "O");
const isCross = ref(value == "X");

const handleClicked = () => {
  if (!disabled) {
    // Emit a custom event to notify the parent about the button click
    emit("buttonClick");
  }
};
console.log(value);
</script>
<template>
  <button
    class="h-[140px] w-[140px] rounded-[15px] bg-semi-dark-navy shadow-[0px_-8px_0px_0px_#10212A_inset]"
    :disabled="disabled"
    @click="handleClicked"
  >
    <IconO v-show="value === 'O'" class="mx-auto fill-light-yellow"/>
    <IconX v-show="value === 'X'" class="mx-auto fill-light-blue"/>
  </button>
</template>
