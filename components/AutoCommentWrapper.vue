<template>
  <auto-line-wrapper counter-width="2rem" class="text-green-400 max-w-4xl">
    <slot />

    <template #counter>
      <span class="text-green-400 select-all">//</span>
    </template>
  </auto-line-wrapper>
</template>

<script>
import AutoLineWrapper from './AutoLineWrapper'
export default {
  components: {
    AutoLineWrapper
  }
}
</script>
