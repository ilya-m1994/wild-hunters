import { defineStore } from 'pinia'
import { useAuthStore } from '~/store/auth.js'

const SERVICE_TYPES = ['hotel', 'location']

export const useFavoritesStore = defineStore('favorites', () => {
    const config = useRuntimeConfig()
    const authStore = useAuthStore()

    /** @type {Ref<Array<{service_id: number, service_model: string, user_id: number}>>} */
    const favorites = ref([])
    const errors = ref(null)

    // Универсальная проверка
    const isFavorite = (id, type) =>
        favorites.value.some(f => f.service_id === id && f.service_model === type)

    const _fetchByType = async (type) => {
        const response = await $fetch(`${config.public.apiUrl}/services/favorites`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${authStore.token}`,
            },
            body: { type },
        })
        return response.data ?? []
    }

    // Загружаем все типы параллельно
    const fetchAllFavorites = async () => {
        if (!authStore.isLoggedIn) return
        errors.value = null
        try {
            const results = await Promise.all(SERVICE_TYPES.map(_fetchByType))
            favorites.value = results.flat()
        } catch (e) {
            errors.value = e
        }
    }

    const addToFavorite = async (id, type) => {
        errors.value = null
        try {
            await $fetch(`${config.public.apiUrl}/services/${id}/favorite`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${authStore.token}`,
                },
                body: { id, type },
            })
            // Оптимистичное обновление
            favorites.value.push({ service_id: id, service_model: type, user_id: authStore.user?.id ?? null })
            return { success: true }
        } catch (e) {
            const status = e?.status ?? e?.response?.status
            if (status === 401) return { success: false, reason: 'unauthorized' }

            const data = e?.data
            if (data?.error_code === 'validation_error') {
                errors.value = data.errors
            }
            return { success: false, reason: 'error' }
        }
    }

    const removeFromFavorite = async (id, type) => {
        errors.value = null
        // Сохраняем snapshot для rollback
        const snapshot = [...favorites.value]
        // Оптимистичное удаление
        favorites.value = favorites.value.filter(
            f => !(f.service_id === id && f.service_model === type)
        )
        try {
            await $fetch(`${config.public.apiUrl}/services/${id}/favorite`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${authStore.token}`,
                },
                body: { id, type },
            })
        } catch (e) {
            favorites.value = snapshot // rollback
            errors.value = e
        }
    }

    const clearFavorites = () => {
        favorites.value = []
        errors.value = null
    }

    return {
        favorites,
        errors,
        isFavorite,
        fetchAllFavorites,
        addToFavorite,
        removeFromFavorite,
        clearFavorites,
    }
})