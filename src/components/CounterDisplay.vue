<template>
  <h1>{{ counter }}</h1>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  }
}
</script>
