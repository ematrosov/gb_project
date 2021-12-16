<template>
  <div>
    <div
      v-for="(filter, index) in filters"
      :key="index"
      class="filter-item"
    >
      <FilterCheckbox
        v-if="filter.type === 'checkbox'"
        :filter="filter"
        :options-selected="optionsSelected"
        @updateOptions="updateOptions"
      />
    </div>
  </div>
</template>

<script>
import FilterCheckbox from './filterCheckbox'

export default {
  components: { FilterCheckbox },
  props: {
    filters: {
      type: Array,
      default: () => []
    },
    optionsSelected: {
      type: Array,
      default: () => []
    },
  },

  methods: {
    updateOptions (localOptionsSelected) {
      this.$emit('updateOptions', localOptionsSelected)
    },
  }
}
</script>
