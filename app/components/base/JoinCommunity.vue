<template>
  <section class="join">
    <div class="content">

      <div class="right">

        <h2 class="title">
          ПРИСОЕДИНЯЙТЕСЬ К НАШЕМУ СООБЩЕСТВУ
        </h2>

        <div class="form">
          Форма обратной связи
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import bg from '~/assets/img/deer.webp'
</script>

<style scoped>
.join {
  width: 1440px;
  height: 562px;
  margin: 0 auto;
  background-image: url('~/assets/img/deer.webp');
  background-size: cover;
  background-position: center 5%;
  display: flex;
  align-items: center;
  padding: 125px 158px;
}

.content {
  width: 100%;
  display: flex;
}

.right {
  margin-left: auto;
  width: 50%;
  color: var(--color-white);
}

.title {
  font-size: 44px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.form {
  font-size: 18px;
}

/* 768 */
@media (max-width: 768px) {
  .join {
    width: 768px;
    height: 434px;
    padding: 60px 20px;
  }

  .right {
    width: 100%;
  }

  .title {
    font-size: 32px;
  }
}

/* 375 */
@media (max-width: 375px) {
  .join {
    width: 375px;
    height: 437px;
    padding: 162px 15px;
    justify-content: center;
    text-align: center;
  }

  .right {
    width: 100%;
    margin: 0;
  }

  .title {
    font-size: 24px;
    margin-bottom: 30px;
  }
}
</style>