import { useAuthStore } from '~/store/auth.js'
import { useFavoritesStore } from '~/store/favorites.js'

export default defineNuxtPlugin(() => {
    const authStore = useAuthStore()
    const favoritesStore = useFavoritesStore()

    // Восстанавливаем сессию из localStorage
    authStore.initFromStorage()

    // Если уже залогинен (перезагрузка страницы) — грузим избранное
    if (authStore.isLoggedIn) {
        favoritesStore.fetchAllFavorites()
    }

    // Реагируем на логин / логаут в реальном времени
    watch(
        () => authStore.isLoggedIn,
        (isLoggedIn) => {
            if (isLoggedIn) {
                favoritesStore.fetchAllFavorites()
            } else {
                favoritesStore.clearFavorites()
            }
        }
    )
})