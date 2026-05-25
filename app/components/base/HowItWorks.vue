<template>
  <section class="how-it-works">
    <h2 class="how-it-works__title">КАК ЭТО РАБОТАЕТ</h2>

    <!-- Desktop / Tablet: единая линия + чипы поверх неё -->
    <div class="how-it-works__track-area">
      <!-- Сквозная пунктирная линия -->
      <div class="how-it-works__line" aria-hidden="true" />

      <!-- Чипы -->
      <div class="how-it-works__chips-row">
        <div
            v-for="(step, index) in steps"
            :key="step.id"
            class="how-it-works__step"
            :class="`how-it-works__step--${index + 1}`"
        >
          <!-- Стрелка перед чипом (кроме первого) -->
          <span v-if="index > 0" class="how-it-works__arrow" aria-hidden="true">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L10 6L0 12V0Z" fill="var(--color-accent)" />
            </svg>
          </span>

          <div class="how-it-works__chip">{{ step.label }}</div>

          <p class="how-it-works__text">{{ step.description }}</p>
        </div>
      </div>
    </div>

    <!-- Mobile: карточки в колонку -->
    <div class="how-it-works__mobile-list">
      <div
          v-for="step in steps"
          :key="`mob-${step.id}`"
          class="how-it-works__card"
      >
        <div class="how-it-works__chip">{{ step.label }}</div>
        <p class="how-it-works__card-text">{{ step.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { id: 1, label: 'ШАГ 1', description: 'ВЫБИРАЕТЕ ОХОТУ И СОБИРАЕТЕ СМЕТУ' },
  { id: 2, label: 'ШАГ 2', description: 'ПОДБИРАЕТЕ СНАРЯЖЕНИЕ И ОБОРУДОВАНИЕ' },
  { id: 3, label: 'ШАГ 3', description: 'СОГЛАСОВЫВАЕТЕ МАРШРУТ С ГИДОМ' },
  { id: 4, label: 'ШАГ 4', description: 'ОПЛАЧИВАЕТЕ И ПОЛУЧАЕТЕ ПОДТВЕРЖДЕНИЕ' },
  { id: 5, label: 'ШАГ 5', description: 'ОТПРАВЛЯЕТЕСЬ НА ОХОТУ' },
]
</script>

<style scoped>
/* ─── Design tokens (переопредели глобально в своём проекте) ─── */
:root {
  --color-dark: #1a1a1a;
  --color-primary: #2d6a2d;
  --color-accent: #e07b39;
  --color-white: #ffffff;
}

/* ════════════════════════════════════════
   SECTION
════════════════════════════════════════ */
.how-it-works {
  width: 100%;
  padding: 64px 60px;
  box-sizing: border-box;
}

/* ════════════════════════════════════════
   TITLE
════════════════════════════════════════ */
.how-it-works__title {
  text-align: center;
  font-size: 44px;
  font-weight: 400;
  color: var(--color-dark);
  text-transform: uppercase;
  margin: 0 0 50px;
  letter-spacing: 0.06em;
}

/* ════════════════════════════════════════
   DESKTOP TRACK AREA
════════════════════════════════════════ */
.how-it-works__track-area {
  position: relative;
}

/* Сквозная пунктирная линия — по центру высоты чипа (40px / 2 = 20px) */
.how-it-works__line {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 0;
  border-top: 2px dashed var(--color-accent);
  z-index: 0;
}

/* Ряд чипов поверх линии */
.how-it-works__chips-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* ─── Один шаг ─── */
.how-it-works__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

/* ─── Стрелка — прямо перед чипом по оси линии ─── */
.how-it-works__arrow {
  position: absolute;
  top: 14px; /* (40 - 12) / 2 = 14 — центрируем SVG 12px по высоте чипа */
  right: calc(100% + 4px);
  display: flex;
  align-items: center;
  line-height: 0;
}

/* ─── Chip ─── */
.how-it-works__chip {
  width: 85px;
  height: 40px;
  border-radius: 100px;
  background-color: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: 0.04em;
}

/* ─── Description text ─── */
.how-it-works__text {
  margin: 20px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--color-dark);
  text-align: center;
  max-width: 130px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

/* Mobile list скрыт на десктопе/планшете */
.how-it-works__mobile-list {
  display: none;
}

/* ════════════════════════════════════════
   TABLET — 768px (шахматный порядок)
════════════════════════════════════════ */
@media (max-width: 1023px) and (min-width: 376px) {
  .how-it-works {
    padding: 48px 20px;
  }

  .how-it-works__title {
    font-size: 32px;
  }

  /* Убираем горизонтальную линию */
  .how-it-works__line {
    display: none;
  }

  /* Скрываем позиционированные стрелки */
  .how-it-works__arrow {
    display: none;
  }

  /* Шахматная сетка */
  .how-it-works__chips-row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto auto;
    align-items: start;
    justify-items: center;
  }

  .how-it-works__step--1 { grid-column: 1; grid-row: 1; }
  .how-it-works__step--2 { grid-column: 2; grid-row: 2; padding-top: 60px; }
  .how-it-works__step--3 { grid-column: 3; grid-row: 1; }
  .how-it-works__step--4 { grid-column: 4; grid-row: 2; padding-top: 60px; }
  .how-it-works__step--5 { grid-column: 5; grid-row: 1; }

  /* Диагональные пунктирные линии через ::after */
  .how-it-works__step--1::after,
  .how-it-works__step--2::after,
  .how-it-works__step--3::after,
  .how-it-works__step--4::after {
    content: '';
    position: absolute;
    left: 85px;
    top: 20px;
    width: 80px;
    height: 2px;
    border-top: 2px dashed var(--color-accent);
    pointer-events: none;
    z-index: 0;
  }

  /* Шаг 1 и 3: вниз-вправо */
  .how-it-works__step--1::after,
  .how-it-works__step--3::after {
    transform-origin: left center;
    transform: rotate(45deg);
  }

  /* Шаг 2 и 4: вверх-вправо */
  .how-it-works__step--2::after,
  .how-it-works__step--4::after {
    transform-origin: left center;
    transform: rotate(-45deg);
  }
}

/* ════════════════════════════════════════
   MOBILE — до 375px (карточки в колонку)
════════════════════════════════════════ */
@media (max-width: 375px) {
  .how-it-works {
    padding: 40px 15px;
  }

  .how-it-works__title {
    font-size: 24px;
    margin-bottom: 32px;
  }

  /* Скрываем десктопный layout */
  .how-it-works__track-area {
    display: none;
  }

  /* Показываем мобильные карточки */
  .how-it-works__mobile-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

  .how-it-works__card {
    width: 345px;
    height: 84px;
    border-radius: 12px;
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.15);
    background-color: var(--color-white);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    gap: 16px;
  }

  /* В карточке чип уже задан общим .how-it-works__chip */
  .how-it-works__card .how-it-works__chip {
    flex-shrink: 0;
  }

  .how-it-works__card-text {
    margin: 0;
    font-size: 13px;
    line-height: 1.4;
    color: var(--color-dark);
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
}
</style>