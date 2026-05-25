<template>
  <section class="offers">
    <div class="container-page">
      <h2 class="title">
        ЛУЧШИЕ ПРЕДЛОЖЕНИЯ СЕЙЧАС
      </h2>

      <div class="slider-wrapper">
        <button class="slider-button slider-button-prev">
          ‹
        </button>

        <Swiper
            :modules="modules"
            :navigation="{
            prevEl: '.slider-button-prev',
            nextEl: '.slider-button-next',
          }"
            :breakpoints="{
            375: {
              slidesPerView: 'auto',
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 'auto',
              spaceBetween: 8,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }"
            class="slider"
        >
          <SwiperSlide
              v-for="item in items"
              :key="item.id"
              class="slide"
          >
            <div class="card">
              <div class="image">
                <img
                    :src="item.image"
                    :alt="item.name"
                >

                <button class="fav">
                  ♥
                </button>

                <div class="meta">
                  <div class="reviews">
                    32 отзыва
                  </div>

                  <div class="rating">
                    ★ 4,9
                  </div>
                </div>
              </div>

              <div class="content">
                <div class="name">
                  {{ item.name }}
                </div>

                <div class="region">
                  {{ item.region }}
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

import baseImage from '~/assets/img/base.webp'

const modules = [Navigation]

const items = [
  {
    id: 1,
    name: 'База 1',
    region: 'Московская область',
    image: baseImage,
  },
  {
    id: 2,
    name: 'База 2',
    region: 'Тверская область',
    image: baseImage,
  },
  {
    id: 3,
    name: 'База 3',
    region: 'Рязанская область',
    image: baseImage,
  },
  {
    id: 4,
    name: 'База 4',
    region: 'Калужская область',
    image: baseImage,
  },
  {
    id: 5,
    name: 'База 5',
    region: 'Тульская область',
    image: baseImage,
  },
]
</script>

<style scoped>
.offers {
  margin-top: 100px;
  margin-bottom: 120px;
}

.title {
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
  width: 325px;
  padding: 20px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.show-all-button {
  padding: 16px 50px;
}

.image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
}

.image img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.fav {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-white);
}

.meta {
  position: absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
  display: flex;
  justify-content: space-between;
  color: var(--color-white);
}

.reviews {
  font-size: 14px;
  font-weight: 400;
}

.rating {
  font-size: 16px;
  font-weight: 400;
}

.content {
  margin-top: 12px;
}

.name {
  color: var(--color-dark);
  font-size: 20px;
  font-weight: 600;
}

.region {
  color: var(--color-dark);
  font-size: 16px;
  font-weight: 400;
}

.button-wrap {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.slider-button {
  display: none;
}

@media (min-width:768px) {
  .title {
    margin-bottom: 40px;
    font-size: 32px;
  }

  .slider {
    padding: 0 20px;
  }

  .card {
    width: 360px;
    height: 361px;
  }

  .button-wrap {
    margin-top: 30px;
  }
}

@media (min-width:1440px) {
  .offers {
    margin-top: 80px;
  }

  .title {
    margin-bottom: 50px;
    font-size: 44px;
  }

  .slider {
    padding: 0 50px;
  }

  .card {
    width: 288px;
    height: 300px;
  }

  .show-all-button {
    padding: 16px 20px;
  }

  .slider-button {
    position: absolute;
    top: 50%;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
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