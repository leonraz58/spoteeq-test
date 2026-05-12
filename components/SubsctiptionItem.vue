<script setup lang="ts">
import IconSpotify from "../src/assets/icons/spotify.svg"

import { categoryTypes, type Subscription } from "~/src/constants/mock"

const props = defineProps<{ item?: Subscription }>()
</script>

<template>
  <div class="subscription-item">
    <IconSpotify class="subscription-item__spotify-icon" />
    <div class="subscription-item__info">
      <p class="subscription-item__title">{{ props?.item?.title }}</p>
      <p class="subscription-item__price">{{ props?.item?.price }} ₽</p>
    </div>
  </div>
</template>

<style lang="scss">
.subscription-item {
  height: 130px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 28px;
  background-color: aliceblue;

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
    color: black;
  }

  &__price {
    font-size: 18px;
    font-weight: 700;
    color: black;
  }
}
</style>
