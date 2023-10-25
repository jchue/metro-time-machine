<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/" id="site-title">LA Metro Time Machine</RouterLink>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/map">Map</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
}

#site-title {
  color: var(--color-text);
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
}

nav {
  font-size: 12px;
}

nav a {
  color: var(--color-text);
  display: inline-block;
  padding: 0 1rem;
}

nav a:hover {
  color: hsla(160, 100%, 37%, 1);
  background-color: transparent;
}

nav a.router-link-exact-active {
  background-color: hsla(160, 100%, 37%, 0.2);
}

nav a.router-link-exact-active:hover {
  color: var(--color-text);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    padding: 1rem 0;
  }

  #site-title {
    margin-right: 2rem;
  }

  nav {
    text-align: left;
    font-size: 1rem;
  }

  main {
    flex-grow: 1;
    margin-bottom: 2rem;
  }
}
</style>
