

<template>
    <img alt="Vue logo" class="logo" :src="logo" width="125" height="125" />

        <button class="index" @click="goPage('/')">index</button>
        <button class="about" @click="goPage('/about')">about</button>

  <RouterView />
</template>
<script setup>
import { ref } from 'vue';
import { useRouter, RouterView } from 'vue-router'
import utils from './utils/index'

import logoPhoto from './assets/finally_busy.png'
console.log('------', logoPhoto)

const logo = ref(utils.getAssetsFile('finally_busy.png'))

const router = useRouter()
const goPage = url => {
  router.push({ path: url })
  logo.value = url === '/' ? utils.getAssetsFile('finally_busy.png'):utils.getAssetsFile('finally_waiting.png')
}

</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
