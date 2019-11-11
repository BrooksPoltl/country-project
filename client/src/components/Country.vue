<template>
    <div style = "country-container">
        <p>{{ country.name }}</p>
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
</style>