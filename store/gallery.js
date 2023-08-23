import axios from 'axios'

export const state = () => ({
  gallery: [],
})

export const mutations = {
  setGallery(state, gallery) {
    state.gallery = gallery
  },
  addImage(state, image) {
    state.gallery.push(image)
  },
}

export const actions = {
  async fetchGallery({ commit }) {
    const apiKey = process.env.API_KEY

    const url = new URL(
      `v1/images/search?limit=3&mime_types=jpg,png&size=small&api_key=${apiKey}`,
      process.env.API_URL
    )

    const response = await axios.get(url.toString())
    const gallery = response.data.map((item) => ({
      id: item.id,
      src: item.url,
    }))
    commit('setGallery', gallery)
  },
}
