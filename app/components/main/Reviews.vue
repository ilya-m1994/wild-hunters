<template>
  <section class="reviews">
    <div class="container">
      <h2 class="section-title">Отзывы</h2>
      <div class="slider-wrapper">
        <button class="slider-button slider-button-prev">
          <img src="~/assets/icons/arrow-left.svg" alt="arrow-left">
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
              v-for="item in reviews"
              :key="item.id"
              class="slide"
          >
            <div class="card">
              <div class="header">
                <div class="avatar">
                  <img
                      v-if="item.author?.avatar_url"
                      :src="item.author.avatar_url"
                      :alt="item.author.name"
                      class="avatar-image"
                  >
                </div>
                <div class="info">
                  <div class="name">
                    {{ item.author?.name }}
                  </div>

                  <div class="profession">
                    {{ item.bio }}
                  </div>
                </div>
              </div>
              <div class="text">
                {{ item.rate_text }}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button class="slider-button slider-button-next">
          <img src="~/assets/icons/arrow-right.svg" alt="arrow-right">
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { useAuthStore } from '~/store/auth.js'

const modules = [Navigation]
const authStore = useAuthStore()
const config = useRuntimeConfig()

const reviews = ref([])

const fetchReviews = async () => {
  try {
    const response = await $fetch(
        `${config.public.apiUrl}/services/reviews`,
        {
          method: 'POST',
          body: {
            type: 'hotel',
            order_by: 'created_at',
            order_direction: 'desc',
            limit: 3
          },
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authStore.token}`,
          },
        }
    )

    reviews.value = response.data
  } catch (e) {
    console.log(e)
  } finally {
  }
}

fetchReviews()
</script>

<style scoped>
.reviews {
  margin-top: 80px;
  margin-bottom: 80px;
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
  height: 242px;
  padding: 20px;
  border-radius: 12px;
  background: var(--color-primary);
}
.header {
  display: flex;
  align-items: center;
}
.avatar {
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--color-grey);
  overflow: hidden;
}
.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.info {
  margin-left: 12px;
}
.name {
  font-family: 'Inter', sans-serif;
  color: var(--color-white);
  font-size: 20px;
  font-weight: 600;
}
.profession {
  font-family: 'Inter', sans-serif;
  color: var(--color-grey);
  font-size: 14px;
  font-weight: 400;
}
.text {
  font-family: 'Inter', sans-serif;
  margin-top: 20px;
  color: var(--color-white);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
}
.slider-button {
  display: none;
}
@media (min-width:768px) {
  .reviews {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .slider {
    padding: 0 20px;
  }
  .card {
    width: 360px;
    height: 221px;
  }
  .text {
    font-size: 16px;
  }
}
@media (min-width:1440px) {
  .reviews {
    margin-top: 120px;
    margin-bottom: 120px;
  }
  .slider {
    padding: 0 50px;
  }
  .card {
    width: 388px;
    height: 277px;
  }
  .text {
    font-size: 18px;
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