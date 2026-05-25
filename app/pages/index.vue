<template>
  <div style="max-width: 1440px; margin: 0 auto;">
    <BaseHero />
    <BaseWhyUs />
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
import BestOffers from "~/components/base/BestOffers.vue";
import BestLocations from "~/components/base/BestLocations.vue";
import HowItWorks from "~/components/base/HowItWorks.vue";
import JoinCommunity from "~/components/base/JoinCommunity.vue";
import FAQ from "~/components/base/FAQ.vue";
import Reviews from "~/components/base/Reviews.vue";
import Description from "~/components/base/Description.vue";

useSeoMeta({
  title: 'Главная',
  description: 'Главная страница',
})
</script>