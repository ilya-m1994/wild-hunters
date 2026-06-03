<template>
  <div>
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
import BestOffers from "~/components/main/BestOffers.vue";
import BestLocations from "~/components/main/BestLocations.vue";
import HowItWorks from "~/components/main/HowItWorks.vue";
import JoinCommunity from "~/components/main/JoinCommunity.vue";
import FAQ from "~/components/main/FAQ.vue";
import Reviews from "~/components/main/Reviews.vue";
import Description from "~/components/main/Description.vue";

useSeoMeta({
  title: 'Главная',
  description: 'Главная страница',
})
</script>