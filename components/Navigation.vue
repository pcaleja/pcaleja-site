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
    text-align: center;
    margin-top: 2rem;

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

      &:hover {
        color: $primary;
      }
    }
  }

</style>
