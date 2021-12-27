<template>
    <div :class="['playbar-wrapper',' playbar_sprite', isFixedPos ? 'fixed-position': '']" :style="{bottom: isShowBar ? '0' : '-40px'}">
        <div class="content wrap-v2">
            <div class="control">
                <div class="prev playbar_sprite"  />
                <div class="play playbar_sprite" :style="{backgroundPositionY: isPlaying ? '-165px' : '-204px'}"
                    @click="playMusic"/>
                <div class="next playbar_sprite"  />
            </div>

            <div class="play-info">
                <a href="#/" class="image" >
                    <img :src="formatImgSize(currentSong?.al?.picUrl || 'http://s4.music.126.net/style/web2/img/default/default_album.jpg?limit=34x34', 34)"  alt="" />
                </a>
                <div class="info">
                    <div class="song">
                        <span>{{currentSong?.name ||未知歌曲}}</span>
                        <span class="singer-name">{{currentSong?.ar?.[0]?.name || '未知歌手'}}</span>
                        <i class="link playbar_sprite" />
                        <a href="#/"> </a>
                    </div>
                    <div class="progress">
                        <el-slider v-model="value3" :show-tooltip="false" />
                        <span class="time">
                            <span class="now-time">02:00</span>
                            <span class="divider">/</span>
                            <span class="all-time">04:45</span>
                        </span>
                    </div>
                </div>
            </div>

            <div class="operator">
                <div class="left">
                    <el-tooltip content="歌词" color='#191919' placement="top">
                        <button class="btn lyric playbar_new" />
                    </el-tooltip>
                    <button class="btn favor playbar_sprite"/>
                    <button class="btn share playbar_sprite"/>
                </div>
                <div class="right">
                    <button class="btn volume playbar_sprite" />
                    <el-tooltip content="循环" color='#191919' placement="top">
                        <button class="btn loop playbar_sprite" />
                    </el-tooltip>
                    <el-tooltip content="播放列表" color='#191919' placement="top">
                        <button class="btn playlist playbar_sprite" >{{playList?.length}}</button>
                    </el-tooltip>
                </div>
            </div>
        </div>
        
        <div class="lock-wrapper playbar_sprite">
            <i class="lock playbar_sprite" :style="{backgroundPositionX: isFixedPos ? '-100px' : '-80px'}"
            @click="changeLockClick"/>
        </div>

        <audio ref="audioRef" />
    </div>
</template>

<script lang='ts'>
    import { computed, onMounted, ref, watch } from 'vue';
    import { useStore } from 'vuex';
    import { ElMessage } from 'element-plus';
    import { formatImgSize, getSongPlay } from '@/utils/format';

    export default {
        name: 'PlayerBar',
        setup() {
            const store = useStore();
            const audioRef: any = ref(null);
            const isShowBar = ref(false);
            const isFixedPos = ref(true);
            const isPlaying = ref(false);
            const currentSong: any = computed(() => store.state.player.currentSong);
            const playList = computed(() => store.state.player.playList);

            onMounted(() => {
                window.addEventListener('mousemove', (e: any) => {
                    e.clientY > 640 ? isShowBar.value = true : isShowBar.value = false;
                });
            });

            watch(() => currentSong.value.id, (newSongId: number) => {
                audioRef.value.src = getSongPlay(newSongId);
                audioRef.value.play().then((res: any) => {
                    isPlaying.value = true;
                }, (err: any) => {
                    isPlaying.value = false;
                });
            });

            const changeLockClick = () => {
                isFixedPos.value = !isFixedPos.value;
            };

            const playMusic = () => {
                isPlaying.value ? audioRef.value.pause() : audioRef.value.play().then((res: any) => {
                    // console.log(1);
                }, (err: any) => {
                    ElMessage.info({
                        key: 'lyric',
                        message: '对不起，该歌曲没有版权'
                    });
                });
                isPlaying.value = !isPlaying.value;
            };

            return {
                audioRef,
                isShowBar,
                isFixedPos,
                isPlaying,
                formatImgSize,
                currentSong,
                playList,
                changeLockClick,
                playMusic
            };
        }
    };
</script>

<style lang='less' scoped>
    .fixed-position {
        bottom: 0 !important;
    }
    .playbar-wrapper {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 52px;
        background-position: 0 0;
        background-repeat: repeat;
        transition: all .5s;
        z-index: 999;

        .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            left: 50%;
            bottom: 0;
            height: 47px;
            transform: translateX(-50%);

            .control {
                display: flex;
                align-items: center;

                .prev, 
                .next {
                    width: 28px;
                    height: 28px;
                }

                .prev {
                    background-position: 0 -130px;

                    &:hover {
                        cursor: pointer;
                        background-position-x: -30px;
                    }
                }

                .next {
                    background-position: -80px -130px;

                    &:hover {
                        cursor: pointer;
                        background-position-x: -110px;
                    }
                }

                .play {
                    width: 36px;
                    height: 36px;
                    margin: 0 8px;
                    background-position: 0 -204px;
                    // background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};

                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            .play-info {
                display: flex;
                align-items: center;
                width: 642px;

                .image {
                    display: block;
                    width: 34px;
                    height: 34px;
                    border-radius: 5px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .info {
                    flex: 1;
                    margin-left: 10px;
                    color: #a1a1a1;

                    .song {
                        position: relative;
                        top: 8px;
                        left: 8px;
                        color: #e1e1e1;

                        & > span:hover {
                            cursor: pointer;
                            text-decoration: underline;
                        }

                        .singer-name {
                            margin-left: 10px;
                            color: #a1a1a1;
                        }

                        .link {
                            display: inline-block;
                            position: relative;
                            left: 10px;
                            top: 5px;
                            width: 14px;
                            height: 15px;
                            background-position: -110px -103px;

                            &:hover {
                                cursor: pointer;
                                background-position-x: -130px;
                            }
                        }
                    }

                    .progress {
                        display: flex;
                        align-items: center;

                        /deep/.el-slider {
                            width: 493px;
                            margin-right: 10px;

                            .el-slider__runway {
                                background: #131313;

                                .el-slider__bar {
                                    background: #c70c0c;
                                }
                            }

                            .el-slider__button-wrapper {
                                line-height: 40px;

                                .el-slider__button {
                                    cursor: default;
                                    width: 22px;
                                    height: 24px;
                                    border: none;
                                    margin-top: -7px;
                                    background: url("~@/assets/img/sprite_icon.png") 0 -250px;
                                }
                            }
                        }

                        .time {
                            .now-time {
                                color: #e1e1e1;
                            }
                            .divider {
                                margin: 0 3px;
                            }
                        }
                    }
                }


            }

            .operator {
                display: flex;
                position: relative;
                top: 5px;

                .btn {
                    width: 25px;
                    height: 25px;

                    &:hover {
                        cursor: pointer;
                    }
                }

                .left {
                    .lyric {
                        background: url('~@/assets/img/playbar_new.png') 0 0 no-repeat;

                        &:hover {
                            background-position: 0 -25px;
                        }
                    }

                    .favor {
                        background-position: -88px -163px;

                        &:hover {
                            background-position-y: -189px;
                        }
                    }

                    .share {
                        background-position: -114px -163px;

                        &:hover {
                            background-position-y: -189px;
                        }
                    }
                }

                .right {
                    display: flex;
                    align-items: center;
                    width: 126px;
                    padding-left: 13px;
                    background-position: -147px -248px;

                    .volume {
                        position: relative;
                        background-position: -2px -248px;
                        // background-position: ${props => props.volumeValue === 0 ? '-104px -69px' : '-2px -248px'};
                    }

                    .loop {
                        background-position: -66px -248px;
                    }

                    .playlist {
                        padding-left: 18px;
                        text-align: center;
                        color: #666;
                        width: 59px;
                        background-position: -42px -68px;
                    }
                }
            }
        }

        .lock-wrapper {
            position: absolute;
            right: 0;
            bottom: 46px;
            width: 65px;
            height: 20px;
            background-position: 0 -380px;

            .lock {
                display: block;
                width: 18px;
                height: 18px;
                margin: 5px 0 0 16px;
                background-position: -100px -380px;

                &:hover {
                    background-position-y: -400px;
                }
            }
        }
    }
</style>