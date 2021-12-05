import recommendActions from '../actions/recommendActions';
import recommendMutations from '../mutations/recommendMutations';

const module = {
    state: () => ({
        banners: [],
        hotRecommends: []
    }),
    actions: recommendActions,
    mutations: recommendMutations
};

export default module;
