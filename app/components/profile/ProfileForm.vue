<template>
  <section class="profile-section">
    <h1 class="section-title profile-form-title">Настройки</h1>
    <div class="profile-id-wrapper">
      <span class="profile-id-title">Личная информация</span>
      <span class="profile-id">ID: {{ userStore.userId }}</span>
    </div>
    <form class="profile-form">
      <div>
        <div class="form-item-wrapper">
          <span class="form-label">Ник</span>
          <UiInput v-model="userStore.nickname" type="text" placeholder="Ник пользователя"/>
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Email</span>
          <UiInput v-model="userStore.email" type="text" placeholder="example@gmail.com"/>
        </div>
        <div class="form-item--flex-wrapper">
          <div class="form-item-wrapper">
            <span class="form-label">Имя</span>
            <UiInput v-model="userStore.firstName" type="text" placeholder="Введите имя"/>
          </div>
          <div class="form-item-wrapper">
            <span class="form-label">Фамилия</span>
            <UiInput v-model="userStore.lastName" type="text" placeholder="Фамилия"/>
          </div>
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Номер телефона</span>
          <UiInput v-model="userStore.phone" type="text" placeholder="+7 (999) 999-99-98"/>
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Дата рождения</span>
          <UiInput v-model="userStore.birthday" type="text" placeholder="00.00.0000"/>
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Обо мне</span>
          <textarea class="profile-form-textarea" rows="6" cols="33"></textarea>
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Аватар</span>
          <UiInput type="file" placeholder="Файл"/>
          <img class="profile-avatar" :src="userStore.avatarUrl" alt="profile-avatar">
        </div>
      </div>
      <div>
        <div class="form-item-wrapper">
          <span class="form-label">Номер охот.билета</span>
          <UiInput type="text" placeholder="Введите номер охотнического билета"/>
        </div>
        <ProfileLicense
            v-for="(weapon, index) in userStore.weapons"
            :key="index"
            :weapon="weapon"
            :index="index"
        />
        <div class="profile-btns-wrapper">
          <UiButton
              class="btn profile-btn"
              @click.prevent="userStore.addWeapon"
          >
            Добавить оружие
          </UiButton>
          <UiButton class="btn" variant="text">Отмена</UiButton>
        </div>
      </div>
    </form>
    <UiButton class="btn profile-submit-btn">Сохранить изменения</UiButton>
  </section>
</template>

<script setup>
import UiInput from '~/components/ui/UiInput.vue'
import { useUserStore } from '~/store/user.js'

const userStore = useUserStore()
</script>

<style scoped>
.profile-section {
  width: 100%;
}
.profile-form-title {
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-grey);
}
.profile-id-wrapper {
  margin: 20px 0 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}
.profile-id-title {
  font-weight: 600;
  font-size: 20px;
}

.profile-id {
  font-weight: 400;
  font-size: 14px;
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