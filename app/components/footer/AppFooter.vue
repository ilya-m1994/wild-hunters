<template>
  <footer class="footer">
    <div class="top">

      <div class="section">
        <h3 class="title">
          Охотникам
        </h3>

        <a href="#" class="link">
          Вопрос - ответ
        </a>

        <a href="#" class="link">
          Служба поддержки
        </a>
      </div>

      <div class="section">
        <h3 class="title">
          Охотохозяйствам
        </h3>

        <a href="#" class="link">
          Вопрос - ответ
        </a>

        <a href="#" class="link">
          Служба поддержки
        </a>
      </div>

      <div class="section">
        <h3 class="title">
          О компании
        </h3>

        <a href="#" class="link">
          Вопрос - ответ
        </a>

        <a href="#" class="link">
          Служба поддержки
        </a>
      </div>

      <div class="section">
        <h3 class="title">
          Контакты
        </h3>

        <a href="tel:+79991234567" class="link">
          +7 (999) 123-45-67
        </a>

        <a href="mailto:info@oxota.com" class="link">
          info@oxota.com
        </a>
      </div>

      <div class="section community">
        <h3 class="title">
          Присоединиться к нашему сообществу
        </h3>

        <div class="socials">
          <a href="#" class="icon">
            MAX
          </a>

          <a href="#" class="icon">
            TG
          </a>

          <a href="#" class="icon">
            VK
          </a>
        </div>
      </div>

    </div>

    <div class="bottom">

      <div class="policies">

        <a href="#" class="policy">
          Политика конфиденциальности
        </a>

        <a href="#" class="policy">
          Согласие на обработку персональных данных
        </a>

        <a href="#" class="policy">
          Правила и условия
        </a>

        <a href="#" class="policy">
          Оферта
        </a>

      </div>

      <div class="copyright">
        © 2014-2026 гг. | wild-hunter.ru |
        Все права защищены.
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 30px 15px 10px;
}

.top {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 30px 20px;
}

.section {
  display: flex;
  flex-direction: column;
}

.community {
  grid-column: span 2;
}

.title {
  padding-bottom: 20px;
  color: var(--color-dark);
  font-family: Inter,sans-serif;
  font-size: 20px;
  font-weight: 600;
}

.link {
  font-family: 'Inter', sans-serif;
  padding-bottom: 8px;
  color: var(--color-dark);
  font-size: 16px;
  font-weight: 400;
}

.socials {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icon {
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-accent);
  border-radius: 50%;
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom {
  margin-top: 40px;
}

.policies {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.policy {
  font-family: 'Inter', sans-serif;
  color: var(--color-dark);
  font-size: 14px;
  text-decoration: underline;
}

.copyright {
  margin-top: 20px;
  color: var(--color-dark);
  font-size: 14px;
}

/* 768 */

@media (min-width:768px) {
  .footer {
    padding: 30px 20px 15px;
  }

  .top {
    grid-template-columns: repeat(4,1fr);
  }

  .community {
    grid-column: span 4;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .community .title {
    padding-bottom: 0;
  }

  .socials {
    flex-direction: row;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  .policies {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 12px;
  }

  .copyright {
    margin-top: 0;
    max-width: 180px;
  }
}

/* 1440 */

@media (min-width:1440px) {
  .footer {
    padding: 50px 120px 25px;
  }

  .top {
    grid-template-columns: repeat(5,1fr);
  }

  .community {
    grid-column: auto;
    display: block;
  }

  .community .title {
    padding-bottom: 20px;
  }

  .socials {
    flex-direction: row;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .policies {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  .copyright {
    max-width: none;
  }
}
</style>