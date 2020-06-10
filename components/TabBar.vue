<template>
  <draggable
    v-model="tabs"
    tag="ul"
    animation="200"
    drag-class="opacity-0"
    class="flex flex-no-wrap bg-aside h-12"
  >
    <li
      v-for="(tab, i) in tabs"
      :key="tab.path"
      class="flex-shrink-0 h-12"
      :class="[
        i === 0 ? '' : 'border-l',
        activePath !== tab.path ? 'border-layout hidden lg:inline-block' : 'border-transparent inline-block'
      ]"
      :style="{
        maxWidth: $screen.lgDown ? '' : `${1 / tabs.length * 100}%`
      }"
      @click.middle.stop.prevent="closeTab(tab)"
    >
      <file-name-with-icon
        :file="tab"
        class="px-4"
        :class="[
          activePath === tab.path ? 'bg-layout' : 'hover:bg-aside--hover'
        ]"
      >
        <span v-if="$screen.lg && tabs.length > 1" class="flex-shrink-0 ml-2 text-gray-600 hover:text-gray-200 p-2 -m-2" @click.stop.prevent="closeTab(tab)">
          <b-icon
            icon="times"
            size="sm"
          />
        </span>
      </file-name-with-icon>
    </li>
  </draggable>
</template>

<script>
import { mapState } from 'vuex'
import Draggable from 'vuedraggable'
import FileNameWithIcon from './organisms/FileNameWithIcon'
export default {
  components: {
    Draggable,
    FileNameWithIcon
  },
  data () {
    return {
      tabs: []
    }
  },
  computed: {
    ...mapState(['projects']),
    activePath () {
      return this.$route.path
    },
    lastActiveTab () {
      let tmp = this.tabs[0]
      for (let i = 1; i < this.tabs.length; i++) {
        if (this.tabs[i].lastOpenedAt > tmp.lastOpenedAt) {
          tmp = this.tabs[i]
        }
      }
      return tmp
    }
  },
  watch: {
    activePath: 'resetTabs'
  },
  created () {
    this.resetTabs()
  },
  methods: {
    resetTabs () {
      const path = this.$route.path
      const i = this.tabs.findIndex(tab => tab.path === path)
      if (i === -1) {
        const i = this.tabs.indexOf(this.lastActiveTab)
        const project = this.projects.find(p => p.path === path)
        this.tabs.splice(i + 1, 0, {
          path,
          filename: project
            ? project.filename
            : path === '/'
              ? 'about-me.js'
              : 'thanks.js',
          lastOpenedAt: Date.now()
        })
      } else {
        Object.assign(this.tabs[i], { lastOpenedAt: Date.now() })
      }
    },

    closeTab (tab) {
      if (this.tabs.length <= 1) {
        return
      }
      const i = this.tabs.indexOf(tab)
      this.tabs.splice(i, 1)
      if (tab.path === this.activePath) {
        this.$router.push(this.lastActiveTab.path)
      }
    }
  }
}
</script>
