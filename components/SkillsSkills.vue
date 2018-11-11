<template lang='pug'>
  section(class='c-skills-skills')
    h3 Skills
    div(
      v-for='(skill, index) in skills'
      :key='index'
      class='c-skills-skills__category'
    )
      div(class='c-skills-skills__category__label') {{ skill.label }}
      div(
        v-for='(item, index) in skill.items'
        :key='index'
        class='c-skills-skills__skill'
      )
        p: strong {{ item.label }}
        ul
          li(
            v-for='capability in item.capabilities'
          ) {{ capability }}
</template>

<script>
  export default {
    data () {
      return {
        skills: [
          {
            label: 'Development',
            items: [
              {
                label: 'HTML',
                capabilities: [
                  'Able to semantically markup a website for SEO and accessibility.',
                  'Able to use templating engines (PUG, Twig, Haml) for a reusable and more maintainable markup.'
                ]
              },
              {
                label: 'CSS',
                capabilities: [
                  'Understanding of the importance of having a structured naming convention for improved readability and consistency of the codebase.',
                  'Understanding of the mobile first methodology to address a project’s responsive needs.',
                  'Able to setup and use preprocessors to improve style reusability and maintainability.',
                  'Able to use CSS Frameworks (Bootstrap, Bulma) to quickly prototype ideas.'
                ]
              },
              {
                label: 'JavaScript',
                capabilities: [
                  'Understanding of ES5 and ES6 concepts, capabilities and nuances to use it effectively.',
                  'Able to use Nuxt.js Framework to get a Vue based static site or SPA started quickly.',
                  'Understanding of Node.js to create cloudbased functions which works well when building dynamic functionalities for static sites.',
                  'Experience setting up bundlers and task runners to automate workflows.',
                  'Experience with a multitude of libraries such as underscore, moment and axios to name a few.'
                ]
              },
              {
                label: 'Tools',
                capabilities: [
                  'Able to use Git to track changess in a project and improve collaboration with other developers.',
                  'Understanding of how to use SSH to access servers and databases.',
                  'Able to use bash scripting to improve daily workflow.',
                  'Experience working with third-party APIs such as Cloudinary, Freshdesk and Google Maps to name a few.'
                ]
              },
              {
                label: 'Project Management',
                capabilities: [
                  'Understanding of Agile concepts to build software efficiently and effectively.',
                  'Experience setting up software project management tools (JIRA, Pivotal Tracker, GitLab) so developers can collaborate better and project managers can track tasks and performance.',
                  'Experience using Trello and Dapulse to collaborate with non-developer team members.'
                ]
              }
            ]
          },
          {
            label: 'Design',
            items: [
              {
                label: 'Information Architecture',
                capabilities: [
                  'Able to create a visual hiearchy to lead the user\'s experience on a webpage.',
                  'Able to organize content to group relevant information together and lay them out in a coherent way.'
                ]
              },
              {
                label: 'Ideations/Prototyping',
                capabilities: [
                  'Able to create wireframes and prototypes to quickly iterate through ideas and save development time.',
                  'Able to create mid and hi-fidelity mockups to communicate potential design solutions.'
                ]
              },
              {
                label: 'Softwares',
                capabilities: [
                  'Sketch',
                  'Adobe Create Suite',
                  'Marvel, InVision (Prototyping Tools)'
                ]
              }
            ]
          },
          {
            label: 'Marketing',
            items: [
              {
                label: 'SEO',
                capabilities: [
                  'Understanding of Google’s guidelines to build websites that allows for improved searchability.',
                  'Experience working with Schema tags so crawlers can categorize the content that exists in a website.'
                ]
              },
              {
                label: 'A/B Testing',
                capabilities: [
                  'Experience setting up Optimizely and Google Optimize to enable markerters to create experiments.'
                ]
              },
              {
                label: 'Analytics',
                capabilities: [
                  'Experience setting up Google Analytics so marketers and business leaders can make data driven decisions.'
                ]
              },
              {
                label: 'CRMs',
                capabilities: [
                  'Experience integrating websites with various CRM tools (Mailchimp, Infusionsoft, Marketo) that help marketers collect leads and build customer profiles and relationships.'
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

  .c-skills-skills {
    &__category {
      border-left: 2px solid $secondary;
      margin-left: 1rem;
      padding-left: 1rem;
      position: relative;

      &__label {
        @include font-size(14);
        @extend %font-oswald;
        font-weight: 300;
        text-transform: uppercase;
        position: absolute;
        transform-origin: top left;
        transform: rotate(-90deg) translateX(-100%);
        left: -1.5rem;
        top: 0;
      }
    }

    &__skill {
      margin-bottom: 2rem;
    }
  }
</style>
