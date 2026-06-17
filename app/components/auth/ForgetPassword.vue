<template>
  <div class="form-container">
    <div class="form-title">Восстановление пароля</div>

    <form v-if="step === 'email'" action="" @submit.prevent>
      <p class="form-description">
        Введите адрес электронной почты, указанный при регистрации. Мы отправим на него код для восстановления пароля.
      </p>
      <UiInput
          v-model="email"
          type="email"
          placeholder="Адрес Email"
          :error-message="fieldError('email')"
      />
      <p v-if="generalError" class="general-error">{{ generalError }}</p>

      <UiButton class="btn login-button" :disabled="spinnerStore.isLoading" @click.prevent="requestResetCode()">
        Отправить код
      </UiButton>

      <div class="form-registration">
        <UiButton class="btn" variant="text" @click.prevent="emit('switch-mode', 'login')">
          Вернуться ко входу
        </UiButton>
      </div>
    </form>

    <form v-else-if="step === 'reset'" action="" @submit.prevent>
      <p class="form-description">
        Мы отправили код подтверждения на {{ email }}. Введите его и придумайте новый пароль.
      </p>
      <UiInput
          v-model="code"
          type="text"
          placeholder="Код из письма"
          :error-message="fieldError('code')"
      />
      <UiInput
          v-model="password"
          type="text"
          placeholder="Новый пароль"
          :error-message="fieldError('password')"
      />
      <UiInput
          v-model="passwordConfirmation"
          type="text"
          placeholder="Повторите новый пароль"
          :error-message="fieldError('password_confirmation')"
      />
      <p v-if="generalError" class="general-error">{{ generalError }}</p>

      <UiButton class="btn login-button" :disabled="spinnerStore.isLoading" @click.prevent="resetPassword()">
        Сменить пароль
      </UiButton>

      <div class="form-registration">
        <UiButton class="btn" variant="text" @click.prevent="backToEmailStep()">
          Отправить код повторно
        </UiButton>
      </div>
    </form>

    <div v-else>
      <p class="form-description">Пароль успешно изменен. Теперь вы можете войти, используя новый пароль.</p>
      <UiButton class="btn login-button" @click.prevent="emit('switch-mode', 'login')">
        Войти
      </UiButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UiInput from '~/components/ui/UiInput.vue'
import UiButton from '~/components/ui/UiButton.vue'
import { useAuthStore } from '~/store/auth'
import { useSpinnerStore } from '~/store/spinner.js'

const authStore = useAuthStore()
const spinnerStore = useSpinnerStore()

const emit = defineEmits(['switch-mode', 'close'])

const step = ref('email') // 'email' | 'reset' | 'success'

const email = ref('')
const code = ref('')
const password = ref('')
const passwordConfirmation = ref('')

const generalError = ref(null)
const fieldErrors = ref(null)

const fieldError = (field) => {
  return fieldErrors.value?.[field]?.[0] ?? null
}

const resetErrors = () => {
  generalError.value = null
  fieldErrors.value = null
}

const handleErrorResponse = (data) => {
  if (data?.error_code === 'validation_error' && data.errors && !Array.isArray(data.errors)) {
    fieldErrors.value = data.errors
  } else {
    generalError.value = data?.message ?? 'Произошла ошибка. Попробуйте позже.'
  }
}

const requestResetCode = async () => {
  resetErrors()

  try {
    const response = await authStore.sendResetCode(email.value)

    if (response?.success) {
      step.value = 'reset'
    } else {
      handleErrorResponse(response)
    }
  } catch (error) {
    const data = error?.data

    if (data) {
      handleErrorResponse(data)
    } else {
      generalError.value = 'Не удалось отправить код. Попробуйте позже.'
    }
  }
}

const resetPassword = async () => {
  resetErrors()

  try {
    const response = await authStore.sendNewPassword(
        email.value,
        code.value,
        password.value,
        passwordConfirmation.value
    )

    if (response?.success) {
      step.value = 'success'
    } else {
      handleErrorResponse(response)
    }
  } catch (error) {
    const data = error?.data

    if (data) {
      handleErrorResponse(data)
    } else {
      generalError.value = 'Не удалось изменить пароль. Попробуйте позже.'
    }
  }
}

const backToEmailStep = () => {
  resetErrors()
  code.value = ''
  password.value = ''
  passwordConfirmation.value = ''
  step.value = 'email'
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