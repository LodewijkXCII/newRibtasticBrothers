export const state = () => ({
  gallery: ''
})

export const getters = {}

export const mutations = {
  saveInfo(state, payload) {
    state.gallery = payload.gallery
  }
}

export const actions = {}
