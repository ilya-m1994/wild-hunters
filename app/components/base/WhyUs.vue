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
            Индивидуальные и групповые форматы, выбор региона,
            сезона и вида добычи
          </div>
        </div>

        <div class="card">
          <div class="card-number">02.</div>
          <div class="card-title">
            Проверенные организаторы и условия
          </div>
          <div class="card-text">
            Платформа собирает лучшие варианты и помогает выбрать
            надежный вариант
          </div>
        </div>

        <div class="card">
          <div class="card-number">03.</div>
          <div class="card-title">
            Прозрачные калькуляции и расходы
          </div>
          <div class="card-text">
            Все платежи и траты фиксируются в системе,
            видно распределение средств
          </div>
        </div>

        <!-- видна только на 768 -->
        <div class="card card-placeholder" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.why {
  margin-top: 80px;
  margin-bottom: 80px;
}

.container-page {
  padding: 0 15px;
}

.why-title {
  margin-bottom: 30px;

  color: var(--color-dark);
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.card {
  width: 313px;
  height: 143px;
  padding: 16px;

  border-radius: 12px;
  background: var(--color-primary);
  color: var(--color-white);
}

.card-placeholder {
  display: none;
}

.card-number {
  margin-bottom: 12px;

  font-size: 24px;
  font-weight: 400;
}

.card-title {
  margin-bottom: 10px;

  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
}

.card-text {
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 1.4;
}

/* планшет */
@media (min-width: 768px) {
  .why {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  .container-page {
    padding: 0 20px;
  }

  .why-title {
    margin-bottom: 40px;
    font-size: 32px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, 360px);
    gap: 8px;
    justify-content: center;
  }

  .card {
    width: 360px;
    height: 230px;
    padding: 20px;
  }

  .card-placeholder {
    display: block;
    background: var(--color-background);
  }

  .card-number {
    font-size: 32px;
    margin-bottom: 16px;
  }

  .card-title {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .card-text {
    font-size: 16px;
  }
}

/* десктоп */
@media (min-width: 1440px) {
  .why {
    margin-bottom: 120px;
  }

  .container-page {
    padding: 0 120px;
  }

  .why-title {
    margin-bottom: 50px;
    font-size: 44px;
  }

  .cards {
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: space-between;
  }

  .card {
    width: 389px;
    height: 242px;
  }

  .card-placeholder {
    display: none;
  }
}
</style>