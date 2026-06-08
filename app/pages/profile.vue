<template>
  <section class="profile-section">
    <div class="container profile-section-wrapper">
      <ProfileCard />
      <ProfileForm />
<!--      <ProfileChangePassword />-->
    </div>
  </section>
</template>

<script setup>
import ProfileCard from "~/components/profile/ProfileCard.vue";
import ProfileChangePassword from "~/components/profile/ProfileChangePassword.vue";
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