<template>
  <div class="container">
    <div v-for="item in footerObj" :key="item.name" class="footer-container">
      <ul class="footer-nav">
        <li>
          <router-link :to="item.to">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <span class="projectName">{{ projectName }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  data() {
    return {
      footerObj: [
        { name: "資料", to: "/document" },
        { name: "ＦＡＱ", to: "/faq" },
        { name: "問い合わせ", to: "/inquiry" },
      ],
      projectName: "ⓢS2L",
    };
  },
});
</script>

<style scoped lang="scss">
  .container{
    margin: 0 auto;
    padding-left: 20%;
    padding-right: 20px;
    height:50px;
    background-color: #1464b9;
    max-width: 100%;
    text-align: left;
  }

.footer-container {
  display: inline-block;
  min-width: 50px;
}

.footer-nav {
  list-style-type: none;
}

.footer-nav a {
  font-size: 10px;
  text-decoration: none;
  color: aliceblue;
}

.projectName {
  padding-right: 10%;
  float: right;
  color: rgb(196, 25, 227);
  font-size: 13px;
}
</style>
