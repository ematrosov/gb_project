<template>
  <v-list flat>    
    <div
      v-for="(option, index) in filter.options"
      :key="index"
      class="checkbox">
      <v-checkbox      
        v-model="localOptionsSelected"
        :label="option.title"
        :value="option.title"
      />
    </div>
  </v-list>
</template>

<script>

export default {
  props: {
    filter: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      localOptionsSelected: []
    }
  },

  watch: {
    localOptionsSelected (localOptionsSelected) {
      this.$emit('updateOptions', localOptionsSelected, this.filter.filterName)
    }
  }  
}
</script>
