<template lang='pug'>
  nav(class='c-nav')
    ul(class='c-nav__wrapper')
      li(class='c-nav__items')
        router-link(to='/') Home

      li(class='c-nav__items')
        router-link(to='/credentials') Skills

      //- li(class='c-nav__items')
      //-   router-link(to='/articles') Articles

      li(class='c-nav__items')
        router-link(to='/contact') Contact

</template>

<script>
  export default {

  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .c-nav {
    text-align: center;
    margin-top: 2rem;

    &__wrapper {
      padding: 0;
    }

    li {
      margin-bottom: 1rem;

      &:before {
        display: none;
      }
    }

    a {
      @extend %font-oswald;
      @include font-size(24);
      font-weight: 300;
      text-transform: uppercase;
      text-decoration: none;
      color: $dark-off-1;

      &:hover {
        color: $primary;
      }
    }
  }

</style>
