<template>
  <div class="modal">
    <a href="" class="close" @click.prevent="handleClose">&times;</a>
    <p>
      luftbilder.berlin.codefor.de ist ein Projekt des <a href="https://codefor.de/berlin">OK Lab Berlins</a>. Mehr Karten gibt es auf <a href="https://maps.berlin.codefor.de">maps.berlin.codefor.de</a>.
    </p>
    <p>
      Den Source-Code gibt es auf <a href="https://github.com/codeforberlin/luftbilder.berlin.codefor.de">GitHub</a>.
    </p>
    <p>
      Die aktuelle Karte zeigt <span v-html="map.options.attribution"></span>. Hinter dem Link gibt es mehr Informationen.
    </p>
    <p>
      Die Bilder stammen aus dem <a href="https://www.stadtentwicklung.berlin.de/geoinformation/">Geoportal Berlin</a>, das von der Senatsverwaltung für Stadtentwicklung, Bauen und Wohnen des Landes Berlin betriben wird.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Info',
    props: {
      map: Object,
      onClose: Function
    },
    methods: {
      handleClose: function() {
        this.$emit('onClose')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    top: 20%;
    right: 20%;
    left: 20%;
    z-index: 2000;

    background-color: #f2f2f2;
    box-shadow: 0px 0px 10px silver;

    padding: 10px 20px 20px 20px;

    pre {
      background-color: #333;
      color: white;

      white-space: pre-wrap;
      word-wrap: break-word;

      margin: 0;
      padding: 10px;
      border-radius: 4px;
    }

    .close {
      float: right;
      text-decoration: none;
    }

    :last-child {
      margin-bottom: 0;
    }
  }
</style>
