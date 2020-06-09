<template>
  <div class="relative" :style="{ paddingLeft: counterWidth }">
    <div class="absolute flex-shrink-0 w-8 left-0 top-0 bottom-0" :style="{ width: counterWidth, lineHeight: lineHeight + 'px' }">
      <ul class="text-gray-700 select-none">
        <li v-for="i in lineCount" :key="i" ref="list" class="block text-right pr-8">
          <slot name="counter">
            {{ i }}
          </slot>
        </li>
      </ul>
    </div>

    <div ref="body" :style="{ lineHeight: lineHeight + 'px' }" class="min-h-full">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    counterWidth: { type: String, default: '5rem' },
    lineHeight: { type: Number, default: 24 }
  },
  data () {
    return {
      lineCount: 1
    }
  },
  mounted () {
    const onSizeChange = () => {
      if (this.$refs.body && this.$refs.list) {
        this.lineCount = Math.max(1, Math.floor(this.$refs.body.offsetHeight / this.$refs.list[0].offsetHeight))
      }
    }

    window.addEventListener('resize', onSizeChange)
    this.$once('hook:beforeDetroy', () => window.removeEventListener('resize', onSizeChange))

    onSizeChange()
  }
}
</script>
