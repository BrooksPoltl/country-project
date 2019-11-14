<template>
    <div>
        <h3>Population:</h3>
        <button v-for = "(population, index) in populations" :key = "index">{{ population }}</button>
    </div>
</template>

<script>
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
        }
    }
</script>