<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
<script setup>
import AppHeader from "~/components/header/AppHeader.vue";
import AppFooter from "~/components/footer/AppFooter.vue";
</script>