<template>
    <div class="wrapper">
        <img :src="formatImgSize(info?.picUrl, imgSize)" alt="" 
        :style="{width: `${imgSize}px`, height: `${imgSize}px`}"/>
        <div class="info">
            <div :class="nameBold">{{info?.name}}</div>
            <div class="introduction text-nowrap">{{(info.alias && info.alias[0]) || info.position}}</div>
        </div>
    </div>
</template>

<script lang='ts'>
    import { formatImgSize } from '@/utils/format';

    export default {
        name: 'ArtistANchorCover',
        props: {
            info: Object,
            imgSize: Number,
            nameBold: String
        },
        setup() {
            return {
                formatImgSize
            };
        }
    };
</script>

<style lang='less' scoped>
    .wrapper {
        display: flex;
        font-size: 12px;
        color: #666;

        .info {
            margin-left: 15px;

            .name {
                padding: 10px 0 5px 0;
                font-weight: 700;
                font-size: 14px;
                color: #333;
            }

            .introduction {
                width: 155px;
            }
        }
    }
</style>