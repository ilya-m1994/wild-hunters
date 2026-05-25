<template>
  <button
      class="md:hidden"
      @click="isOpened = !isOpened"
  >
    ☰
  </button>

  <div
      v-if="isOpened"
      class="
      fixed
      top-0
      right-0
      h-screen
      w-[300px]
      bg-white
      p-8
    "
  >
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