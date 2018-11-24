<template lang='pug'>
  button(
    class='c-navigation-toggle'
    @click='$store.commit("navigation/toggle")'
  )
    span
    span
    span
</template>

<script>
  export default {

  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .c-navigation-toggle {
    @extend %button-unstyle;
    @extend %flex;
    @extend %column;
    @extend %middle;
    @extend %center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 3;
    outline: none;
    background: $dark;
    width: 2rem;
    height: 55px;
    cursor: pointer;

    @include breakpoint(xs) {
      display: none;
    }

    &:focus {
      background: $dark;
    }

    &:hover,
    &:active {
      background: $secondary;
    }

    span {
      width: 5px;
      height: 5px;
      background: $light;
      border-radius: 50%;
      margin: 3px 0;
    }
  }
</style>
