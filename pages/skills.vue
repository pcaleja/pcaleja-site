<template lang='pug'>
  div(class='p-skills')

    div(class='p-skills__wrapper')
      div(class='c-skills-overview')
        h3 Overview
        p I am a front end developer with a background in design. I do not only code sites, I build sites that look good and function well. In addition, I also have an understanding digital marketing. I can help your business setup analytic tools to measure your KPIs. I also administered various third-party softwares so I am comfortable making technical decisions for your business.
        p My current tech stack consists of HTML, CSS and JavaScript. I use Vue.js as my current JS Framework of choice.
        p In addition, I'm currently learning React and Node.js to add to my tools.

      vue-skills-experience

      vue-skills-skills

      div
        p: strong TLDR
        p I have a wide range of skills to improve your business’ web presence and capabilities. Not only can I help you get started with a website, I am also equipped with tools to optmize your website in the long haul.

</template>

<script>
  import VueSkillsExperience from '~/components/SkillsExperience.vue'
  import VueSkillsSkills from '~/components/SkillsSkills.vue'

  export default {
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
      }
    }

    .c-skills-overview {
      margin-bottom: 2rem;
    }
  }
</style>
