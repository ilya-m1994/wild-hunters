<template>
  <div>
    <div class="price-wrapper">
      <div class="price-from"> 0 руб.</div>
      <div class="price-to"> 10 000 руб.</div>
    </div>
    <input type="range">
  </div>
</template>

<script setup>
</script>

<style scoped>
.price-wrapper {
  display: flex;
  margin-bottom: 20px;
}
.price-from {
  border: 1px solid var(--color-grey);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  padding: 12px 0 12px 12px;
  width: 50%;
  margin-right: 4px;
}
.price-to {
  border: 1px solid var(--color-grey);
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 12px 0 12px 12px;
  width: 50%;
}
</style>