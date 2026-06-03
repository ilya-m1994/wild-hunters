<template>
  <section class="how-section">
    <div class="container">
      <h2 class="section-title">Как это работает</h2>
      <div class="chips-wrapper">
        <ul class="chips-list">
          <li v-for="(chip, index) in chips" :key="index" class="chip-item">
            <div class="chip-title"> {{chip.title}} </div>
            <div class="chip-subtitle"> {{ chip.subtitle }} </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const chips = ref([
    {
      title: 'шаг 1',
      subtitle: 'Выбираете охоту и собираете смету'
    },
    {
      title: 'шаг 2',
      subtitle: 'Видите прозрачный итог и условия'
    },
    {
      title: 'шаг 3',
      subtitle: 'Бронируете (предоплата)'
    },
    {
      title: 'шаг 4',
      subtitle: 'Получаете подтверждение'
    },
    {
      title: 'шаг 5',
      subtitle: 'Приезжаете на охоту'
    }
])
</script>
<style scoped>
.how-section {
  margin-bottom: 80px;
}
.chips-wrapper {
  display: flex;
  flex-direction: column;
}
.chips-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
}
.chip-item {
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 10px;
  box-shadow: 0 0 4px 0 #00000026;
}
.chip-title {
  background: var(--color-primary);
  border-radius: 100px;
  padding: 10px 20px;
  min-width: 87px;
  margin-right: 20px;
  color: var(--color-white);
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.05em;
}
.chip-subtitle {
  font-weight: 600;
  font-size: 20px;
}
@media (min-width: 768px) {
  .chips-list {
    flex-direction: row;
  }
  .chip-item {
    flex-direction: column;
    box-shadow: none;
    text-align: center;
  }
  .chip-title {
    margin-bottom: 20px;
  }
  .chip-subtitle {
    margin-bottom: 20px;
  }
}
</style>