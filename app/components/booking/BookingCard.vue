<template>
  <div class="booking-card">
    <span class="card-title">Ваше проживание</span>
    <div class="card-wrapper">
      <div>
        <img src="~/assets/icons/booking-mock.svg" alt="booking-image">
        <span class="card-subtitle">Хромой кабан 2</span>
      </div>
      <div>
        <div class="card-text-wrapper">
          <span class="card-text">Заезд:</span>
          <span class="card-subtext">10.04.2026</span>
        </div>
        <div class="card-text-wrapper">
          <span class="card-text">Выезд:</span>
          <span class="card-subtext">11.04.2026</span>
        </div>
        <div class="card-text-wrapper">
          <span class="card-text">Ночи:</span>
          <span class="card-subtext">1</span>
        </div>
        <div class="card-text-wrapper">
          <span class="card-text">Взрослые:</span>
          <span class="card-subtext">2</span>
        </div>
        <div class="card-text-wrapper">
          <span class="card-text">4-х местный * 1:</span>
          <span class="card-subtext">4.000 ₽</span>
        </div>
        <div class="card-text-wrapper">
          <span class="card-text accent">Всего:</span>
          <span class="card-subtext price">4.000 ₽</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.booking-card{
  margin-top: 30px;
  margin-bottom: 24px;
}
.card-title {
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 12px;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey);
  border-radius: 20px;
  padding: 16px;
}
.card-subtitle {
  font-weight: 600;
  font-size: 20px;
  margin: 8px 0 10px 0;
}
.card-text-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card-text-wrapper:not(:last-child) {
  margin-bottom: 12px;
}
.card-text {
  font-weight: 500;
  font-size: 18px;
}
.card-subtext {
  font-weight: 400;
  font-size: 16px;
  color: var(--color-grey);
}
.accent {
  font-weight: 600;
  font-size: 20px;
}
.price {
  font-weight: 500;
  font-size: 18px;
  color: var(--color-accent);
}
@media (min-width: 768px) {
  .card-wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
  .card-wrapper > div {
    width: 50%;
  }
}
@media (min-width: 1440px) {
  .card-wrapper > div {
    width: 48%;
  }
}
</style>