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
    class="flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-silver shadow-[0px_-4px_0px_0px_#6B8997_inset] hover:bg-silver-hover"
  >
    <IconRestart class="h-5 w-5 fill-semi-dark-navy" />
  </button>
</template>
