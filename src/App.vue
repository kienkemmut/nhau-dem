<template>
  <div id="app">
    <Header class="nav-sticky"></Header>
    <router-view/>
    <Footer></Footer>
    <back-to-top>
      <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
    </back-to-top>
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
<style>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans');
  #app {
    font-family: 'Noto Sans', sans-serif;
  }
</style>