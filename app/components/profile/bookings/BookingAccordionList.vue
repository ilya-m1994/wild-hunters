<template>
  <div class="booking-accordion-list">
    <BookingAccordionItem
        v-for="booking in bookings"
        :key="booking.id"
        :booking="booking"
    />
  </div>
</template>

<script setup>
import BookingAccordionItem from '~/components/profile/bookings/BookingAccordionItem.vue';

defineProps({
  bookings: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>

</style>