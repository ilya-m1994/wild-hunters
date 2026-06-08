<template>
  <div class="license-wrapper">
    <span class="license-title">Лицензия #1</span>
    <div>
      <div class="form-item--flex-wrapper">
        <div class="form-item-wrapper">
          <span class="form-label">Номер</span>
          <UiInput type="text" placeholder="1111"/>
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Дата</span>
          <UiInput type="text" placeholder="01.01.2000"/>
        </div>
      </div>
      <div class="form-item-wrapper">
        <span class="form-label">Тип оружия</span>
        <UiInput type="text" placeholder="Двухстволка"/>
      </div>
      <div class="form-item-wrapper">
        <span class="form-label">Калибр</span>
        <UiInput type="text" placeholder="20"/>
      </div>
    </div>
    <UiButton class="btn" variant="text">Сохранить</UiButton>
  </div>
</template>

<script setup>

import UiInput from "~/components/ui/UiInput.vue";
</script>

<style scoped>
.license-wrapper {
  border: 1px solid var(--color-grey);
  border-radius: 12px;
  padding: 12px;
}
.license-title {
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 16px;
}
.form-item--flex-wrapper {
  display: flex;
  gap: 10px;
}
</style>