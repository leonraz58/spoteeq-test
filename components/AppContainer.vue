<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: "md"
  }>(),
  {
    size: "md",
  }
)
</script>

<template>
  <div :class="[`the-container_size-${props.size}`, 'the-container']">
    <slot />
  </div>
</template>

<style lang="scss">
.the-container {
  width: 100%;
  padding-right: var(--container-indent);
  padding-left: var(--container-indent);
  margin: 0 auto;

  &_size-md {
    max-width: var(--container-width-md);
  }
}
</style>
