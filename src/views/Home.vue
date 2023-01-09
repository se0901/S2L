<template>
  <!-- ========== keyvisual =========== -->
  <div class="home-keyvisual">
    <img
      src="../image/key_visual.png"
      alt="S2L"
      class="img-responsive"
    />
  </div>
  <!-- ========= /keyvisual =========== -->
  <!-- ========== main =========== -->
  <div class="container">
    <p class="home-maincopy">
      S2L<br />
      <span class="home-color1">T</span><span class="home-color2">O</span
      ><span class="home-color3">D</span><span class="home-color4">O</span
      ><span class="home-color5">サ</span><span class="home-color6">イ</span>
      <span class="home-color7">ト</span>
    </p>
    <h2 class="home-h2">お知らせ</h2>
    <div class="home-news">home</div>
  </div>
  <!-- ========= /main =========== -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style>
.container {
  text-align: center;
  max-width: 100%;
}
.home-keyvisual {
  /* width: 100%;
  height: 100%; */
}

.img-responsive {
  display: inline-block;
  /* width: 100%;
  height: 80%; */
  max-width: 100%;
  max-height: 100%;
  vertical-align: top;
}

.home-maincopy {
  text-align: center;
  font-size: 2.4rem;
  color: rgb(237, 89, 44);
  letter-spacing: 0.3em;
  font-family: fantasy;

}
.home-color1 {
  color: rgb(214, 24, 192);
}
.home-color2 {
  color: rgb(168, 22, 230);
}
.home-color3 {
  color: rgb(31, 33, 170);
}
.home-color4 {
  color: rgb(22, 143, 218);
}
.home-color5 {
  color: rgb(39, 202, 239);
}
.home-color6 {
  color: rgb(24, 233, 156);
}
.home-color7 {
  color: rgb(198, 234, 16);
}

.home-h2 {
  padding-bottom: 5px;
  margin: 30px 0 10px 0;
  color: #c84040;
  border-bottom: 1px dashed #c84040;
  font-size: 1.3rem;
  text-align: left;
  padding-left: 10%;
}

.home-news{
  text-align: left;
  padding-left: 12%;
}
</style>
