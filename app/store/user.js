import { defineStore } from 'pinia'
import { useAuthStore } from '~/store/auth'
import { useSpinnerStore } from '~/store/spinner.js'
import defaultAvatar from '~/assets/icons/profile-avatar.svg'


export const useUserStore = defineStore('user', () => {
    const authStore = useAuthStore()
    const spinnerStore = useSpinnerStore()
    const config = useRuntimeConfig()

    const profile = ref(null)
    const form = ref({
        nickname: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        birthday: '',
        hunterBilletNumber: '',
        bio: '',
        avatarUrl: null,
        weapons: []
    })

    const weaponErrors = ref(null)

    const error = ref(null)
    const availableWeapons = ref(null)
    const availableCalibers = ref(null)
    const passwordError = ref(null)
    const passwordErrors = ref(null)

    const fetchProfile = async () => {
        if (!authStore.user?.id) return

        spinnerStore.startLoading()
        error.value = null
        try {
            const response = await $fetch(
                `${config.public.apiUrl}/user/${19}`,
                // `${config.public.apiUrl}/user/${authStore.user.id}`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${authStore.token}`,
                    },
                }
            )

            profile.value = response.data
            form.value = {
                nickname: response.data.nik,
                email: response.data.email,
                firstName: response.data.first_name,
                lastName: response.data.last_name,
                phone: response.data.phone,
                birthday: response.data.birthday,
                hunterBilletNumber: response.data.hunter_billet_number,
                bio: response.data.bio,
                avatarUrl: response.data.avatar_url ?? defaultAvatar,
                weapons: response.data.weapons.map(weapon => ({
                    licenseNumber: weapon.hunter_license_number ?? '',
                    licenseDate: weapon.hunter_license_date ?? '',
                    weaponType: weapon.weapon_type ?? '',
                    weaponTypeId: weapon.weapon_type_id ?? null,
                    caliber: weapon.caliber ?? ''
                }))
            }
        } catch (e) {
            error.value = e
        } finally {
            spinnerStore.stopLoading()
        }
    }

    const clear = () => {
        profile.value = null
        error.value = null
    }

    const fetchWeapons = async () => {
        if (!authStore.user?.id) return

        spinnerStore.startLoading()
        error.value = null
        try {
            const response = await $fetch(
                `${config.public.apiUrl}/weapons`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${authStore.token}`,
                    },
                }
            )

            availableWeapons.value = response.data
        } catch (e) {
            error.value = e
        } finally {
            spinnerStore.stopLoading()
        }
    }

    const fetchCalibers = async () => {
        if (!authStore.user?.id) return

        spinnerStore.startLoading
        error.value = null
        try {
            const response = await $fetch(
                `${config.public.apiUrl}/calibers`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${authStore.token}`,
                    },
                }
            )

            availableCalibers.value = response.data
        } catch (e) {
            error.value = e
        } finally {
            spinnerStore.stopLoading()
        }
    }

    const addWeapon = () => {
        if (!profile.value) return

        form.value.weapons.push({
            hunter_license_number: '',
            hunter_license_date: '',
            weapon_type_id: null,
            caliber: ''
        })
    }

    const updateWeapon = (index, payload) => {
        const weapon = form.value.weapons[index]
        if (!weapon) return

        form.value.weapons[index] = {
            ...weapon,
            ...payload
        }
    }

    const saveWeapon = async (index) => {
        const weapon = form.value.weapons[index]

        const payload = {
            hunter_license_number: weapon.hunter_license_number,
            hunter_license_date: '2026-01-01',
            weapon_type_id: weapon.weapon_type_id,
            caliber: weapon.caliber,
        }
        spinnerStore.startLoading()
        weaponErrors.value = null
        try {
            await $fetch(`${config.public.apiUrl}/user/weapons`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${authStore.token}`
                },
                body: payload
            })
        } catch (error) {
            const data = error?.data

            if (data?.error_code === 'validation_error') {
                weaponErrors.value = data.errors
            } else {
                error.value = error
            }
        } finally {
            spinnerStore.stopLoading()
        }
    }

    const changePassword = async (payload) => {
        spinnerStore.startLoading()
        passwordError.value = null
        passwordErrors.value = null

        try {
            const response = await $fetch(
                `${config.public.apiUrl}/user/change-password`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${authStore.token}`,
                    },
                    body: payload
                }
            )

            if (response?.success === false) {
                passwordError.value = response.message
                passwordErrors.value = response.errors ?? null
                return { success: false }
            }

            return { success: true, message: response?.message }
        } catch (e) {
            const data = e?.data

            if (data?.error_code === 'validation_error') {
                passwordError.value = data.message
                passwordErrors.value = data.errors
            } else {
                passwordError.value = data?.message ?? 'Не удалось изменить пароль'
            }

            return { success: false }
        } finally {
            spinnerStore.stopLoading()
        }
    }

    return {
        profile,
        form,
        availableWeapons,
        availableCalibers,
        error,
        weaponErrors,
        fetchProfile,
        clear,
        fetchWeapons,
        fetchCalibers,
        addWeapon,
        updateWeapon,
        saveWeapon,
        passwordError,
        passwordErrors,
        changePassword
    }
})