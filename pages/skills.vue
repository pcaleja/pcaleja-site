<template lang='pug'>
.p-skills
  .p-skills__wrapper
    h1.h1 Resumé

    div
      p: strong TLDR
      p I have a wide range of skills to contribute to your business’ web technologies and capabilities. Not only can I help you get started from the ground up, I am also equipped with tools to optimize your web technologies in the long haul.

    .c-skills-overview
      h2.h3 Overview
      p I am a full stack developer who specializes in front end and background in design. With my skill sets, I am comfortable contributing both technical and creative suggestions to contribute to the team. My forte is building and improving websites and web apps aligned with business goals. In addition, I can also build internal tools or procure third-party software to help increase efficiency and productivity.
      p My current tech stack consists of HTML, CSS (SCSS) and JavaScript. I have plenty of experience using Vue.js and I’m familiar with React as well. For backend, I've used Node.js and C#. For databases, I've used MySql and MSSQL.

    vue-skills-experience

    vue-skills-skills
</template>

<script>
import VueSkillsExperience from "~/components/SkillsExperience.vue";
import VueSkillsSkills from "~/components/SkillsSkills.vue";
import metadata from "~/modules/metadata.js";

export default {
  head() {
    return metadata({
      title: "Skills | Philip Caleja",
      description:
        "My forte is building and improving websites aligned with business goals. In addition, I can also build internal tools or procure third party software to increase efficiency and productivity within a company.",
      canonical: `${process.env.root}/skills`,
    });
  },

  components: {
    VueSkillsExperience,
    VueSkillsSkills,
  },
};
</script>

<style lang='scss'>
@import "~assets/styles/lib";

.p-skills {
  background: $primary;
  color: $light;
  padding: 1rem;

  &__wrapper {
    max-width: 900px;
  }

  .h1 {
    margin-bottom: 1rem;
  }

  .h3 {
    color: $secondary;
  }

  ul {
    padding-left: 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  @media print {
    .h3 {
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
    margin: 2rem 0;
  }

  .h1 {
    color: $light;
  }
}
</style>
