<template>
  <div class="tabgroup">
    <ul class="tabnav">
      <li @click="select(1)" v-bind:class="{ active: show === 1 }">未完了</li>
      <li @click="select(2)" v-bind:class="{ active: show === 2 }">完了</li>
    </ul>
    <div class="tabcontent">
      <a
        class="button2"
        v-on:click="showPostDialog()"
        v-if="show === 1 || show === 2"
        >作成</a
      >
      <postDialog
        v-if="postDialogFlag"
        @cancel="cancel"
        @postToDo="postToDo"
        :showNumber="beforeNumber"
      />
      <div v-if="show === 1" class="tabcontent-list">
        <table>
          <thead>
            <tr>
              <th>check</th>
              <th>ID</th>
              <th>内容</th>
              <th>期限</th>
              <th>完了/未完了</th>
            </tr>
          </thead>
          <tbody v-for="item in toDoItem" :key="item.id">
            <tr v-if="!item.isCompleteForDisplay">
              <td>
                <input
                  type="checkBox"
                  id="checkbox"
                  @change="item.isCheck = !item.isCheck"
                />
              </td>
              <td>
                {{ item.id }}
              </td>
              <td>
                {{ item.toDo }}
              </td>
              <td>
                {{ item.deadLine }}
              </td>
              <td>未完了</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else-if="show === 2" class="tabcontent-list">
        <table>
          <thead>
            <tr>
              <th>check</th>
              <th>ID</th>
              <th>内容</th>
              <th>期限</th>
              <th>完了/未完了</th>
            </tr>
          </thead>
          <tbody v-for="item in toDoItem" :key="item.id">
            <tr v-if="item.isCompleteForDisplay">
              <td>
                <input
                  type="checkBox"
                  id="checkbox"
                  @change="item.isCheck = !item.isCheck"
                />
              </td>
              <td>
                {{ item.id }}
              </td>
              <td>
                {{ item.toDo }}
              </td>
              <td>
                {{ item.deadLine }}
              </td>
              <td>完了</td>
            </tr>
          </tbody>
        </table>
      </div>
      <a
        class="button1"
        v-on:click="putInformation(toDoItem)"
        v-if="show === 1 || show === 2"
        >決定</a
      >
      <!-- <vue-loading type="spin" color="#333" :size="{ width: '50px', height: '50px' }" :loading="true"/> -->
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { itemModel } from "@/model/itemModel";
import { defineComponent } from "vue";
import postDialog from "./PostDialog.vue";
import { postRequestModel } from "@/model/requestModel";
// import { VueLoading } from "vue-loading-template";
// import loading from "vue-loading-overlay";

export default defineComponent({
  name: "todo",
  components: {
    // loading: loading
    postDialog,
    // VueLoading
  },
  data() {
    return {
      show: 1,
      item: [] as any, // APIから取得したToDoを格納
      toDoItem: [] as Array<itemModel>, // 全てのToDoを格納
      postDialogFlag: false, // 作成ダイアログを表示するかのフラグ
      beforeNumber: 0, // 前のタブ番号
    };
  },
  methods: {
    /**
     * タブを選択した際の表示する画面
     * @param num
     */
    select(num: number) {
      this.postDialogFlag = false;
      this.show = num;
    },
    /**
     * APIからToDoの情報を取得する
     */
    getToDoItem() {
      // API GatewayのURLをここに書く
      // axios.get('')
      // .then(response=> {this.item=response})
      // .catch(error=>{console.log('エラー', error)});
      // 以下、テスト用
      this.item = [
        {
          id: 1,
          toDo: "テスト1",
          deadLine: "2023-01-31",
          isComplete: 0,
        },
        {
          id: 2,
          toDo: "テスト2",
          deadLine: "2023-01-30",
          isComplete: 1,
        },
        {
          id: 3,
          toDo: "テスト3",
          deadLine: "2023-01-29",
          isComplete: 0,
        },
        {
          id: 4,
          toDo: "テスト4",
          deadLine: "2023-01-28",
          isComplete: 1,
        },
      ];
      this.modelingItem(this.item);
    },
    /**
     * APIから受け取った情報を型に成形する
     * @param items
     */
    modelingItem(items: any[]) {
      for (const item of items) {
        const toDo: itemModel = new itemModel();
        toDo.id = item.id;
        toDo.toDo = item.toDo;
        toDo.deadLine = item.deadLine;
        toDo.isCheck = false;
        if (item.isComplete === 1) {
          toDo.isComplete = true;
          toDo.isCompleteForDisplay = true;
        } else {
          toDo.isComplete = false;
          toDo.isCompleteForDisplay = false;
        }
        this.toDoItem.push(toDo);
      }
    },
    showPostDialog() {
      this.beforeNumber = this.show;
      this.show = 0;
      this.postDialogFlag = true;
    },
    /**
     * 決定ボタンを押下した際のToDo情報変更(未完了と完了を入れ替える)
     * @param items
     */
    putInformation(items: itemModel[]) {
      for (const item of items) {
        // チェックによって値を更新
        this.updateInformation(item);
      }
      axios
        .put("", items)
        .then((response) => {
          console.log("更新成功", response);
          // ローディング
          // 一覧取得し、更新する
          this.getToDoItem();
        })
        .catch((error) => {
          // エラーの場合、更新した内容を戻す
          for (const item of this.toDoItem) {
            item.isComplete = item.isCompleteForDisplay;
          }
          alert("更新エラー");
          console.log("更新失敗", error);
        });
    },
    updateInformation(item: itemModel) {
      // 完了の場合
      if (item.isComplete) {
        // チェックされていたら、未完了にする
        if (item.isCheck) {
          item.isComplete = false;
        }
      }
      // 未完了の場合
      else {
        // チェックされていたた、完了にする
        if (item.isCheck) {
          item.isComplete = true;
        }
      }
      // チェックを外す
      item.isCheck = false;
    },
    postToDo(item: postRequestModel) {
      axios
        .post("", item)
        .then((response) => {
          console.log("作成成功", response);
          // ローディング
          // 一覧取得する
          this.getToDoItem();
          // 未完了タブに戻る
          this.postDialogFlag = false;
          this.show = 1;
        })
        .catch((error) => {
          alert("作成エラー");
          console.log("作成エラー", error);
        });
    },
    /**
     * キャンセル処理
     */
    cancel(showNumber: number) {
      this.postDialogFlag = false;
      this.show = showNumber;
    },
  },
  mounted() {},
  created() {
    // 初回で一覧取得
    this.getToDoItem();
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
table {
  table-layout: fixed;
  width: 100%;
  text-align: center;
  border: solid 1px #ccc;
  border-collapse: collapse;
}
th {
  padding: 5px;
  border: solid 1px #ccc;
  background-color: #eee;
}
td {
  padding: 5px;
  border: solid 1px #ccc;
}
.button1 {
  display: block;
  margin: 1% 0 0 auto;
  border-radius: 80%; /* 角丸       */
  text-align: center; /* 文字位置   */
  cursor: pointer; /* カーソル   */
  padding: 12px 12px; /* 余白       */
  background: #e38e10 !important; /* 背景色     */
  color: #fff; /* 文字色     */
  line-height: 1em; /* 1行の高さ  */
  transition: 0.3s; /* なめらか変化 */
  border: 2px solid #e38e10; /* 枠の指定 */
  width: 8%;
}
.button1:hover {
  box-shadow: none; /* カーソル時の影消去 */
  color: #090909; /* 背景色     */
  background: #fff !important; /* 文字色     */
}
.button2 {
  display: block;
  margin: 1% 0 1% auto;
  border-radius: 5%; /* 角丸       */
  text-align: center; /* 文字位置   */
  cursor: pointer; /* カーソル   */
  padding: 12px 12px; /* 余白       */
  background: #e38e10 !important; /* 背景色     */
  color: #fff; /* 文字色     */
  line-height: 1em; /* 1行の高さ  */
  transition: 0.3s; /* なめらか変化 */
  border: 2px solid #e38e10; /* 枠の指定 */
  width: 8%;
}
.button2:hover {
  box-shadow: none; /* カーソル時の影消去 */
  color: #090909; /* 背景色     */
  background: #fff !important; /* 文字色     */
}
.tabnav {
  margin: auto;
  display: flex;
  list-style-type: none;
  width: calc(20%);
  text-align: center;
}
.tabnav li {
  cursor: pointer;
  width: 50%;
  background: #ddd;
  color: #333;
  padding: 10px;
  text-decoration: none;
}
.tabnav li.active {
  background: #e38e10;
  color: #fff;
}
.tabcontent {
  padding: 20px;
  border: 1px dotted #ccc;
}
</style>
