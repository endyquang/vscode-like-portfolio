<template>
  <nuxt-link
    :to="file.path || '#'"
    :event="diasbled ? '' : 'click'"
    class="text-gray-400 h-full block duration-150 flex items-center"
  >
    <b-icon v-if="file.filename.endsWith('.js')" :icon="['fab', 'js']" size="sm" fixed-width class="text-yellow-500 flex-shrink-0 mr-2" />
    <b-icon v-else icon="code" size="sm" fixed-width class="text-teal-500 flex-shrink-0 mr-2" />

    <span class="flex-grow truncate">
      {{ file.filename }}
    </span>

    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    file: { type: Object, default: () => ({}) }
  },
  computed: {
    disabled () {
      return !this.file.path || !this.file.filename
    }
  }
}
</script>
