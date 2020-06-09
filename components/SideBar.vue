<template>
  <aside class="bg-aside text-gray-400 select-none">
    <nav class="lg:sticky top-0">
      <div class="text-lg h-12 flex items-center px-6 lg:px-8 text-gray-600">
        Xin chào!
      </div>

      <ul>
        <li
          v-for="(page, i) in pages"
          :key="i"
          class="block h-8"
        >
          <file-name-with-icon
            v-if="!page.items"
            :file="page"
            class="px-6 lg:px-8"
            :class="[$route.path === page.path ? 'bg-aside--active' : 'hover:bg-aside--hover']"
          />

          <template v-else>
            <div class="h-8 px-6 lg:px-8 cursor-pointer hover:bg-aside--hover duration-150 flex items-center" @click="groupStates.splice(i, 1, !groupStates[i])">
              <b-icon :icon="groupStates[i] ? 'caret-down' : 'caret-right'" fixed-width size="sm" class="mr-2" /> {{ page.filename }}
            </div>

            <collapse-transition>
              <ul v-show="groupStates[i]">
                <li
                  v-for="item in page.items"
                  :key="item.path"
                  class="block h-8"
                >
                  <file-name-with-icon
                    :file="item"
                    class="px-12 lg:px-16"
                    :class="[$route.path === item.path ? 'bg-aside--active' : 'hover:bg-aside--hover']"
                  />
                </li>
              </ul>
            </collapse-transition>
          </template>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import FileNameWithIcon from './organisms/FileNameWithIcon'
export default {
  components: {
    FileNameWithIcon
  },
  data () {
    const pages = [
      { filename: 'about-me.js', path: '/' },
      {
        filename: 'projects',
        items: this.$store.state.projects
      }
    ]

    return {
      groupStates: Array.from({ length: pages.length }).fill(true),
      pages
    }
  }
}
</script>
