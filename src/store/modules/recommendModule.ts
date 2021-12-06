import recommendActions from '../actions/recommendActions';
import recommendMutations from '../mutations/recommendMutations';

const module = {
    state: () => ({
        hotRecommends: []
    }),
    actions: recommendActions,
    mutations: recommendMutations
};

export default module;
