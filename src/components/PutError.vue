<template>
  <div class="">
    <alert>エラー</alert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PutError",
  methods: {
    alertError(){
      alert('エラー');
    }
  }
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
