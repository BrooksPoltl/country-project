<template>
  <div >
    <h1>Country project</h1>
    <app-filters></app-filters>
    <app-countries></app-countries>
  </div>
</template>

<script>
  import Countries from './components/Countries.vue';
  import Filters from './components/Filters.vue';

  import { mapActions } from 'vuex';
  export default {
    components: {
      appCountries: Countries,
      appFilters: Filters,
    },
    methods: {
      ...mapActions([
        'initCountries'
      ])
    },
    created() {
      this.initCountries();
    }
  }
</script>