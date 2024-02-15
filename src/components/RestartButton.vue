<script setup>
import IconRestart from "./icons/IconRestart.vue";

const emit = defineEmits({
  gameRestart: Function,
});

const handleButtonClick = () => {
  emit("gameRestart");
};
</script>
<template>
  <button
    @click="handleButtonClick"
    class="flex items-center justify-center rounded-[10px] bg-silver p-3 shadow-[0px_-4px_0px_0px_#6B8997_inset] hover:bg-silver-hover md:p-4"
  >
    <IconRestart class="h-4 w-4 fill-semi-dark-navy md:h-5 md:w-5" />
  </button>
</template>
