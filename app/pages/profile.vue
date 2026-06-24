<template>
  <section class="profile-section">
    <div class="container profile-section-wrapper">
      <ProfileCard :active-tab="activeTab" @change-tab="activeTab = $event" />
      <ProfileForm v-if="activeTab === 'profile'" />
      <ProfileBookings v-if="activeTab === 'bookings'" />
      <ProfileFavorites v-if="activeTab === 'favorites'" />
      <ProfileChangePassword v-if="activeTab === 'password'" />
    </div>
  </section>
</template>

<script setup>
import ProfileCard from "~/components/profile/ProfileCard.vue";
import ProfileChangePassword from "~/components/profile/ProfileChangePassword.vue";
import { onMounted } from 'vue'
import { useUserStore } from '~/store/user'
import ProfileFavorites from '~/components/profile/ProfileFavorites.vue'

const userStore = useUserStore()
definePageMeta({ layout: 'profile' }, { requiresAuth: true })
const activeTab = ref("profile");

onMounted(() => {
  if (!userStore.profile) {
    userStore.fetchProfile()
    userStore.fetchWeapons()
    userStore.fetchCalibers()
  }
})
useSeoMeta({
  title: 'Wild-Hunter.ru — Мой профиль',
  description: 'Мой профиль',
})
</script>

<style scoped>
.profile-section-wrapper {
  display: flex;
  flex-direction: column;
}
@media (min-width: 1440px) {
  .profile-section-wrapper {
    flex-direction: row;
    gap: 30px;
  }
}
</style>