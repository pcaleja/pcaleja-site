<template lang='pug'>
section.c-home-process
  h2.h3 My Process

  p.c-home-process__subheader Having a process is essential for any project. It allows expectations to be managed and improves the quality of the end result.

  .c-home-process__wrapper
    ol.c-home-process__content
      li.c-home-process__content__step(
        v-for="(step, index) in steps",
        :key="index"
      )
        .c-home-process__content__wrapper
          h3.h4 {{ step.header }}
          p(v-for="paragraph in step.content") {{ paragraph }}
          span.c-home-process__content__step__v-line
          span.c-home-process__content__step__h-line

    blockquote.c-home-process__quote(
      v-for="(quote, index) in quotes",
      :key="index"
    ) "{{ quote.content }}"
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          header: "Gather Requirements",
          content: [
            "Before any work starts, the scope needs to be defined.",
            "This will help manage deliverables and expectations.",
          ],
        },
        {
          header: "Plan and Schedule",
          content: [
            "Defining a schedule allows me to be aligned with business goals.",
            "By doing so, high impact tasks first can be prioritized first.",
          ],
        },
        {
          header: "Mock Up, Review and Design",
          content: [
            "This is the phase when we draft the ideas.",
            "This makes sure that we have a mutual understanding of the direction of the project.",
          ],
        },
        {
          header: "Write Test then Write Code",
          content: [
            "With a plan in place, execution can begin. Time to write tests and code.",
            "TDD.",
          ],
        },
        {
          header: "Review and Revise",
          content: [
            "Getting it right the first time hardly happens. This gives everyone a chance to catch crucial bugs.",
            "This phase usually cycles until everyone is satisfied with the end result.",
          ],
        },
        {
          header: "Deliver and Monitor",
          content: [
            "Congratulations! Your project is delivered. But we're not quite done yet.",
            "Let's take this time to monitor and make new plans to make it even better!",
          ],
        },
      ],

      quotes: [
        {
          content:
            "Coding is just a tool, it requires a lot more than that to get the job done.",
        },
        {
          content:
            "I used to think unit tests were a waste till I had to refactor code with no test.",
        },
      ],
    };
  },
};
</script>

<style lang='scss'>
@import "~assets/styles/lib";

.c-home-process {
  background: $primary-lightest;
  color: $dark-off-2;
  padding: 2rem 1rem;

  @include breakpoint(xs) {
    padding: 2rem;
  }

  &__subheader {
    @extend %col-12;
    @extend %col-xs-8;
    padding: 0;
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
        color: $light;
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
        height: calc(100% + 3rem);
        background: $primary-lighter;
        width: 1px;
        top: 0;
      }

      &__h-line {
        display: none;
        position: absolute;
        width: calc(100% + 2rem);
        background: $primary-lighter;
        height: 1px;
        top: calc(25px / 2);
        left: calc(-100% - 4rem);

        @include breakpoint(sm) {
          display: block;
        }
      }

      &:last-of-type &__v-line,
      &:last-of-type &__h-line,
      &:first-of-type &__h-line {
        display: none;
      }

      p {
        @include font-size(12);
        line-height: 1.8;

        @include breakpoint(xs) {
          max-width: 220px;
        }
      }
    }
  }

  &__quote {
    @include font-size(22);
    color: $primary-light;
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
        @include font-size(22, 28);
        max-width: 430px;
        text-align: left;
        position: absolute;
        top: 33%;
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

  .h3 {
    color: $primary;
  }
}
</style>
