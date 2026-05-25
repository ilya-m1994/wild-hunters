<template>
  <header class="header">
    <div class="header-container">
      <div class="header-left">
        <div class="desktop-menu">
          <UiDropdown title="Для охотников" />
          <UiDropdown title="Для охотохозяйств" />
        </div>
        <BurgerMenu />
      </div>
      <NuxtLink to="/" class="header-logo">
        <img src="~/assets/img/logo.svg" alt="logotype">
      </NuxtLink>
      <div class="header-right">
        <UiButton
            variant="text"
            class="registration-button"
        >
          Регистрация
        </UiButton>
        <UiButton class="login-button">
          Вход
        </UiButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  font-family: 'Inter', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
}

.header-container {
  width: 375px;
  height: 86px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: var(--color-white);
  border-radius: 0 0 12px 12px;
}

.header-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
}

.desktop-menu {
  display: none;
}

.header-right {
  display: flex;
}

.registration-button {
  display: none;
}

.login-button {
  width: 94px;
  height: 46px;
}

@media (min-width:768px) {
  .header-container {
    width: 728px;
    height: 100px;
    padding: 0 28px;
  }

  .desktop-menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .registration-button {
    display: block;
    margin-right: 8px;
  }

  .login-button {
    width: 126px;
    height: 46px;
  }
}

@media (min-width:1440px) {
  .header-container {
    width: 1280px;
    height: 112px;
    padding: 0 40px;
  }
  .desktop-menu {
    flex-direction: row;

    gap: 32px;
  }
  .registration-button {
    margin-right: 24px;
  }
  .login-button {
    width: 158px;
    height: 50px;
  }
}
</style>
<script setup lang="ts">
import BurgerMenu from "~/components/header/BurgerMenu.vue";
</script>