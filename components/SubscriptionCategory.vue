<script setup lang="ts">
import type { ListByCategory } from "~/src/types/subscriptions"
import { useSubscriptions } from "~/src/composables/useSubscriptions"

const props = defineProps<{ category?: ListByCategory }>()

const { categories } = useSubscriptions()

const category = computed(() => {
  return categories.value.find((c) => c.id === props?.category?.typeId)
})
</script>

<template>
  <div class="subscription-category">
    <div class="subscription-category__title-block">
      <h3 class="subscription-category__title">{{ category?.title }}</h3>
      <div class="subscription-category__tooltip">?</div>
    </div>
    <div class="subscription-category__item-list">
      <SubsctiptionItem
        v-for="item in props?.category?.items"
        :key="item.id"
        :item="item"
      />
    </div>
    <div
      v-if="category?.description"
      class="subscription-category__description"
    >
      {{ category.description }}
    </div>
  </div>
</template>

<style lang="scss">
.subscription-category {
  &__title-block {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }

  &__title {
    color: rgba(255, 255, 255, 0.9);
    font-size: 22px;
    font-weight: 700;
  }

  &__tooltip {
    background-color: var(--color-gray-0);
    opacity: 50%;
    color: var(--color-gray-1000);
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  &__description {
    padding: 12px 16px;
    background-color: var(--color-shadow-500);
    border-radius: 49px;
    color: var(--color-green-400);
    margin-top: 14px;
    font-size: 14px;
  }
}
</style>
