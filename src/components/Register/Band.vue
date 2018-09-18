<template>
  <rect :x="positionX" y="0" rx="0" width="7" height="57" :fill="color" @click="onClick" />
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    index: {
      type: Number,
      default: 0
    },
    bandId: {
      type: Number,
      default: 0
    }
  },
  computed: {
    positionX () {
      if (this.index > 3) {
        return this.index * 30 + 100
      } else {
        return this.index * 30 + 70 + 10
      }
    },
    color () {
      return this.$store.getters.getBandById(this.bandId).color
    }
  },
  methods: {
    onClick () {
      // TODO: change band color
    }
  }
})
</script>
