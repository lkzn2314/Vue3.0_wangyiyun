import { createStore } from 'vuex';
import moduleRecommend from './modules/recommendModule';
import moduleMusiclist from './modules/musiclistModule';
import mudulePlaylist from './modules/playlistModule';

const store = createStore({
    modules: {
        recommend: moduleRecommend,
        musiclist: moduleMusiclist,
        playlist: mudulePlaylist
    }
});

export default store;