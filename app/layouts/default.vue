<template>
  <div style="background: var(--color-white)">
<!--    <AppHeader-->
<!--        @login="openLogin"-->
<!--        @register="openRegister"-->
<!--    />-->
<!--    <BaseHero />-->
    <main>
      <slot />
    </main>
    <AppFooter />
    <AuthModal
        v-model="isModalOpened"
        :is-login="isLogin"
    />
  </div>
</template>
<script setup>
import AppHeader from "~/components/header/AppHeader.vue";
import AppFooter from "~/components/footer/AppFooter.vue";
import AuthModal from '~/components/auth/AuthModal.vue'
import BaseHero from "~/components/main/Hero.vue";

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
</script>

<style>

</style>