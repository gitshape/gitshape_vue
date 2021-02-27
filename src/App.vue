<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-button target="_blank" href="api/login/github">Login to GitHub</b-button>
    <b-button target="_blank" href="api/login/onshape">Login to Onshape</b-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {Vue} from 'vue-property-decorator';
import { ButtonPlugin } from 'bootstrap-vue'

Vue.use(ButtonPlugin)

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
