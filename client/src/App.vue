<template>
  <div >
    <h1>Country project</h1>
    <app-countries></app-countries>
  </div>
</template>

<script>
  import Countries from './components/Countries.vue'
  import { mapActions } from 'vuex';
  export default {
    components: {
      appCountries: Countries,
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