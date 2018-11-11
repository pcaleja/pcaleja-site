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
          a(
            class='c-slide-link'
            :href='slide.link'
            target='_blank'
          )
            figure
              img(:src='slide.image')

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
            image: '/screen-flynyon-homepage.jpg'
          },
          {
            link: 'https://www.flyfoxtrot.com',
            image: '/screen-foxtrot-homepage.jpg'
          },
          {
            link: 'https://www.newyorkonair.com',
            image: '/screen-newyorkonair-homepage.jpg'
          },
          {
            link: 'https://www.shopkeep.com/blog',
            image: '/screen-shopkeep-blog.jpg'
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
