<template lang='pug'>
  section(class='c-home-samples')
    h3 Samples
    no-ssr
      vue-carousel(
        autoplay
        :autoplay-timeout='3000'
        loop
        :per-page='1'
      )
        vue-slide(
          v-for='(slide, index) in slides'
          :key='index'
        )
          div(class='c-home-samples__slide')
            div(class='c-home-samples__slide__image')
              a(
                class='c-slide-link'
                :href='slide.link'
                target='_blank'
              )
                figure
                  img(:src='slide.image')

            div(class='c-home-samples__slide__content')
              a(:href='slide.link'): strong {{ slide.link }}
              p {{ slide.description }}
              p {{ slide.build }}

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
        slides: [
          {
            link: 'https://www.flynyon.com',
            image: '/screen-flynyon-homepage.jpg',
            description: 'FlyNYON is an e-commerce website that sells doors-off helicopter photography flights.',
            build: 'Front-end is built with Vue.js/Nuxt.js, PUG, SCSS, and hosted with Netlify.'
          },
          {
            link: 'https://www.flyfoxtrot.com',
            image: '/screen-foxtrot-homepage.jpg',
            description: 'FlyFoxtrot is an e-commerce website that sells charter helicopter flights.',
            build: 'Front-end is built with Vue.js/Nuxt.js, PUG, SCSS, and hosted with Netlify.'
          },
          {
            link: 'https://www.newyorkonair.com',
            image: '/screen-newyorkonair-homepage.jpg',
            description: 'New York On Air is an e-commerce website that sells doors-on helicopter photography flights.',
            build: 'Front-end is built with Vue.js/Nuxt.js, PUG, SCSS, and hosted with Netlify.'
          },
          {
            link: 'https://www.shopkeep.com/blog',
            image: '/screen-shopkeep-blog.jpg',
            description: 'The Small Business Hub is ShopKeep\'s blog channel that contains content regarding POS systems and small businesses.',
            build: 'Wordpress site built using tools like gulp.js and scss and hosted with WP Engine.'
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

    @include breakpoint(xs) {
      padding: 2rem;
    }

    &__slide {
      @extend %flex;
      @extend %middle;

      &__image {
        @extend %col-12;
        @extend %col-sm-8;
      }

      &__content {
        @extend %col-12;
        @extend %col-sm-4;
        color: $dark-off-2;
        margin-top: 1rem;

        @include breakpoint(sm) {
          margin-top: 0;
        }
      }
    }

    .c-slide-link {
      position: relative;
      display: block;

      &:hover {
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba($primary, 0.5);
        }
      }
    }
  }
</style>
