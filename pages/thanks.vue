<template>
  <auto-line-wrapper class="pr-4 h-full">
    <br>
    <br>
    <auto-comment-wrapper>
      Message sent to my mailbox.
      <br>
      I'll try to reply to you asap.
      <br>
      I wish you a nice day!
    </auto-comment-wrapper>
  </auto-line-wrapper>
</template>

<script>
import AutoLineWrapper from '@/components/AutoLineWrapper'
import AutoCommentWrapper from '@/components/AutoCommentWrapper'
export default {
  components: {
    AutoLineWrapper,
    AutoCommentWrapper
  }
}
</script>
