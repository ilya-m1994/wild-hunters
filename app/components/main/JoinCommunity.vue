<template>
  <section class="join">
    <div class="container">
      <div class="join-form">
        <h2 class="section-title join-title">Присоединяйтесь к нашему сообществу</h2>
        <form @submit.prevent="subscribe">
          <input
              v-model="email"
              type="text"
              placeholder="Ваш email"
              class="join-input"
          />
          <div v-if="fieldError('email')" class="join-error">
            {{ fieldError('email') }}
          </div>

          <label class="join-label">
            <input
                v-model="privacyPolicy"
                class="join-checkbox"
                type="checkbox"
            />
            <label>Я согласен с политикой конфиденциальности</label>
          </label>
          <div v-if="fieldError('privacy_policy')" class="join-error">
            {{ fieldError('privacy_policy') }}
          </div>

          <p v-if="generalError" class="join-error join-error--general">
            {{ generalError }}
          </p>
          <p v-if="successMessage" class="join-success">
            {{ successMessage }}
          </p>

          <div>
            <UiButton
                class="btn mail-btn"
                :disabled="spinnerStore.isLoading"
                @click.prevent="subscribe"
            >
              Подписаться на рассылку
            </UiButton>
            <div class="btns-wrapper">
              <UiButton class="btn social-btn">TELEGRAM</UiButton>
              <UiButton class="btn social-btn">MAX</UiButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import UiButton from '~/components/ui/UiButton.vue'
import { useSpinnerStore } from '~/store/spinner.js'

const spinnerStore = useSpinnerStore()

const email = ref('')
const privacyPolicy = ref(true)

const generalError = ref(null)
const fieldErrors = ref(null)
const successMessage = ref(null)

const fieldError = (field) => {
  return fieldErrors.value?.[field]?.[0] ?? null
}

const subscribe = async () => {
  generalError.value = null
  fieldErrors.value = null
  successMessage.value = null

  try {
    spinnerStore.startLoading()
    const response = await $fetch(
        'http://109.172.31.240/api/v1/user/newsletter/subscribe',
        {
          method: 'POST',
          body: {
            email: email.value,
            privacy_policy: privacyPolicy.value
          }
        }
    )

    if (response.success) {
      successMessage.value = response.message || 'Вы успешно подписались на рассылку'
      email.value = ''
    } else {
      handleErrorResponse(response)
    }
  } catch (error) {
    const data = error?.data

    if (data) {
      handleErrorResponse(data)
    } else {
      generalError.value = 'Не удалось оформить подписку. Попробуйте позже.'
    }
  } finally {
    spinnerStore.stopLoading()
  }
}

const handleErrorResponse = (data) => {
  if (data.error_code === 'validation_error' && data.errors && !Array.isArray(data.errors)) {
    fieldErrors.value = data.errors
  } else {
    generalError.value = data.message ?? 'Не удалось оформить подписку'
  }
}
</script>

<style scoped>
.join {
  margin: 0 auto;
  min-height: 437px;
  background-image: url('~/assets/img/deer.webp');
  background-size: cover;
  background-position: center 5%;
  display: flex;
  align-items: center;
  padding: 162px 15px 20px 15px;
}
.join-title {
  color: var(--color-white);
  text-align: left;
}
.join-input {
  display: block;
  width: 100%;
  padding: 10px 8px;
  background: transparent;
  border: none;
  color: var(--color-white);
  border-bottom: 1px solid var(--color-white);
  caret-color: var(--color-white);
}
.join-input:focus {
  outline: none;
}
.join-input::placeholder {
  color: var(--color-white);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.05em;
}
.join-label {
  color: var(--color-white);
  font-weight: 400;
  font-size: 12px;
}
.join-checkbox {
  margin-top: 10px;
  margin-right: 5px;
}
.join-error {
  color: var(--color-error);
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  margin-top: 4px;
}
.join-error--general {
  margin-top: 8px;
}
.join-success {
  color: var(--color-white);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  margin-top: 8px;
}
.mail-btn {
  width: 100%;
  padding: 15px 0;
  margin-top: 20px;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.05em;
}
.btns-wrapper {
  display: flex;
}
.social-btn {
  width: 100%;
  padding: 15px 0;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.05em;
}
.social-btn:not(:last-child) {
  margin-right: 8px;
}
@media (min-width: 768px) {
  .join-form {
    max-width: 50%;
    margin-left: auto;
  }
  .join {
    padding-top: 60px;
  }
}
@media (min-width: 1440px) {
  .join {
    padding-top: 125px;
  }
}
</style>