<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  metaInfo: {
    title: 'My Awesome Webapp',
    titleTemplate: null,
    meta: [
      { description: 'Home.vueのdescription' },
      { 'og:title': 'Home.vueのog:title' }
    ]
  },
  components: {
    HelloWorld
  }
}
</script>
