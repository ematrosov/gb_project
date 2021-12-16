<template>
  <div class="container">
    <div class="mt-6 mb-6">
    <h1 class="it-title">
      {{ title }}
    </h1>
    <p class="it-desc">
      {{ desc }}
    </p>
    </div>
    <div class="row mt-12">
      <div class="col filtration_block">
        <SittersFilters />
      </div>
      <div class="col">
        <FilterSelect :filters="filters" @changeFilter="changeFilter" />
        <SittersList :sitters="sortedSitters" />
      </div>
    </div>
    <div class="mt-6 mb-6">
      <Pagination :page="page" :count="count" :page-size="pageSize" @updatePage="updatePage" />
    </div>
  </div>
</template>

<script>
import SittersFilters from '../components/sittersFilters'
import SittersList from '../components/sittersList'
import Pagination from '../components/pagination'
import FilterSelect from '../components/filterSelect'


export default {
  components: { SittersFilters, SittersList, Pagination, FilterSelect },
  data () {
    return {
      filters: ['По рейтингу', 'По стажу'],
      page: 1,
      count: 20,
      pageSize: 10,
      title: 'Наши ситтеры',
      sortedSitters: [],
      desc: 'Найдите подходящего под Ваши критерии ситтера для Вашего питомца',
      sitters: [
        {
          name: 'Jane Foster',
          image: 'jane-foster.jpeg',
          slug: 'jane-foster',
          rating: 3,
          exp: 2,
          buttonInfo: {
            text: 'Посмотреть профиль'
          },
          info: [
            { icon: 'mdi-calendar-range', text: 'Стаж', value: '2 года' },
            { icon: 'mdi-map-marker', text: 'Район города', value: 'Юг' },
            { icon: 'mdi-paw', text: 'Специализация', value: 'Собаки' },
          ]
        },
        {
          name: 'Alex Rakatanski',
          image: 'alex-rakatanski.jpeg',
          slug: 'alex-rakatanski',
          rating: 5,
          exp: 1,
          buttonInfo: {
            text: 'Посмотреть профиль'
          },
          info: [
            { icon: 'mdi-calendar-range', text: 'Стаж', value: '1 год' },
            { icon: 'mdi-map-marker', text: 'Район города', value: 'Центр' },
            { icon: 'mdi-paw', text: 'Специализация', value: 'Кошки' },
          ]
        },
        {
          name: 'Clay Rideaux',
          image: 'clay-rideaux.jpeg',
          slug: 'clay-rideaux',
          rating: 4,
          exp: 5,
          buttonInfo: {
            text: 'Посмотреть профиль'
          },
          info: [
            { icon: 'mdi-calendar-range', text: 'Стаж', value: '5 лет' },
            { icon: 'mdi-map-marker', text: 'Район города', value: 'Север' },
            { icon: 'mdi-paw', text: 'Специализация', value: 'Экзотические животные' },
          ]
        },
      ]
    }
  },
  mounted() {
    this.sortedSitters = this.sitters
  },
  methods: {
    updatePage (localPageSelected) {
      this.page = localPageSelected
      this.getSittersList()
    },
    getSittersList () {
        //запрос на сервер
    },
    changeFilter (filter) {
      if (filter === 'По рейтингу') {
        this.sortedSitters = this.sortedSittersRating()
      }
      if (filter === 'По стажу') {
        this.sortedSitters = this.sortedSittersExp()
      }
    },
    sortedSittersRating () {
      return JSON.parse(JSON.stringify(this.sitters)).sort(function (a, b) {
        return b.rating - a.rating
      })
    },
    sortedSittersExp () {
      return JSON.parse(JSON.stringify(this.sitters)).sort(function (a, b) {
        return b.exp - a.exp
      })
    }
  }

}
</script>
