<template>
  <div class="license-wrapper">
    <span class="license-title">Лицензия #{{ weapon.licenseNumber }}</span>
    <UiInput
        :model-value="weapon.licenseNumber"
        type="text"
        placeholder="000000"
        :error-message="userStore.weaponErrors?.hunter_license_number?.[0]"
        @update:modelValue="val => userStore.updateWeapon(index, { hunter_license_number: val })"
    />
    <div>
      <div class="form-item--flex-wrapper">
        <div class="form-item-wrapper">
          <span class="form-label">Номер</span>
          <UiInput
              :model-value="userStore.hunterBilletNumber"
              type="text"
              placeholder="Номер билета"
              :error-message="userStore.weaponErrors?.hunter_billet_number?.[0]"
              @update:modelValue="val => userStore.updateWeapon(index, { hunter_billet_number: val })"
          />
        </div>
        <div class="form-item-wrapper">
          <span class="form-label">Дата</span>
          <UiInput
              :model-value="weapon.licenseDate"
              type="text"
              placeholder="00.00.0000"
              :error-message="userStore.weaponErrors?.hunter_license_date?.[0]"
              @update:modelValue="val => userStore.updateWeapon(index, { hunter_license_date: val })"
          />
        </div>
      </div>
      <div class="form-item-wrapper">
        <span class="form-label">Тип оружия</span>
        <select
            :value="weapon.weaponTypeId"
            class="weapons-select"
            @change="e => userStore.updateWeapon(index, { weapon_type_id: Number(e.target.value) })"
        >
          <option
              v-for="item in userStore.availableWeapons"
              :key="item.id"
              :value="item.id"
          >
            {{ item.title }}
          </option>
        </select>
        <div
            v-if="userStore.weaponErrors?.weapon_type_id"
            class="input-error"
        >
          {{ userStore.weaponErrors.weapon_type_id[0] }}
        </div>
      </div>
      <div class="form-item-wrapper">
        <span class="form-label">Калибр</span>
        <select
            :value="weapon.caliber"
            class="weapons-select"
            @change="e => userStore.updateWeapon(index, { caliber: e.target.value })"
        >
          <option
              v-for="caliber in userStore.availableCalibers"
              :key="caliber.id"
              :value="caliber.id"
          >
            {{ caliber.title }}
          </option>
        </select>
      </div>
    </div>
    <UiButton
        class="btn"
        variant="text"
        @click.prevent="userStore.saveWeapon(index)"
    >
      Сохранить
    </UiButton>
  </div>
</template>

<script setup>
import UiInput from '~/components/ui/UiInput.vue'
import { useUserStore } from '~/store/user.js'

const userStore = useUserStore()
defineProps({
  weapon: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.license-wrapper {
  border: 1px solid var(--color-grey);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 8px;
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
.form-label {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
}
.weapons-select {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-grey);
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>