import { defineStore } from 'pinia'

export const useSpinnerStore = defineStore('spinner', () => {
    const isLoading = ref(false)

    let loadingCount = 0

    const startLoading = () => {
        loadingCount++
        isLoading.value = true
    }

    const stopLoading = () => {
        loadingCount = Math.max(0, loadingCount - 1)
        if (loadingCount === 0) isLoading.value = false
    }

    return { isLoading, startLoading, stopLoading }
})