import { ActionContext } from 'vuex';
import { CHANGE_HOT_PLAYLIST_CATEGORY } from '../mutation-types';
import { getHotPlaylistCategory, getAllPlaylist, allPlaylist } from '@/network/discover';
import { State } from '@popperjs/core';

export default {
  getHotPlaylistAction(context: any) {
    getHotPlaylistCategory().then((res: any) => {
      if (res.code === 200) {
        // console.log(res);
        context.commit(CHANGE_HOT_PLAYLIST_CATEGORY, res.tags);
      }
    });
  },

  getAllPlaylistAction(context: ActionContext<State, any>, params: allPlaylist) {
    getAllPlaylist(params).then((res: any) => {
      console.log('allPlaylist', res);
    });
  },
};
