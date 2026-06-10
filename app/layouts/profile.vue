<template>
  <div style="background: var(--color-white)">
    <AppSpinner />
    <main>
      <slot />
    </main>
  </div>
</template>
<script setup>
import AppSpinner from '~/components/ui/AppSpinner.vue'
</script>

<style>

</style>