import recommendActions from '../actions/recommendActions';
import recommendMutations from '../mutations/recommendMutations';

const module = {
  state: () => ({
    hotRecommends: [],
    newDiscs: [],
    upRankings: {},
    newRankings: {},
    originRankings: {},
  }),
  actions: recommendActions,
  mutations: recommendMutations,
};

export default module;
