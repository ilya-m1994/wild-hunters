import { defineStore } from 'pinia'
import { useSpinnerStore } from '~/store/spinner.js'

export const useAuthStore = defineStore('auth', () => {
    const spinnerStore = useSpinnerStore()
    const config = useRuntimeConfig()
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

    const logout = async () => {
        spinnerStore.startLoading()

        await $fetch(
            `${config.public.apiUrl}/logout`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token.value}`,
                },
            }
        )

        token.value = null
        user.value  = null

        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')

        spinnerStore.stopLoading()
    }

    return { user, token, isLoggedIn, initFromStorage, setAuth, logout }
})