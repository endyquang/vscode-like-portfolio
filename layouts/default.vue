<template>
  <div class="bg-layout h-screen w-screen overflow-hidden custom-scroll text-white lg:flex">
    <side-bar
      class="lg:flex-shrink-0 lg:w-auto lg:max-w-sm xl:max-w-sm 2xl:max-w-lg fixed lg:static top-0 bottom-0 z-70 lg:z-10 w-100 duration-300 max-w-full"
      :class="[navState ? 'right-0' : '-right-100']"
    />

    <div class="flex-grow h-full flex flex-col overflow-hidden">
      <tab-bar class="hidden lg:flex lg:flex-shrink-0" />

      <slide-x-right-transition>
        <a
          v-show="!navState"
          href="javascript:void(0)"
          class="lg:hidden fixed z-70 top-0 right-0 mt-5 mr-6 md:mr-8 rounded-full bg-gray-700 w-8 h-8 flex justify-center items-center text-layout opacity-75"
          @click.stop="navState = !navState"
        >
          <b-icon icon="list" fixed-width />
        </a>
      </slide-x-right-transition>

      <fade-transition>
        <div v-show="navState" class="fixed inset-0 z-60 bg-popup" @click="navState = false" />
      </fade-transition>

      <main class="flex-grow overflow-hidden">
        <nuxt />
      </main>
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
