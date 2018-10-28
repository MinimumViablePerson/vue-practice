<template>
  <form @submit.prevent='addTodo'>
    <input v-model='inputValue' />
  </form>
</template>

<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('addTodo', this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style>
input {
  font-size: 1rem;
  border: solid 2px #42b983;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
