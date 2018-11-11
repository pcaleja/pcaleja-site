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
        div(
          v-for='contribution in experience.contributions'
          class='c-skills-experience__contribution'
        )
          p(
            class='c-skills-experience__contribution__header'
          ): strong {{ contribution.header }}
          p(
            v-if='contribution.subheader'
            class='c-skills-experience__contribution__subheader'
          ) {{ contribution.subheader }}
          ul(v-if='contribution.examples')
            li(v-for='example in contribution.examples') {{ example }}

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
                  {
                    header: 'I made technical decision for the company to improve workflows and reduce cost.',
                    examples: [
                      'Initiated and completed the migration from BitBucket and JIRA to GitLab to simplify developer workflows.',
                      'Initiated and completed the migration from InfusionSoft to Mailchimp to reduce monthly cost and improve marketing workflows.',
                      'Initiated and completed the migration of www.flynyon.com from a WordPress setup to a static site',
                      'Assisted in hiring a back-end developer to build an API to be used to replace the legacy booking engine.',
                      'Enabled the marketing team to manage content and campaigns using Contentful.'
                    ]
                  },
                  {
                    header: 'I assisted in the design and built their websites.',
                    subheader: '(www.flynyon.com, www.newyorkonair.com, www.flyfoxtrot.com, back office dashboard)',
                    examples: [
                      'Technologies used to build these websites includes HTML (PUG), CSS (SCSS) and JavaScript (Vue.js/Nuxt.js).',
                      'Tools used to design these websites include Photoshop, Illustrator and Sketch.',
                      'I also assisted the back-end developer with coming up with solutions for new features and to improve the API.'
                    ]
                  },
                  {
                    header: 'I helped enhance reporting to provide better data for management.',
                    examples: [
                      'Setup Enhanced Ecommerce for Google Analytics.',
                      'Setup DataLayer to send custom events for Google Analytics and Facebook Analytics.',
                      'Visualized data using Google Data Studio.'
                    ]
                  },
                  {
                    header: 'I administered third-party softwares used by the company.',
                    subheader: '(G Suite, Help Scout, Slack, Netlify, MailChimp, and Contentful)',
                    examples: [
                      'Managed accounts and groups for G Suite',
                      'Managed accounts and setup integrations for Slack',
                      'Configured Help Scout and migrated data from FreshDesk.',
                      'Configured MailChimp and created templates and automated emails.'
                    ]
                  }
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
                  {
                    header: 'I was the lead developer for ShopKeep’s creative and marketing team.',
                    examples: [
                      'Maintained and built new functionalities for their marketing site. (www.shopkeep.com)',
                      'Managed and maintained their e-commerce hardware site. (shop.shopkeep.com)',
                      'Developed the front-end of their gift card micro-site. (www.ecardsystems.com/shopkeep)',
                      'Developed the front-end of their lead capture micro-site. (www.possoftwareguide.com/find-your-pos)',
                      'Setup A/B testing to help the marketing team measure performance of new layouts and features.',
                      'Setup Google Analytics to improve tracking and provide better data for the marketing team.',
                      'Setup e2e tests to automate regression testing for key pages.',
                      'Contributed in improving performance for some of the key pages of the marketing site.',
                      'Implemented twig templating engine for the marketing site to improve code readability and maintainability.'
                    ]
                  }
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
                  {
                    header: 'I assisted the lead developer and lead designer with their projects.',
                    examples: [
                      'Designed and developed landing pages used for marketing campaigns.',
                      'Created visual assets for presentations, blog posts and other marketing materials.',
                      'Developed the redesigned blog posts and blog homepage. (www.shopkeep.com/blog)'
                    ]
                  }
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
                  {
                    header: 'I assisted the Art Director with day to day tasks as well as client projects.',
                    examples: [
                      'Created visual assets for presentations and other marketing materials.',
                      'Redesigned and developed their marketing website.'
                    ]
                  }
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
    }
  }
</style>
