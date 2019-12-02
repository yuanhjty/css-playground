<template>
  <div id="app">
    <Nav />
    <div class="main-wrapper">
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style>
body {
  margin: 0;
}

code {
  background-color: #f5f5f5;
  border-radius: 3px;
  font-family: "Courier New", Courier, monospace;
  padding: 0 3px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

.main-wrapper {
  width: calc(100% - 200px);
  height: 100vh;
  overflow: auto;
}

.main {
  padding: 20px 40px;
}
</style>
