<template>
  <HeaderElement />
  <main class="container">
    <router-view></router-view>
  </main>
  <footer></footer>
</template>

<script>
import HeaderElement from '@/components/HeaderElement.vue'

export default {
  name: 'App',
  components: {
    HeaderElement
  }
}
</script>

<style>
main {
  background-color: #ECF3FB;
}
a {
  text-decoration: none;
}
:root {
  --title-color: #171717;
  --text-color: #333333;
  --main-color: #1749B3;
  --active-blue-color:#4B84FD;
  --active-black-color:#606060;
  --white-color: #ffffff;
  --input-color: #F1F4F8;
}
body {
  margin: 0;
  background-color: #ECF3FB;
}
button {
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
