<template>
  <section class="hero" :class="{ 'hero--home': variant === 'home', 'hero--compact': variant === 'compact' }">
    <div class="hero-wrapper">
      <h1 class="hero-title">Онлайн-платформа для настоящих охотников</h1>
      <form class="hero-form">
        <CustomSelect
            class="location-select"
            v-model="direction"
            label="Локация"
            placeholder="Куда вы собираетесь?"
            :options="directions"
        />
        <CustomSelect
            class="animal-select"
            v-model="animal"
            label="Животные"
            placeholder="На кого будет охота?"
            :options="animals"
        />
        <div class="datepicker-select">
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
        </div>
        <div class="search-wrapper">
          <CustomGuestsSelect
              class="guests-select"
              v-model="guests"
              label="Гости"
              placeholder="1"
          />
          <UiButton class="btn search-btn" @click="goToBases()">Искать</UiButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import CustomSelect from '~/components/ui/Custom-Select.vue'
import CustomGuestsSelect from '~/components/ui/Custom-Guests-Select.vue'
import { ref } from 'vue'
import { VueDatePicker } from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ru } from 'date-fns/locale'

defineProps({
  variant: {
    type: String,
    default: 'home',
  }
})


const directions = ['Московская область', 'Ярославская область', 'Тверская область']
const animals = ['Утка', 'Кабан', 'Лось', 'Косуля']

const direction = ref('')
const animal = ref('')
const guests = ref('')

const getDefaultDates = () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  tomorrow.setHours(0, 0, 0, 0)

  const dayAfterTomorrow = new Date()
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
  dayAfterTomorrow.setHours(0, 0, 0, 0)

  return [tomorrow, dayAfterTomorrow]
}

const date = ref(getDefaultDates())

const formatDate = (dates) => {
  if (!dates || !dates[0]) return ''

  const fmt = (d) => new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(d)

  return dates[1] ? `${fmt(dates[0])} — ${fmt(dates[1])}` : fmt(dates[0])
}

const goToBases = () => {

}
</script>

<style scoped>
.hero{
  padding-top: 124px;
}

.hero--home {
  background-image: url("~/assets/img/hero.webp");
  background-size: cover;
  background-position: center;
  min-height: 747px;
}

.hero--compact {
  background: var(--color-primary);
  min-height: 340px;
}
.hero-title {
  font-family: Uncage, sans-serif;
  font-weight: 400;
  font-size: 28px;
  color: var(--color-white);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
}
.hero-form{
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.datepicker-select {
  margin-bottom: 4px;
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
.search-wrapper{
  display: flex;
  justify-content: space-between;
}

.search-btn {
  padding: 27px 0;
  width: 100%;
  margin-left: 4px;
}

.hero--large {
  min-height: 747px;
}
.hero--small {
  min-height: 340px;
}

@media (min-width: 768px) {
  .hero-title {
    margin-bottom: 60px;
  }
  .hero-form {
    flex-direction: row;
    flex-wrap: wrap;
    width: 718px;
  }
  .location-select {
    width: 49%;
    margin-right: 2px;
    margin-bottom: 2px;
  }
  .animal-select {
    width: 49%;
    margin-bottom: 2px;
  }
  .datepicker-select {
    width: 238px;
    margin-right: 2px;
  }
  .guests-select {
    width: 278px;
  }
  .search-btn {
    width: 158px;
    margin-left: 2px;
  }
}
@media (min-width: 1440px) {
  .hero-form {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 1200px;
  }

  .location-select {
    width: 258px;
  }
  .animal-select {
    width: 258px;
    margin-right: 2px;
  }
  .datepicker-select {
    width: 258px;
    margin-bottom: 0;
  }
  .guests-select {
    width: 258px;
    margin-bottom: 0;
  }
}
</style>
