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
    },
    optionsSelected: {
      type: Array,
      default: () => []
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
    },
    optionsSelected (optionsSelected) {
      console.log(optionsSelected)
      // this.localOptionsSelected = optionsSelected
      // this.$emit('updateOptions', this.localOptionsSelected)
    },
  },  
  // methods: {
  //   removeFilters () {
  //     this.filter.options.forEach((option) => {
  //       const myIndex = this.localOptionsSelected.indexOf(option.title)
  //       if (myIndex !== -1) {
  //         this.localOptionsSelected.splice(myIndex, 1)
  //       }
  //     })
  //   }
  // }
}
</script>
