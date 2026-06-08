<template>
  <section class="base-section">
    <div class="container">
      <div class="base-title-wrapper">
        <h1 class="section-title base-title">База "Родничок"-2</h1>
        <img src="~/assets/icons/framed-heart.svg" alt="framed-heart">
      </div>
      <div class="base-address">Москва, проспект Октября 21</div>
      <div class="base-descr-wrapper">
        <ul class="base-services-list">
          <li v-for="service in services" class="base-list-item">
            <img src="~/assets/icons/checkmark.svg" alt="checkmark">
            <span>{{ service }}</span>
          </li>
        </ul>
        <div class="base-rating">
          <div class="rating-wrapper">
            <img src="~/assets/icons/star.svg" alt="star-icon">
            <span>4,9</span>
          </div>
          <span class="reviews">32 отзыва</span>
        </div>
      </div>
      <div class="base-img"></div>
      <div class="parent">
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
        <div class="div4"></div>
      </div>
      <div class="base-info">
        Уютный современный номер со всеми удобствами и отдельным входом.Уютный современный номер со всеми удобствами Уютный современный номер со всеми удобствами и отдельным входом.Уютный современный номер со всеми удобствами и отдельным входом.
        Уютный современный номер со всеми удобствами и отдельным входом.Уютный современный номер
      </div>
      <span class="section-title guest-title">Даты и гости</span>
      <VueDatePicker
          v-model="date"
          :locale="ru"
          :format="formatDate"
          disable-year-select
          auto-apply
          range
          :time-config="{ enableTimePicker: false }"
      >
        <template #dp-input="{ onFocus }">
          <div class="datepicker-input-wrapper" @click="onFocus">
            <div class="datepicker-text">
              <span class="datepicker-label">Заезд — Выезд</span>
              <span class="datepicker-placeholder">
                    {{ date ? formatDate(date) : 'Выберите даты' }}
                  </span>
            </div>
          </div>
        </template>
        <template #clear-icon>
          <span></span>
        </template>
      </VueDatePicker>
      <div class="guest-search">
        <CustomGuestsSelect
            class="guests-select"
            v-model="guests"
            label="Гости"
            placeholder="1"
        />
        <UiButton class="btn guests-btn" @click="goToBases()">Искать</UiButton>
      </div>
      <span class="section-title animal-title">Доступные животные</span>
      <VueDatePicker
          v-model="date"
          :locale="ru"
          :format="formatDate"
          disable-year-select
          auto-apply
          range
          :time-config="{ enableTimePicker: false }"
      >
        <template #dp-input="{ onFocus }">
          <div class="datepicker-input-wrapper" @click="onFocus">
            <div class="datepicker-text">
              <span class="datepicker-label">Заезд — Выезд</span>
              <span class="datepicker-placeholder">
                    {{ date ? formatDate(date) : 'Выберите даты' }}
                  </span>
            </div>
          </div>
        </template>
        <template #clear-icon>
          <span></span>
        </template>
      </VueDatePicker>
      <CustomSelect
          class="animal-select"
          v-model="animal"
          label="Животные"
          placeholder="На кого будет охота?"
          :options="animals"
      />
      <div class="guest-search">
        <CustomGuestsSelect
            class="guests-select"
            v-model="guests"
            label="Гости"
            placeholder="1"
        />
        <UiButton class="btn guests-btn" @click="goToBases()">Искать</UiButton>
      </div>
    </div>
    <JoinCommunity />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import JoinCommunity from "~/components/main/JoinCommunity.vue";
import CustomGuestsSelect from "~/components/ui/Custom-Guests-Select.vue";
import CustomSelect from "~/components/ui/Custom-Select.vue";
import {ru} from "date-fns/locale";
import {VueDatePicker} from "@vuepic/vue-datepicker";

const animals = ['Утка', 'Кабан', 'Лось', 'Косуля']
const services = ref(['WI-FI', 'Минибар', 'Минибар'])
const guests = ref('')
const animal = ref('')
</script>

<style scoped>
.base-section {
  padding-top: 105px;
}
.base-title-wrapper {
  display: flex;
  align-items: center;
}
.base-title {
  font-family: Uncage, 'sans-serif';
  margin-right: 16px;
}
.base-address {
  font-weight: 600;
  font-size: 20px;
}
.base-descr-wrapper {
  display: flex;
  flex-direction: column;
}
.base-services-list {
  display: flex;
}
.base-list-item {
  display: flex;
  align-items: center;
  margin-right: 12px;
}
.base-rating {
  display: flex;
  align-items: center;
  background: var(--color-primary);
  border-radius: 12px;
  max-width: 137px;
  padding: 10px 8px;
  color: var(--color-white);
  margin-bottom: 20px;
}
.rating-wrapper {
  display: flex;
  align-items: center;
  margin-right: 12px;
  font-size: 16px;
  font-weight: 400;
}
.reviews {
  font-size: 14px;
  font-weight: 400;
}
.base-img {
  width: 345px;
  height: 345px;
  background: #F0E9E9;
  border-radius: 12px;
  margin-bottom: 12px;
}
.base-info {
  margin-bottom: 60px;
}
.guest-search {
  display: flex;
}
.guests-select {
  width: 50%;
}
.guests-btn {
  width: 50%;
}
.guest-title {
  margin-bottom: 20px;
}
.animal-title {
  margin-bottom: 20px;
  margin-top: 60px;
}
.datepicker-input-wrapper {
  width: 100%;
  padding: 16px;
  border-radius: var(--border-radius);
  background-color: var(--color-white);
}
.datepicker-label {
  font-family: 'Inter', sans-serif;
  color: var(--color-grey);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 6px;
}
.datepicker-placeholder {
  color: var(--color-dark);
  font-size: 16px;
  font-weight: 500;
}
.parent {
  display: none;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  margin-bottom: 20px;
}
.parent > div {
  background-color: var(--color-grey);
  border-radius: 12px;
}

.div1 {
  grid-area: 1 / 1 / 3 / 3;
  min-width: 360px;
  min-height: 360px;
}
.div2 { grid-area: 1 / 3 / 2 / 5; }
.div3 { grid-area: 2 / 3 / 3 / 4; }
.div4 { grid-area: 2 / 4 / 3 / 5; }

@media (min-width: 768px) {
  .base-descr-wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
  .base-img {
    display: none;
  }
  .parent {
    display: grid;
  }
}
</style>