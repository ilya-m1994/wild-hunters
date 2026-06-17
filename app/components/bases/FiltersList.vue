<template>
  <ul class="filters-list">
    <li>
      <FilterItem :title="'Сортировка'">
        <FiltersSorting />
      </FilterItem>
    </li>
    <li>
      <FilterItem :title="'По стоимости'">
        <FiltersPrice />
      </FilterItem>
    </li>
    <li>
      <FilterItem :title="'Рейтинг'">
        <FiltersRating />
      </FilterItem>
    </li>
    <li>
      <FilterItem :title="'Услуги на базе'">
        <FiltersServices />
      </FilterItem>
    </li>
    <li>
      <FilterItem :title="'Питание на базе'">
        <FiltersEating />
      </FilterItem>
    </li>
  </ul>
</template>

<script setup>

import FilterItem from '~/components/bases/FilterItem.vue'
import FiltersSorting from '~/components/bases/FiltersSorting.vue'
import FiltersPrice from '~/components/bases/FiltersPrice.vue'
import FiltersRating from '~/components/bases/FiltersRating.vue'
import FiltersServices from '~/components/bases/FiltersServices.vue'
import FiltersEating from '~/components/bases/FiltersEating.vue'
</script>

<style scoped>

</style>