<template lang='pug'>
  div(class='c-logo')
    router-link(class='c-logo__wrapper' to='/')
      div(class='c-logo__name'): span Philip Caleja
      div(class='c-logo__job') Front End Web Developer

    div(class='c-logo__website')
      a(href='https://www.pcaleja.com') www.pcaleja.com
</template>

<script>
  export default {

  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .c-logo {
    transition: 0.4s ease transform;

    &__wrapper {
      color: $dark-off-1;
      display: inline-block;
      text-align: center;

      &:hover {
        text-decoration: none;
      }
    }

    &__name {
      @extend %font-oswald;
      @include font-size(36);
      @include font-highlight($dark-off-1, $primary-light);
      text-transform: uppercase;
      color: $dark-off-1;
      margin: 0;
      line-height: 1.2;
    }

    &__job {
      @extend %font-oswald;
      @include font-size(19);
      font-weight: 300;
      text-transform: uppercase;
      color: $dark-off-1;
      margin: 0;
      line-height: 1.2;
    }

    &__website {
      display: none;
    }

    @media print {
      display: flex;
      justify-content: space-between;
      text-align: left;

      &__website {
        display: block;
        padding-right: 1rem;
      }

      &__name {
        margin-bottom: 0.5rem;

        span {
          padding: 0;
        }
      }
    }
  }
</style>
