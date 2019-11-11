<template>
    <div>
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