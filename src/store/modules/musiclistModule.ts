import musiclistActions from '../actions/musiclistActions';
import musiclistMutations from '../mutations/musiclistMutations';

const module = {
  state: () => ({
    toplist: [],
    currentIndex: 0,
    playlist: {},
  }),
  actions: musiclistActions,
  mutations: musiclistMutations,
};

export default module;
