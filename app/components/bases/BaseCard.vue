<template>
  <div class="card-wrapper">
    <div class="card">
      <button class="btn like-btn">
        <img src="~/assets/icons/heart.svg" alt="like">
      </button>
      <div class="meta">
        <div class="reviews">{{ reviews }}</div>
        <div class="rating">
          <img class="rating-star" src="~/assets/icons/star.svg" alt="star">
          <span>{{ rating }}</span>
        </div>
      </div>
    </div>
    <div class="text-wrapper">
      <div>
        <div class="base-name">{{ name }}</div>
        <div class="base-region">{{region }}</div>
      </div>
      <div class="base-price">{{ price }} ₽ / ночь</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  reviews: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.card-wrapper {
  margin-bottom: 20px;
}
.card {
  position: relative;
  width: 100%;
  height: 345px;
  padding: 20px;
  border-radius: var(--border-radius);
  background-image: url("~/assets/img/base.webp");
  background-size: cover;
  background-position: center;
}
.like-btn {
  position: absolute;
  top: 20px;
  right: 20px;
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
.text-wrapper {
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-top: 12px;
}
.base-name {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 2px;
}
.base-region {
  font-weight: 400;
  font-size: 16px;
}
.base-price {
  font-weight: 500;
  font-size: 18px;
}
@media (min-width:768px) {
  .card-wrapper {
    margin-right: 8px;
  }
  .card {
    width: 360px;
    height: 300px;
  }
}

@media (min-width:1440px) {
  .card {
    width: 288px;
    height: 300px;
  }
}
</style>