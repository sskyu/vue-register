<template>
  <svg width="300" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="26" rx="5" width="300" height="7" fill="#d1d1d1" />
    <rect x="50" y="0" rx="15" width="200" height="57" fill="#f5dc91" />
    <Band :index="0" :bandId="0" color="brown" />
    <Band :index="1" :bandId="1" color="red" />
    <Band :index="2" :bandId="2" color="green" />
    <Band :index="3" :bandId="3" color="yellow" />
    <Band :index="4" :bandId="4" color="gold" />
  </svg>
</template>

<script>
import Vue from 'vue'
import Band from './Band'

export default Vue.extend({
  props: {
    selectedBands: {
      type: Array,
      default: function () {
        return [0, 1, 2, 3, 4]
      }
    }
  },
  mounted () {
    this.bandList = this.$store.getters.bandList
  },
  data: function () {
    return {
      bandList: {}
    }
  },
  methods: {
    valueToColor (index) {
      console.log('hogehog')
      return this.bandList[index].color
    }
  },
  components: {
    Band
  }
})
</script>
