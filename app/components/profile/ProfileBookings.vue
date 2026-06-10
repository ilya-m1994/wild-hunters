<template>
  <section class="booking-section">
    <h1 class="section-title bookings-title">Бронирования</h1>
    <ProfileBookingsList :bookings="bookings" />
  </section>
</template>

<script setup>
import ProfileBookingsList from "~/components/profile/bookings/ProfileBookingsList.vue";

const bookings = [
  {
    id: 1,
    bookingNumber: 222,
    bookingDate: '03.03.2026',
    base: 'Хромой кабан 2',
    type: 'Проживание',
    details: 'Детали',
    status: '222',
    payments: '222',
    actions: '222'
  },
  {
    id: 2,
    bookingNumber: 333,
    bookingDate: '03.03.2026',
    base: 'Хромой кабан 2',
    type: 'Проживание',
    details: 'Детали',
    status: '222',
    payments: '222',
    actions: '222'
  },
  {
    id: 3,
    bookingNumber: 333,
    bookingDate: '03.03.2026',
    base: 'Хромой кабан 2',
    type: 'Проживание',
    details: 'Детали',
    status: '222',
    payments: '222',
    actions: '222'
  },
]
</script>

<style scoped>
.booking-section {
  width: 100%;
}
.bookings-title {
  text-align: start;
}
</style>