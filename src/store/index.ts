import { createStore } from 'vuex';
import moduleRecommend from './modules/recommendModule';
import moduleMusiclist from './modules/musiclistModule';

const store = createStore({
    modules: {
        recommend: moduleRecommend,
        musiclist: moduleMusiclist
    }
});

export default store;