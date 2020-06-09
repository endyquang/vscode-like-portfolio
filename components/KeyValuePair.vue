<template>
  <div>
    <span class="text-blue-300">{{ field }}</span>: <span v-if="!metadata[field]" class="text-code">'',</span><slot v-else :value="metadata[field]">
      <span class="text-code">'{{ metadata[field] }}'</span>,
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    field: { type: String, default: '' },
    metadata: { type: Object, default: () => ({}) }
  }
}
</script>
