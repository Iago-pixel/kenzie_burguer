<template>
  <TheHeader />
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  #app {
    font-family: "Inter", sans-serif;
  }
</style>
