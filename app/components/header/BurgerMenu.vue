<template>
  <button
      class="menu-btn"
      @click="isOpened = !isOpened"
  >
    <img src="~/assets/icons/burger.svg" alt="menu">
  </button>

  <div v-if="isOpened">
    <div class="flex flex-col gap-4">

      <NuxtLink
          to="/"
          @click="isOpened = false"
      >
        Главная
      </NuxtLink>

      <NuxtLink
          to="/recreation-centers"
          @click="isOpened = false"
      >
        Базы отдыха
      </NuxtLink>

    </div>
  </div>
</template>

<script setup>
const isOpened = ref(false)
</script>

<style scoped>
.menu-btn {
  border: none;
  background-color: transparent;
}

@media (min-width: 768px) {
  .menu-btn {
    display: none;
  }
}
</style>