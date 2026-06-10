import { useAuthStore } from '~/store/auth'

export default defineNuxtPlugin(() => {
    const authStore = useAuthStore()
    authStore.initFromStorage()
})