<template lang='pug'>
  div(class='p-error')
    h1 Whomp whomp, {{ error.statusCode }} Error
    h3 {{ error.message }}
</template>

<script>
  import metadata from '~/modules/metadata.js'

  export default {
    props: {
      error: {
        type: Object
      }
    },

    head () {
      return metadata({
        title: 'Error | Philip Caleja',
        description: 'Something is not quite right with this page.',
        robots: 'noindex'
      })
    },

    mounted () {
      if (this.error.statusCode === 500 && /^Loading chunk (\d)+ failed\./.test(this.error.message)) {
        location.reload()
      }
    }
  }
</script>

<style lang='scss'>
  @import '~assets/styles/lib';

  .p-error {
    padding: 2rem;
  }
</style>
