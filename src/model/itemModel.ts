export class itemModel {
    // ToDoのID
    public id: number;
    // ToDoの内容
    public toDo: string;
    // 期限
    public deadLine: string;
    // 完了か未完了か
    public isComplete: boolean;
    // チェックされたかどうか
    public isCheck: boolean;
    // 完了か未完了(表示用 一覧取得される際に更新される)
    public isCompleteForDisplay: boolean;
}