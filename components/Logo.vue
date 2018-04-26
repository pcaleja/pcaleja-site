<template lang='pug'>
  div(class='c-logo')
    div(class='c-logo__name'): span Philip Caleja
    div(class='c-logo__job') Web Developer &amp; Designer
</template>

<script>
  export default {

  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .c-logo {
    color: $dark-off-1;
    display: inline-block;
    text-align: center;

    &__name {
      @extend %font-oswald;
      @include font-size(36);
      text-transform: uppercase;
      color: $dark-off-1;
      margin: 0;
      line-height: 1.2;
      @include font-highlight($dark-off-1, $primary);
    }

    &__job {
      @extend %font-oswald;
      @include font-size(18);
      font-weight: 300;
      text-transform: uppercase;
      color: $dark-off-1;
      margin: 0;
      line-height: 1.2;
    }
  }
</style>
