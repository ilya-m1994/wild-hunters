<template>
  <section class="why">
    <div class="container-page">
      <h2 class="why-title">
        ПОЧЕМУ МЫ?
      </h2>
      <div class="cards">
        <div class="card">
          <div class="card-number">01.</div>
          <div class="card-title">
            Планируй охоту под себя
          </div>
          <div class="card-text">
            Индивидуальные и групповые форматы, выбор региона, сезона и вида добычи
          </div>
        </div>
        <div class="card">
          <div class="card-number">02.</div>
          <div class="card-title">
            Проверенные организаторы и условия
          </div>
          <div class="card-text">
            Платформа собирает лучшие варианты и помогает выбрать надежный вариант
          </div>
        </div>
        <div class="card">
          <div class="card-number">03.</div>
          <div class="card-title">
            Прозрачные калькуляции и расходы
          </div>
          <div class="card-text">
            Все платежи и траты фиксируются в системе, видно распределение средств
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why {
  margin-top: 100px;
  margin-bottom: 50px;
}

.why-title {
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 24px;
  color: var(--color-dark);
  margin-bottom: 30px;
}

.cards {
  display: flex;
  gap: 8px;
  overflow-x: auto;
}

.card {
  background: var(--color-primary);
  width: 360px;
  height: 230px;
  padding: 20px;
  border-radius: 12px;
  color: var(--color-white);
  flex-shrink: 0;
}

.card-number {
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 16px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  white-space: pre-line;
}

.card-text {
  font-size: 16px;
  font-weight: 400;
}
@media (min-width: 768px) {
  .why {
    margin-top: 100px;
    margin-bottom: 40px;
  }
  .why-title {
    font-size: 32px;
  }
  .cards {
    flex-direction: column;
    gap: 10px;
    overflow: visible;
  }
  .card {
    width: 345px;
    height: auto;
    padding: 16px;
  }
}
@media (min-width: 1440px) {
  .why {
    margin-top: 100px;
    margin-bottom: 50px;
  }
  .why-title {
    font-size: 44px;
    margin-bottom: 50px;
  }
  .cards {
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }
  .card {
    width: 389px;
    height: 242px;
    padding: 20px;
  }
}
</style>