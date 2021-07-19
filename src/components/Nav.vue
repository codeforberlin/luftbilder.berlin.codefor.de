<template>
  <nav>
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
        <input type="search" placeholder="Search address" v-model="searchString" />
      </form>

      <select v-model="currentMapIndex" @update="changeMap(index)">
        <option v-for="(map, index) in maps" :key="index" :value="index">
          {{ map.name }}
        </option>
      </select>
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  $break-point: 576px;

  nav {
    background-color: #f2f2f2;
    padding: 10px 10px;

    @media (min-width: $break-point) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .nav-left,
      .nav-right {
        display: flex;
        align-items: center;
      }
    }

    a, a:hover, a:focus, a:visited {
      color: #333;
      text-decoration: none;
    }
    a:hover {
      opacity: 0.5;
    }

    h1 {
      margin: 0;
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

    input[type="search"] {
      @media (max-width: $break-point) {
        margin-bottom: 10px;
      }
    }

    select {
      @media (min-width: $break-point) {
        margin-left: 10px;
      }
    }

    select,
    input[type="search"] {
      padding: 6px;
      border: none;
      border: 1px solid silver;

      width: 400px;
      border-radius: 4px;

      &:focus {
        outline: none;
      }

      @media (min-width: $break-point) {
        width: 200px;
      }
    }
  }
</style>
