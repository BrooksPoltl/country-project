<template>
    <div>
        <p>{{ country.name }}</p>
        <p>{{ country.population }}</p>
    </div>
</template>

<script>
    export default {
        props: ['country']
    }
</script>