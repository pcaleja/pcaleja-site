<template lang='pug'>
  section(class='c-home-samples')
    h2(class='h3') Samples

    ul(class='c-home-samples__items')
      li(
        class='c-home-samples__item'
        v-for='(sample, index) in samples'
        :key='index'
      )
        a(:href='sample.link')
          figure(v-if='sample.name' class='c-home-samples__item__main')
            img(v-if='sample.image' :src='sample.image.src' :alt='sample.image.alt')
            figcaption {{ sample.name }}
          div(class='c-home-samples__item__text')
            div(class='c-home-samples__item__link') {{ sample.link }}
            div(class='c-home-samples__item__label') Role:
            div {{ sample.role}}
            div(class='c-home-samples__item__label') Tech Stack:
            div
              span {{ sample.technologies.join(', ') }}

</template>

<script>
  import { Carousel as VueCarousel, Slide as VueSlide } from 'vue-carousel'

  export default {
    components: {
      VueCarousel,
      VueSlide
    },

    data () {
      return {
        samples: [
          {
            link: 'https://www.buydig.com',
            name: 'BuyDig Website',
            image: {src: '/screen-buydig-homepage.jpg', alt: 'BuyDig Homepage'},
            role: 'Web Developer',
            technologies: [
              'HTML',
              'CSS/SCSS',
              'JavaScript/jQuery',
              'C#/.NET',
              'SQL'
            ]
          },
          {
            link: 'https://www.flynyon.com',
            name: 'FlyNYON Website',
            image: {src: '/screen-flynyon-homepage.jpg', alt: 'FlyNYON Homepage'},
            role: 'Front End Developer',
            technologies: [
              'Vue.js/Nuxt.js',
              'PUG',
              'SCSS',
              'Rails',
              'SQL'
            ]
          },
          {
            link: '/case-studies/nyonair-dashboard',
            name: 'NYON Dash',
            image: {src: '/screen-nyon-dash-flights.jpg', alt: 'NYON Dash Flights'},
            role: 'Front End Developer',
            technologies: [
              'Vue.js/Nuxt.js',
              'PUG',
              'SCSS',
              'Rails',
              'SQL'
            ]
          },
          {
            link: 'https://www.flyfoxtrot.com',
            name: 'FlyFoxtrot Website',
            image: {src: '/screen-foxtrot-homepage.jpg', alt: 'FlyFoxtrot Homepage'},
            role: 'Front End Developer',
            technologies: [
              'Vue.js/Nuxt.js',
              'PUG',
              'SCSS',
              'Rails',
              'SQL'
            ]
          },
          {
            link: 'https://github.com/pcaleja/cli-img-batch',
            name: 'cli-img-batch',
            role: 'Developer',
            technologies: [
              'JavaScript',
              'Node.js'
            ]
          },
          {
            link: 'https://www.newyorkonair.com',
            name: 'New York On Air Website',
            image: {src: '/screen-newyorkonair-homepage.jpg', alt: 'New York On Air Homepage'},
            role: 'Front End Developer',
            technologies: [
              'Vue.js/Nuxt.js',
              'PUG',
              'SCSS',
              'Rails',
              'SQL'
            ]
          },
          {
            link: 'https://www.shopkeep.com',
            name: 'ShopKeep Website',
            image: {src: '/screen-shopkeep-blog.jpg', alt: 'ShopKeep Blog'},
            role: 'Front End Developer',
            technologies: [
              'WordPress',
              'PHP',
              'Twig',
              'SCSS',
              'Gulp',
              'SQL'
            ]
          }
        ]
      }
    }
  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .c-home-samples {
    padding: 1rem;

    &__items {
      @extend %flex;
      @extend %around;
      padding: 0;
    }

    &__item {
      @extend %col-12;
      @extend %col-sm-6;
      margin-bottom: 1rem;
      padding: 1rem;


      &__text {
        @include font-size(14);
        background: $light-off-1;
        padding: 0.5rem;
        color: $dark-off-2;
        border-bottom: 2px solid transparent;
        transition: 0.4s all ease;
      }

      &__link {
        color: $secondary;
      }

      &__label {
        @include font-size(12);
        font-weight: 600;
        margin-top: 0.5rem;
        color: $dark-off-2;
      }

      &__main {
        @include font-size(20);
        @extend %flex;
        @extend %middle;
        @extend %center;
        height: 160px;
        overflow: hidden;
        background: $primary-dark;
        color: $light;
        font-weight: bold;
        position: relative;

        @include breakpoint(xs) {
          height: 190px;
        }
      }

      img {
        transition: 0.4s all ease;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        opacity: 0.4;
      }

      figcaption {
        position: relative;
        z-index: 1;
      }

      &:hover {
        img {
          opacity: 0.2;
        }

        .c-home-samples__item__text {
          border-bottom: 2px solid $secondary;
        }
      }
    }
  }
</style>
