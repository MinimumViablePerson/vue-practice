<template>
  <div>
    <h2>Todos</h2>
    <add-todo-form />
    <todo-list />
  </div>
</template>

<script>
import AddTodoForm from '../components/AddTodoForm.vue'
import TodoList from '../components/TodoList.vue'

export default {
  components: {
    AddTodoForm,
    TodoList
  }
}
</script>
