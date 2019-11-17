<template>
    <div>
        <h3>Population:</h3>
        <button :class =  "[active === index ?'active':'']" v-for = "(population, index) in populations" :key = "index" @click = "handleClick(index)">{{ population }}</button>
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
                ],
                active: null
            }
        },
        methods: {
            ...mapActions([
                'populationFilter'
            ]),
            handleClick(index){
                this.active = index;
                this.populationFilter(index);
            }
        },

    }
</script>

<style scoped>
    .active {
        color: red;
    }
</style>