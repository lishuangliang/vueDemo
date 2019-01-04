import axios from 'axios'
import {SETUSERLIST, DELUSERLIST} from "./mutations-type";

const state = {
  userList : []
};
const getters = {};
const actions = {
  getUserList({commit}){
    axios.get('api/getList?delay=true', ).then((res)=>{
      console.log(res);
      commit('SETUSERLIST', res.data.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
};
const mutations = {
  [SETUSERLIST](state, data){
    state.userList = data;
  },
  [DELUSERLIST](state, id){
    state.userList = state.userList.filter(list => list.id != id);
  }
};

export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}
