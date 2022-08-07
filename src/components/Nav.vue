<template>
  <nav>
    <div class="nav-top">
      <div class="nav-left">
        <h1>
          <a v-bind:href="brand.href">{{ brand.text }}</a>
        </h1>

        <div class="info">
          <a href="" @click.prevent="toggleInfo">
            <img :src="iconInfo" alt="Information" />
          </a>
        </div>
      </div>

      <div class="nav-right">
        <form @submit.prevent="searchLocation()">
          <input class="search-input" type="search" placeholder="Search address" v-model="searchString" />
        </form>

        <select class="map-select" v-model="currentMapIndex" @update="changeMap(index)">
          <option v-for="(map, index) in maps" :key="index" :value="index">
            {{ map.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="nav-bottom">
      <a class="map-thumbnail" v-for="(map, index) in maps" :key="index"
           v-bind:style="{ backgroundImage: `url(${getBackgroundImage(map)})` }"
           v-bind:class="{ 'active': index == currentMapIndex }"
           @click.prevent="changeMap(index)">
        <p class="map-year">{{ getYear(map) }}</p>
      </a>
    </div>

    <Info v-if="info" :map="map" @onClose="toggleInfo" />
  </nav>
</template>

<script>
  import Info from './Info'
  import iconInfo from "@/assets/icon-info.svg"

  export default {
    name: 'Nav',
    props: {
      brand: Object,
      maps: Array,
      map: Object,
    },
    components: {
      Info
    },
    setup() {
      return {
        iconInfo
      }
    },
    data() {
      return {
        currentMapIndex: this.maps.indexOf(this.map),
        searchString: '',
        info: false
      }
    },
    watch: {
      map: function(map) {
        this.currentMapIndex = this.maps.indexOf(map)
      },
      currentMapIndex: function(index) {
        this.$emit('changeMap', index)
      }
    },
    methods: {
      searchLocation: function() {
        if (this.searchString) {
          const url = 'https://nominatim.openstreetmap.org/search?format=json&q=Berlin ' + encodeURIComponent(this.searchString)
          fetch(url)
            .then(response => response.json())
            .then(json => {
              if (json.length > 0) {
                this.$emit('changeCenter', [json[0].lat, json[0].lon])
              }
            })
        }
      },
      toggleInfo: function() {
        this.info = !this.info
      },
      changeMap: function(index) {
        this.$emit('changeMap', index)
      },
      getBackgroundImage: function(map) {
        return map.url.replace(/\{z\}\/\{x\}\/\{y\}/i, '16/35198/21494')
      },
      getYear: function(map) {
        return map.name.split(' ')[1]
      }
    }
  }
</script>

<style lang="scss" scoped>
  $break-point: 576px;

  nav {
    background-color: #f2f2f2;
    padding: 10px;

    .nav-top {
      @media (min-width: $break-point) {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .nav-bottom {
      display: none;
      margin-top: 10px;
      @media (min-width: $break-point) {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
      }
    }

    .nav-left,
    .nav-right {
      @media (min-width: $break-point) {
        display: flex;
        align-items: center;
      }
    }

    h1 {
      margin: 0;
      font-weight: normal;

      a {
        text-decoration: none;
      }
    }

    .info {
      display: inline;
      padding-top: 4px;
      margin-left: 10px;

      img {
        height: 26px;
      }
    }

    h1,
    .info {
      @media (max-width: $break-point) {
        display: inline-block;
        margin-bottom: 10px;
      }
    }

    .search-input {
      @media (max-width: $break-point) {
        margin-bottom: 10px;
      }
    }

    .map-select {
      @media (min-width: $break-point) {
        display: none;
      }
    }

    .search-input,
    .map-select {
      padding: 6px;
      border: none;
      border: 1px solid silver;

      width: 100%;
      border-radius: 4px;

      &:focus {
        outline: none;
      }

      @media (min-width: $break-point) {
        width: 400px;
      }
    }

    .map-thumbnail {
      position: relative;
      cursor: pointer;

      border: 2px solid transparent;
      border-radius: 4px;

      background-color: white;
      background-size: cover;
      background-position: center;

      width: 300px;
      height: 80px;

      &:hover {
        opacity: 0.5;
      }

      &.active {
        border-color: #ff645f;
      }
    }

    .map-year {
      color: white;
      position: absolute;
      bottom: 2px;
      right: 5px;
      margin: 0;
    }
  }
</style>
