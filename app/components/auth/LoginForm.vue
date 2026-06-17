<template>
  <div class="form-container">
    <div class="form-title">Вход</div>
    <form action="">
      <UiInput
          v-model="email"
          type="email"
          placeholder="Адрес Email"
          :error-message="fieldError('email')"
      />
      <UiInput
          v-model="password"
          type="text"
          placeholder="Пароль"
          :error-message="fieldError('password')"
      />
      <p v-if="generalError" class="general-error">{{ generalError }}</p>
      <div class="form-check">
        <div>
          <input type="checkbox" checked />
          <label>Запомнить меня</label>
        </div>
        <UiButton class="btn" variant="text">
          Забыли пароль?
        </UiButton>
      </div>
      <UiButton class="btn login-button" :disabled="spinnerStore.isLoading" @click.prevent="login()">
        Вход
      </UiButton>
      <div class="form-registration">
        <span>Нет аккаунта?</span>
        <UiButton class="btn" variant="text" @click.prevent="emit('switch-mode', 'register')">
          Регистрация
        </UiButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UiInput from '~/components/ui/UiInput.vue'
import UiButton from '~/components/ui/UiButton.vue'
import { useAuthStore } from '~/store/auth'
import { useSpinnerStore } from '~/store/spinner.js'
import { useUserStore } from '~/store/user'

const userStore = useUserStore()

const authStore = useAuthStore()
const spinnerStore = useSpinnerStore()

const emit = defineEmits(['reset-password', 'close', 'switch-mode'])
const email = ref('');
const password = ref('');

const generalError = ref(null)
const fieldErrors = ref(null)

const fieldError = (field) => {
  return fieldErrors.value?.[field]?.[0] ?? null
}

const login = async () => {
  generalError.value = null
  fieldErrors.value = null

  try {
    spinnerStore.isLoading = true
    const response = await $fetch(
        'http://109.172.31.240/api/v1/login',
        {
          method: 'POST',
          body: {
            email: email.value,
            password: password.value,
          }
        }
    )

    if (response.success) {
      authStore.setAuth(response)
      await userStore.fetchProfile()
      emit('close')
    } else {
      handleErrorResponse(response)
    }
  } catch (error) {
    const data = error?.data

    if (data) {
      handleErrorResponse(data)
    } else {
      generalError.value = 'Не удалось выполнить вход. Попробуйте позже.'
    }
  } finally {
    spinnerStore.isLoading = false
  }
}

const handleErrorResponse = (data) => {
  if (data.error_code === 'validation_error' && data.errors && !Array.isArray(data.errors)) {
    fieldErrors.value = data.errors
  } else {
    generalError.value = data.message ?? 'Неверные учетные данные'
  }
}
</script>

<style scoped>
.form-container {
  margin: 0 auto;
  border-radius: 20px;
  padding: 20px;
  background-color: var(--color-white);
}

.form-title {
  font-family: Uncage, sans-serif;
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
}

.general-error {
  font-family: 'Inter', sans-serif;
  color: var(--color-error);
  margin-bottom: 16px;
}

.form-check {
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.form-registration {
  display: flex;
  justify-content: center;
}

.login-button{
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 15px 0;
  margin-bottom: 12px;
}
</style>