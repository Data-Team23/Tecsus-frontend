<template>
  <div id="app">
    <NavbarSuperior />
    <div class="content">
      <NavbarDobravel />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavbarDobravel from './components/NavBar/NavBarLateral.vue';
import NavbarSuperior from './components/NavBar/NavBarSuperior.vue';

export default {
  name: 'App',
  components: {
    NavbarDobravel,
    NavbarSuperior
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  display: flex;
}

</style>
