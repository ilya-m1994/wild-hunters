<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-menu">
        <div class="header__dropdowns">
          <UiDropdown title="Для охотников" />
          <UiDropdown title="Для охотохозяйств" />
        </div>
        <BurgerMenu />
      </div>

      <img src="~/assets/img/logo.svg" alt="logotype">

      <div class="header__buttons">
        <UiButton
            variant="text"
            class="btn registration-button"
            @click="$emit('register')"
        >
          Регистрация
        </UiButton>

        <UiButton
            class="btn login-button"
            @click="$emit('login')"
        >
          Вход
        </UiButton>
      </div>
    </div>

  </header>
</template>

<script setup>
import BurgerMenu from '~/components/header/BurgerMenu.vue'

defineEmits([
  'login',
  'register'
])
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.header-wrapper {
  margin: 0 auto;
  max-height: 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  background: var(--color-white);
  padding: 20px 15px;
}
.header__dropdowns {
  display: none;
}
.header__buttons{
  display: flex;
}
.registration-button {
  display: none;
  background: transparent;
  font-weight: 500;
  letter-spacing: -5%;

}

.login-button {
  padding: 15px 28px;
  border-radius: var(--border-radius);
  font-weight: 500;
  background: var(--color-accent);
}

@media (min-width: 768px) {
  .header-wrapper{
    max-width: 728px;
    max-height: 100px;
  }
  .registration-button {
    display: block;
    margin-right: 8px;
  }
  .header__dropdowns {
    display: flex;
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
}
</style>