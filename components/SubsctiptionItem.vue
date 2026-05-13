<script setup lang="ts">
import IconSpotify from "../src/assets/icons/spotify.svg"

import { useSubscriptions } from "~/src/composables/useSubscriptions"
import type { Subscription } from "~/src/types/subscriptions"

const props = defineProps<{ item?: Subscription }>()

const { selectedId, setSelectedId, categories } = useSubscriptions()

const onItemClick = (id: number) => {
  setSelectedId(id)
}

const category = computed(() => {
  return categories.value.find((c) => c.id === props?.item?.typeId)
})
</script>

<template>
  <div
    class="subscription-item"
    :class="{ 'subscription-item_selected': selectedId === item?.id }"
    :style="`background-color: ${category?.background}`"
    @click="onItemClick(item?.id ?? 0)"
  >
    <IconSpotify class="subscription-item__spotify-icon" />
    <div class="subscription-item__info">
      <p class="subscription-item__title">{{ props?.item?.title }}</p>
      <p class="subscription-item__price">{{ props?.item?.price }} ₽</p>
    </div>
    <div
      v-if="selectedId === item?.id"
      class="subscription-item__badge"
    >
      Выбрано
    </div>
  </div>
</template>

<style lang="scss">
.subscription-item {
  position: relative;
  height: 130px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 28px;
  background-color: aliceblue;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-color: transparent;
    transition: background-color 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }

  &:hover:not(&_selected)::after {
    background-color: var(--color-shadow-900);
  }

  &_selected {
    border: 2px solid var(--color-gray-900);
    outline: 2px solid var(--color-green-400);
    padding: 14px;

    &::after {
      background-color: var(--color-shadow-800);
    }
  }

  &__spotify-icon {
    color: black;
    height: 30px;
    width: 30px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__title {
    font-size: 14px;
    opacity: 50%;
    color: var(--color-gray-1000);
  }

  &__price {
    font-size: 18px;
    font-weight: 700;
    color: var(--color-gray-1000);
  }

  &__badge {
    position: absolute;
    z-index: 2;
    top: 14px;
    right: 14px;
    border-radius: 8px;
    padding: 6px;
    background-color: var(--color-green-400);
    color: var(--color-gray-0);
    font-size: 12px;
  }
}
</style>
