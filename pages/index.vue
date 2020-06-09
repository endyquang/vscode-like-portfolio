<template>
  <auto-line-wrapper class="pr-4">
    <br>
    <br>

    <auto-comment-wrapper>
      <span class="text-blue-300">Hi, i’m Quang</span> (pronounced /kwang/, or just call me ND) - a full stack web developer who love freelancing and keep challenging himself with impactful projects.
      <br>
      Based in Ha Noi (GMT+7). Experienced 3 years in web development.
      <br>
      I am currently available for new opportunities.
    </auto-comment-wrapper>

    <br>
    <br>

    <auto-comment-wrapper counter-width="2rem">
      Technologies that i use everyday
    </auto-comment-wrapper>

    <span class="text-yellow-400">[</span>
    <div v-for="(tech, i) in techs" :key="tech" class="ml-6">
      <span class="text-code">'{{ tech }}'</span>{{ i !== techs.length - 1 ? ',' : '' }}
    </div>
    <span class="text-yellow-400">]</span>

    <br>
    <br>
    <br>

    <auto-comment-wrapper counter-width="2rem">
      A few projects that i have joined in the past 12 months
    </auto-comment-wrapper>

    <span class="text-yellow-400">[</span>
    <div v-for="(item, i) in projects" :key="i" class="ml-6 flex">
      <nuxt-link :to="item.path" class="hover:underline text-code">
        {{ item.name }}
      </nuxt-link>
      {{ i !== projects.length - 1 ? ',' : '' }}
    </div>
    <span class="text-yellow-400">]</span>

    <br>
    <br>
    <br>

    <auto-comment-wrapper counter-width="2rem">
      Interested in working together? Don't hesitate to send me a message so that we can get to know each other. I am so looking forward to that!
    </auto-comment-wrapper>
    <!-- <div class="text-yellow-400">
      <span class="text-blue-400">this</span>.<span class="hover:underline cursor-pointer" @click="$emit('pm')">leaveAMessage</span>()
    </div> -->
    <br>
    <br>
    <br>
  </auto-line-wrapper>
</template>

<script>
import { mapState } from 'vuex'
import AutoLineWrapper from '@/components/AutoLineWrapper'
import AutoCommentWrapper from '@/components/AutoCommentWrapper'
export default {
  components: {
    AutoLineWrapper,
    AutoCommentWrapper
  },
  data () {
    return {
      techs: [
        'Javascript',
        'Typescript',
        'Nodejs',
        'Vuejs',
        'MongoDB',
        'MySQL',
        'Redis',
        'Git',
        'Linux',
        'Docker',
        'Firebase',
        'and_more'
      ]
    }
  },
  computed: {
    ...mapState(['projects'])
  }
}
</script>
