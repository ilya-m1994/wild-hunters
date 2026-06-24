<template>
  <div>
    <button
        class="btn like-btn"
        :class="{ 'like-btn--active': isLiked }"
        :disabled="isPending"
        @click="handleLike"
    >
      <img :src="isLiked ? heartRedIcon : heartIcon" alt="like" />
    </button>

    <Modal v-model="isPromptOpen">
      <div class="like-prompt">
        <p class="like-prompt__text">Хотите сохранять понравившиеся базы?</p>
        <div class="like-prompt__btns">
          <UiButton class="btn" @click="goToRegister">Зарегистрироваться</UiButton>
          <UiButton class="btn" variant="text" @click="isPromptOpen = false">Отмена</UiButton>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '~/store/favorites.js'
import { useUiStore } from '~/store/ui'
import Modal from '~/components/ui/Modal.vue'
import heartIcon from '~/assets/icons/heart.svg'
import heartRedIcon from '~/assets/icons/heart-red.svg'

const props = defineProps({
  serviceId: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

const favoritesStore = useFavoritesStore()
const uiStore = useUiStore()

const isPromptOpen = ref(false)
const isPending = ref(false)

const isLiked = computed(() => favoritesStore.isFavorite(props.serviceId, props.type))

const handleLike = async () => {
  if (isPending.value) return
  isPending.value = true

  try {
    if (isLiked.value) {
      await favoritesStore.removeFromFavorite(props.serviceId, props.type)
    } else {
      const result = await favoritesStore.addToFavorite(props.serviceId, props.type)
      if (result.reason === 'unauthorized') {
        isPromptOpen.value = true
      }
    }
  } finally {
    isPending.value = false
  }
}

const goToRegister = () => {
  isPromptOpen.value = false
  uiStore.openAuthModal('register')
}
</script>