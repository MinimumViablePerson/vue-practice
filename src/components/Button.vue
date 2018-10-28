<template>
  <button @click='handleClick'>
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    handleClick: {
      type: Function,
      default: () => console.log('handleClick triggered')
    }
  }
}
</script>

<style scoped>
button {
  font-size: 1rem;
  border: solid 2px #42b983;
  border-radius: 5px;
  margin: 3px;
  color: #42b983;
}
</style>
