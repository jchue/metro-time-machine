<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

const githubRepo = import.meta.env.VITE_GITHUB_REPO;
</script>

<template>
  <header>
    <RouterLink to="/" id="site-title">LA Metro Time Machine</RouterLink>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/map">Map</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <a v-bind:href="`https://github.com/${githubRepo}`" target="_blank" v-if="githubRepo">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    </a>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  align-items: center;
  display: flex;
}

#site-title {
  color: var(--color-text);
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
}

nav {
  flex-grow: 1;
  font-size: 12px;
}

header a {
  color: var(--color-text);
  display: inline-block; 
}

header a:hover {
  color: hsla(160, 100%, 37%, 1);
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
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
