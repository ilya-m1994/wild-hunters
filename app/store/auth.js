// app/stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const user  = ref(null)
    const token = ref(null)

    const isLoggedIn = computed(() => !!token.value)

    // Вызывается один раз из плагина на клиенте
    const initFromStorage = () => {
        token.value = localStorage.getItem('auth_token') || null
        user.value  = JSON.parse(localStorage.getItem('auth_user') || 'null')
    }

    const setAuth = (responseData) => {
        token.value = responseData.token
        user.value  = responseData.user

        localStorage.setItem('auth_token', responseData.token)
        localStorage.setItem('auth_user',  JSON.stringify(responseData.user))
    }

    const logout = () => {
        token.value = null
        user.value  = null

        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')
    }

    return { user, token, isLoggedIn, initFromStorage, setAuth, logout }
})