const state = {
  list : [
    {
      name : 'macBook air',
      id : 0
    },
    {
      name : 'iphonex',
      id : 1
    },
    {
      name : 'thinkpad',
      id : 2,
      shelves : true
    },
    {
      name : 'hp',
      id : 4,
      shelves : false
    }
  ]
};

const getters = {
  list (state){
    return state.list.filter(list => !list.shelves);
  }
};

const actions = {
  queryList(){
    console.log('query list api');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions
}
