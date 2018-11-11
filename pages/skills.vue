<template lang='pug'>
  div(class='p-credentials')

    div(class='p-credentials__wrapper')
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

  .p-credentials {
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
  }
</style>
