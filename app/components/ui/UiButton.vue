<template>
  <button
      :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'filled',
  },
})

const buttonClasses = computed(() => ({
  'ui-button-filled': props.variant === 'filled',
  'ui-button-text': props.variant === 'text',
}))
</script>

<style scoped>
.ui-button-filled {
  background: var(--color-accent);

  color: var(--color-white);

  border-radius: 20px;

  font-weight: 500;
}

.ui-button-text {
  color: var(--color-accent);

  font-weight: 500;
}
</style>