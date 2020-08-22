<template lang='pug'>
section.c-skills-skills
  h2.h3 Skills
  .c-skills-skills__category(v-for="(skill, index) in skills", :key="index")
    h3.h4.c-skills-skills__category__label {{ skill.label }}
    .c-skills-skills__skill(v-for="(item, index) in skill.items", :key="index")
      h4.h5: strong {{ item.label }}
      p(v-if="item.description") {{ item.description }}
      ul
        li(v-if="item.items", v-for="capability in item.capabilities") {{ capability }}
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          label: "Development",
          items: [
            {
              label: "HTML",
              year: 2013,
              description:
                "I’m comfortable writing HTML markup and familiar with how it impacts SEO and accessibility. I’m also proficient with using a number of templating engines (PUG, Twig, Haml) to write reusable and maintainable markup.",
            },
            {
              label: "CSS",
              year: 2013,
              description:
                "I’m comfortable using CSS on its own or using preprocessors like SCSS or Stylus. I also understand the importance of having a structure naming convention like BEM for readability, reusability and handling scope. When I write CSS, I write in a mobile first approach to address responsive needs right away.",
            },
            {
              label: "JavaScript",
              year: 2014,
              description:
                "I am proficient with writing vanilla JS. I’m also comfortable working with modern frameworks. I have plenty of experience working with Vue.js and I’m also familiar with React.js. I specialize building front-end applications but I can also build backend services and tooling using Node.js. In addition, I am also very familiar with the Javascript ecosystem and tools like npm, webpack and rollup.",
            },
            {
              label: "C#",
              year: 2018,
              description:
                "I am comfortable with OOP and the .NET ecosystem and have experience building websites and web apis using .NET technologies.",
            },
            {
              label: "SQL",
              year: 2017,
              description:
                "I have experience writing custom queries to SELECT, INSERT, UPDATE and DELETE records.",
            },
            {
              label: "Git",
              year: 2014,
              description:
                "Git is part of my daily workflow. When working on a new feature, I start a new branch and make my changes in that branch. I’m comfortable cherry-picking commits, rebasing and merging branches. I’m also experienced with git repository hosting services like GitHub, GitLab, Bitbucket and Azure Devops.",
            },
            {
              label: "Testing",
              year: 2016,
              description:
                "I’m familiar with TDD (Test Driven Development) and I’ve used Mocha/Karma/Jest to write unit tests for Javasript and MSTest2 for .NET. I’ve also used Nightwatch.js, cypress.io and testcafe to write integration and e2e tests.",
            },
            {
              label: "API",
              year: 2014,
              description:
                "I’m comfortable interacting with Rest APIs using axios. Some APIs I’ve worked with before are Stripe, MailChimp, Cloudinary and Freshdesk to name a few.",
            },
            {
              label: "Project Management",
              year: 2014,
              description:
                "I have an understanding of Agile concepts to build software efficiently and effectively. I’ve used tools such as JIRA, Azure Devops, Pivotal Tracker and Trello to collaborate with developers and project managers regarding tasks at hand.",
            },
          ],
        },
        {
          label: "Marketing",
          items: [
            {
              label: "SEO",
              year: 2014,
              description:
                "I have an understanding of Google’s guidelines to build websites that allows for improved searchability. I also have experience working with Schema tags so crawlers can categorize the content that exists in a website.",
            },
            {
              label: "A/B Testing",
              year: 2015,
              description:
                "I have experience setting up Optimizely and Google Optimize to enable marketers to create experiments. I’m also comfortable setting up custom tracking and events.",
            },
            {
              label: "Analytics",
              year: 2015,
              description:
                "I have experience setting up Google Analytics with Enhanced Ecommerce so that stakeholders can gain better insights in how the website performs and are able to make data-driven decisions.",
            },
            {
              label: "CRMs",
              year: 2015,
              description:
                "I have experience integrating websites with various CRM tools like MailChimp, Infusionsoft and Marketo that help marketers collect leads and build customer profiles and relationships.",
            },
          ],
        },
        {
          label: "Softwares",
          items: [
            { label: "VScode/VS" },
            { label: "Sketch" },
            { label: "Photoshop" },
            { label: "Illustrator" },
          ],
        },
      ],
    };
  },
};
</script>

<style lang='scss'>
@import "~assets/styles/lib";

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
