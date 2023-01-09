<template>
  <div class="container">
    <div v-for="item in navObj" :key="item.name" class="nav-container">
      <ul class="navbar">
        <li>
          <router-link :to="item.to">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  data() {
    return {
      navObj: [
        { name: "ホーム", to: "/" },
        { name: "TODO", to: "/todo" },
        { name: "資料", to: "/document" },
        { name: "ＦＡＱ", to: "/postDialog" },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  padding-left: 10px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 100%;
  background: #323339;
  display: flex;
  justify-content: center;
  max-width:100%;
}

.nav-container {
  padding-right: 10px;
}

.navbar {
  list-style-type: none;
  text-align: center;
  display: block;
  min-width: 150px;
}

.navbar a {
  color: aliceblue;
  text-decoration: none;
  display: block;
  padding: 0.6rem 0;
}

.navbar a:hover {
  background: #1464b9;
}
</style>
