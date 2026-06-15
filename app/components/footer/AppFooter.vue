<template>
  <footer class="footer">
    <div class="main-wrapper">
      <span class="section-title footer-title">Контактная информация</span>
      <div>
        <div class="contacts-wrapper">
          <span>Телефон:</span>
          <a class="footer-link" href="tel:+74994509596">8(499)450-95-96</a>
        </div>
        <div class="contacts-wrapper">
          <span>email:</span>
          <a class="footer-link" href="mailto:">online@wild-hunter.ru</a>
        </div>
        <div class="contacts-wrapper">
          <span>Адрес:</span>
          <span>г. Москва, Дмитровское ш., 60</span>
        </div>
      </div>
    </div>
    <div class="docs-wrapper">
      <span class="footer-rights">© 2014-2026 гг. | wild-hunter.ru | Все права защищены.</span>
      <ul class="footer-list">
        <li v-for="doc in docsList" class="footer-list-item">
          <a target="_blank" :href="doc.link" class="footer-link">{{ doc.title }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
const docsList = [
  {
    title: 'Блог',
    link: '',
  },
  {
    title: 'Политика конфиденциальности',
    link: '',
  },
  {
    title: 'Согласие на обработку персональных данных',
    link: '',
  },
  {
    title: 'Правила и условия',
    link: '',
  }
]
</script>

<style scoped>
.footer {
  padding: 30px 15px 10px;
  background-color: var(--color-background);
}
.footer-title {
  text-align: start;
  margin-bottom: 15px;
}
.contacts-wrapper {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.footer-link {
  text-decoration: none;
  color: var(--color-dark);
}
.footer-rights {
  margin-bottom: 30px;
}
.docs-wrapper {
  margin-top: 50px;
  margin-bottom: 30px;
}
.footer-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
@media (min-width:768px) {
  .footer {
    padding: 30px 20px 15px;
  }
  .main-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .docs-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer-rights {
    margin-bottom: 0;
  }

}
@media (min-width:1440px) {
  .footer {
    padding: 50px 120px 25px;
  }


}
</style>