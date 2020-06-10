<template>
  <auto-line-wrapper class="pr-4" @click.native="onBgClick">
    <div class="block lg:hidden">
      <br>
      <br>
    </div>

    <div class="lg:max-w-3xl xl:max-w-5xl pb-48">
      <span class="text-blue-300">{</span>
      <div class="ml-6">
        <key-value-pair :metadata="metadata" field="name" />

        <key-value-pair v-slot="{ value }" :metadata="metadata" field="url">
          <span class="text-code">'<a :href="value" target="_blank" rel="noopener noreferrer" class="underline text-code">{{ value }}</a>'</span>,
        </key-value-pair>

        <key-value-pair :metadata="metadata" field="description" />

        <key-value-pair :metadata="metadata" field="client" />

        <key-value-pair :metadata="metadata" field="achievement" />

        <key-value-pair :metadata="metadata" field="duration" />

        <key-value-pair v-slot="{ value }" :metadata="metadata" field="teamSize">
          <span class="text-yellow-500">{{ value }}</span>,
        </key-value-pair>

        <template v-for="field in ['roles', 'techs', 'features']">
          <key-value-pair :key="field" v-slot="{ value }" :metadata="metadata" :field="field">
            <span class="text-yellow-400">[</span>
            <div v-for="(tech, i) in value" :key="i" class="ml-6">
              <span class="text-code">'{{ tech }}'</span>{{ i !== value.length - 1 ? ',' : '' }}
            </div>
            <span class="text-yellow-400">]</span>
          </key-value-pair>
        </template>
      </div>
      <span class="text-blue-300">}</span>
    </div>

    <div
      class="fixed z-70 inset-0 duration-200 select-none"
      :class="[slideshowState ? 'bg-popup' : 'pointer-events-none']"
      @click.stop="onBgClick"
    >
      <div
        class="fixed px-5 pointer-events-none duration-500 left-0 lg:left-auto lg:max-w-screen-lg xl:max-w-screen-xl"
        :class="[
          slideshowState
            ? 'w-full lg:right-50vw top-50vh transform lg:translate-x-1/2 -translate-y-1/2'
            : 'w-48 bottom-5 lg:bottom-auto lg:right-0 lg:top-16'
        ]"
      >
        <div
          v-for="(img, i) in images"
          :key="i"
          class="mx-auto py-2 pointer-events-auto w-40 cursor-zoom-in"
          :class="[
            slideshowState
              ? activeImg === i ? 'cursor-zoom-out w-full' : 'hidden'
              : shrinking && activeImg !== i ? 'pt-0 pb-0 h-0 overflow-hidden' : 'h-26 lg:opacity-75 lg:hover:opacity-100 duration-500'
          ]"
          :style="{
            'margin-bottom': $screen.lgDown && !imagesState && i !== images.length - 1 ? `-68%` : ''
          }"
          @click.stop="onImgClick(i)"
        >
          <div class="p-2 bg-slide rounded" style="min-height: 4.4rem;">
            <img :src="img" class="rounded">
          </div>
        </div>
      </div>
    </div>
  </auto-line-wrapper>
</template>

<script>
import AutoLineWrapper from '@/components/AutoLineWrapper'
import KeyValuePair from '@/components/KeyValuePair'
export default {
  components: {
    AutoLineWrapper,
    KeyValuePair
  },
  scrollToTop: true,
  asyncData ({ params, error }) {
    return fetch(`/projects/${params.id}.json`)
      .then(res => res.json())
      .then(({ images = [], ...metadata }) => ({ metadata, images }))
      .catch(() => error({ message: 'Not found', statusCode: 404 }))
  },
  data () {
    return {
      metadata: null,
      images: [],
      activeImg: -1,
      imagesState: false,
      shrinking: false
    }
  },
  computed: {
    slideshowState () {
      return !this.shrinking && this.activeImg !== -1
    }
  },
  methods: {
    onImgClick (i) {
      if (!this.imagesState && this.$screen.lgDown) {
        this.imagesState = true
      } else {
        this.activeImg = this.activeImg === i ? -1 : i
      }
    },
    onBgClick () {
      if (this.$screen.lgDown) {
        this.activeImg = -1
        setTimeout(() => {
          this.imagesState = false
        }, 500)
      } else {
        this.shrinking = true
        setTimeout(() => {
          this.shrinking = false
          this.activeImg = -1
          this.imagesState = false
        }, 500)
      }
    }
  },
  head () {
    return {
      title: this.metadata.name + ' - Quang ND'
    }
  }
}
</script>
