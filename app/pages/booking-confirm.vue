<template>
  <section>
    <div class="container">
      <div class="bc-title-wrapper">
        <img src="~/assets/icons/checkmark.svg" alt="check-mark">
        <h1 class="section-title bc-title">Ваше бронирование было успешно отправлено!</h1>
      </div>
      <span class="bc-mail-sending">Информация о бронировании отправлена по адресу: bugaginio@gmail.com</span>
      <div class="booking-info-wrapper">
        <div class="booking-info">
          <ul class="booking-info-list">
            <li v-for="infoItem in bookingInfo" class="booking-list-item">
              <span class="item-title">{{ infoItem.title }} </span>
              <span class="item-text">{{ infoItem.text }}</span>
            </li>
          </ul>
        </div>
        <UiButton class="btn booking-btn">Перейти в бронирования</UiButton>
      </div>
      <div class="booking-cards">
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>
      <div class="special-conditions">
        <span class="special-conditions-title">Особые условия</span>
        <textarea class="special-conditions-text" rows="6" cols="33" />
      </div>
    </div>
  </section>
</template>

<script setup>
import BookingCard from '~/components/booking/BookingCard.vue'
const bookingInfo = [
  {
    title: 'Номер брони:',
    text: '274'
  },
  {
    title: 'Дата бронирования:',
    text: '16.04.2026'
  },
  {
    title: 'Способ оплаты:',
    text: 'Pay Keeper'
  },
  {
    title: 'Статус бронирования:',
    text: 'Обработка'
  }
]
</script>

<style scoped>
.bc-title-wrapper {
  display: flex;
  align-items: start;
}
.bc-title {
  text-align: left;
  margin: 0 0 0 15px;
}
.bc-mail-sending {
  margin: 12px 0 20px 0;
  font-weight: 400;
  font-size: 16px;
}
.booking-info-wrapper {
  display: flex;
  flex-direction: column;
}
.booking-info {
  background: var(--color-primary);
  padding: 20px;
  border-radius: 20px;
  width: 100%;
}
.booking-info-list {
  display: flex;
  flex-direction: column;
}
.booking-list-item {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
  color: var(--color-white);
}
.item-title {
  font-weight: 500;
  font-size: 18px;
}
.item-text {
  color: var(--color-grey);
}
.booking-btn {
  width: 100%;
  padding: 16px;
  margin-top: 10px;
}
.special-conditions {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}
.special-conditions-title {
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
}
.special-conditions-text {
  border: 1px solid var(--color-grey);
  border-radius: 8px;
}
.booking-cards {
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .booking-info-list {
    flex-direction: row;
    justify-content: space-between;
  }
  .booking-list-item {
    flex-direction: column;
    align-items: start;
  }
  .booking-btn {
    width: 50%;
  }
}
@media (min-width: 1440px) {
  .booking-cards {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: flex-start;
  }
  .booking-cards > div {
    width: 48%;
  }
  .booking-info-wrapper {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .booking-btn {
    width: 288px;
  }
  .booking-info {
    padding: 0 20px 0 20px;
  }
}
</style>