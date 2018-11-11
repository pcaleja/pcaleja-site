<template lang='pug'>
  section(class='c-home-contact')
    div(class='c-home-contact__item')
      h3 Like what you see?
      p: em Reach out and let's create something awesome!
      vue-form
</template>

<script>
  import VueForm from './Form.vue'

  export default {
    components: {
      VueForm
    }
  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .c-home-contact {
    padding: 2rem;
    background: $primary;

    h3 {
      color: $light;
    }
  }
</style>
