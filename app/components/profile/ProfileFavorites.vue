<template>
  <div class="profile-favorites">
    <h2 class="section-title">Избранные базы</h2>

    <div v-if="userStore.favorites.length === 0" class="profile-favorites__empty">
      <p>Вы ещё не добавили ни одной базы в избранное</p>
    </div>

    <div v-else class="profile-favorites__list">
      <div
          v-for="hotel in userStore.favorites"
          :key="hotel.id"
          class="profile-favorites__item"
      >
        <img
            v-if="hotel.image_url"
            :src="hotel.image_url"
            :alt="hotel.name"
            class="profile-favorites__img"
        />
        <div class="profile-favorites__info">
          <span class="profile-favorites__name">{{ hotel.name }}</span>
          <span class="profile-favorites__location">{{ hotel.location }}</span>
        </div>
        <button
            class="btn like-btn like-btn--active"
            @click="userStore.removeFromFavorite(hotel.id)"
        >
          <img src="~/assets/icons/heart-red.svg" alt="remove from favorites" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '~/store/user'

const userStore = useUserStore()
</script>