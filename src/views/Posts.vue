<template>
  <div>
    <ul>
      <li v-for='post in posts' :key="'post' + post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  mounted () {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style scoped>
li {
  list-style: none;
  position: relative;
  left: -20px;
  border: solid 2px #42b983;
  border-radius: 5px;
  margin: 10px 0;
}
</style>
