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
        :is-login="isLogin"
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
const isLogin = ref(true)

const openLogin = () => {
  isLogin.value = true
  isModalOpened.value = true
}

const openRegister = () => {
  isLogin.value = false
  isModalOpened.value = true
}

const handleSwitchMode = (mode) => {
  isLogin.value = mode === 'login'
}
</script>