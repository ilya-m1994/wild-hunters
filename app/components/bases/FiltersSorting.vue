<template>
  <div class="sorting-filter">
    <div class="sorting-placeholder">
      Рекомендуемые
    </div>
    <img class="item-icon" v-if="itemIsOpened" src="~/assets/icons/arrow-up.svg" alt="arrow-up-icon" @click="toggleOpen()">
    <img v-else src="~/assets/icons/arrow-down.svg" alt="arrow-down-icon" @click="toggleOpen()">
  </div>
</template>

<script setup>

</script>

<style scoped>
.sorting-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-grey);
  padding: 12px 16px;
}
</style>