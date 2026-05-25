<template>
  <section class="hero">
    <div class="hero-overlay">
      <h1 class="hero-title">
        ОНЛАЙН-ПЛАТФОРМА ДЛЯ НАСТОЯЩИХ ОХОТНИКОВ
      </h1>
      <div class="booking-placeholder">
        <h1 class="h1">
          Форма бронирования
        </h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  margin: 0 auto;
  background-image: url('~/assets/img/hero.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 747px;
  padding-top: 210px;
}

.hero-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  max-width: 800px;
  text-align: center;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 400;
  line-height: 120%;
  color: var(--color-white);
}

.booking-placeholder {
  margin-top: 30px;
  color: var(--color-white);
}

/* tablet */

@media (min-width:768px) {
  .hero {
    min-height: 1100px;
    padding-top: 410px;
  }

  .hero-title {
    font-size: 52px;
  }

  .booking-placeholder {
    margin-top: 60px;
  }
}

/* desktop */

@media (min-width:1440px) {
  .hero {
    min-height: 810px;
    padding-top: 346px;
  }

  .hero-title {
    max-width: 950px;
    font-size: 56px;
  }
}
</style>