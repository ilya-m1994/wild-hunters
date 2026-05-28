<template>
  <div class="select-container" :class="{ 'select-bg': optionsIsShown }">
    <div class="select-wrapper" @click="showOptions()">
      <div class="select-text">
        <div class="label">{{ label }}</div>
        <div class="placeholder">{{ modelValue || placeholder }}</div>
      </div>
      <span>
      <img v-if="optionsIsShown" src="~/assets/icons/arrow-up.svg" alt="arrow-up">
      <img v-else src="~/assets/icons/arrow-down.svg" alt="arrow-down">
    </span>
    </div>
    <div v-if="optionsIsShown" class="options-wrapper">
      <div
          v-for="(option, index) in options"
          :key="index" class="option"
          @click="chooseOption(option)"
      >
        {{ option }}
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
  },
  options: {
    type: Array,
    required: true,
  }
})

const emit = defineEmits(['update:modelValue'])
const modelValue = defineModel()
const optionsIsShown = ref(false)
const selectedOption = ref('')

const showOptions = () => {
  optionsIsShown.value = !optionsIsShown.value;
}
const chooseOption = (option) => {
  modelValue.value = option
  optionsIsShown.value = false
}
</script>

<style scoped>
.select-container {
  position: relative;
  margin-bottom: 4px;
}
.select-bg {
  background: var(--color-grey);
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
.options-wrapper {
  position: absolute;
  z-index: 100;
  top: 75px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  background: var(--color-grey);
  border-radius: var(--border-radius);
}
.option {
  padding: 10px 0;
  cursor: pointer;
  font-size: 18px;
}
.option:not(:last-child) {
  border-bottom: 1px solid var(--color-dark);
}
</style>