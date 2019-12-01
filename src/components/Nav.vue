<template>
  <div class="nav">
    <router-link v-for="route in routes" :key="route.path" :to="route.path">{{
      route.name
    }}</router-link>
  </div>
</template>

<script>
import { routes } from "../router";

export default {
  name: "Nav",
  data: () => ({
    routes
  })
};
</script>

<style scoped>
.nav {
  background: #f5f5f5;
  height: 100vh;
  width: 200px;
  overflow-y: auto;
}

.nav a {
  display: block;
  font-weight: bold;
  color: #2c3e50;
  padding: 8px 16px;
  text-decoration: none;
  border-bottom: solid 1px #fff;
  overflow: auto;
}

.nav a:hover {
  color: rgba(66, 185, 131, 0.5);
  background: rgba(231, 231, 231, 0.5);
}

.nav a.router-link-exact-active {
  color: #42b983;
  background: #e7e7e7;
}
</style>
