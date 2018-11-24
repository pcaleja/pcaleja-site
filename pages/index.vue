<template lang='pug'>
  div(class='p-home')
    vue-home-about

    vue-home-process

    vue-home-samples

    vue-home-contact
</template>

<script>
  import VueForm from '~/components/Form.vue'
  import VueHomeAbout from '~/components/HomeAbout.vue'
  import VueHomeProcess from '~/components/HomeProcess.vue'
  import VueHomeSamples from '~/components/HomeSamples.vue'
  import VueHomeContact from '~/components/HomeContact.vue'
  import metadata from '~/modules/metadata.js'

  export default {
    head () {
      return metadata({
        title: 'Philip Caleja | Front End Developer',
        description: 'Hello! I’m a Front End Web Developer currently looking for full time work. I enjoy building well designed websites and web apps as well as tooling to automate daily workflows.',
        canonical: process.env.root,
        script: [
          { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
          { innerHTML: 'if(window.netlifyIdentity){window.netlifyIdentity.on("init",user => {if(!user){window.netlifyIdentity.on("login",()=>{document.location.href="/admin/";});}});}' }
        ]
      })
    },

    components: {
      VueForm,
      VueHomeAbout,
      VueHomeProcess,
      VueHomeSamples,
      VueHomeContact
    }
  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

</style>
