<template>
    <div>
        你好啊
    </div>
</template>

<script lang='ts'>
    import {getBanners} from '@/network/discover';
import { onMounted } from '@vue/runtime-core';

    export default {
        name: '',
        components: {

        },
        setup() {

            onMounted(() => {
                getBanners().then((res: any) => {
                    console.log(res);
                });
            }) ;

            return {

            };
        }
    };
</script>

<style scoped>

</style>