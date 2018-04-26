import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      screen: {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      }
    }
  },

  methods: {
    screenWidthListener () {
      window.addEventListener('resize', () => {
        const clientWidth = document.documentElement.clientWidth
        const innerWidth = window.innerWidth
        this.screen.width = Math.max(clientWidth, innerWidth || 0)
      })
    }
  },

  mounted () {
    this.screenWidthListener()
  }
})
