<!-- src/App.vue -->
<template>
  <div id="app">
    <ShoppingItems />
  </div>
</template>

<script>
import ShoppingItems from './components/ShoppingItems.vue';

export default {
  name: 'App',
  components: {
    ShoppingItems
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
