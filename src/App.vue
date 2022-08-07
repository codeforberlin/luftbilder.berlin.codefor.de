<template>
  <Nav :brand="brand" :maps="maps" :map="map" @changeMap="changeMap" @changeCenter="changeCenter"/>
  <Map :map="map" :center="center" :zoom="zoom" />
</template>

<script>
  import Map from './components/Map.vue'
  import Nav from './components/Nav.vue'

  export default {
    name: 'App',
    data() {
      return {
        brand: this.$config.brand,
        maps: this.$config.maps,
        map: this.$config.maps[0],
        center: this.$config.view.center,
        zoom: this.$config.view.zoom
      }
    },
    components: {
      Map,
      Nav
    },
    methods: {
      changeMap(index) {
        this.map = this.maps[index]
      },
      changeCenter(center) {
        this.center = center
      }
    }
  }
</script>

<style lang="scss">
  @font-face {
      font-family: 'apercu-regular-pro';
      src: url('./fonts/apercu-regular-pro.eot');
      src: url('./fonts/apercu-regular-pro.eot?#iefix') format('embedded-opentype'),
           url('./fonts/apercu-regular-pro.woff2') format('woff2'),
           url('./fonts/apercu-regular-pro.woff') format('woff'),
           url('./fonts/apercu-regular-pro.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: apercu-regular-pro, sans-serif;
    color: #212529;
  }
  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  a, a.focus, a.hover, a.visited {
    color: #212529;
    text-decoration: underline;
  }
</style>
