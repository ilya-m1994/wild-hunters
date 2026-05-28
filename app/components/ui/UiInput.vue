<template>
  <input
      :value="modelValue"
      class="custom-input"
      :type="type"
      :placeholder="placeholder"
      @input="emit('update:modelValue', $event.target.value)"
  />
  <div v-if="errorMessage" class="input-error">{{ errorMessage }}</div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  errorMessage: {
    type: String,
    default: null
  }
})

const emit = defineEmits([
  'update:modelValue'
])

</script>

<style scoped>
.custom-input {
  display: block;
  width: 100%;
  padding: 14px 12px;
  border: 1px solid;
  border-color: var(--color-grey);
  border-radius: 8px;
  margin-bottom: 10px;
  font-family: 'Inter', sans-serif;
}

.custom-input:focus {
  outline: none;
}

.input-error {
  font-family: 'Inter', sans-serif;
  color: var(--color-error);
  margin-bottom: 8px;
  padding-left: 10px;
}
</style>