<template>
  <div id="app">
    <Header />
    <div class="router-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  text-align: center;
}

.router-container {
  min-height: calc(100% - 256px);
  padding: 20px;
}

footer {
  height: 200px;
}
</style>