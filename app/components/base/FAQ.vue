<template>
  <section class="faq">
    <div class="container-page">

      <h2 class="title">
        Часто задаваемые вопросы
      </h2>

      <div class="box">
        <div
            v-for="(item, index) in items"
            :key="index"
            class="item"
        >
          <div class="row" @click="toggle(index)">
            <div class="left">
              <div class="num">
                {{ index + 1 }}
              </div>
              <div class="question">
                {{ item.q }}
              </div>
            </div>

            <!-- Ответ для Desktop и Tablet (появляется в центре строки) -->
            <div class="answer-desktop">
              <span v-if="opened === index">{{ item.a }}</span>
            </div>

            <div class="icon">
              {{ opened === index ? '−' : '+' }}
            </div>
          </div>

          <!-- Ответ для Mobile (появляется под вопросом) -->
          <div class="answer-mobile" v-if="opened === index">
            {{ item.a }}
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="bottom-left">
          ОСТАЛИСЬ ВОПРОСЫ?
        </div>

        <div class="bottom-right">
          <div class="bottom-text">
            Напишите нам и мы проконсультируем вас и ответим на вопросы
          </div>
          <UiButton>
            Поддержка
          </UiButton>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const opened = ref(null)

const toggle = (i) => {
  opened.value = opened.value === i ? null : i
}

const items = [
  {
    q: 'Нужно ли проходить обучение, чтобы стать охотником?',
    a: 'Да, обучение является обязательным этапом для законной охоты в России. Чтобы получить охотничий билет, вам необходимо изучить и успешно сдать экзамен по правилам охоты, технике безопасности при обращении с оружием, основам биологии диких животных и правилам оказания первой помощи в полевых условиях.',
  },
  {
    q: 'Как оформить бронирование?',
    a: 'Вы выбираете базу, дату и отправляете заявку через систему.',
  },
  {
    q: 'Можно ли отменить бронь?',
    a: 'Да, согласно правилам конкретной базы.',
  },
  {
    q: 'Есть ли поддержка?',
    a: 'Да, поддержка работает ежедневно.',
  },
  {
    q: 'Как выбрать регион?',
    a: 'Вы можете использовать фильтр по регионам на сайте.',
  },
]
</script>

<style scoped>
.faq {
  margin-top: 100px;
  margin-bottom: 100px;
}

/* --- DESKTOP (1440px) --- */
.title {
  text-align: center;
  text-transform: uppercase;
  font-size: 44px;
  font-weight: 400;
  color: var(--color-dark);
  margin-bottom: 50px;
}

.box {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.item {
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Центрируем, если текст ответа будет многострочным */
  cursor: pointer;
  gap: 32px;
}

.left {
  display: flex;
  align-items: center;
  gap: 32px;
  flex: 0 0 auto;
  max-width: 40%; /* Ограничиваем ширину левой части */
}

.num {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 400;
}

.question {
  font-size: 18px;
  color: var(--color-dark);
}

.answer-desktop {
  flex: 1; /* Занимает всё пустое пространство между вопросом и крестиком */
  font-size: 16px;
  color: var(--color-dark);
  padding: 0 20px;
}

.answer-mobile {
  display: none; /* Скрыто на десктопе */
}

.icon {
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  color: var(--color-dark);
  user-select: none;
}

.bottom {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom-left {
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-dark);
}

.bottom-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.bottom-text {
  font-size: 16px;
  color: var(--color-dark);
}


/* --- TABLET (768px) --- */
@media (max-width: 768px) {
  .title {
    font-size: 32px;
    margin-bottom: 40px;
  }

  .box {
    max-width: 728px;
  }

  .left {
    max-width: 50%;
  }

  .bottom-right {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}


/* --- MOBILE (375px) --- */
@media (max-width: 480px) {
  .title {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .row {
    gap: 16px;
    align-items: flex-start;
  }

  .left {
    max-width: 100%;
    gap: 16px;
  }

  .question {
    font-size: 16px;
  }

  .answer-desktop {
    display: none;
  }

  .answer-mobile {
    display: block; /* Включаем отображение снизу */
    margin-top: 12px;
    margin-left: 56px; /* Отступ 40px (кружок) + 16px (gap), чтобы текст встал ровно под вопросом */
    font-size: 14px;
    color: var(--color-dark);
  }

  .bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
}
</style>