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
      class="checkbox"
    >
      <picture v-if="option.image || option.icon" class="icon-checkbox">
        <v-img
          v-if="option.image"
          :src="option.image"
          class="it-icon"
          :alt="option.name"
          loading="lazy"
          decoding="async"
        />
        <v-icon
          v-if="option.icon"
          class="filter-icon"
        >
          {{ option.icon }}
        </v-icon>
      </picture>
      <v-list-group
        v-if="option.suboptions"
        color="white"
        class="mb-6"
        :ripple="false"
      >
        <template #activator>
          <div class="list-item-name">
            <v-list-item-title class="list-item">
              {{ option.title }}
            </v-list-item-title>
            <span v-if="option.quantity">&nbsp;({{ option.quantity }})</span>
          </div>
        </template>
        <div
          v-for="(suboption, index) in option.suboptions"
          :key="index"
          class="checkbox"
        >
          <picture class="icon-checkbox">
            <v-img
              v-if="suboption.image"
              :src="suboption.image"
              class="filter-icon"
              :alt="suboption.name"
              loading="lazy"
              decoding="async"
            />
            <v-icon
              v-if="suboption.icon"
              class="filter-icon"
            >
              {{ suboption.icon }}
            </v-icon>
          </picture>
          <v-checkbox
            v-model="localOptionsSelected"
            :label="getSuboptionInfo(suboption)"
            :value="suboption.title"
            class="checkbox-categories-1 mb-n4"
            color="white"
          />
        </div>
      </v-list-group>
      <v-checkbox
        v-if="!option.suboptions"
        v-model="localOptionsSelected"
        :label="option.title"
        :value="option.title"
        :class="(option.image || option.icon) ? 'checkbox-schools' : 'checkbox'"
        color="white"
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
  mounted () {
    const searchString = new URLSearchParams(window.location.search)
    if (searchString.get('category')) {
      const category = searchString.get('category')
      this.localOptionsSelected.push(category)
    }
    if (searchString.get('school')) {
      const school = searchString.get('school')
      this.localOptionsSelected.push(school)
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