<template>
  <div>
    <h2>Counter</h2>
    <counter-display />
    <v-button :handleClick='increase'>+</v-button>
    <v-button :handleClick='decrease'>-</v-button>
  </div>
</template>

<script>
import CounterDisplay from '../components/CounterDisplay.vue'
import VButton from '../components/Button.vue'
export default {
  components: {
    CounterDisplay,
    VButton
  },
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    increase () { this.$store.state.counter++ },
    decrease () { this.$store.state.counter-- }
  }
}
</script>
