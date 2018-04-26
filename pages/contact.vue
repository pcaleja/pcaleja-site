<template lang='pug'>
  div(class='p-contact')
    section(class='p-contact__hero')
      h1 Contact

    section(class='p-contact__form')
</template>

<script>
  export default {

  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .p-contact {

    &__hero {
      @extend %flex;
      @extend %middle;
      background: $primary;
      padding: 0 1rem;
      position: relative;
      min-height: 300px;
    }
  }
</style>
