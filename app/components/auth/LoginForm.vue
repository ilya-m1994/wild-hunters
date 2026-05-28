<template>
  <div class="form-container">
    <div class="form-title">Вход</div>
    <form action="">
      <UiInput v-model="email" type="email" placeholder="Адрес Email"/>
      <UiInput v-model="password" type="text" placeholder="Пароль"/>
      <div class="form-check">
        <div>
          <input type="checkbox" checked />
          <label>Запомнить меня</label>
        </div>
        <UiButton class="btn" variant="text">
          Забыли пароль?
        </UiButton>
      </div>
      <UiButton class="btn login-button" @click.prevent="login()">
        Вход
      </UiButton>
      <div class="form-registration">
        <span>Нет аккаунта?</span>
        <UiButton class="btn" variant="text">
          Регистрация
        </UiButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import UiInput from "~/components/ui/UiInput.vue";
import UiButton from "~/components/ui/UiButton.vue";
import { ref } from 'vue';

const emit = defineEmits(['reset-password']);
const email = ref('denisburov1982@yandex.ru');
const password = ref('DjM1w4Pe');

const login = async () => {
  try {
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

    console.log(response)
  } catch (error) {
    console.log(error)
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