<template>
    <div>
        <h3>Population:</h3>
        <button v-for = "(population, index) in populations" :key = "index" @click = "populationFilter(index)">{{ population }}</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        data() {
            return {
                populations: [
                "<100,000",
                ">100,000, < 1,000,000",
                "> 1,000,000, < 10,000,000",
                ">10,000,000, <50,000,000",
                ">50,000,000"
                ]
            }
        },
        methods: {
            ...mapActions([
                'populationFilter'
            ])
        },

    }
</script>