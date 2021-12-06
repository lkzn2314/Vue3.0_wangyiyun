import {
    CHANGE_HOT_PLAYLIST_CATEGORY
} from '../mutation-types';

export default {

    [CHANGE_HOT_PLAYLIST_CATEGORY](state: any, hotPlaylistCategory: any) {
        state.hotPlaylistCategory = hotPlaylistCategory;
    }

};