<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/the-journey">The Journey</router-link>
    <router-link to="/volos">Volos</router-link>
    <router-link to="/skiathos">Skiathos</router-link>
    <router-link to="/memories">Memories</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    font-size: 1.3rem;
    position: relative;
    z-index: 2;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
