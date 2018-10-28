<template>
  <ul>
    <li v-for='todo in todos' :key='"todo" + todo.id'>
      {{ todo.text }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}
</script>

<style scoped>
ul {
  display: block;
  position: relative;
  margin: 0 auto;
  list-style: none;
  left: -20px;

}
</style>
