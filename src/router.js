import Vue from 'vue'
import Router from 'vue-router'
import TriviaApp from './pages/TriviaApp.vue'
import Chuck from './components/Chuck.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/trivia'
    },
    {
      path: '/trivia',
      name: 'trivia',
      component: TriviaApp
    },
    {
      path: '/chuck',
      name: 'chuck',
      component: Chuck
    }
  ]
})
