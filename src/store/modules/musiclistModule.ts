import musiclistActions from '../actions/musiclistActions';
import musiclistMutations from '../mutations/musiclistMutations';

const module = {
  state: () => ({
    toplist: [],
  }),
  actions: musiclistActions,
  mutations: musiclistMutations,
};

export default module;
