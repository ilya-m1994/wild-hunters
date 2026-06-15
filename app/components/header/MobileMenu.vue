<template>
  <Transition name="slide-up">
    <div
        v-if="opened"
        class="mobile-menu"
    >
      <div class="menu-content">
        <NuxtLink to="/members" class="nav-link" @click="$emit('close')">
          Для охотников
        </NuxtLink>
        <NuxtLink to="/cooperation" class="nav-link" @click="$emit('close')">
          Для охотхозяйств
        </NuxtLink>
        <NuxtLink to="/cooperation" class="nav-link" @click="$emit('close')">
          Блог
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  opened: Boolean
})

defineEmits(['close'])
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  inset: 0;
  background: white;
  z-index: 200;
  display: flex;
  flex-direction: column;
}

.menu-content {
  padding: 100px 20px 20px 20px;
  display: flex;
  flex-direction: column;
}
.nav-link {
  font-weight: 600;
  font-size: 22px;
  color: var(--color-dark);
  margin-bottom: 20px;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>