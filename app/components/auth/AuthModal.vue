<template>
  <Modal
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
  >
   <LoginForm v-if="isLogin" />
   <RegistrationForm v-else />
  </Modal>
</template>

<script setup>
import { ref } from "vue";
import Modal from '~/components/ui/Modal.vue'
import LoginForm from "~/components/auth/LoginForm.vue";
import RegistrationForm from "~/components/auth/RegistrationForm.vue";

defineProps({
  modelValue: Boolean,
  isLogin: Boolean
})

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>


</style>