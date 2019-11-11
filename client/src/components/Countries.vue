<template>
    <div class = "country-container">
        <app-country 
            v-for = "(country, index) in countries" 
            :country = "country" 
            :key = "index"></app-country>
    </div>    
</template>


<script>
    import Country from './Country.vue';
    export default {
        components: {
            appCountry: Country,
        },
        computed: {
            countries() {
                return this.$store.getters.getCountries;
            }
        }
    }
</script>

<style scoped>
    .country-container {
        display: flex;
        flex-wrap: wrap;
    }
</style>