import Vue from 'vue'
import Vuex from 'vuex'
import ChuckStore from './ChuckStore'
import TriviaStore from './TriviaStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chuck: ChuckStore,
    trivia: TriviaStore
  }
})
