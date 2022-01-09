// 共通のtypeはエクスポートして利用する
export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};