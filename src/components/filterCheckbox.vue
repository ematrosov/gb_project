<template>
  <v-list flat>
    <div class="filter-item__head">
      <div>
        {{ filter.title }}
      </div>
      <div class="filter-item__icon" @click="removeFilters" />
    </div>
    <div
      v-for="(option, index) in filter.options"
      :key="index"
      class="checkbox"    >
         <v-checkbox
            v-model="localOptionsSelected"
            :label="getSuboptionInfo(suboption)"
            :value="suboption.title"
            class="checkbox-categories-1 mb-n4"
            color="white"
          />         
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
      required: true
    }
  },
  data () {
    return {
      localOptionsSelected: []
    }
  },
  watch: {
    localOptionsSelected (localOptionsSelected) {
      this.$emit('updateOptions', localOptionsSelected)
    },
    optionsSelected (optionsSelected) {
      this.localOptionsSelected = optionsSelected
      this.$emit('updateOptions', this.localOptionsSelected)
    }
  },  
  methods: {
    getSuboptionInfo (suboption) {
      return suboption.title + ' ' + (suboption.quantity ? `(${suboption.quantity})` : '')
    },
    removeFilters () {
      this.filter.options.forEach((option) => {
        const myIndex = this.localOptionsSelected.indexOf(option.title)
        if (myIndex !== -1) {
          this.localOptionsSelected.splice(myIndex, 1)
        }
      })
    }
  }
}
</script>
