<template>
  <section class="faq-section">
    <div class="container">
      <h2 class="section-title">Часто задаваемые вопросы</h2>
      <div class="item-wrapper">
        <ul v-for="(item, index) in items" :key="index" class="question-list">
          <li class="list-item" @click="toggle(index)">
            <div class="question-wrapper">
              <div class="item-wrap">
                <div class="item-number">{{ index + 1 }}</div>
                <div class="item-question">{{ item.question }}</div>
              </div>
              <div class="icon">
                <img v-if="opened === index" src="~/assets/icons/minus.svg" alt="minus">
                <img v-else src="~/assets/icons/plus.svg" alt="plus">
              </div>
            </div>
            <div class="answer">
              <span v-if="opened === index">{{ item.answer }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="support">
        <div class="support-title">ОСТАЛИСЬ ВОПРОСЫ?</div>
        <div class="support-wrapper">
          <div class="support-text">Напишите нам и мы проконсультируем вас и ответим на вопросы</div>
          <UiButton class="btn support-btn">
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
    question: 'Нужно ли проходить обучение, чтобы стать охотником?',
    answer: 'Да, обучение является обязательным этапом для законной охоты в России. Чтобы получить охотничий билет, вам необходимо изучить и успешно сдать экзамен по правилам охоты, технике безопасности при обращении с оружием, основам биологии диких животных и правилам оказания первой помощи в полевых условиях.',
  },
  {
    question: 'Как оформить бронирование?',
    answer: 'Вы выбираете базу, дату и отправляете заявку через систему.',
  },
  {
    question: 'Можно ли отменить бронь?',
    answer: 'Да, согласно правилам конкретной базы.',
  },
  {
    question: 'Есть ли поддержка?',
    answer: 'Да, поддержка работает ежедневно.',
  },
  {
    question: 'Как выбрать регион?',
    answer: 'Вы можете использовать фильтр по регионам на сайте.',
  },
]
</script>

<style scoped>
.faq-section {
  margin-top: 80px;
  margin-bottom: 100px;
}
.item-wrapper {
}
.question-list {
  padding: 0;
  list-style: none;
}
.list-item {
  border-top: 1px solid var(--color-grey);
  border-bottom: 1px solid var(--color-grey);
}
.question-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}
.item-wrap {
  display: flex;
  align-items: center;
}
.item-number {
  background-color: var(--color-primary);
  color: var(--color-white);
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  text-align: center;
  border-radius: 100%;
  padding-top: 10px;
  margin-right: 10px;
}
.item-question {
  text-align: left;
  font-weight: 600;
  font-size: 20px;
  max-width: 225px;
}
.answer {
  font-weight: 400;
  font-size: 16px;
  padding-left: 50px;
  padding-bottom: 16px;
}
.support {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.support-title {
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 16px;
}
.support-text {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
}
.support-btn {
  width: 100%;
  padding: 15px 0;
}
.support-wrapper {
  display: flex;
  flex-direction: column;
}
@media (min-width: 480px) {
  .item-question {
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .support-title {
    font-size: 28px;
  }
  .support {
    flex-direction: row;
    justify-content: space-between;
  }
  .support-wrapper {
    width: 50%;
    align-items: center;
  }
  .support-title {
    margin-bottom: 0;
  }
}
@media (min-width: 1440px) {
  .support-title {
    font-size: 32px;
  }
  .support-wrapper {
    flex-direction: row;
    align-items: center;
  }
  .support-text {
    margin-bottom: 0;
  }
  .support-btn {
    width: 187px;
  }
}
</style>