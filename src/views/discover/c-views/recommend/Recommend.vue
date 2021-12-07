<template>
    <div class="recommend-wrapper">
        <TopBanners/>

        <div class="content wrap-v2">
            <div class="recommend-left">
                <HotRecommend />
                <NewDisc />
            </div>

        </div>
    </div>
</template>

<script lang='ts'>
    import TopBanners from './children/Banners.vue';
    import HotRecommend from './children/HotRecommend.vue';
    import NewDisc from './children/NewDisc.vue';

    export default {
        name: 'Recommend',
        components: {
            TopBanners,
            HotRecommend,
            NewDisc
        },
        setup() {
            

            return {

            };
        }
    };
</script>

<style lang="less" scoped>
    .recommend-wrapper {
        background-color: #f5f5f5;

        .content {
            display: flex;
            background-color: #fff;

            .recommend-left {
                padding: 20px;
                width: 729px;
            }
        }
    }
</style>