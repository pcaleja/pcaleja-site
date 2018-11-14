<template lang='pug'>
  section(class='c-home-samples')
    h3 Samples
    no-ssr
      vue-carousel(
        autoplay
        :autoplay-timeout='5000'
        loop
        :per-page='1'
      )
        vue-slide(
          v-for='(slide, index) in slides'
          :key='index'
        )
          div(class='c-home-samples__slide')
            div(class='c-home-samples__slide__content')
              a(:href='slide.link'): strong {{ slide.link }}
              p(class='c-home-samples__slide__description') {{ slide.description }}

            div(class='c-home-samples__slide__image')
              a(
                class='c-slide-link'
                :href='slide.link'
                target='_blank'
              )
                figure
                  img(:src='slide.image')

            div(class='c-home-samples__slide__additional-info')
              div(class='c-home-samples__slide__tech-stack')
                h4: strong Tech Stack
                dl
                  template(v-for='tech in slide.technologies')
                    dt {{ tech.label }}
                    dd {{ tech.value }}

              div(class='c-home-samples__slide__responsibilities')
                h4: strong Responsibilities
                ul
                  li(v-for='responsibility in slide.responsibilities') {{ responsibility}}
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
            description: 'FlyNYON is an e-commerce website that sells doors-off helicopter photography flights. The site is setup to be an isomorphic website where the front-end is a separate code base from the back-end.',
            responsibilities: [
              'Assisted with the design of the UI components',
              'Built the front-end of the website from the ground up',
              'Setup analytics tooling per marketing requirements',
              'Maintained the website as business requirements change',
              'Wrote integration tests and e2e test for core functionalities'
            ],
            technologies: [
              {
                label: 'JavaScript Framework',
                value: 'Vue.js/Nuxt.js'
              },
              {
                label: 'Templating Engine',
                value: 'PUG'
              },
              {
                label: 'CSS Preprocessor',
                value: 'SCSS'
              },
              {
                label: 'Hosting',
                value: 'Netlify'
              },
              {
                label: 'Backend',
                value: 'Ruby on Rails hosted in Heroku'
              },
              {
                label: 'Headless CMS',
                value: 'Contentful'
              }
            ]
          },
          {
            link: 'https://www.flyfoxtrot.com',
            image: '/screen-foxtrot-homepage.jpg',
            description: 'FlyFoxtrot is an e-commerce website that sells charter helicopter flights. The site is setup to be an isomorphic website where the front-end is a separate code base from the back-end.',
            responsibilities: [
              'Assisted with the design of the UI components',
              'Built the front-end of the website from the ground up',
              'Setup analytics tooling per marketing requirements',
              'Updated the website as business requirements change'
            ],
            technologies: [
              {
                label: 'JavaScript Framework',
                value: 'Vue.js/Nuxt.js'
              },
              {
                label: 'Templating Engine',
                value: 'PUG'
              },
              {
                label: 'CSS Preprocessor',
                value: 'SCSS'
              },
              {
                label: 'Hosting',
                value: 'Netlify'
              },
              {
                label: 'Backend',
                value: 'Ruby on Rails hosted in Heroku'
              }
            ]
          },
          {
            link: 'https://www.newyorkonair.com',
            image: '/screen-newyorkonair-homepage.jpg',
            description: 'New York On Air is an e-commerce website that sells doors-on helicopter photography flights. The site is setup to be an isomorphic website where the front-end is a separate code base from the back-end.',
            responsibilities: [
              'Assisted with the design of the UI components',
              'Built the front-end of the website from the ground up',
              'Setup analytics tooling per marketing requirements',
              'Updated the website as business requirements change'
            ],
            technologies: [
              {
                label: 'JavaScript Framework',
                value: 'Vue.js/Nuxt.js'
              },
              {
                label: 'Templating Engine',
                value: 'PUG'
              },
              {
                label: 'CSS Preprocessor',
                value: 'SCSS'
              },
              {
                label: 'Hosting',
                value: 'Netlify'
              },
              {
                label: 'Backend',
                value: 'Ruby on Rails hosted in Heroku'
              },
              {
                label: 'Headless CMS',
                value: 'Contentful'
              }
            ]
          },
          {
            link: 'https://www.shopkeep.com/blog',
            image: '/screen-shopkeep-blog.jpg',
            description: 'The Small Business Hub is ShopKeep\'s blog channel that contains content regarding POS systems and small businesses.',
            responsibilities: [
              'Rebuilt core pages of the site using TWIG templating engine',
              'Setup analytics tooling per marketing requirements',
              'Setup A/B tests to measure performance of changes',
              'Built custom landing pages for various campaigns',
              'Improved site performance overtime'
            ],
            technologies: [
              {
                label: 'Framework',
                value: 'Wordpress'
              },
              {
                label: 'Templating Engine',
                value: 'Twig'
              },
              {
                label: 'CSS Preprocessor',
                value: 'SCSS'
              },
              {
                label: 'JavaScript Toolkit',
                value: 'Gulp'
              },
              {
                label: 'Hosting',
                value: 'WP Engine'
              }
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

    @include breakpoint(xs) {
      padding: 2rem;
    }

    &__slide {
      @extend %flex;
      @extend %middle;

      &__image {
        @extend %col-12;
      }

      &__content {
        @extend %col-12;
        color: $dark-off-2;
      }

      &__additional-info {
        @extend %flex;
      }

      &__tech-stack,
      &__responsibilities {
        @extend %col-12;
        @extend %col-xs-6;
        color: $dark-off-2;
        margin-top: 1rem;
      }

      &__description {
        margin-bottom: 1rem;
      }

      ul,
      dl {
        margin-top: 0.5rem;
      }

      ul {
        padding-left: 1rem;
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
