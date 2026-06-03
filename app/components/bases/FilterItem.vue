<template>
  <div class="item-wrapper">
    <div class="item-title-wrapper" @click="toggleOpen()">
      <div class="item-title">{{ title }}</div>
      <img class="item-icon" v-if="itemIsOpened" src="~/assets/icons/arrow-up.svg" alt="arrow-up-icon">
      <img v-else src="~/assets/icons/arrow-down.svg" alt="arrow-down-icon">
    </div>
    <div v-if="itemIsOpened">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const itemIsOpened = ref(false);
defineProps({
  title: {
    type: String,
    required: true,
  }
})
const toggleOpen = () => {
  itemIsOpened.value = !itemIsOpened.value
}
</script>

<style scoped>
.item-wrapper {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-grey);
  padding: 15px 20px 12px 20px;
}
.item-title-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.item-title {
  font-weight: 600;
  font-size: 22px;
}
.item-icon {
  cursor: pointer;
}
</style>