<template lang='pug'>
  div(class='p-skills')

    div(class='p-skills__wrapper')
      div(class='c-skills-overview')
        h3 Overview
        p I am a front end developer with a background in design and a knack for data. With my skill sets, I am comfortable making both technical and creative data driven decisions to contribute to your team. My forte is building and improving websites aligned with business goals. In addition, I can also build internal tools or procure third party software to increase efficiency and productivity within a company.
        p My current tech stack consists of HTML, CSS (SCSS) and JavaScript. I use Vue.js as my current JS Framework of choice though I’m familiar with React as well. In addition to my front end skill sets, I also have familiarity with PHP, Node.js and SQL.

      vue-skills-experience

      vue-skills-skills

      div
        p: strong TLDR
        p I have a wide range of skills to improve your business’ web presence and capabilities. Not only can I help you get started with a website, I am also equipped with tools to optmize your website in the long haul.

</template>

<script>
  import VueSkillsExperience from '~/components/SkillsExperience.vue'
  import VueSkillsSkills from '~/components/SkillsSkills.vue'
  import metadata from '~/modules/metadata.js'

  export default {
    head () {
      return metadata({
        title: 'Skills | Philip Caleja',
        description: 'My forte is building and improving websites aligned with business goals. In addition, I can also build internal tools or procure third party software to increase efficiency and productivity within a company.',
        canonical: `${process.env.root}/skills`
      })
    },

    components: {
      VueSkillsExperience,
      VueSkillsSkills
    }
  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .p-skills {
    background: $primary;
    color: $light;
    padding: 1rem;

    &__wrapper {
      max-width: 900px;
    }

    h3 {
      color: $secondary;
    }

    ul {
      padding-left: 1rem;

      li {
        margin-bottom: 0.5rem;
      }
    }

    @media print {
      h3 {
        color: $primary;
        font-size: 16px;
      }

      p {
        font-size: 12px;
        color: $dark;
      }

      li {
        font-size: 12px;
        color: $dark-off-1;
      }
    }

    .c-skills-overview {
      margin-bottom: 2rem;
    }
  }
</style>
