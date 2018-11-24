<template lang='pug'>
  section(class='c-home-about')
    div(class='c-home-about__content')
      h1 About Me

      p Hello! I’m a Front End Web Developer currently looking for full time work. I enjoy building well designed websites and web apps as well as tooling to automate daily workflows.
      p When I'm not coding, I'm either staying up-to-date with what's new in the industry or I'm spending time with my family.

    img(
      class='c-home-about__graphic'
      src='/graphic-developer.svg'
      alt='Developer Coding'
    )
</template>

<script>
  export default {

  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .c-home-about {
    @extend %flex;
    @extend %middle;
    padding: 0 1rem;
    position: relative;
    min-height: 300px;
    background: linear-gradient(45deg, $primary-light, $primary-dark);

    @include breakpoint(xs) {
      padding: 0 2rem;
    }

    &__content {
      @extend %col-12;
      @extend %col-xs-8;
      color: $light;
      padding: 0;
      padding-right: 1rem;
    }

    &__graphic {
      position: absolute;
      right: 4rem;
      top: -22%;
      width: 60px;

      @include breakpoint(xs) {
        right: 2rem;
        top: auto;
        bottom: -55%;
        width: 170px;
      }
    }

    h1 {
      color: $light;
      margin-bottom: 1rem;
    }
  }
</style>
