<template>
  <div >
    <h1>Country project</h1>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
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