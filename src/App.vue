<template>
  <div id="app">
    <Register />
  </div>
</template>

<script>
import Register from './components/Register/index.vue'
import store from './store'

export default {
  name: 'App',
  components: {
    Register
  },
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
