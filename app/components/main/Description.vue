<template>
  <section class="project-description">
    <div class="container-page">

      <h2 class="title">
        О ПРОЕКТЕ
      </h2>

      <div class="content">

        <div class="text-block">
          Мы рады приветствовать вас на нашем сайте, созданном для объединения
          охотников и владельцев охотничьих хозяйств по всей России.
          На платформе wild-hunter.ru вы можете:

          Планировать индивидуальные и групповые охоты с учётом ваших
          предпочтений.

          Бронировать проживание, питание и дополнительные услуги напрямую
          у охотхозяйств.

          Выбирать регионы и сезоны охоты, а также виды животных для добычи.

          Устанавливать прямые контакты с охотхозяйствами без посредников
          и дополнительных комиссий.

          Для охотхозяйств мы предлагаем:

          Эффективный канал для привлечения новых клиентов и увеличения
          загрузки базы.

          Полную автоматизацию процесса бронирования и организации
          охотничьих туров.

          Возможность приёма платежей через наши офисы в Москве
          и онлайн-системы.
        </div>

        <div class="text-block">
          Wild Hunter — это также сообщество настоящих охотников,
          объединенных общей страстью.

          Мы предлагаем уникальные инструменты для организации охоты,
          делая процесс более удобным и эффективным.

          Присоединяйтесь к нам и станьте частью новой эры охоты
          в России.

          Мы предоставляем охотникам инструменты для самостоятельной
          организации охоты, включая выбор охотничьих угодий,
          согласование условий и управление участниками.

          Это позволяет создавать мероприятия, полностью
          соответствующие предпочтениям и требованиям охотников.

          Платформа обеспечивает полную прозрачность финансовых операций,
          связанных с организацией охоты.

          Все расходы и платежи фиксируются в системе, что позволяет
          участникам видеть распределение средств и избегать
          недоразумений.
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.project-description {
  padding: 40px 15px;
  background: var(--color-primary);
}

.title {
  margin-bottom: 30px;
  color: var(--color-white);
  font-family: uncage;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.text-block {
  color: var(--color-white);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  white-space: pre-line;
}

@media (min-width:768px) {
  .project-description {
    padding: 40px 20px;
  }

  .title {
    margin-bottom: 40px;
    font-size: 32px;
  }
}

@media (min-width:1440px) {
  .project-description {
    padding: 60px 120px;
  }

  .title {
    margin-bottom: 50px;
    font-size: 44px;
  }

  .content {
    flex-direction: row;
    gap: 16px;
  }

  .text-block {
    flex: 1;
    font-size: 18px;
  }
}
</style>