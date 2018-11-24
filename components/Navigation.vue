<template lang='pug'>
  nav(class='c-nav')
    ul(class='c-nav__wrapper')
      li(
        class='c-nav__items'
        v-for='link in links'
      )
        span(@click='$store.commit("navigation/close")')
          router-link(
            :to='link.route'
          ) {{ link.label }}
</template>

<script>
  export default {
    data () {
      return {
        links: [
          {
            label: 'Home',
            route: '/'
          },
          {
            label: 'Skills',
            route: '/skills'
          }
        ]
      }
    }
  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .c-nav {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $light;
    z-index: 2;
    padding-top: 2rem;
    transform: translateX(100%);
    text-align: center;
    transition: 0.4s ease transform;

    @include breakpoint(xs) {
      margin-top: 2rem;
      position: static;
      transform: none;
      background: transparent;
      padding-top: 0;
    }

    &__wrapper {
      padding: 0;
      list-style: none;
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
      padding: 0.25rem;

      &:hover {
        color: $primary;
      }
    }
  }

</style>
