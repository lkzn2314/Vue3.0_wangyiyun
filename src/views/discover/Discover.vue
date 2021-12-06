<template>
    <DiscoverHeader />
    <router-view />
</template>

<script lang="ts">
    import DiscoverHeader from './DiscoverHeader.vue';

    export default {
        name: 'Discover',
        components: {
            DiscoverHeader
        },
    };
</script>

<style scoped></style>
