<template>
  <div id="app">
    <div id='nav'>
      <router-link to='/counter'>COUNTER</router-link> | 
      <router-link to='/todos'>TODOS</router-link> | 
      <router-link to='/posts'>POSTS</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Counter from './views/Counter.vue'
import Todos from './views/Todos.vue'
import Posts from './views/Posts.vue'

export default {
  components: {
    Counter,
    Todos,
    Posts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
