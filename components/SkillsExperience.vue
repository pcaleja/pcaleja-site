<template lang='pug'>
  section(class='c-skills-experience')
    h3 Career History
    div(
      v-for='(year, index) in years'
      :key='index'
      class='c-skills-experience__year'
    )
      div(class='c-skills-experience__year__label') {{ year.label }}
      div(
        v-for='(experience, index) in year.experiences'
        :key='index'
        class='c-skills-experience__experience'
      )
        h4 {{ experience.company }} - {{ experience.title }}
        p(class='c-skills-experience__experience__date') {{ experience.start_date }} to {{ experience.end_date }}
        p(class='c-skills-experience__experience__description')  {{ experience.description }}
        p: strong Achievements:
        ul
          li(
            v-for='contribution in experience.contributions'
            class='c-skills-experience__contribution'
          ) {{ contribution }}
</template>

<script>
  export default {
    data () {
      return {
        years: [
          {
            label: '2018',
            experiences: [
              {
                company: 'NYONair',
                title: 'Web Developer',
                start_date: 'May 2017',
                end_date: 'Present',
                description: 'NYONair is an aerial/helicopter company provides aerial photography experiences to the masses.',
                contributions: [
                  'I contributed to reducing the company’s booking engine expense from around 400k per year down to around 50k per year after the initial investment of around 200k to build an in-house software. My contributions were getting a team together to start the project and my role was to build and design the client facing side of the application.',
                  'I enabled the company to make data driven decisions by visualizing their KPIs now that they own their data with their in-house booking engine. I also setup additional tracking softwares to provide the team with more insights.',
                  'I helped increase the Operation Department’s efficiency by programming features for the booking engine that optimizes their workflow. This allowed the company to cater to more customers while keeping the same staff count.',
                  'I improved their marketing site performance by  migrating it from a dynamic WordPress setup to a static generated one which decreased load time significantly.',
                  'I enabled marketers and other staff to manage campaign assets and site content by configuring a headless CMS.',
                  'I reduced the cost of third-party softwares and increased staff productivity when I analyzed what the company needed and initiated replacing existing softwares with better fits.',
                  'I architected the company sites to be more maintainable by extracting reusable components and shared functionalities into modules and writing tests for core functionalities.',
                  'I contributed in the increase in revenue by optimizing the checkout flow in collaboration with the analytics team.'
                ]
              }
            ]
          },
          {
            label: '2017',
            experiences: [
              {
                company: 'ShopKeep',
                title: 'Front-End Developer',
                start_date: 'March 2016',
                end_date: 'May 2017',
                description: 'ShopKeep is a software development company working on a point-of-sale application for iOS devices.',
                contributions: [
                  'I contributed to improving lead conversion by setting up A/B test experiments in collaboration with the marketing team.',
                  'I improved site performance by setting up Gulp tasks to optimize CSS and JavaScript. I also created a batch image optimizing CLI to easily optimize images being used in the site.',
                  'I contributed with improving site tracking and giving the marketing more control by setting up Data Layer which enabled the team to make better data-driven decisions.',
                  'I improved developer productivity by replacing the Visual Composer workflow with Twig which allowed developers to have more control on the pages being built.',
                  'I contributed to improving site design and usability by rebuilding core pages and implementing the new brand style guide.',
                  'I reduced bugs left uncaught by setting up automated tests to run prior to deploying.'
                ]
              }
            ]
          },
          {
            label: '2016',
            experiences: [
              {
                company: 'ShopKeep',
                title: 'Junior Developer and Designer',
                start_date: 'March 2015',
                end_date: 'March 2016',
                contributions: [
                  'I improved the blog’s performance by rebuilding it. I also restructured the content to improve SEO.',
                  'I improved the marketing site’s responsiveness by implementing a grid system.',
                  'I contributed to the design of the new pages and built landing pages to test their effectiveness.'
                ]
              }
            ]
          },
          {
            label: '2015',
            experiences: [
              {
                company: 'Magnet Media',
                title: 'Design Intern',
                start_date: 'June 2014',
                end_date: 'March 2015',
                description: 'Magnet Media Films is a content marketing solutions industry leader who created stunning videos for clients such as Google, Microsoft and Good Technology.',
                contributions: [
                  'I created visual assets for presentations and other marketing materials.',
                  'I redesigned and developed their marketing website.'
                ]
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

  .c-skills-experience {

    &__year {
      border-left: 2px solid $secondary;
      margin-left: 1rem;
      padding-left: 1rem;
      position: relative;

      &__label {
        @include font-size(14);
        @extend %font-oswald;
        position: absolute;
        background: $primary;
        padding: 0.5rem;
        left: -2rem;
        top: -0.5rem;
      }
    }

    &__experience {
      margin-bottom: 2rem;

      &__date {
        @include font-size(14);
        font-style: italic;
        margin-top: 0;
        margin-bottom: 0.5rem;
      }

      &__description {
        margin-bottom: 1rem;
      }
    }

    &__contribution {
      margin-bottom: 2rem;

      &__header {
        margin-bottom: 0.25rem;
      }

      &__subheader {
        @include font-size(14);
        margin-top: 0;
      }
    }

    h4 {
      @include font-size(20);
      color: $light;
      margin-bottom: 0;
    }

    @media print {
      &__year {
        border-color: $primary;
      }

      h4 {
        font-size: 14px;
        color: $dark;
      }
    }
  }
</style>
