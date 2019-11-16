<template>
    <div>
        <app-population></app-population>
        <app-region></app-region>
    </div>
</template>

<script>
    import Population from './filters/Population.vue';
    import Region from './filters/Region';
    export default {
        components: {
            appPopulation: Population,
            appRegion: Region,
        }
    }
</script>