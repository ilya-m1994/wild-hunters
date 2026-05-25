<template>
  <section class="locations">
    <div class="container-page">
      <h2 class="locations-title">
        ЛУЧШИЕ ЛОКАЦИИ
      </h2>

      <div class="slider-wrapper">
        <button class="slider-button slider-button-prev">
          ‹
        </button>

        <Swiper
            :modules="modules"
            :slides-per-view="'auto'"
            :navigation="{
            prevEl: '.slider-button-prev',
            nextEl: '.slider-button-next',
            }"
            :breakpoints="{
              375: {
                spaceBetween: 10,
              },
              768: {
                spaceBetween: 8,
              },
              1440: {
                spaceBetween: 16,
              },
            }"
            class="slider"
        >
          <SwiperSlide
              v-for="item in locations"
              :key="item.id"
              class="slide"
          >
            <div class="card">
              <img
                  :src="item.image"
                  :alt="item.title"
                  class="card-image"
              >

              <div class="card-overlay">
                <div class="card-title">
                  {{ item.title }}
                </div>

                <div class="card-count">
                  {{ item.count }}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button class="slider-button slider-button-next">
          ›
        </button>
      </div>

      <div class="button-wrapper">
        <UiButton class="show-all-button">
          Смотреть все
        </UiButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import location1 from '~/assets/img/location-1.jpg'
import location2 from '~/assets/img/location-2.jpg'
import location3 from '~/assets/img/location-3.jpg'

const modules = [Navigation]

const locations = [
  {
    id: 1,
    title: 'Тверская область',
    count: '3 базы',
    image: location1,
  },
  {
    id: 2,
    title: 'Ярославская область',
    count: '3 баз',
    image: location2,
  },
  {
    id: 3,
    title: 'Московская область',
    count: '3 базы',
    image: location3,
  },
  {
    id: 4,
    title: 'Свердловская область',
    count: '3 базы',
    image: location1,
  },
]
</script>

<style scoped>
.locations-title {
  margin-bottom: 30px;
  color: var(--color-dark);
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}

.slider-wrapper {
  position: relative;
}

.slider {
  padding: 0 15px;
}

.slide {
  width: auto;
}

.card {
  position: relative;
  width: 325px;
  height: 325px;
  overflow: hidden;
  border-radius: 12px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.card-overlay {
  position: absolute;
  inset: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
}

.card-title {
  font-size: 20px;
  font-weight: 600;
}

.card-count {
  position: absolute;
  bottom: 20px;
  font-size: 20px;
  font-weight: 600;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.show-all-button {
  padding: 16px 50px;
}

.slider-button {
  display: none;
}

@media (min-width:768px) {
  .locations-title {
    margin-bottom: 40px;
    font-size: 32px;
  }

  .slider {
    padding: 0 20px;
  }

  .card {
    width: 237px;
    height: 237px;
  }
}

@media (min-width:1440px) {
  .locations-title {
    margin-bottom: 50px;
    font-size: 44px;
  }

  .slider {
    padding: 0 50px;
  }

  .card {
    width: 389px;
    height: 389px;
  }

  .show-all-button {
    padding: 16px 20px;
  }

  .slider-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    z-index: 10;
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    color: var(--color-dark);
    font-size: 40px;
    cursor: pointer;
    transform: translateY(-50%);
  }

  .slider-button-prev {
    left: 0;
  }

  .slider-button-next {
    right: 0;
  }
}
</style>