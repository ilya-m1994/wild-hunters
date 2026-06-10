<template>
  <Transition name="spinner">
    <div v-if="spinnerStore.isLoading" class="spinner-overlay">
      <div class="spinner" />
    </div>
  </Transition>
</template>

<script setup>
import { useSpinnerStore } from "~/store/spinner.js";

const spinnerStore = useSpinnerStore()
</script>

<style scoped>
.spinner-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
}

.spinner {
  width: 44px;
  height: 44px;
  border: 3px solid var(--color-primary, #ccc);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Плавное появление/скрытие */
.spinner-enter-active,
.spinner-leave-active {
  transition: opacity 0.2s ease;
}
.spinner-enter-from,
.spinner-leave-to {
  opacity: 0;
}
</style>