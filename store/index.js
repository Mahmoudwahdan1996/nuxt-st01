import axios from "axios"
export default {
   state: () => ({
    todos: [],
  }),
    mutations: {
    createTask(state, payload) {
      state.todos.push(payload)
    },
    setTodos(state,payload){
    state.todos = payload
    },
    deleteTask(state  , id){
    state.todos= state.todos.filter(todo => todo.id !== id)
    },
    toggleTask(state , payload){
     const todoIdx = state.todos.findIndex(todo => todo.id === payload.id);
        state.todos.splice(todoIdx , 1 , payload)
    }

  },
  getters:{
    allTodos(state){
        return state.todos;
    },
},
actions:{
    // nuxtServerInit(vuexContext ){
    //      return axios.get("http://localhost:4000/todos", {
    //         auth: {
    //           username: "zucker",
    //           password: "123456",
    //         },
    //       }).then(({data})=>{
        
    //           vuexContext.commit("setTodos" , data)
    //       })
         
    // },
    async getTodos({commit , rootGetters}){
        const username = rootGetters["profile/getUserName"] ;
        const password = rootGetters["profile/getPassword"];

        const {data} =await axios.get("http://localhost:4000/todos",   { auth:{
            username: username,
            password: password,
        }});
        commit("setTodos" , data)
    },
   async createTask({commit , rootGetters},payload){
    const username = rootGetters["profile/getUserName"] ;
         const password = rootGetters["profile/getPassword"];
        const {data} = await axios.post("http://localhost:4000/todos",payload , {
            auth:{
                username: username,
                password: password,
            }
        });
        commit("createTask" , data)
    },
    async deleteTask({commit , rootGetters} , payload){
        const username = rootGetters["profile/getUserName"] ;
         const password = rootGetters["profile/getPassword"];

        const {data} = await axios.delete(`http://localhost:4000/todos/${payload}`, {
            auth:{
                username: username,
                password: password,
            }
        });
        commit("deleteTask" , payload)
    },
    async toggleTask({commit ,rootGetters} , payload){
        const username = rootGetters["profile/getUserName"] ;
        const password = rootGetters["profile/getPassword"];

        const {data} = await axios.put(`http://localhost:4000/todos/${payload}`,{}, {
            auth:{
                username: username,
                password: password,
            }
        });
        commit("toggleTask" , data)   
    }
}
  }
  