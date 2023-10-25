<template>
  <main>
    LA Metro Time Machine

    <RouterLink to="/map" class="button">Launch</RouterLink>
  </main>
</template>

<style scoped>
main {
  align-items: center;
  background-color: var(--color-background-mute);
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  font-weight: 700;
  height: 100%;
  justify-content: center;
}

.button {
  background-color: var(--color-text);
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.75);
  color: var(--color-background);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  line-height: 1;
  padding: 1rem 1.25rem;
}

.button:hover {
  background-color: var(--vt-c-text-light-2);
}

.button:active {
  background-color: var(--color-text);
}
</style>
