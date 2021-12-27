import * as actionTypes from '../mutation-types';
import { getSongDetail } from '@/network/player';

export default {

    getCurrentSongAction(context: any, ids: string) {
        const playList = context.state.playList;
        const songIndex = playList.findIndex((song: {[key: string]: any}) => song.id === ids);
        let song: any;
        if(songIndex === -1) {
            getSongDetail(ids).then((res: any) => {
                console.log(1,res);
                song = res.songs?.[0];
                if (!song) return;
                const newPlayList = [...playList];
                newPlayList.push(song);
                context.commit(actionTypes.CHANGE_PLAY_LIST, newPlayList);
                context.commit(actionTypes.CHANGE_CURRENT_SONG_INDEX, newPlayList.length - 1);
                context.commit(actionTypes.CHANGE_CURRENT_SONG, song);
            });
        } else {
            song = playList[songIndex];
            context.commit(actionTypes.CHANGE_CURRENT_SONG_INDEX, songIndex);
            context.commit(actionTypes.CHANGE_CURRENT_SONG, song);
        }
    }
};