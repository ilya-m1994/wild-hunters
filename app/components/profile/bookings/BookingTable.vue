<template>
  <div class="table-wrapper">
    <table class="booking-table">
      <thead>
      <tr>
        <th v-for="header in headers">{{ header }}</th>
      </tr>
      </thead>

      <tbody>
      <tr
          v-for="booking in bookings"
          :key="booking.id"
      >
        <td>{{ booking.bookingNumber }}</td>
        <td>{{ booking.bookingDate }}</td>
        <td>{{ booking.base }}</td>
        <td>{{ booking.type }}</td>
        <td>{{ booking.details }}</td>
        <td>{{ booking.status }}</td>
        <td>{{ booking.payments }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  bookings: {
    type: Array,
    required: true,
  },
})
const headers = ['№ брони', 'Дата брони', 'Охот.база', 'Тип', 'Детали', 'Статус', 'Оплата']
</script>

<style scoped>
.table-wrapper {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 10px;
}
.booking-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  font-weight: 400;
}

.booking-table th {
  text-align: left;
  font-weight: 600;
  padding: 12px 16px;
  border-bottom: 1px solid #B9B9B9;
  background: var(--color-grey  );
}

.booking-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-grey);
}

.booking-table tbody tr:hover {
  background: var(--color-grey);
}
</style>