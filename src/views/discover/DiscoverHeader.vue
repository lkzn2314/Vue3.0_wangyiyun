<template>
    <div class="wrapper">
        <div class="header wrap-v1">
            <div class="item" v-for="item in dicoverMenu" :key={item}>
                <router-link :to='item.link' active-class="active">{{item.title}}</router-link>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
    import { dicoverMenu } from '@/network/local-data';
    
    export default {
        name: '',
        components: {

        },
        setup() {
            return {
                dicoverMenu
            };
        }
    };
</script>

<style lang="less" scoped>
    .wrapper {
        height: 30px;
        background-color: #C20C0C;

        .header {
            display: flex;
            position: relative;
            top: -4px;
            padding-left: 180px;

            .item {
                a {
                    display: inline-block;
                    height: 20px;
                    line-height: 20px;
                    padding: 0 13px;
                    margin: 7px 17px 0;
                    color: #fff;

                    &:hover,
                    &.active {
                        text-decoration: none;
                        background-color: #9B0909;
                        border-radius: 20px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>