<template lang='pug'>
  div(class='p-home')
    section(class='p-home__about')
      figure(class='p-home__about__photo')
        img(src='/photo-philip-caleja.jpg' alt='Philip Caleja')

      div(class='p-home__about__content')
        h1 About Philip Caleja
        h2 Web Developer &amp; Designer looking for freelance opportunities

        p Hello! I’m a Web Developer currently working full time. I’m looking for small to medium sized side projects to work on after hours for additional income.
        p My turnaround time for a small project is around 1-2 weeks while a medium sized project is around 3-5 weeks. If you’re interested, let’s work together.


    section(class='p-home__process')
      h3 My Process

      p Most clients expect to hire someone and a site will be made. That usually results to dissatisfied clients and a frustrated designer/developer. So before I start a project, I’d like to layout my process for my clients to be a part of.

      div(class='p-home__process__wrapper')
        ol(class='p-home__process__content')
          li(
            v-for='(step, index) in steps'
            class='p-home__process__content__step'
            :key='index'
          )
            div(class='p-home__process__content__wrapper')
              h4 {{ step.header }}
              p(v-for='paragraph in step.content') {{ paragraph }}
              span(class='p-home__process__content__step__v-line')
              span(class='p-home__process__content__step__h-line')

        blockquote(
          class='p-home__process__quote'
          v-for='(quote, index) in quotes'
          :cite='quote.source'
          :key='index'
        ) "{{ quote.content }}"

    section(class='p-home__outro')
      div(class='p-home__outro__item')
        h3 Samples
        no-ssr
          vue-carousel(
            autoplay
            :autoplay-timeout='3000'
            loop
            :per-page='1'
          )
            vue-slide
              a(
                class='c-slide-link'
                href='https://www.flynyon.com'
                target='_blank'
              )
                figure
                  img(src='/screen-flynyon-homepage.jpg')

            vue-slide
              a(
                class='c-slide-link'
                href='https://www.flyfoxtrot.com'
                target='_blank'
              )
                figure
                  img(src='/screen-flyfoxtrot-homepage.jpg')

            vue-slide
              a(
                class='c-slide-link'
                href='https://www.nyonair.com'
                target='_blank'
              )
                figure
                  img(src='/screen-nyonair-homepage.jpg')

            vue-slide
              a(
                class='c-slide-link'
                href='https://www.shopkeep.com/blog'
                target='_blank'
              )
                figure
                  img(src='/screen-shopkeep-blog.jpg')

      div(class='p-home__outro__item')
        h3 Like what you see?
        p: em Reach out and let's create something awesome!
        vue-form
</template>

<script>
  import { Carousel as VueCarousel, Slide as VueSlide } from 'vue-carousel'
  import VueForm from '~/components/Form.vue'

  export default {
    components: {
      VueForm,
      VueCarousel,
      VueSlide
    },

    data () {
      return {
        steps: [
          {
            header: 'Gather Requirments',
            content: [
              'Before any work starts, the scope needs to be defined.',
              'This will help us manage deliverables and expectations.'
            ]
          },
          {
            header: 'Plan and Schedule',
            content: [
              'With the help of the client, we will define the schedule.',
              'We will also discuss about the content and design direction.'
            ]
          },
          {
            header: 'Mock Up and Review',
            content: [
              'This is the phase when we draft the ideas discussed.',
              'This makes sure that we have a mutual understanding of the direction of the project.'
            ]
          },
          {
            header: 'Design and Develop',
            content: [
              'Traditionally, these two process are done separately. Design is usually executed first and approved then it moves to development.',
              'However, it’s more efficient to make this process into a cycle. Design > Develop > Repeat.'
            ]
          },
          {
            header: 'Review and Revise',
            content: [
              'Getting it right the first time hardly happens. This gives everyone a chance to catch crucial bugs.',
              'This phase usually cycles until everyone satisfied with the end result.'
            ]
          },
          {
            header: 'Launch and Monitor',
            content: [
              'Congratulations! Your site is up and running. But we\'re not quite done yet.',
              'Let’s take this time to monitor and make new plans to make it even better!'
            ]
          }
        ],

        quotes: [
          {
            content: 'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.',
            source: 'https://www.brainyquote.com/quotes/abraham_lincoln_109275'
          },
          {
            content: 'By failing to prepare, you are preparing to fail.',
            source: 'https://www.brainyquote.com/quotes/benjamin_franklin_138217'
          }
        ]
      }
    }
  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .p-home {

    &__about {
      @extend %flex;
      @extend %middle;
      padding: 0 1rem;
      position: relative;
      min-height: 300px;

      @include breakpoint(xs) {
        padding: 0 2rem;
        padding-left: 0;
      }

      &__photo {
        @extend %col-4;
        display: none;
        max-width: 260px;
        align-self: flex-end;
        padding-left: 0;

        @include breakpoint(xs) {
          display: block;
        }

        img {
          mix-blend-mode: multiply;
        }
      }

      &__content {
        @extend %col-12;
        @extend %col-xs-8;
        color: $primary-dark;
        padding: 0;
      }
    }

    &__process {
      background: $dark-off-1;
      padding: 2rem 1rem;

      @include breakpoint(xs) {
        padding: 2rem;
      }

      &__wrapper {
        position: relative;
        margin-top: 2rem;
      }

      &__content {
        @extend %flex;
        counter-reset: li;

        &__wrapper {
          position: relative;
        }

        &__step {
          @extend %col-12;
          @extend %col-sm-4;
          list-style: none;
          position: relative;
          margin-bottom: 2rem;

          @include breakpoint(sm) {
            &:nth-of-type(1) {
              order: 1;
            }

            &:nth-of-type(2) {
              order: 2;
              margin-top: 8rem;
            }

            &:nth-of-type(3) {
              order: 3;
              margin-top: 16rem;
            }

            &:nth-of-type(4) {
              order: 6;
            }

            &:nth-of-type(5) {
              order: 5;
              margin-top: 8rem;
            }

            &:nth-of-type(5) &__v-line,
            &:nth-of-type(4) &__v-line {
              top: auto;
              bottom: 0;
              left: calc(-100% - 46px);
              height: 100%;
            }

            &:nth-of-type(6) {
              order: 4;
              margin-top: 16rem;
            }
          }

          &:before {
            @extend %font-oswald;
            font-weight: 300;
            content: counter(li);
            counter-increment: li;
            position: absolute;
            left: -35px;
            background: $secondary;
            width: 25px;
            height: 25px;
            text-align: center;
            line-height: 25px;
            border-radius: 50%;
            z-index: 1;
          }

          &__v-line {
            position: absolute;
            left: -30px;
            height: calc(100% + 2rem);
            background: $dark-off-2;
            width: 1px;
            top: 0;

            @include breakpoint(sm) {
              height: calc(100% + 5rem);
            }
          }

          &__h-line {
            display: none;
            position: absolute;
            width: calc(100% + 2rem);
            background: $dark-off-2;
            height: 1px;
            top: calc(25px / 2);
            left: calc(-100% - 4rem);

            @include breakpoint(sm) {
              display: block;
            }
          }

          &:last-of-type &__v-line,
          &:last-of-type &__h-line,
          &:first-of-type &__h-line, {
            display: none;
          }

          p {
            @include font-size(12);
            line-height: 1.8;
          }
        }
      }

      &__quote {
        @include font-size(22);
        color: lighten($primary, 25%);
        display: none;
        text-align: center;

        &:nth-of-type(2) {
          display: block;
        }

        @include breakpoint(sm) {
          display: block;

          &:nth-of-type(1) {
            text-align: right;
            max-width: 390px;
            position: absolute;
            top: 0;
            right: 0;
          }

          &:nth-of-type(2) {
            @include font-size(22, 34);
            max-width: 430px;
            text-align: left;
            position: absolute;
            top: 30%;
            left: 0;
          }

          &:nth-of-type(3) {
            text-align: right;
            position: absolute;
            bottom: 0;
            right: 0;
          }
        }
      }
    }

    &__outro {
      @extend %flex;

      &__item {
        @extend %col-12;
        @extend %col-sm-6;
        text-align: center;
        background: $dark-off-2;
        padding: 2rem 1rem;

        @include breakpoint(sm) {
          text-align: left;
          padding: 2rem;
        }

        &:first-of-type {
          background: $light;

          h3 {
            color: $primary;
          }
        }
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
</style>
