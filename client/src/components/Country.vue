<template style = "country-container">
    <div>
        <p>{{ country.name }}</p>
        <img class = "country-img" :src = "country.flag">
    </div>
</template>

<script>
    export default {
        props: ['country']
    }
</script>

<style>
    .country-container {
        padding: 20px;
    }
    .country-img {
        width: 100px;
        height: 100px;
    }
</style>