<template>
    <div>
        <app-population></app-population>
    </div>
</template>

<script>
    import Population from './filters/Population.vue';
    export default {
        components: {
            appPopulation: Population,
        }
    }
</script>