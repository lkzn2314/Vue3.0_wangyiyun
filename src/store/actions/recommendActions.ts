import {
    CHANGE_HOT_RECOMMEND
    // CHANGE_NEW_DISC,
    // CHANGE_UP_RANKING,
    // CHANGE_NEW_RANKING,
    // CHANGE_ORIGIN_RANKING
} from '../mutation-types';
import { getHotRecommends } from '@/network/discover';

export default {

    getHotRecommendsAction(context: any, limit?: number ) {
        getHotRecommends(limit).then((res: any) => {
            if(res.code === 200) {
                console.log(res);
                context.commit(CHANGE_HOT_RECOMMEND, res.result);
            }
        });
    }

};