<template>
  <div class="profile-card">
    <div class="profile-card-title">
      <img class="profile-photo" src="~/assets/icons/profile-photo.svg" alt="profile-photo" />
      <div class="profile-title-wrapper">
        <span class="profile-role">{{ userStore.role }}</span>
        <span class="profile-name">{{ userStore.fullName }}</span>
        <span class="profile-since">Участник с: {{ userStore.createdAt }}</span>
      </div>
    </div>
    <div>
      <ul class="profile-list">
        <li class="profile-list-item" @click="emit('change-tab', 'bookings')">
          <img class="profile-icon" src="~/assets/icons/clock.svg" alt="clock">
          <span class="profile-chapter">Бронирования</span>
        </li>
        <li class="profile-list-item" @click="emit('change-tab', 'profile')">
          <img class="profile-icon" src="~/assets/icons/setting.svg" alt="setting">
          <span class="profile-chapter">Мой профиль</span>
        </li>
        <li class="profile-list-item" @click="emit('change-tab', 'password')">
          <img class="profile-icon" src="~/assets/icons/pencil.svg" alt="pencil">
          <span class="profile-chapter">Изменить пароль</span>
        </li>
      </ul>
      <div class="profile-links">
        <span class="profile-link">Назад на главную</span>
        <span class="profile-link">Выйти</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '~/store/user'

const userStore = useUserStore()

defineProps({
  activeTab: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["change-tab"]);
</script>

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  background: var(--color-primary);
  border-radius: var(--border-radius);
  color: var(--color-white);
  text-align: center;
}
.profile-card-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid var(--color-white);
}
.profile-photo {
  margin: 0 auto;
  width: 120px;
  height: 120px;
}
.profile-title-wrapper {
  display: flex;
  flex-direction: column;
}
.profile-role {
  margin-top: 10px;
  margin-bottom: 25px;
  border-radius: 12px;
  border: 1px solid var(--color-white);
  padding: 10px 50px;
  font-weight: 600;
  font-size: 20px;
}
.profile-name {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 5px;
}
.profile-since {
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 20px;
}
.profile-list {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-white);
}
.profile-list-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
}
.profile-icon {
  margin-right: 8px;
}
.profile-chapter {
  font-weight: 500;
  font-size: 18px;
}
.profile-links {
  font-weight: 400;
  font-size: 16px;
  text-align: left;
}
.profile-link:not(:last-child) {
  margin-bottom: 12px;
}
@media (min-width: 768px) {
  .profile-card {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .profile-card-title {
    flex-direction: row;
    align-items: start;
    border-bottom: none;
    margin-right: 74px;
  }
  .profile-photo {
    margin-right: 16px;
  }
  .profile-list {
    border-bottom: none;
  }
}
@media (min-width: 1440px) {
  .profile-card {
    flex-direction: column;
    justify-content: start;
    width: 274px;
    max-height: 850px;
  }
  .profile-card-title {
    flex-direction: column;
    margin: 0 auto;
  }
  .profile-photo {
    margin: 0 auto;
  }
}
</style>