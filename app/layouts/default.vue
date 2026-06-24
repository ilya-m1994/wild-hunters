<template>
  <div>
    <AppSpinner />
    <AppHeader
        @login="uiStore.openAuthModal('login')"
        @register="uiStore.openAuthModal('register')"
    />
    <main>
      <slot />
    </main>
    <AppFooter />
    <AuthModal
        v-model="uiStore.isAuthModalOpen"
        :mode="uiStore.authModalMode"
        @switch-mode="uiStore.authModalMode = $event"
    />
  </div>
</template>
<script setup>
import AppHeader from '~/components/header/AppHeader.vue'
import AppFooter from '~/components/footer/AppFooter.vue'
import AuthModal from '~/components/auth/AuthModal.vue'
import AppSpinner from '~/components/ui/AppSpinner.vue'
import { useUiStore } from '~/store/ui'

const uiStore = useUiStore()
</script>