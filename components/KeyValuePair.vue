<template>
  <div>
    <span class="text-blue-300">"{{ field }}"</span>: <slot :value="metadata[field]">
      <span class="text-code">"{{ metadata[field] }}"</span>,
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
