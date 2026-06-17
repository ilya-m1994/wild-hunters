<template>
  <div>
    <AppSpinner />
    <AppHeader
        @login="openLogin"
        @register="openRegister"
    />
    <main>
      <slot />
    </main>
    <AppFooter />
    <AuthModal
        v-model="isModalOpened"
        :mode="authMode"
        @switch-mode="handleSwitchMode"
    />
  </div>
</template>
<script setup>
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import AuthModal from '~/components/auth/AuthModal.vue'
import AppSpinner from '~/components/ui/AppSpinner.vue'

const isModalOpened = ref(false)
const authMode = ref('login')
// const isLogin = ref(true)

const openLogin = () => {
  authMode.value = 'login'
  isModalOpened.value = true
}

const openRegister = () => {
  authMode.value = 'register'
  isModalOpened.value = true
}

const handleSwitchMode = (mode) => {
  authMode.value = mode
}
</script>