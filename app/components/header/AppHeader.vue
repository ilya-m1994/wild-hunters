<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-menu">
        <div class="header-links">
          <NuxtLink to="/members" class="nav-link">
            Для охотников
          </NuxtLink>
          <NuxtLink to="/cooperation" class="nav-link">
            Для охотхозяйств
          </NuxtLink>
        </div>
        <BurgerMenu
            :opened="isMobileMenuOpen"
            @toggle="toggleMobileMenu"
        />
      </div>

      <img class="header-img" src="~/assets/img/logo.svg" alt="logotype">

      <template v-if="authStore.isLoggedIn">
        <div class="logged-wrapper">
          <NuxtLink to="/profile" class="user-name">
            {{ authStore.user.first_name }} {{ authStore.user.last_name }}
          </NuxtLink>
          <UiButton class="btn" variant="text" @click="authStore.logout()">Выйти</UiButton>
        </div>
      </template>
      <template v-else>
        <div class="header__buttons">
          <UiButton
              variant="text"
              class="btn registration-button"
              @click="emit('register')"
          >
            Регистрация
          </UiButton>

          <UiButton
              class="btn login-button"
              @click="emit('login')"
          >
            Вход
          </UiButton>
        </div>
      </template>
    </div>
    <MobileMenu
        :opened="isMobileMenuOpen"
        @close="closeMobileMenu"
    />
  </header>
</template>

<script setup>
import BurgerMenu from '~/components/header/BurgerMenu.vue'
import { useAuthStore } from '~/store/auth'
import MobileMenu from '~/components/header/MobileMenu.vue'

const authStore = useAuthStore()
const emit = defineEmits(['login', 'register'])

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.header-wrapper {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  margin: 0 auto;
  max-height: 86px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  background: var(--color-white);
  padding: 20px 15px;
}
.header-img {
  max-width: 72px;
  margin-right: 8px;
}
.header-links {
  display: none;
}
.header__buttons{
  display: flex;
  justify-content: flex-end;
}
.registration-button {
  display: none;
  background: transparent;
  font-weight: 500;
}

.login-button {
  padding: 15px 28px;
  border-radius: var(--border-radius);
  font-weight: 500;
  background: var(--color-accent);
}
.user-name {
  color: var(--color-dark);
  font-weight: 600;
  margin-right: 8px;
  align-self: center;
}
.nav-link:not(:last-child) {
  margin-right: 16px;
}
.nav-link {
  position: relative;
  display: inline-block;
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 1px;
  background-color: var(--color-dark);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}
.nav-link:hover::after {
  transform: scaleX(1);
}
.logged-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
@media (min-width: 768px) {
  .header-links {
    display: flex;
  }
  .header-wrapper{
    max-width: 728px;
    max-height: 100px;
  }
  .registration-button {
    display: block;
    margin-right: 8px;
  }
  .header-img {
    max-width: 86px;
  }
}

@media (min-width: 1440px) {
  .header-wrapper{
    max-width: 1280px;
    max-height: 112px;
  }
  .registration-button {
    display: block;
    margin-right: 24px;
  }
  .header-img {
    max-width: 104px;
  }
}
</style>