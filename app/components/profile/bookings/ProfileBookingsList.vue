<template>
  <BookingAccordionList
      v-if="isMobile"
      :bookings="bookings"
  />

  <BookingTable
      v-else
      :bookings="bookings"
  />
</template>

<script setup>
import BookingAccordionList from "~/components/profile/bookings/BookingAccordionList.vue";
import BookingTable from "~/components/profile/bookings/BookingTable.vue";

defineProps({
  bookings: {
    type: Array,
    required: true,
  }
})

const isMobile = ref(false)

const updateViewport = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  updateViewport()
  window.addEventListener('resize', updateViewport)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewport)
})

</script>

<style scoped>

</style>