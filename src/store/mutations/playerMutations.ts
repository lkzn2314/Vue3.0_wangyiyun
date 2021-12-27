import * as actionTypes from '../mutation-types';

export default {
    [actionTypes.CHANGE_CURRENT_SONG](state: {[key: string]: any}, currentSong: {[key: string]: string}){
        state.currentSong = currentSong;
    },

    [actionTypes.CHANGE_CURRENT_SONG_INDEX](state: {[key: string]: any}, currentSongIndex: string) {
        state.currentSongIndex = currentSongIndex;
    },

    [actionTypes.CHANGE_PLAY_LIST](state: {[key: string]: any}, playList: []) {
        state.playList = playList;
    }
};