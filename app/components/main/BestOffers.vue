<template>
  <section class="offers">
    <div class="container">
      <h2 class="section-title">Лучшие предложения сейчас</h2>
      <div class="slider-wrapper">
        <button class="slider-button slider-button-prev">
          <img src="~/assets/icons/arrow-left.svg" alt="arrow-left">
        </button>
        <Swiper
            :modules="modules"
            :navigation="{
            prevEl: '.slider-button-prev',
            nextEl: '.slider-button-next'
          }"
            :breakpoints="{
            375: {
              slidesPerView: 'auto',
              spaceBetween: 5
            },
            768: {
              slidesPerView: 'auto',
              spaceBetween: 8
            },
            1440: {
              slidesPerView: 'auto',
              spaceBetween: 24
            },
          }"
            class="slider"
        >
          <SwiperSlide
              v-for="item in offersStore.hotelsOffers"
              :key="item.id"
              class="slide"
          >
            <div class="card"
                 :style="{
                  backgroundImage: item.image_url
                    ? `url(${item.image_url})`
                    : `url(/_nuxt/assets/img/base.webp)`
                  }"
            >
              <LikeButton :service-id="item.id" type="hotel" />
              <div class="meta">
                <div class="reviews">32 отзыва</div>
                <div class="rating">
                  <img class="rating-star" src="~/assets/icons/star.svg" alt="star">
                  <span>4,9</span>
                </div>
              </div>
            </div>
            <div>
              <div> {{ item.title }} </div>
              <div> {{ item.slug }} </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button class="slider-button slider-button-next">
          <img src="~/assets/icons/arrow-right.svg" alt="arrow-right">
        </button>
      </div>

      <UiButton class="btn show-all-button">
        Смотреть все
      </UiButton>
    </div>
  </section>
</template>

<script setup>
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useOffersStore } from '~/store/offers.js'

import 'swiper/css'
import 'swiper/css/navigation'
import LikeButton from '~/components/main/LikeButton.vue'

const offersStore = useOffersStore()
offersStore.fetchHotelsOffers()
const modules = [Navigation]

</script>

<style scoped>
.offers {
  margin-top: 100px;
  margin-bottom: 120px;
}
.slider-wrapper {
  position: relative;
}
.slide {
  width: auto;
}
.card {
  position: relative;
  width: 325px;
  height: 345px;
  padding: 20px;
  border-radius: var(--border-radius);
  background-size: cover;
  background-position: center;
}
.like-btn {
  position: absolute;
  top: 20px;
  right: 20px;
}
.show-all-button {
  padding: 16px 50px;
  margin: 0 auto;
  margin-top: 40px;
}
.meta {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  color: var(--color-white);
}
.reviews {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.05em;
  margin-right: 12px;
}
.rating {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
}
.rating-star {
  margin-right: 2px;
}
.slider-button {
  display: none;
}
@media (min-width:768px) {
  .slider {
    padding: 0 20px;
  }
  .card {
    width: 360px;
    height: 300px;
  }
}

@media (min-width:1440px) {
  .offers {
    margin-top: 80px;
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