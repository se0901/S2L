<template>
  <div class="container header-container">
    <div class="header-inner">
      <router-link to="/" class="header-logo mng-block">
        <img
          src="../image/header_logo.png"
          class="logo-img"
          alt="Progress Management"
        />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped lang="scss">
.container {
  background-color: #1464b9;
  max-width: 100%;
}

.header-log {
  width: 200px;
}

.logo-img {
  height: 50px;
  vertical-align: top;
}

.logo-img:hover {
  background-color: aliceblue;
}

.mng-block {
  display: block;
}
</style>
