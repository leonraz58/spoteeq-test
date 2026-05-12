<script setup lang="ts">
import { countries, type Subscription, subscriptions } from "~/src/constants/mock"
import { sortSubscriptions } from "~/src/utils/sortSubscriptions"

const selectedCountry = ref<number>(1)

export type ListByCategory = {
  typeId: number
  items: Subscription[]
}

const subSorted = computed(() => sortSubscriptions(subscriptions[selectedCountry.value] ?? []))

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
      <div v-if="subSorted.length === 0">Упс, мы ничего не нашли :(</div>
      <div
        v-else
        class="subscriptions-page__categories-list"
      >
        <SubscriptionCategory
          v-for="category in subSorted"
          :key="category.typeId"
          :category="category"
        />
      </div>
    </div>
  </AppContainer>
</template>

<style lang="scss">
.subscriptions-page {
  background-color: #1d1d1d;
  border-radius: 42px;
  padding: 24px;

  &__countries {
    display: flex;
    gap: 8px;
    margin-bottom: 28px;
  }

  &__country {
    height: 44px;
    background-color: rgba(255, 255, 255, 0.05);
    color: #fff;
    border-radius: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex: 1 1 0;

    &_selected {
      background-color: #e8e8e8;
      color: black;
    }

    &:hover:not(&_selected) {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  &__categories-list {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
}
</style>
