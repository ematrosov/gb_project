<template>
  <v-pagination
    v-model="localPageSelected"
    circle
    :length="Math.ceil(count / pageSize)"
    color="primary"
  />
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: null
    },
    count: {
      type: Number,
      default: null
    },
    pageSize: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      localPageSelected: null
    }
  },
  watch: {
    localPageSelected (localPageSelected) {
      this.$emit('updatePage', localPageSelected)
    },
    // тут может приходить изменение pageSize, count, page
    page (page) {
      this.localPageSelected = page
      this.$emit('updatePage', this.localPageSelected)
    }
  },
  mounted () {
    this.localPageSelected = this.page
    // this.$emit('updatePage', this.localPageSelected)
  }
}
</script>