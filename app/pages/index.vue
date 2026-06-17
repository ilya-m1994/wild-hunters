<template>
  <div>
    <Hero variant="home" />
    <WhyUs />
    <BestOffers />
    <BestLocations />
    <HowItWorks />
    <JoinCommunity />
    <Reviews />
    <FAQ />
    <Description />
  </div>
</template>

<script setup>
import BestOffers from '~/components/main/BestOffers.vue'
import BestLocations from '~/components/main/BestLocations.vue'
import HowItWorks from '~/components/main/HowItWorks.vue'
import JoinCommunity from '~/components/main/JoinCommunity.vue'
import FAQ from '~/components/main/FAQ.vue'
import Reviews from '~/components/main/Reviews.vue'
import Description from '~/components/main/Description.vue'
import WhyUs from '~/components/main/WhyUs.vue'
import Hero from '~/components/main/Hero.vue'

useSeoMeta({
  title: 'Wild-Hunter.ru — Первая автоматизированная платформа для охотников в России',
  description: 'Главная страница',
})
</script>