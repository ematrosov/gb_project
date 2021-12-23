<template>
  <aside class="aside">
    <form class="filter">
      <div class="filter__head">
        <div class="filter__title">
          {{ header }}
        </div>
        <span class="filter__reboot" @click="removeFilters" />
     </div>
      <div
        v-for="(filter, index) in filters"
        :key="index"
        class="filter-item"
        >
        <FilterCheckbox
        :filter="filter"
        :options-selected="optionsSelected"
        @updateOptions="updateOptions"
        />
      </div>  
      <div class="filter__foot">
        <DefaultButton :button-info="buttonInfo" @eventHandler="getSittersList" />
      </div>
    </form>
  </aside>
</template>

<script>
import FilterCheckbox from './filterCheckbox'
import DefaultButton from './defaultButton'

export default {
  components: { FilterCheckbox, DefaultButton },
  data () {
    return {
      optionsSelected: [],
      header: 'Фильтры',
      buttonInfo: {
        text: 'Искать',
      },
      filters: [
        {
          title: 'Район города',
          filterName: 'cityAreas',
          options: [
            { title: 'Север' },
            { title: 'Юг' },
            { title: 'Восток' },
            { title: 'Запад' },
            { title: 'Центр' }
          ]
        },
        {
          title: 'Специализация',
          filterName: 'specialties',
          options: [
            { title: 'Кошки' },
            { title: 'Собаки' },
            { title: 'Экзотические животные' }
          ]
        }
      ]
    }
  },
    mounted () {
    this.filters.forEach((filter) => {
      this.optionsSelected[filter.filterName] = []
    })
  },
  methods: {
    getSittersList () {
      console.log(this.optionsSelected)
      // запрос на список
    },
    updateOptions (localOptionsSelected, filterName) {
      this.optionsSelected[filterName] = localOptionsSelected
    },
    removeOptionsSelected () {
      this.optionsSelected = []
    },
    removeFilters () {
      this.removeOptionsSelected()
    }
  }

}
</script>
