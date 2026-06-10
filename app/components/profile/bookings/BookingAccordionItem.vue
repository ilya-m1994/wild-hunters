<template>
  <div class="booking-accordion-item">
    <UiButton
        class="btn booking-accordion-btn"
        type="button"
        @click="toggle"
    >
      <div class="btn-wrapper">
        <div class="btn-text-wrapper">
          <span class="booking-title">№ брони</span>
          <span class="booking-number">{{ booking.bookingNumber }}</span>
        </div>
        <img v-if="isOpen" src="~/assets/icons/arrow-up.svg" alt="arrow-up" class="booking-icon" />
        <img v-else src="~/assets/icons/arrow-down.svg" alt="arrow-down" class="booking-icon">
      </div>
    </UiButton>

    <div class="item-content" v-if="isOpen">
      <ul class="content-list">
        <li class="content-list-item">
          <span class="content-title">№ брони</span>
          <span class="content-info">{{ booking.bookingNumber }}</span>
        </li>
        <li class="content-list-item">
          <span class="content-title">Дата брони</span>
          <span class="content-info">{{ booking.date }}</span>
        </li>
        <li class="content-list-item">
          <span class="content-title">Охот.база</span>
          <span class="content-info">{{ booking.base }}</span>
        </li>
        <li class="content-list-item">
          <span class="content-title">Тип</span>
          <span class="content-info">{{ booking.type }}</span>
        </li>
        <li class="content-list-item">
          <span class="content-title">Детали</span>
          <span class="content-info">{{ booking.details }}</span>
        </li>
        <li class="content-list-item">
          <span class="content-title">Статус</span>
          <span class="content-info">{{ booking.status }}</span>
        </li>
        <li class="content-list-item">
          <span class="content-title">Оплата</span>
          <span class="content-info">{{ booking.payments }}</span>
        </li>
        <li class="content-list-item">
          <span class="content-title">Действия</span>
          <span class="content-info">{{ booking.actions }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import UiButton from "~/components/ui/UiButton.vue";

defineProps({
  booking: {
    type: Object,
    required: true,
  },
})

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.booking-accordion-item {
  margin-bottom: 10px;
}
.booking-accordion-btn {
  width: 100%;
  padding: 12px;
  color: var(--color-white);
  margin-bottom: 10px;
}
.btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-text-wrapper {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.booking-title {
  font-weight: 500;
  font-size: 18px;
}
.booking-number {
  font-weight: 400;
  font-size: 14px;
}
.booking-icon {
  filter: invert(1);
}
.item-content {
  border-radius: var(--border-radius);
  background-color: var(--color-grey);
  padding: 12px;
}
.content-title {
  width: 50%;
  font-weight: 500;
  font-size: 18px;
  color: var(--color-dark);
}
.content-info {
  width: 50%;
  font-weight: 400;
  font-size: 14px;
  color: var(--color-dark);
}
.content-list {
  padding: 0;
  margin: 0;
}
.content-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content-list-item:not(:first-child) {
  padding-top: 8px;
}
.content-list-item:not(:last-child) {
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-dark);
}
</style>