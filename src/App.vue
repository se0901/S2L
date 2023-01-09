<template>
  <Header v-if="$route.name !== 'login'" />
  <Navigation v-if="$route.name !== 'login'" />
  <router-view />
  <Footer v-if="$route.name !== 'login'" class="footer" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Navigation,
    Footer,
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
