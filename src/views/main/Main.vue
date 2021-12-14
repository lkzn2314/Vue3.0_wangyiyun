<template>
    <WebHeader />
    <router-view/>
    <WebFooter />
</template>

<script lang='ts'>
    import WebHeader from '@/components/web-header/WebHeader.vue';
    import WebFooter from '@/components/web-footer/WebFooter.vue';

    export default {
        name: 'Main',
        components: {
            WebHeader,
            WebFooter
        }
    };
</script>

<style scoped>
    
</style>