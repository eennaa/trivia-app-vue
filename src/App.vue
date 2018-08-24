<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'home',

  components: {
    NavBar
  }
}
</script>


<style lang="scss">
  @import './node_modules/bootstrap/scss/bootstrap.scss';
</style>
