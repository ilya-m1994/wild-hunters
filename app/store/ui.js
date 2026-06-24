import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
    const isAuthModalOpen = ref(false)
    const authModalMode = ref('login') // 'login' | 'register'

    const openAuthModal = (mode = 'login') => {
        authModalMode.value = mode
        isAuthModalOpen.value = true
    }

    const closeAuthModal = () => {
        isAuthModalOpen.value = false
    }

    return {
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,
    }
})