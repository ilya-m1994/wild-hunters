<template>
  <div class="form-container">
    <div class="form-title">Регистрация</div>
    <form>
      <div class="name-input">
        <UiInput
            v-model="firstName"
            class="reg-name"
            type="text"
            placeholder="Имя"
            :error-message="fieldError('firstName')"
        />
        <UiInput
            v-model="lastName"
            type="text"
            placeholder="Фамилия"
            :error-message="fieldError('lastName')"
        />
      </div>
      <UiInput
          v-model="phone"
          type="phone"
          placeholder="Телефон"
          :error-message="fieldError('phone')"
      />
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
      <div class="form-check">
        <div>
          <input type="checkbox" checked />
          <label>Мною прочитаны и принимаются <a href="" class="terms">Условия использования и Политика конфиденциальности</a></label>
        </div>
      </div>
      <p v-if="generalError" class="general-error">{{ generalError }}</p>
      <UiButton class="btn login-button" :disabled="spinnerStore.isLoading" @click.prevent="login()">
        Регистрация
      </UiButton>
      <div class="form-registration">
        <span>Уже есть аккаунт?</span>
        <UiButton class="btn" variant="text" @click.prevent="emit('switch-mode', 'login')">
          Вход
        </UiButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import UiInput from '~/components/ui/UiInput.vue'
import UiButton from '~/components/ui/UiButton.vue'
import { ref } from 'vue'
import { useAuthStore } from '~/store/auth'
import { useSpinnerStore } from '~/store/spinner.js'
import { useUserStore } from '~/store/user'

const userStore = useUserStore()
const authStore = useAuthStore()
const spinnerStore = useSpinnerStore()

const emit = defineEmits(['switch-mode', 'close'])

const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')

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
        'http://109.172.31.240/api/v1/register',
        {
          method: 'POST',
          body: {
            firstName: firstName.value,
            lastName: lastName.value,
            phone: phone.value,
            email: email.value,
            password: password.value,
            role: 'baseadmin',
            term: true
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
      generalError.value = 'Не удалось выполнить регистрацию. Попробуйте позже.'
    }
  } finally {
    spinnerStore.isLoading = false
  }
}

const handleErrorResponse = (data) => {
  if (data.error_code === 'validation_error' && data.errors && !Array.isArray(data.errors)) {
    fieldErrors.value = data.errors
  } else {
    generalError.value = data.message ?? 'Не удалось выполнить регистрацию'
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
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
}

.form-registration {
  display: flex;
  justify-content: center;
  align-content: center;
}

.login-button{
  width: 100%;
  padding: 15px 0;
  margin-bottom: 12px;
}

.name-input {
  display: flex;
  gap: 10px;
}

.terms {
  color: var(--color-accent);
}
</style>