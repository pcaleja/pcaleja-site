<template lang='pug'>
  section(class='c-skills-skills')
    h2(class='h3') Skills
    div(
      v-for='(skill, index) in skills'
      :key='index'
      class='c-skills-skills__category'
    )
      h3(class='h4')(class='c-skills-skills__category__label') {{ skill.label }}
      div(
        v-for='(item, index) in skill.items'
        :key='index'
        class='c-skills-skills__skill'
      )
        h4(class='h5'): strong {{ item.label }}
        p(v-if='item.description') {{ item.description }}
        ul
          li(
            v-if='item.items'
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
                year: 2013,
                description: 'I’m comfortable writing HTML markup and familiar with how it impacts SEO and accessibility. I’m also proficient with using a number of templating engines (PUG, Twig, Haml) to write reusable and maintainable markup.'
              },
              {
                label: 'CSS',
                year: 2013,
                description: 'I’m comfortable using CSS on its own or using preprocessors like SCSS or Stylus. I also understand the importance of having a structure naming convention like BEM for readability, reusability and handling scope. When I write CSS, I write in a mobile first approach to address responsive needs right away.'
              },
              {
                label: 'JavaScript',
                year: 2014,
                description: 'I’m proficient with writing vanilla JS. I’m also comfortable working with modern frameworks. I have the most experience with Vue.js and I’m also familiar with React.js. My expertise is in front-end development but I’m also familiar woking with Node.js to handle server side needs. In addition, I’m also familiar with using common JavaScript tools like npm, Gulp.js, Babel and Webpack.'
              },
              {
                label: 'SQL',
                year: 2017,
                description: 'I’m comfortable writing select queries to answer business questions with data.'
              },
              {
                label: 'Git',
                year: 2014,
                description: 'Git is part of my daily workflow. When working on a new feature, I start a new branch and make my changes in that branch. I’m comfortable cherry-picking commits, rebasing and merging branches. I’m also experienced with git repository hosting services like GitHub, GitLab and Bitbucket.'
              },
              {
                label: 'Testing',
                year: 2016,
                description: 'I’m familiar with TDD (Test Driven Development). I’ve used Mocha/Karma to write unit tests and recently picked up Jest. I’ve also used Nightwatch.js, cypress.io and testcafe to write integration and e2e tests. '
              },
              {
                label: 'API',
                year: 2014,
                description: 'I’m comfortable interacting with Rest APIs using axios. Some APIs I’ve worked with before are Stripe, MailChimp, Cloudinary and Freshdesk to name a few.'
              },
              {
                label: 'Project Management',
                year: 2014,
                description: 'I have an understanding of Agile concepts to build software efficiently and effectively. I’ve used tools such as JIRA, Pivotal Tracker and Trello to collaborate with developers and project managers regarding tasks at hand.'
              }
            ]
          },
          {
            label: 'Marketing',
            items: [
              {
                label: 'SEO',
                year: 2014,
                description: 'I have an understanding of Google’s guidelines to build websites that allows for improved searchability. I also have experience working with Schema tags so crawlers can categorize the content that exists in a website.'
              },
              {
                label: 'A/B Testing',
                year: 2015,
                description: 'I have experience setting up Optimizely and Google Optimize to enable marketers to create experiments. I’m also comfortable setting up custom tracking and events.'
              },
              {
                label: 'Analytics',
                year: 2015,
                description: 'I have experience setting up Google Analytics with Enhanced Ecommerce so that stakeholders can gain better insights in how the website performs and are able to make data-driven decisions.'
              },
              {
                label: 'CRMs',
                year: 2015,
                description: 'I have experience integrating websites with various CRM tools like MailChimp, Infusionsoft and Marketo that help marketers collect leads and build customer profiles and relationships.'
              }
            ]
          },
          {
            label: 'Softwares',
            items: [
              { label: 'VScode/Sublime' },
              { label: 'Sketch' },
              { label: 'Photoshop' },
              { label: 'Illustrator' }
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

    @media print {
      &__category {
        border-color: $primary;
      }
    }
  }
</style>
