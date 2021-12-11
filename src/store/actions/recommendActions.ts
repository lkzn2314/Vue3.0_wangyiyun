import {
    CHANGE_HOT_RECOMMEND,
    CHANGE_NEW_DISC,
    CHANGE_UP_RANKING,
    CHANGE_NEW_RANKING,
    CHANGE_ORIGIN_RANKING
} from '../mutation-types';
import { 
    getHotRecommends, 
    getHomepageNewDiscs,
    getRankings 
} from '@/network/discover';

export default {

    getHotRecommendsAction(context: any, limit?: number ) {
        getHotRecommends(limit).then((res: any) => {
            if(res.code === 200) {
                // console.log(res);
                context.commit(CHANGE_HOT_RECOMMEND, res.result);
            }
        });
    },

    getHomepageNewDiscsAction(context: any) {
        getHomepageNewDiscs().then((res: any) => {
            if(res.code === 200) {
                // console.log(res);
                context.commit(CHANGE_NEW_DISC, res.albums);
            }
        });
    },

    getRankingAction(context: any, id: number ) {
        getRankings(id).then((res: any) => {
            console.log(res);
            switch(id) {
                case 3779629:
                    context.commit(CHANGE_NEW_RANKING, res.playlist);
                    break;
                case 2884035:
                    context.commit(CHANGE_ORIGIN_RANKING, res.playlist);
                    break;
                case 19723756:
                    context.commit(CHANGE_UP_RANKING, res.playlist);
                    break;
                default:
            }
        });
    }

};