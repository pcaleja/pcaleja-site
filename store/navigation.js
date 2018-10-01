const state = () => ({
  is_toggled: false
})

const mutations = {
  open (state) {
    state.is_toggled = true
  },

  close (state) {
    state.is_toggled = false
  },

  toggle (state) {
    state.is_toggled = !state.is_toggled
  }
}

export { state, mutations }
