const state = {
  name : 'xyz商城'
};

const getters = {
  name(state){
    return state.name;
  }
};

export default {
  namespaced: true,
  state,
  getters
}
