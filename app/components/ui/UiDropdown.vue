<template>
  <button class="dropdown-button">
    {{ title }}
    <span>
      <img src="~/assets/icons/arrow-down.svg" alt="arrow-down"/>
    </span>
  </button>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.dropdown-button {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  color: var(--color-dark);
}
</style>