<template>
  <div class="select-container" :class="{ 'select-bg': optionsIsShown }">
    <div class="select-wrapper" @click="showOptions()">
      <div class="select-text">
        <div class="label">{{ label }}</div>
        <div class="placeholder">Взрослые: {{ modelValue || placeholder }}</div>
      </div>
      <span>
      <img v-if="optionsIsShown" src="~/assets/icons/arrow-up.svg" alt="arrow-up">
      <img v-else src="~/assets/icons/arrow-down.svg" alt="arrow-down">
    </span>
    </div>
    <div v-if="optionsIsShown" class="count-section">
      <div class="counter-title">Взрослые:</div>
      <div class="counter">
        <div class="counter-icon" @click="increaseGuestsCount()">+</div>
        <div>{{ guestsCount }}</div>
        <div class="counter-icon" @click="decreaseGuestsCount()">-</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  }
})

const emit = defineEmits(['update:modelValue'])
const modelValue = defineModel()
const optionsIsShown = ref(false)
const selectedOption = ref('')
const guestsCount = ref(1)

const showOptions = () => {
  optionsIsShown.value = !optionsIsShown.value;
}
const chooseOption = (option) => {
  modelValue.value = option
  optionsIsShown.value = false
}
const increaseGuestsCount = () => {
  guestsCount.value += 1
  modelValue.value = guestsCount.value
}
const decreaseGuestsCount = () => {
  if(guestsCount.value === 1) {
    return
  }
  guestsCount.value -= 1
  modelValue.value = guestsCount.value
}
</script>

<style scoped>
.select-container {
  position: relative;
  margin-bottom: 4px;
  width: 100%;
}
.select-bg {
  background: var(--color-white);
  border-radius: var(--border-radius);
}
.select-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-white);
  border-radius: var(--border-radius);
  padding: 16px;
}
.label {
  color: var(--color-grey);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 6px;
}
.placeholder {
  color: var(--color-dark);
  font-size: 18px;
  font-weight: 500;
}
.count-section {
  position: absolute;
  width: 100%;
  background: var(--color-white);
  border-radius: var(--border-radius);
  top: 75px;
  left: 0;
  display: flex;
  align-items: center;
  padding: 16px;
}
.counter-title {
  font-size: 16px;
  margin-right: 5px;
}
.counter {
  display: flex;
  align-items: center;
}
.counter-icon {
  font-size: 24px;
}
.counter-icon:not(:last-child) {
  margin-right: 8px;
}
.counter-icon:not(:first-child) {
  margin-left: 8px;
}
</style>