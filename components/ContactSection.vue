<template>
  <div
    class="fixed z-30 inset-0 duration-150"
    :class="[formState ? 'bg-popup': 'pointer-events-none bg-transparent']"
    @click="formState = false"
  >
    <div class="fixed z-40 right-0 bottom-0 mb-6 mr-6 md:mb-8 md:mr-8 lg:mr-12 xl:mr-16 xl:mb-10 flex items-center pointer-events-auto" @click.stop="">
      <a
        href="javascript:void(0)"
        class="mr-8 text-gray-700 duration-150 hvr-wobble-vertical"
        @click="openContactForm"
      >
        <b-icon icon="envelope" size="2x" />
      </a>

      <a
        href="https://github.com/endyquang"
        rel="noopener noreferrer"
        target="_blank"
        class="text-gray-700 duration-150 hvr-wobble-vertical"
      >
        <b-icon :icon="['fab', 'github']" size="2x" />
      </a>
    </div>

    <slide-y-down-transition>
      <form
        v-show="formState"
        name="contactme"
        action="/thanks"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        class="fixed bottom-0 right-0 mb-20 px-6 sm:px-0 max-w-full sm:mr-22 md:mr-24 lg:mr-28 xl:mr-32 xl:mb-24 pointer-events-auto w-full sm:max-w-md lg:max-w-lg xl:max-w-xl"
        @click.stop
      >
        <div class="mb-3">
          Send me a message
        </div>

        <!-- Hidden input to check for bots -->
        <input type="hidden" name="form-name" value="contactme">

        <input
          ref="email"
          name="email"
          placeholder="Your email address"
          type="email"
          required
          class="block rounded h-12 px-4 mb-5 bg-gray-800 w-full outline-none focus:shadow-outline"
        >

        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          required
          class="block rounded px-4 py-2 mb-5 bg-gray-800 w-full outline-none focus:shadow-outline resize-none"
        />

        <div class="text-right">
          <button
            type="button"
            class="h-10 px-10 rounded-sm bg-gray-900 hover:bg-gray-800 duration-100 text-gray-400 mr-2 focus:outline-none focus:shadow-outline"
            @click="formState = false"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="h-10 px-10 rounded-sm bg-teal-600 hover:bg-teal-500 duration-100 text-white focus:outline-none focus:shadow-outline"
          >
            SEND
          </button>
        </div>
      </form>
    </slide-y-down-transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formState: false
    }
  },
  methods: {
    openContactForm () {
      this.formState = true
      this.$nextTick(() => this.$refs.email && this.$refs.email.focus())
    }
  }
}
</script>
