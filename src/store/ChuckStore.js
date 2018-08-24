import { chuckService } from './../services/ChuckService'


export default {   ///ovo su samo moduli, jedan je store
  
  state: {
    joke: {}
  },
  getters: {
    getRandomJoke(state) {
      return state.joke
    }
  },
  mutations: {
    setNewJoke(state, joke) {
      state.joke = joke
    }
  },
  actions: {
    fetchRandomJoke(context) {
      chuckService
      .getRandomJoke()
      .then((response) => {
        context.commit('setNewJoke', response.data)
      })
    }

  }
}
