import * as actionTypes from '../mutation-types';

export default {
  [actionTypes.CHANGE_HOT_PLAYLIST_CATEGORY](state: any, hotPlaylistCategory: any) {
    state.hotPlaylistCategory = hotPlaylistCategory;
  },

  [actionTypes.CHANGE_ALL_PLAYLIST](state: any, allPlaylist: any) {
    state.allPlaylist = allPlaylist;
  },
};
