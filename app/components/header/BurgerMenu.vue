<template>
  <button
      class="menu-btn"
      @click="$emit('toggle')"
  >
    <img
        v-if="opened"
        src="~/assets/icons/close-icon.svg"
        alt="close"
    >
    <img
        v-else
        src="~/assets/icons/burger.svg"
        alt="menu"
    >
  </button>
</template>

<script setup>
defineProps({
  opened: Boolean
})

defineEmits(['toggle'])
</script>

<style scoped>
.menu-btn {
  border: none;
  background: transparent;
  z-index: 300;
  position: relative;
}

@media (min-width: 768px) {
  .menu-btn {
    display: none;
  }
}
</style>