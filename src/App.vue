<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <Header id="header"></Header>
    <main id="main">
      <router-view></router-view>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header'
import Footer from './components/footer'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Header,
    Footer
  }
}
</script>

<style lang="scss">

@import "./assets/common.scss";

html,body,#app{
  height: 100%;
}

#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-auto-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    ".  main ."
    "footer footer footer";
  #header {
    grid-area: header;
    padding-left: 12%;
    padding-right: 12%;
  }

  #main{
    grid-area: main;
  }

  #footer{
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }
}

@media(max-width: 768px){
  #app{
    grid-template-columns: 10px auto 10px;
    #header,#footer{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
