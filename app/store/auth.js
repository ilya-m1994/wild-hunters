import { defineStore } from 'pinia'
import { useSpinnerStore } from '~/store/spinner.js'

export const useAuthStore = defineStore('auth', () => {
    const spinnerStore = useSpinnerStore()
    const user  = ref(null)
    const token = ref(null)

    const isLoggedIn = computed(() => !!token.value)
    const isReady = ref(false)

    // Вызывается один раз из плагина на клиенте
    const initFromStorage = () => {
        token.value = localStorage.getItem('auth_token') || null
        user.value  = JSON.parse(localStorage.getItem('auth_user') || 'null')

        isReady.value = true
    }

    const setAuth = (responseData) => {
        token.value = responseData.token
        user.value  = responseData.user

        localStorage.setItem('auth_token', responseData.token)
        localStorage.setItem('auth_user',  JSON.stringify(responseData.user))
    }

    const logout = async () => {
        spinnerStore.isLoading = true

        // await $fetch(
        //     'http://109.172.31.240/api/v1/logout',
        //     {
        //         method: 'POST'
        //     }
        // )

        token.value = null
        user.value  = null

        localStorage.removeItem('auth_token')
        localStorage.removeItem('auth_user')

        spinnerStore.isLoading = false
    }

    return { user, token, isLoggedIn, isReady, initFromStorage, setAuth, logout }
})