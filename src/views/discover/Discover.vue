<template>
    <DiscoverHeader />
    <router-view />
</template>

<script lang="ts">
    import DiscoverHeader from '@/components/discover-header/DiscoverHeader.vue';

    export default {
        name: '',
        components: {
            DiscoverHeader
        },
    };
</script>

<style scoped></style>
