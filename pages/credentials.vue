<template lang='pug'>
  div(class='p-credentials')
    section(class='p-credentials__toolkit')
      div
        h1 Credentials &amp; Toolkits

        ul
          li Machine: Macbook Pro
          li Command Line Interface: iTerm2
          li Text Editor: Visual Studio Code
          li Design Applications: Sketch, Photoshop, Illustrator
          li Version Control: Github, Gitlab, Bitbucket
          li Communication: Slack, Gmail
          li Hosting: Netlify (Static Sites), Heroku (Servers)

    section(class='p-credentials__skills')
      div(class='p-credentials__skills__wrapper')
        h3 Skills

        div(v-for='skill in skills' class='p-credentials__skills__skill')
          p: strong {{ skill.label }}
          div(v-for='item in skill.items')
            p {{ item.label }}
            ul(class='c-list')
              li(v-for='capability in item.capabilities') {{ capability }}

        div
          p: strong TLDR
          p I have a wide range of skills to improve your business’ web presence and capabilities. Not only can I help you get started with a website, I am also equipped with tools to optmize your website in the long haul.

    section(class='p-credentials__experiences')
      div
        h3 Experiences

        div(
          v-for='experience in experiences'
          class='p-credentials__experiences__experience'
        )
          p: strong {{ experience.company }} | {{ experience.title }} | {{ experience.start_date }} - {{ experience.end_date }}
          p {{ experience.description }}
          ul(class='c-list')
            li(
              v-for='achievement in experience.achievements'
              v-html='achievement'
            )
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
                  'Able to semantically markup a website for SEO and accessibility',
                  'Able to use templating engines (PUG, Twig, Haml) for a reusable and more maintainable markup'
                ]
              },
              {
                label: 'CSS',
                capabilities: [
                  'Understanding of the importance of having a structured naming convention for improved readability and consistency of the codebase',
                  'Understanding of the mobile first methodology to address a project’s responsive needs',
                  'Able to setup and use preprocessors to improve style reusability and maintainability',
                  'Able to use CSS Frameworks (Bootstrap, Foundation, Bulma) to quickly prototype ideas though I prefer not use frameworks in production codebase because it tends to create unnecessary bloat'
                ]
              },
              {
                label: 'JavaScript',
                capabilities: [
                  'Understanding of ES5 and ES6 concepts, capabilities and nuances to use it effeciently',
                  'Able to use Nuxt.js Framework to get a Vue based static site or SPA started quickly',
                  'Understanding of Node.js to create cloudbased functions which works well when building dynamic functionalities for static sites',
                  'Experience setting up bundlers and task runners to automate workflows',
                  'Experience with a multitude of libraries such as underscore, moment and axios to name a few'
                ]
              },
              {
                label: 'Tooling',
                capabilities: [
                  'Able to use Git to track changess in a project and improve collaboration with other developers',
                  'Understanding of how to use SSH to access servers and databases',
                  'Able to use bash scripting to improve daily workflow',
                  'Experience working with third-party APIs such as Cloudinary, Freshdesk and Google Maps to name a few'
                ]
              },
              {
                label: 'Project Management',
                capabilities: [
                  'Understanding of Agile concepts to build software efficiently and effectively',
                  'Experience setting up software project management tools (JIRA, Pivotal Tracker) so developers can collaborate better and project managers can track tasks and performance',
                  'Experience using Trello and Dapulse to collaborate with non-developer team members'
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
                  'Able to create a visual hiearchy to control the user\'s experience on a webpage',
                  'Able to organize content to group relevant information together and lay them out in a coherent way'
                ]
              },
              {
                label: 'UX/UI',
                capabilities: [
                  'Able to create wireframes and prototypes to quickly iterate through ideas and save development time',
                  'Able to create mid and hi-fidelity mockups to communicate what the look and feel of a website will be'
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
            label: 'Marketing Essentials',
            items: [
              {
                label: 'SEO',
                capabilities: [
                  'Understanding of Google’s guidelines to know how to build websites that allows for improved searchability',
                  'Experience working with Schema tags so Google’s crawlers can understand the varierty of content that exists in a website'
                ]
              },
              {
                label: 'A/B Testing',
                capabilities: [
                  'Experience setting up Optimizely and Google Optimize to enable markerters to create experiments'
                ]
              },
              {
                label: 'Analytics',
                capabilities: [
                  'Experience setting up Google Analytics so marketers and business leaders can use it to make data driven decisions'
                ]
              },
              {
                label: 'CRMs',
                capabilities: [
                  'Experience integrating websites with various CRM tools (Mailchimp, Infusionsoft, Marketo) that help marketers collect leads and build customer profiles and relationships '
                ]
              }
            ]
          }
        ],

        experiences: [
          {
            company: 'NYONair',
            title: 'Web Developer',
            start_date: 'May 2017',
            end_date: 'Present',
            description: 'NYONair is an aerial/helicopter company focusing on aerial photography experiences.',
            achievements: [
              'Lead the migration from bitbucket and JIRA to gitlab to improve the developer experience',
              'Lead the migration from infusionsoft to mailchimp for a better UI experience for the marketing department',
              'Lead the migration of <a target="_blank" href="https://www.flynyon.com/">www.flynyon.com</a> from a wordpress site to a static generated site which improved performance and maintainabilty',
              'Rebuilt <a target="_blank" href="https://www.nyonair.com/">www.nyonair.com</a> from the ground up which improved the performance and maintainability',
              'Setup an e-commerce gallery for <a target="_blank" href="https://www.nyonair.com/">www.nyonair.com</a> using Snipcart',
              'Built the front-end and assisted with the design of www.flyfoxtrot.com',
              'Built the front-end and lead the design of the company\'s booking system',
              'Worked with the backend developer to define the architecture for the booking system',
              'Improved the look and feel of some of the pages for <a target="_blank" href="https://www.flynyon.com/">www.flynyon.com</a> and <a target="_blank" href="https://www.nyonair.com/">www.nyonair.com</a>',
              'Handle changes for <a target="_blank" href="https://www.flynyon.com/">www.flynyon.com</a>, <a target="_blank" href="https://www.nyonair.com/">www.nyonair.com</a>, and <a target="_blank" href="https://www.flyfoxtrot.com/">www.flyfoxtrot.com</a> on a daily basis',
              'Administered third-party softwares like G Suite, Freshdesk, Slack and Mailchimp'
            ]
          },
          {
            company: 'ShopKeep',
            title: 'Front-End Developer',
            start_date: 'March 2016',
            end_date: 'May 2017',
            description: 'ShopKeep is a software development company working on a point of sale application for iOS devices that’s being used by over 20,000 small businesses.',
            achievements: [
              'I was the lead developer for ShopKeep’s marketing site, <a target="_blank" href="https://www.shopkeep.com">www.shopkeep.com</a>.',
              'I also managed and maintained their ecommerce site, <a target="_blank" href="https://shop.shopkeep.com">shop.shopkeep.com</a>.',
              'I developed the front end of their gift card micro-site, <a target="_blank" href="http://www.ecardsystems.com/shopkeep/#!/">www.ecardsystems.com/shopkeep</a>.',
              'I developed the front end of their lead capture micro-site, <a target="_blank" href="http://www.possoftwareguide.com/find-your-pos">www.possoftwareguide.com/find-your-pos</a>.'
            ]
          },
          {
            company: 'ShopKeep',
            title: 'Junior Developer/Designer',
            start_date: 'March 2015',
            end_date: 'March 2016',
            achievements: [
              'I designed and developed landing pages.',
              'I designed google ad banners.',
              'I developed the new blog, <a target="_blank" href="https://www.shopkeep.com/blog">www.shopkeep.com/blog</a>.'
            ]
          },
          {
            company: 'Magnet Media',
            title: 'Design Intern',
            start_date: 'June 2014',
            end_date: 'March 2015',
            description: 'Magnet Media Films is a content marketing solutions industry leader who created stunning videos for clients such as Google, Microsoft and Good Technology.',
            achievements: [
              'I assisted the Art Director with Magnet Media’s personal branding as well as client projects.',
              'I created visual assets for presentations and other marketing materials.',
              'I redesigned and developed their marketing website.'
            ]
          }
        ]
      }
    }
  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .p-credentials {

    &__toolkit {
      @extend %flex;
      @extend %middle;
      background: $primary;
      padding: 0 1rem;
      position: relative;
      min-height: 300px;

      ul {
        padding-left: 0;
        color: $primary-dark;
      }

      li {
        list-style: none;
        margin-bottom: 0.5rem;
        &:before {
          display: none;
        }
      }
    }

    &__skills,
    &__experiences {
      background: $dark-off-1;
      padding: 2rem 1rem;

      &__wrapper {
        max-width: 900px;
      }

      &__skill,
      &__experience {
        margin-bottom: 2rem;
      }
    }
  }
</style>
