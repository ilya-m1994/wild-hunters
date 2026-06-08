<template>
  <div>
    <h1 class="section-title profile-form-title">Настройки</h1>
    <span class="frofile-id">Личная информация: ID: 6363</span>
    <form class="profile-form">
      <div>
        <div class="form-item-wrapper">
          <span class="form-label">Ник</span>
          <UiInput type="text" placeholder="Ник пользователя"/>
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Email</span>
          <UiInput type="text" placeholder="tihonasar@gmail.com"/>
        </div>
        <div class="form-item--flex-wrapper">
          <div class="form-item-wrapper">
            <span class="form-label">Имя</span>
            <UiInput type="text" placeholder="Назар"/>
          </div>
          <div class="form-item-wrapper">
            <span class="form-label">Фамилия</span>
            <UiInput type="text" placeholder="Мухаметгалеев"/>
          </div>
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Номер телефона</span>
          <UiInput type="text" placeholder="+7 (999) 999-99-98"/>
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Дата рождения</span>
          <UiInput type="text" placeholder="03.03.2026"/>
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Дата рождения</span>
          <textarea class="profile-form-textarea" rows="6" cols="33"></textarea>
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Аватар</span>
          <UiInput type="file" placeholder="03.03.2026"/>
          <img class="profile-avatar" src="~/assets/icons/profile-avatar.svg" alt="profile-avatar">
        </div>
      </div>
      <div>
        <div class="form-item-wrapper">
          <span class="form-label">Номер охот.билета</span>
          <UiInput type="text" placeholder="Введите номер охотнического билета"/>
        </div>
        <ProfileLicense />
        <div class="profile-btns-wrapper">
          <UiButton class="btn profile-btn">Добавить оружие</UiButton>
          <UiButton class="btn" variant="text">Отмена</UiButton>
        </div>
      </div>
    </form>
    <UiButton class="btn profile-submit-btn">Сохранить изменения</UiButton>
  </div>
</template>

<script setup>

import UiInput from "~/components/ui/UiInput.vue";
</script>

<style scoped>
.profile-form-title {
  text-align: left;
}
.frofile-id {
  margin: 20px 0 20px 0;
  font-weight: 600;
  font-size: 20px;
}
.profile-form {
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
.form-item--flex-wrapper {
  display: flex;
  gap: 10px;
}
.profile-form-textarea {
  border: 1px solid var(--color-grey);
  border-radius: 8px;
  padding: 10px;
}
.profile-avatar {
  width: 140px;
  height: 140px;
}
.profile-btns-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 20px;
}
.profile-btn {
  padding: 15px 0;
  width: 212px;
}
.profile-submit-btn {
  width: 100%;
  padding: 15px 0;
}
@media (min-width: 768px) {
  .profile-form {
    flex-direction: row;
    gap: 8px;
  }
  .profile-submit-btn {
    width: 50%;
  }
}
@media (min-width: 1440px) {
  .profile-submit-btn {
    width: 30%;
  }
}
</style>