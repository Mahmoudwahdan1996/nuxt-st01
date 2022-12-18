import axios from "axios";
export default {
  state: () => ({
    username:"",
    password:"",
    users:[{
        username:"zucker",
        password:"123456"
    },{
        username:"felon",
        password:"123123"
    },{
        username:"robon",
        password:"secret"
    }],
    user:null,
    isAuthentecated:false

  }),
  mutations: {
    logout(state) {
      state.username = "";
      state.password="";
      state.user=null;
      state.isAuthentecated= false
    },
    SET_USERNAME(state, username) {
      state.username = username;
    },
    LOGIN(state , password){
        state.password = password;
        state.isAuthentecated = true;
    },
    SET_USER(state , user){
        state.user = {...user}
    }

  },
  actions: {
    setUserName({ commit  } ,userName){
        commit("SET_USERNAME" , userName);
        },
    logOut({ commit } ){
        commit("logout")

    },
    logIn({ commit } , password){
        commit("LOGIN" , password)
    }, 
    setUser({commit} , user){
        commit("SET_USER" , user)
    }

  },
  getters: {
    isAuthentecated(state) {
      return state.isAuthentecated;
    },
    getUserName(state){
        return state.username;
    },
    getUsers(state){
        return state.users
    },
    getUser(state){
        return state.user
    },
    getPassword(state){
      return state.password
    }
  },
};