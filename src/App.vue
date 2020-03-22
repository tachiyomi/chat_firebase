<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html{
  background-color: #F5F4D5;
}

@font-face {
	font-family: "Banana Slip";
	src:url("./assets/fonts/Banana-Slip.otf") format("opentype");
	font-weight: normal;
}

#app{
  font: 24px/1.2 "Banana Slip","Hiragino Kaku Gothic Pro","Osaka",Verdana,Arial,sans-serif;
}
</style>
