<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
          v-if="modelValue"
          class="modal-overlay"
          @click.self="close"
      >
        <div class="modal-content">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,.5);
}

.modal-content {
  background: var(--color-white);
  border-radius: 20px;
  max-width: 335px;
}

.modal-enter-active,
.modal-leave-active {
  transition: .25s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .modal-content {
    max-width: 488px;
  }
}

@media (min-width: 1440px) {
  .modal-content {
    max-width: 480px;
  }
}
</style>