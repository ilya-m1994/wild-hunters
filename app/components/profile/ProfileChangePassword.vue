<template>
  <section class="password-section">
    <h1 class="section-title password-form-title">Изменить пароль</h1>
    <form class="password-form">
      <div class="form-item-wrapper">
        <span class="form-label">Текущий пароль</span>
        <UiInput type="text" placeholder="Текущий пароль"/>
      </div>
      <div class="form-item-wrapper">
        <span class="form-label">Новый пароль</span>
        <UiInput type="text" placeholder="Новый пароль"/>
      </div>
      <div class="form-item--flex-wrapper">
        <div class="form-item-wrapper">
          <span class="form-label">Повторный ввод нового пароля</span>
          <UiInput type="text" placeholder="Повторный ввод нового пароля"/>
        </div>
      </div>
    </form>
    <UiButton class="btn password-submit-btn">Сохранить изменения</UiButton>
  </section>
</template>

<script setup>

import UiInput from "~/components/ui/UiInput.vue";
</script>

<style scoped>
.password-section {
  width: 100%;
  margin-bottom: 10px;
}
.password-form-title {
  text-align: left;
}
.password-form {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-grey);
  margin-bottom: 20px;
}
.form-item-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.form-label {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
}
.password-submit-btn {
  width: 100%;
  padding: 15px 0;
}
@media (min-width: 768px) {
  .password-form {
    width: 360px;
  }
  .password-submit-btn {
    width: 50%;
  }
}
@media (min-width: 1440px) {
  .password-form {
    width: 440px;
  }
  .password-submit-btn {
    width: 30%;
  }
}
</style>