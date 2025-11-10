<template>
  <div class="map" id="map"></div>
</template>

<script>
  import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'

  export default {
    name: 'Map',
    props: {
      map: Object,
      center: Array,
      zoom: Number
    },
    data() {
      return {
        leafletMap: null,
        leafletLayer: null
      }
    },
    methods: {
      setupLeafletMap: function() {
        this.leafletMap = L.map('map')
        this.changeView()
        this.changeMap()
        this.leafletMap.on('moveend', () => {
          const c = this.leafletMap.getCenter()
          const [currentLat, currentLon] = this.center;
          if (currentLat !== c.lat && currentLon !== c.lng) {
            this.$emit('changeCenter', [c.lat, c.lng])
          }
        })
        this.leafletMap.on('zoomend', () => {
          const z = this.leafletMap.getZoom()
          if (z !== this.zoom) {
            this.$emit('changeZoom', z)
          }
        })
      },
      changeMap: function() {
        if (this.leafletLayer) {
          this.leafletMap.removeLayer(this.leafletLayer)
        }
        this.leafletLayer = L.tileLayer(this.map.url, this.map.options).addTo(this.leafletMap)
      },
      changeView: function() {
        this.leafletMap.setView(this.center, this.zoom)
      },
      changeCenter: function() {
        this.leafletMap.panTo(this.center)
      }
    },
    watch: {
      map() {
        this.changeMap()
      },
      center() {
        this.changeCenter()
      }
    },
    mounted() {
      this.setupLeafletMap()
    }
  }
</script>

<style scoped>
  .map {
    flex: 1;
  }
</style>
