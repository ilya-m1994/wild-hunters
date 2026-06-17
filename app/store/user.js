import { defineStore } from 'pinia'
import { useAuthStore } from '~/store/auth'
import { useSpinnerStore } from '~/store/spinner.js'
import { computed } from 'vue'
import defaultAvatar from '~/assets/icons/profile-avatar.svg'

export const useUserStore = defineStore('user', () => {
    const authStore = useAuthStore()
    const spinnerStore = useSpinnerStore()

    const profile = ref(null)
    const error = ref(null)
    const availableWeapons = ref(null)
    const availableCalibers = ref(null)
    const weaponErrors = ref(null)
    const passwordError = ref(null)
    const passwordErrors = ref(null)

    const role = computed(() => {return profile.value?.role ?? 'Охотник'})
    const fullName = computed(() => {return profile.value?.name ?? 'Имя пользователя'})
    const firstName = computed(() => {return profile.value?.first_name ?? 'Имя'})
    const lastName = computed(() => {return profile.value?.last_name ?? 'Фамилия'})
    const createdAt = computed(() => {return profile.value?.created_at ?? 'Feb 2026'})
    const userId = computed(() => {return profile.value?.id ?? '0000'})
    const nickname = computed(() => {return profile.value?.nik ?? 'Nickname'})
    const email = computed(() => {return profile.value?.email ?? 'email'})
    const phone = computed(() => {return profile.value?.phone ?? ''})
    const birthday = computed(() => {return profile.value?.birthday ?? ''})
    const avatarUrl = computed(() => {return profile.value?.avatar_url ?? defaultAvatar})
    const hunterBilletNumber = computed(() => {return profile.value?.hunter_billet_number ?? ''})
    const weapons = computed(() =>
        (profile.value?.weapons ?? []).map(weapon => ({
            billetNumber: weapon.hunter_billet_number ?? '',
            licenseNumber: weapon.hunter_license_number ?? '',
            licenseDate: weapon.hunter_license_date ?? '',
            weaponType: weapon.weapon_type ?? '',
            weaponTypeId: weapon.weapon_type_id ?? null,
            caliber: weapon.caliber ?? ''
        }))
    )

    const fetchProfile = async () => {
        if (!authStore.user?.id) return

        spinnerStore.isLoading = true
        error.value = null
        try {
            const response = await $fetch(
                `http://109.172.31.240/api/v1/user/${authStore.user.id}`,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${authStore.token}`,
                    },
                }
            )

            profile.value = response.data
        } catch (e) {
            error.value = e
        } finally {
            spinnerStore.isLoading = false
        }
    }

    const clear = () => {
        profile.value = null
        error.value = null
    }

    const fetchWeapons = async () => {
        if (!authStore.user?.id) return

        spinnerStore.isLoading = true
        error.value = null
        try {
            const response = await $fetch(
                `http://109.172.31.240/api/v1/weapons`,
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
            spinnerStore.isLoading = false
        }
    }

    const fetchCalibers = async () => {
        if (!authStore.user?.id) return

        spinnerStore.isLoading = true
        error.value = null
        try {
            const response = await $fetch(
                `http://109.172.31.240/api/v1/calibers`,
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
            spinnerStore.isLoading = false
        }
    }

    const addWeapon = () => {
        if (!profile.value) return

        profile.value.weapons.push({
            hunter_billet_number: '',
            hunter_license_number: '',
            hunter_license_date: '',
            weapon_type_id: null,
            caliber: ''
        })
    }

    const updateWeapon = (index, payload) => {
        if (!profile.value?.weapons?.[index]) return

        profile.value.weapons[index] = {
            ...profile.value.weapons[index],
            ...payload
        }
    }

    const saveWeapon = async (index) => {
        const weapon = profile.value.weapons[index]

        const payload = {
            hunter_billet_number: hunterBilletNumber.value,
            hunter_license_number: weapon.hunter_license_number,
            hunter_license_date: '2026-01-01',
            weapon_type_id: weapon.weapon_type_id,
            caliber: weapon.caliber,
        }
        spinnerStore.isLoading = true
        weaponErrors.value = null
        try {
            await $fetch('http://109.172.31.240/api/v1/user/weapons', {
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
            spinnerStore.isLoading = false
        }
    }

    const changePassword = async (payload) => {
        spinnerStore.isLoading = true
        passwordError.value = null
        passwordErrors.value = null

        try {
            const response = await $fetch(
                'http://109.172.31.240/api/v1/user/change-password',
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
            spinnerStore.isLoading = false
        }
    }

    return {
        profile,
        role,
        fullName,
        firstName,
        lastName,
        createdAt,
        userId,
        nickname,
        email,
        phone,
        birthday,
        avatarUrl,
        hunterBilletNumber,
        weapons,
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