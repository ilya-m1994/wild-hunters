<template>
  <Hero variant="compact" />
  <section class="bases-section">
    <div class="container">
      <div class="title-wrapper">
        <UiButton
            class="btn title-filter-btn"
            variant="text"
            @click="toggleFilters"
        >
          Фильтры
        </UiButton>
        <h1 class="section-title bases-title">Найдено баз: 12</h1>
        <UiButton
            class="btn title-map-btn"
            variant="text"
        >
          Показать на карте
        </UiButton>
      </div>
      <UiButton
          class="btn filters-btn"
          @click="toggleFilters"
      >
        Фильтры
      </UiButton>

      <div class="bases-wrapper">
        <div v-if="isDesktop" class="filters">
          <div class="filter-wrapper">
            <div class="filters-title">Фильтры</div>
          </div>
          <FiltersList />
        </div>
        <ul class="bases-list">
          <li v-for="base in basesList" :key="base.id">
            <BaseCard
                :reviews="base.reviews"
                :rating="base.rating"
                :name="base.name"
                :region="base.region"
                :price="base.price"
            />
          </li>
        </ul>
      </div>
    </div>
    <Modal v-if="!isDesktop" v-model="showFilters">
      <div class="filters modal-filters">
        <div class="filter-wrapper">
          <div class="filters-title">Фильтры</div>
          <button class="btn" @click="showFilters = false">
            <img src="~/assets/icons/close-icon.svg" alt="close-icon">
          </button>
        </div>
        <FiltersList />
      </div>
    </Modal>
    <JoinCommunity />
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import BaseCard from '~/components/bases/BaseCard.vue'
import FiltersList from '~/components/bases/FiltersList.vue'
import JoinCommunity from '~/components/main/JoinCommunity.vue'
import Modal from '~/components/ui/Modal.vue'
import Hero from "~/components/main/Hero.vue";

const showFilters = ref(false)
const screenWidth = ref(0)
const basesList = ref([
  {
    id: 1,
    reviews: '32 отзыва',
    rating: '4,9',
    name: 'Хромой кабан-2',
    region: 'Ярославская область',
    price: '4.000'
  },
  {
    id: 2,
    reviews: '32 отзыва',
    rating: '4,9',
    name: 'Хромой кабан-2',
    region: 'Ярославская область',
    price: '4.000'
  },
  {
    id: 3,
    reviews: '32 отзыва',
    rating: '4,9',
    name: 'Хромой кабан-2',
    region: 'Ярославская область',
    price: '4.000'
  },
  {
    id: 4,
    reviews: '32 отзыва',
    rating: '4,9',
    name: 'Хромой кабан-2',
    region: 'Ярославская область',
    price: '4.000'
  },
  {
    id: 5,
    reviews: '32 отзыва',
    rating: '4,9',
    name: 'Хромой кабан-2',
    region: 'Ярославская область',
    price: '4.000'
  },
])

const handleResize = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const isDesktop = computed(() => screenWidth.value >= 1440)

const toggleFilters = () => {
  showFilters.value = !showFilters.value
}
</script>

<style scoped>
.title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bases-title {
  margin: 0 auto;
  text-align: center;
}

.title-filter-btn,
.title-map-btn {
  display: none;
  text-decoration: underline;
}

.bases-section {
  margin: 80px 0 35px;
}

.filters-btn {
  width: 100%;
  margin: 45px 0 35px;
  padding: 15px 0;
}

.filters {
  border: 1px solid var(--color-grey);
  border-radius: var(--border-radius);
  min-width: 335px;
}

.filter-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.filters-title {
  font-size: 22px;
  font-weight: 600;
}

.bases-list {
  display: flex;
  flex-direction: column;
}

.modal-filters {
  width: 100%;
}

@media (min-width: 768px) {
  .filters {
    min-width: 488px;
  }
  .filters-btn {
    display: none;
  }

  .title-filter-btn,
  .title-map-btn {
    display: block;
  }

  .bases-list {
    flex-wrap: wrap;
    flex-direction: row;
  }
}

@media (min-width: 1440px) {
  .filters {
    min-width: 288px;
  }
  .title-filter-btn {
    display: none;
  }

  .bases-wrapper {
    margin-top: 40px;
    width: 1200px;
    gap: 16px;
    display: flex;
    align-items: flex-start;
  }

  .bases-list {
    flex: 1;
    margin-top: 0;
  }
}
</style>