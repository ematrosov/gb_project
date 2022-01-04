<template>
  <div class="container">
    <div class="row-sitters mt-12">
      <div class="col image_block">
      <img
        :src="require(`../assets/${sitter.image}`)"
        :alt="sitter.name"
        class="card-img mb-2"
        width="320"
        height="320"
      >
      <div>
      <div class="mb-2">
        <div v-for="(item, index) in sitter.info" :key="index">
          <InfoIcon :info="item" />
        </div>
      </div>
      <div class="card-details">
        <div class="ml-n2">
          <Rating class="mb-2" :rating-info="sitter.rating" />
        </div>
      </div>
    </div>
      </div>
    <div class="col">
    <h1 class="it-title">
      {{ sitter.name }}
    </h1>
    <p class="it-desc">
      {{ sitter.about }}
    </p>
    <strong>Телефон для связи:</strong> <p> {{ sitter.number }}</p>
    <strong>Социальная сеть:</strong> <p> {{ sitter.socialMediaLink }}</p>
    <SitterReviewModal :sitter="sitter" />
    </div>
    </div>
    <ReviewBlock :unit="sitter" />
  </div>
</template>


<script>
import Rating from '../components/rating'
import InfoIcon from '../components/infoIcon'
import SitterReviewModal from '../components/sitterReviewModal'
import ReviewBlock from '../components/reviewBlock'


export default {
  components: { Rating, InfoIcon, SitterReviewModal, ReviewBlock },
  data () {
    return {
      sitter: {}
    }
  },
  methods: {
    // тут будет запрос чтобы получить профиль по id
  },
  mounted () {
    if (this.$route.params.id == 213) {
      this.sitter = {
          name: 'Jane Foster',
          image: 'jane-foster.jpeg',
          socialMediaLink: '@kjidf',
          number: '+903 033 23',
          about: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
          id: 213,
          rating: 3,
          exp: 2,
          buttonInfo: {
            text: 'Оставить отзыв'
          },
          info: [
            { icon: 'mdi-calendar-range', text: 'Стаж', value: '2 года' },
            { icon: 'mdi-map-marker', text: 'Район города', value: 'Юг' },
            { icon: 'mdi-paw', text: 'Специализация', value: 'Собаки' },
          ],
          reviews: [
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 13,
              thumbsDown: 3,
              upvoted: false,
              downvoted: false,
              rating: 4
            },
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 40,
              thumbsDown: 5,
              upvoted: false,
              downvoted: false,
              rating: 3
            },
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 15,
              thumbsDown: 13,
              upvoted: false,
              downvoted: false,
              rating: 5
            },
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 15,
              thumbsDown: 1,
              upvoted: false,
              downvoted: false,
              rating: 4
            }
          ]
        }
      }
    if (this.$route.params.id == 214) {
      this.sitter = {
          name: 'Alex Rakatanski',
          image: 'alex-rakatanski.jpeg',
          socialMediaLink: '@eijlf',
          number: '+398 498 387',
          about: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
          id: 214,
          rating: 5,
          exp: 1,
          buttonInfo: {
            text: 'Оставить отзыв'
          },
          info: [
            { icon: 'mdi-calendar-range', text: 'Стаж', value: '1 год' },
            { icon: 'mdi-map-marker', text: 'Район города', value: 'Центр' },
            { icon: 'mdi-paw', text: 'Специализация', value: 'Кошки' },
          ],
          reviews: [
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 14,
              thumbsDown: 6,
              upvoted: false,
              downvoted: false,
              rating: 4
            },
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 13,
              thumbsDown: 16,
              upvoted: false,
              downvoted: false,
              rating: 5
            },
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 130,
              thumbsDown: 14,
              upvoted: false,
              downvoted: false,
              rating: 4
            },
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 103,
              thumbsDown: 17,
              upvoted: false,
              downvoted: false,
              rating: 3
            }
          ]
        }
    }
    if (this.$route.params.id == 215) {
      this.sitter = {
          name: 'Clay Rideaux',
          image: 'clay-rideaux.jpeg',
          socialMediaLink: '@iefjei',
          number: '+43 474 2873',
          about: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
          id: 215,
          rating: 4,
          exp: 5,
          buttonInfo: {
            text: 'Оставить отзыв'
          },
          info: [
            { icon: 'mdi-calendar-range', text: 'Стаж', value: '5 лет' },
            { icon: 'mdi-map-marker', text: 'Район города', value: 'Север' },
            { icon: 'mdi-paw', text: 'Специализация', value: 'Экзотические животные' },
          ],
          reviews: [
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 15,
              thumbsDown: 3,
              upvoted: false,
              downvoted: false,
              rating: 4
            },
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 104,
              thumbsDown: 18,
              upvoted: false,
              downvoted: false,
              rating: 1
            },
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 103,
              thumbsDown: 61,
              upvoted: false,
              downvoted: false,
              rating: 4
            },
            {
              avatar: 'default.jpeg',
              name: 'Thomas Anderson',
              date: '13 января 2029 г.',
              text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
              thumbsUp: 10,
              thumbsDown: 1,
              upvoted: false,
              downvoted: false,
              rating: 3
            }
          ]
        }
    }
  }
}
</script>