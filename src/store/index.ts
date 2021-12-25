import { createStore } from 'vuex';
import moduleRecommend from './modules/recommendModule';
import moduleMusiclist from './modules/musiclistModule';
import mudulePlaylist from './modules/playlistModule';
import modulePlayer from './modules/playerModule';

const store = createStore({
    modules: {
        recommend: moduleRecommend,
        musiclist: moduleMusiclist,
        playlist: mudulePlaylist,
        player: modulePlayer
    }
});

export default store;