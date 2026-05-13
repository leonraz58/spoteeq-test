<script setup lang="ts">
import { useSubscriptions } from "~/src/composables/useSubscriptions"

const { countries, sortedSubscriptions } = useSubscriptions()

const selectedCountry = ref<number>(2)

const selectCountry = (id: number) => {
  selectedCountry.value = id
}
</script>

<template>
  <AppContainer>
    <div class="subscriptions-page">
      <div class="subscriptions-page__countries">
        <div
          v-for="country in countries"
          :key="country.id"
          class="subscriptions-page__country"
          :class="{ 'subscriptions-page__country_selected': selectedCountry === country.id }"
          @click="selectCountry(country.id)"
        >
          {{ country.value }}
        </div>
      </div>
      <div v-if="sortedSubscriptions(selectedCountry).length === 0">Упс, мы ничего не нашли :(</div>
      <div
        v-else
        class="subscriptions-page__categories-list"
      >
        <SubscriptionCategory
          v-for="category in sortedSubscriptions(selectedCountry)"
          :key="category.typeId"
          :category="category"
        />
      </div>
    </div>
  </AppContainer>
</template>

<style lang="scss">
.subscriptions-page {
  background-color: var(--color-gray-900);
  border-radius: 42px;
  padding: 24px;

  &__countries {
    display: flex;
    gap: 8px;
    margin-bottom: 28px;
  }

  &__country {
    height: 44px;
    background-color: var(--color-shadow-700);
    color: var(--color-gray-0);
    border-radius: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex: 1 1 0;
    transition: all 0.3s ease;

    &_selected {
      background-color: var(--color-gray-100);
      color: var(--color-gray-1000);
    }

    &:hover:not(&_selected) {
      background-color: var(--color-shadow-600);
    }
  }

  &__categories-list {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
}
</style>
