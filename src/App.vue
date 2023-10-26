<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

const githubRepo = import.meta.env.VITE_GITHUB_REPO;
</script>

<template>
  <header>
    <RouterLink to="/" id="site-title">LA Metro Time Machine</RouterLink>

    <nav id="site-navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/map">Map</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <ul class="social-links">
      <li>
        <a v-bind:href="`https://github.com/${githubRepo}`" target="_blank" v-if="githubRepo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  padding-bottom: 1.5rem;
}

#site-title {
  color: var(--color-text);
  font-size: 15px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
}

header a {
  color: var(--color-text);
  display: inline-block;
}

header a:hover {
  color: hsla(160, 100%, 37%, 1);
  background-color: transparent;
}

#site-navigation {
  flex-grow: 1;
  font-size: 1rem;
  grid-row-start: 2;
  grid-row-end: 3;
  margin-top: 0.5rem;
  text-align: left;
}

#site-navigation a {
  margin-right: 1rem;
}

#site-navigation a.router-link-exact-active {
  background-color: hsla(160, 100%, 37%, 0.2);
}

#site-navigation a.router-link-exact-active:hover {
  color: var(--color-text);
}

.social-links {
  list-style-type: none;
  margin-bottom: 0;
  padding-left: 0;
}

main {
  flex-grow: 1;
}

@media (min-width: 640px) {
  header {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
  }
  
  #site-title {
    margin-right: 2rem;
  }

  #site-navigation {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    margin-top: 0;
  }

  #site-navigation a {
    padding: 0 1rem;
  }

  .social-links {
    grid-column-start: 3;
    grid-column-end: 4;
  }
}
</style>
