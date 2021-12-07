<template>
    <div>
        <HeaderLine title="新碟上架" toPath="album"/>
    </div>
</template>

<script lang='ts'>
    import HeaderLine from '@/components/header-line/HeaderLine.vue';
    import { onMounted } from '@vue/runtime-core';
    import { useStore } from 'vuex';

    export default {
        name: 'NewDisc',
        components: {
            HeaderLine
        },
        setup() {
            const store = useStore();

            onMounted(() => {
                store.dispatch('getHomepageNewDiscsAction');
            });

            return {

            };
        }
    };
</script>

<style lang='less' scoped>

</style>