<template>
    <div>
        <h3>Region:</h3>
        <button v-for = "(region, index) in regions" :key = "index" @click = "regionFilter(index)"> {{ region }} </button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        data() {
            return {
                regions: [
                "Asia",
                "Europe",
                "Africa",
                "Oceania",
                "Americas"
                ]
            }
        },
        methods: {
            ...mapActions([
                'regionFilter'
            ])
        },

    }
</script>