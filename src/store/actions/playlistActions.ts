import { CHANGE_HOT_PLAYLIST_CATEGORY } from '../mutation-types';
import { getHotPlaylistCategory } from '@/network/discover';

export default {
  getHotPlaylistAction(context: any) {
    getHotPlaylistCategory().then((res: any) => {
      if (res.code === 200) {
        // console.log(res);
        context.commit(CHANGE_HOT_PLAYLIST_CATEGORY, res.tags);
      }
    });
  },
};
