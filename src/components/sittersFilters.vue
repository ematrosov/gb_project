<template>
  <aside class="aside">
    <form class="filter">
      <div class="filter__head">
        <div class="filter__title">
          {{ header }}
        </div>
        <span class="filter__reboot" @click="removeFilters" />
      </div>
      <FiltersLogic
        :filters="filters"
        :options-selected="optionsSelected"
        @updateOptions="updateOptions"
      />
      <div class="filter__foot">
        <DefaultButton :button-info="buttonInfo" @eventHandler="getSittersList" />
      </div>
    </form>
  </aside>
</template>

<script>
import FiltersLogic from './filtersLogic'
import DefaultButton from './defaultButton'

export default {
  components: { FiltersLogic, DefaultButton },
  data () {
    return {
      optionsSelected: [],
      header: 'Фильтры',
      buttonInfo: {
        text: 'Искать',
      },
      filters: [
        {
          type: 'checkbox',
          title: 'Стаж',
          options: [
            { title: 'Менее года' },
            { title: 'От года до трех лет' },
            { title: 'От трех до пяти лет' },
            { title: 'Больше пяти лет' },
            { title: 'Не имеет значения' }
          ]
        },
        {
          type: 'checkbox',
          title: 'Рейтинг',
          options: [
            { title: 'Более 1 звезды' },
            { title: 'Более 2 звезд' },
            { title: 'Более 3 звезд' },
            { title: 'Более 4 звезд' },
            { title: 'Только 5 звезд' },
            { title: 'Не имеет значения' }
          ]
        },
        {
          type: 'checkbox',
          title: 'Район города',
          options: [
            { title: 'Север' },
            { title: 'Юг' },
            { title: 'Восток' },
            { title: 'Запад' },
            { title: 'Центр' }
          ]
        },
        {
          type: 'checkbox',
          title: 'Специализация',
          options: [
            { title: 'Кошки' },
            { title: 'Собаки' },
            { title: 'Экзотические животные' }
          ]
        }
      ]
    }
  },

  methods: {
    getSittersList () {
      console.log(this.optionsSelected)
      // запрос на список
    },
    updateOptions (localOptionsSelected) {
      this.optionsSelected = localOptionsSelected
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
