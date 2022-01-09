import { VFC } from 'react';
import { TodoType } from './types/todo'

//  propsの型定義
// ?をつけることで必須ではないもとを指定できる
// export type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean;
// };
// 親コンポーネントではidが必要であったがここでは不要
// Pick<TodoType, "userId" | "title" | "completed">とすることで特定の値のみ使用することができる。
// Omit<TodoType, "id">で不要な値のみ除くことができる。

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  // completed=falseのようにtypeに?をつけた場合にはデフォルト値を設定しておいたほうが良い（undefinedの場合があるため）
  const { userId, title, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]"
  return (
      <p>{`${completeMark}${title}(ユーザー：${userId})`}</p>
  )
}
