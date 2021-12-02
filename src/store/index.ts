import { createStore } from 'vuex';
import moduleRecommend from './modules/recommend';
import moduleMusiclist from './modules/musiclist';

const store = createStore({
    modules: {
        moduleRecommend,
        moduleMusiclist
    }
});

export default store;