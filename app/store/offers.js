import { defineStore } from 'pinia'
import { useSpinnerStore } from '~/store/spinner.js'
import { useAuthStore } from '~/store/auth.js'

export const useOffersStore = defineStore('offers', () => {
    const config = useRuntimeConfig()
    const spinnerStore = useSpinnerStore()
    const authStore = useAuthStore()
    const hotelsOffers = ref([])
    const locationsOffers = ref([])
    const error = ref(null)

    const fetchHotelsOffers = async () => {
        spinnerStore.startLoading()
        error.value = null
        try {
            const response = await $fetch(
                `${config.public.apiUrl}/hotels/offers`,
                {
                    method: 'POST',
                    body: {
                        order_by: "created_at",
                        order_direction: "asc",
                        limit: 3
                    },
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${authStore.token}`,
                    },
                }
            )

            hotelsOffers.value = response.data
        } catch (e) {
            error.value = e
        } finally {
            spinnerStore.stopLoading()
        }
    }

    const fetchLocationsOffers = async () => {
        spinnerStore.startLoading()
        error.value = null
        try {
            const response = await $fetch(
                `${config.public.apiUrl}/locations/offers`,
                {
                    method: 'POST',
                    body: {
                        order_by: "created_at",
                        order_direction: "asc",
                        limit: 3
                    },
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${authStore.token}`,
                    },
                }
            )

            locationsOffers.value = response.data
        } catch (e) {
            error.value = e
        } finally {
            spinnerStore.stopLoading()
        }
    }

    return { fetchHotelsOffers, fetchLocationsOffers, hotelsOffers, locationsOffers }
})