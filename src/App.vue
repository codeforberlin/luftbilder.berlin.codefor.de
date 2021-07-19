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
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  .app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
</style>
