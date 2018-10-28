import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    todos: [
      {
        id: 1,
        text: 'Buy milk',
        done: false
      },
      {
        id: 2,
        text: 'Clean the house',
        done: false
      },
      {
        id: 3,
        text: 'Do my homework',
        done: false
      }
    ],
    posts: []
  },
  mutations: {
    increment (state) { state.counter++ },
    decrement (state) { state.counter-- },
    addTodo (state, text) {
      const todo = {
        id: uuid(),
        text: text,
        done: false
      }
      state.todos.push(todo)
    },
    addPosts (state, posts) {
      state.posts = [...state.posts, ...posts]
    }
  },
  actions: {
    async getPosts ({ commit }) {
      const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
      commit('addPosts', posts)
    }
  }
})
