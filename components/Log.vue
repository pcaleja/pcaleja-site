<template lang='pug'>
  div(class='c-log')
    button(
      class='c-log__toggle'
      @click='toggled = !toggled'
    ) Log
    pre(
      v-if='toggled'
      class='c-log__content'
    )
      slot
</template>

<script>
  export default {
    data () {
      return {
        toggled: true
      }
    }
  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .c-log {
    @include font-size(12);
    position: fixed;
    top: 0;
    left: 0;
    max-height: 300px;
    width: 100%;
    text-align: left;
    overflow: auto;
    background: rgba($dark, 0.8);
    padding: 1rem;
    z-index: 3;
    color: $primary;

    &__toggle {
      position: fixed;
      top: 0;
      right: 0;
    }

    &__content {
      margin: 0;
    }
  }
</style>
