<template>
  <div id="app">
    <!-- insert main nav here!!! -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "./styles-variables.scss";

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: $img_bg;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    -webkit-background-size: cover !important;
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    height: 100%;
    position: relative !important;
    margin: 0;
  }

  // Variables and defaults
  .text-center{
    text-align: center;
  }

  .text-right{
    text-align: right;
  }

  /*@media (min-width: 1280px) {
    #app {
      padding-left: 304px;
    }

    .md-sidenav-content {
      top: 0;
      pointer-events: auto;
      transform: translate3d(0, 0, 0); //This is the trick!
    }
  }*/
</style>