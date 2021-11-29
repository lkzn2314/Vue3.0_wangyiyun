<template>
    <div class="header-wrapper">
        <div class="content wrap-v1">
            <div class="header-left">
                <a class="logo sprite_01" href="#/">网易云音乐</a>
                <div class="select-list">
                    <div v-for="(item) in headerLinks" :key={item}>
                        <div className="select-item" key={item.title}>
                            <a>{{item.title}}</a>
                            <i class="icon sprite_01" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import { headerLinks } from '@/network/local-data';
    export default {
        name: 'WehHeader',
        components: {

        },
        setup() {
            console.log(headerLinks);
        }
        
    };
</script>

<style lang='less' scoped>
    .header-wrapper {
        height: 75px;
        background-color: #242424;

        .content {
            display: flex;
            justify-content: space-between;
            height: 70px;
        }

        .header-left {
            display: flex;
            font-size: 14px;

            .logo {
                display: flex;
                width: 176px;
                height: 69px;
                background-position: 0 0;
                text-indent: -9999px;
            }

            .select-list {
                display: flex;
                line-height: 70px;

                .select-item {
                    position: relative;

                    a {
                        display: block;
                        padding: 0 20px;
                        color: #ccc;
                    }
                }
            }
        }
    }
</style>