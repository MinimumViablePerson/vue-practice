import Vue from 'vue'
import Router from 'vue-router'
import Counter from './views/Counter.vue'
import Todos from './views/Todos.vue'
import Posts from './views/Posts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todos
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    }
  ]
})
