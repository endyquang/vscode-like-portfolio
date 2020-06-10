<template>
  <div class="bg-layout text-gray-400 lg:flex min-h-screen">
    <side-bar
      class="lg:flex-shrink-0 w-100 lg:w-full max-w-full lg:max-w-xs xl:max-w-sm 2xl:max-w-lg fixed lg:static top-0 bottom-0 z-70 lg:z-20 duration-300"
      :class="[navState ? 'right-0' : '-right-100']"
    />

    <div class="fixed top-0 left-0 right-0 z-10 flex">
      <div class="hidden lg:block w-full max-w-xs xl:max-w-sm 2xl:max-w-lg flex-shrink-0" />

      <tab-bar class="flex-grow overflow-hidden" />
    </div>

    <div class="flex-grow relative pt-12">
      <slide-x-right-transition>
        <a
          href="javascript:void(0)"
          class="lg:hidden fixed top-0 right-0 mr-3 w-12 h-12 flex justify-center items-center text-gray-300 opacity-75"
          :class="[navState ? 'z-70' : 'z-30']"
          @click.stop="navState = !navState"
        >
          <b-icon :icon="navState ? 'times' : 'list'" fixed-width />
        </a>
      </slide-x-right-transition>

      <fade-transition>
        <div v-show="navState" class="fixed inset-0 z-60 bg-popup" @click="navState = false" />
      </fade-transition>

      <nuxt />
    </div>

    <contact-section />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import TabBar from '@/components/TabBar'
import ContactSection from '@/components/ContactSection'
export default {
  components: {
    SideBar,
    TabBar,
    ContactSection
  },
  data () {
    return {
      navState: false
    }
  },
  watch: {
    '$route.path' () {
      this.navState = false
    }
  }
}
</script>
