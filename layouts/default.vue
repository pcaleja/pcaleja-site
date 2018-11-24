<template lang='pug'>
  div(
    class='layout'
    :class='{"layout--nav-toggled": $store.state.navigation.is_toggled }'
  )
    header(class='layout__header')
      vue-logo
      vue-navigation
      vue-navigation-toggle

    main(class='layout__content')
      nuxt
</template>

<script>
  import VueLogo from '~/components/Logo.vue'
  import VueNavigation from '~/components/Navigation.vue'
  import VueNavigationToggle from '~/components/NavigationToggle.vue'

  export default {
    components: {
      VueLogo,
      VueNavigation,
      VueNavigationToggle
    }
  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  html,
  body {
    @extend %font-base;
    @extend %font-merriweather-sans;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    color: $light;
    line-height: 1.4;
  }

  a, button {
    &:focus {
      outline: 1px dotted $secondary;
    }
  }

  h1 {
    @extend %font-oswald;
    @include font-size(36);
    text-transform: uppercase;
    color: $primary;
    margin: 0;
    line-height: 1.2;
  }

  h2 {
    @extend %font-oswald;
    @include font-size(18);
    font-weight: 300;
    text-transform: uppercase;
    color: $dark-off-2;
    margin: 0;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h3 {
    @extend %font-oswald;
    @include font-size(24);
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 1rem;
    line-height: 1.2;
    color: $primary;
  }

  h4 {
    color: $primary;
  }

  h4, p {
    @extend %font-merriweather-sans;
    @include font-size(16);
    margin: 0;
    margin-bottom: 0.5rem;
  }

  a {
    color: $secondary;
    text-decoration: none;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  b, strong {
    font-weight: 400;
  }

  blockquote, cite, q {
    @extend %font-merriweather-sans;
    font-style: italic;
  }

  img {
    width: 100%;
    line-height: 1;
  }

  figure {
    margin: 0;
    line-height: 0;
  }

  dl {

    dt {
      font-weight: 400;
    }

    dd {
      margin-left: 0;
      margin-bottom: 1rem;
    }
  }

  .c-list {
    padding-left: 1rem;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 0.5rem;

      &:before {
        content: " ";
        width: 5px;
        height: 3px;
        background: $primary;
        position: absolute;
        left: -12px;
        top: 8px;
      }
    }
  }

  .layout {
    position: relative;
    max-width: 1440px;

    &__logo {
      padding: 1rem 1rem;

      @include breakpoint(xs) {
        display: none;
      }
    }

    &__header {
      padding: 1rem;

      @include breakpoint(xs) {
        text-align: center;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        padding: 2rem;
        box-sizing: border-box;
        transform: translateX(100%);
        transition: 0.4s ease transform;
        background: $light-off-1;
        z-index: 2;
        width: 270px;
        transform: translateX(0);
      }

      @include breakpoint(lg) {
        right: calc(100% - 1440px);
      }
    }

    &__content {
      position: absolute;
      left: 0;
      width: calc(100% - 0.5rem);
      height: 100%;
      transition: 0.4s ease transform;

      @include breakpoint(xs) {
        width: calc(100% - 270px);
      }
    }

    &--nav-toggled {
      overflow: hidden;
    }

    &--nav-toggled .c-nav {
      transform: translateX(0);
    }

    &--nav-toggled &__content,
    &--nav-toggled .c-logo {
      transform: translateX(-100%);
    }
  }
</style>
