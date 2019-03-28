<template>
  <div id="app">
    <Header class="nav-sticky"></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
export default {
  components: {
    Header,
    Footer
  },
  name: 'App'
}
</script>
