<template>
  <div class="form-container">
    <div class="form-title">Регистрация</div>
    <form>
      <div class="name-input">
        <UiInput v-model="firstName" class="reg-name" type="text" placeholder="Имя"/>
        <UiInput v-model="lastName" type="text" placeholder="Фамилия"/>
      </div>
      <UiInput v-model="phone" type="phone" placeholder="Телефон"/>
      <UiInput v-model="email" type="email" placeholder="Адрес Email"/>
      <UiInput v-model="password" type="text" placeholder="Пароль"/>
      <div class="form-check">
        <div>
          <input type="checkbox" checked />
          <label>Мною прочитаны и принимаются <a href="" class="terms">Условия использования и Политика конфиденциальности</a></label>
        </div>
      </div>
      <UiButton class="btn login-button" @click.prevent="login()">
        Регистрация
      </UiButton>
      <div class="form-registration">
        <span>Уже есть аккаунт?</span>
        <UiButton class="btn" variant="text">
          Вход
        </UiButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import UiInput from "~/components/ui/UiInput.vue";
import UiButton from "~/components/ui/UiButton.vue";
import {ref} from "vue";

const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')

const login = async () => {
  try {
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