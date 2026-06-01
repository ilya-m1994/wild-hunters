<template>
  <section class="join">
    <div class="container">
      <div class="join-form">
        <h2 class="section-title join-title">Присоединяйтесь к нашему сообществу</h2>
        <form>
          <input type="text" placeholder="Ваш email" class="join-input">
          <label class="join-label">
            <input class="join-checkbox" type="checkbox" checked />
            <label>Я согласен с политикой конфиденциальности</label>
          </label>
          <div>
            <UiButton class="btn mail-btn">Подписаться на рассылку</UiButton>
            <div class="btns-wrapper">
              <UiButton class="btn social-btn">TELEGRAM</UiButton>
              <UiButton class="btn social-btn">MAX</UiButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.join {
  margin: 0 auto;
  min-height: 437px;
  background-image: url('~/assets/img/deer.webp');
  background-size: cover;
  background-position: center 5%;
  display: flex;
  align-items: center;
  padding: 162px 15px 20px 15px;
}
.join-title {
  color: var(--color-white);
  text-align: left;
}
.join-input {
  display: block;
  width: 100%;
  padding: 10px 8px;
  background: transparent;
  border: none;
  color: var(--color-white);
  border-bottom: 1px solid var(--color-white);
  caret-color: var(--color-white);
}
.join-input:focus {
  outline: none;
}
.join-input::placeholder {
  color: var(--color-white);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.05em;
}
.join-label {
  color: var(--color-white);
  font-weight: 400;
  font-size: 12px;
}
.join-checkbox {
  margin-top: 10px;
  margin-right: 5px;
}
.mail-btn {
  width: 100%;
  padding: 15px 0;
  margin-top: 20px;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.05em;
}
.btns-wrapper {
  display: flex;
}
.social-btn {
  width: 100%;
  padding: 15px 0;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.05em;
}
.social-btn:not(:last-child) {
  margin-right: 8px;
}
@media (min-width: 768px) {
  .join-form {
    max-width: 50%;
    margin-left: auto;
  }
  .join {
    padding-top: 60px;
  }
}
@media (min-width: 1440px) {
  .join {
    padding-top: 125px;
  }
}
</style>