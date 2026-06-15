<template>
  <section class="password-section">
    <h1 class="section-title password-form-title">Изменить пароль</h1>

    <form class="password-form" @submit.prevent="submitChangePassword">
      <div class="form-item-wrapper">
        <span class="form-label">Текущий пароль</span>
        <UiInput
            v-model="form.current_password"
            type="password"
            placeholder="Текущий пароль"
            :error-message="getFieldError('current_password')"
        />
      </div>

      <div class="form-item-wrapper">
        <span class="form-label">Новый пароль</span>
        <UiInput
            v-model="form.new_password"
            type="password"
            placeholder="Новый пароль"
            :error-message="getFieldError('new_password')"
        />
      </div>

      <div class="form-item--flex-wrapper">
        <div class="form-item-wrapper">
          <span class="form-label">Повторный ввод нового пароля</span>
          <UiInput
              v-model="form.new_password_confirmation"
              type="password"
              placeholder="Повторный ввод нового пароля"
              :error-message="getFieldError('new_password_confirmation')"
          />
        </div>
      </div>

      <p v-if="generalError" class="general-error">{{ generalError }}</p>
    </form>

    <UiButton
        class="btn password-submit-btn"
        :disabled="spinnerStore.isLoading"
        @click="submitChangePassword"
    >
      Сохранить изменения
    </UiButton>
  </section>

  <Modal v-model="isSuccessModalOpen">
    <div class="success-modal">
      <h2 class="success-modal-title">Готово!</h2>
      <p class="success-modal-text">{{ successMessage }}</p>
      <UiButton class="btn success-modal-btn" @click="isSuccessModalOpen = false">
        Понятно
      </UiButton>
    </div>
  </Modal>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import UiInput from "~/components/ui/UiInput.vue"
import Modal from "~/components/ui/Modal.vue"
import { useUserStore } from '~/store/user'
import { useSpinnerStore } from '~/store/spinner.js'

const userStore = useUserStore()
const spinnerStore = useSpinnerStore()

const form = reactive({
  current_password: '',
  new_password: '',
  new_password_confirmation: ''
})

const isSuccessModalOpen = ref(false)
const successMessage = ref('')

const generalError = computed(() => userStore.passwordError)

const getFieldError = (field) => {
  return userStore.passwordErrors?.[field]?.[0] ?? null
}

const submitChangePassword = async () => {
  const result = await userStore.changePassword({ ...form })

  if (result.success) {
    successMessage.value = result.message ?? 'Ваш пароль был успешно изменён.'
    isSuccessModalOpen.value = true

    form.current_password = ''
    form.new_password = ''
    form.new_password_confirmation = ''
  }
}
</script>

<style scoped>
.password-section {
  width: 100%;
  margin-bottom: 10px;
}
.password-form-title {
  text-align: left;
}
.password-form {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-grey);
  margin-bottom: 20px;
}
.form-item-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.form-label {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;
}
.general-error {
  color: var(--color-error);
  font-family: 'Inter', sans-serif;
  margin-bottom: 16px;
}
.password-submit-btn {
  width: 100%;
  padding: 15px 0;
}
.success-modal {
  padding: 24px;
  text-align: center;
}
.success-modal-title {
  margin-bottom: 12px;
}
.success-modal-text {
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;
}
.success-modal-btn {
  width: 100%;
  padding: 12px 0;
}
@media (min-width: 768px) {
  .password-form {
    width: 360px;
  }
  .password-submit-btn {
    width: 50%;
  }
}
@media (min-width: 1440px) {
  .password-form {
    width: 440px;
  }
  .password-submit-btn {
    width: 30%;
  }
}
</style>