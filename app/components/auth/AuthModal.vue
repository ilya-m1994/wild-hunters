<template>
  <Modal
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
  >
    <LoginForm
        v-if="mode === 'login'"
        @close="emit('update:modelValue', false)"
        @switch-mode="emit('switch-mode', $event)"
    />
    <RegistrationForm
        v-else-if="mode === 'register'"
        @switch-mode="emit('switch-mode', $event)"
    />
    <ForgetPassword
        v-else-if="mode === 'forgot-password'"
        @switch-mode="emit('switch-mode', $event)"
        @close="emit('update:modelValue', false)"
    />
  </Modal>
</template>

<script setup>
import Modal from '~/components/ui/Modal.vue'
import LoginForm from '~/components/auth/LoginForm.vue'
import RegistrationForm from '~/components/auth/RegistrationForm.vue'
import ForgetPassword from '~/components/auth/ForgetPassword.vue'

defineProps({
  modelValue: Boolean,
  mode: {
    type: String,
    default: 'login'
  }
})

const emit = defineEmits(['update:modelValue', 'switch-mode'])
</script>