<template>
  <div class="dialog">
    <div class="text-4xl center">新規ToDO登録</div>
    <form>
      <div class="margin-left">
        <div class="mb-6 max-width">
          <label for="toDo" class="itemName">内容</label>
          <input
            type="text"
            id="toDo"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ToDoの内容"
            required
            v-model="toDo"
          />
        </div>
        <div class="mb-6 max-width">
          <label for="deadLine" class="itemName">期限</label>
          <input
            type="date"
            id="deadLine"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="deadLine"
          />
        </div>
      </div>
      <div class="inline-button">
        <a class="cancel-button" @click="cancel()">キャンセル</a>
        <a class="create-button" @click="postToDo()">作成</a>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { postRequestModel } from "@/model/requestModel";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostDialog",
  data() {
    return {
      toDo: "",
      deadLine: "",
    };
  },
  methods: {
    postToDo() {
      const item: postRequestModel = new postRequestModel();
      item.toDo = this.toDo;
      item.deadLine = this.deadLine;
      this.$emit("postToDo", item);
    },
    cancel() {
      this.$emit("cancel", this.showNumber);
    },
  },
  props: ["showNumber"],
});
</script>

<style>
.dialog {
  margin-top: 1%;
}
.center {
  text-align: center;
}
.max-width {
  max-width: 70%;
}
.margin-left {
  margin-left: 20%;
}
.itemName {
  font-size: medium;
}
.create-button {
  /* display: inline; */
  margin-left: calc(15%);
  border-radius: 5%; /* 角丸       */
  font-size: 18pt; /* 文字サイズ */
  text-align: center; /* 文字位置   */
  cursor: pointer; /* カーソル   */
  padding: 12px 12px; /* 余白       */
  background: #e38e10; /* 背景色     */
  color: #ffffff; /* 文字色     */
  line-height: 1em; /* 1行の高さ  */
  transition: 0.3s; /* なめらか変化 */
  border: 2px solid #e38e10; /* 枠の指定 */
}
.cancel-button {
  /* display: inline; */
  /* margin: 1% 80% 1% 1%; */
  margin-left: calc(35%);
  border-radius: 5%; /* 角丸       */
  font-size: 18pt; /* 文字サイズ */
  text-align: center; /* 文字位置   */
  cursor: pointer; /* カーソル   */
  padding: 12px 12px; /* 余白       */
  background: #0c6ace; /* 背景色     */
  color: #ffffff; /* 文字色     */
  line-height: 1em; /* 1行の高さ  */
  transition: 0.3s; /* なめらか変化 */
  border: 2px solid #0c6ace; /* 枠の指定 */
}
.inline-button {
  display: inline;
}
</style>
