import React from 'react'

//  propsの型定義
// ?をつけることで必須ではないもとを指定できる
type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
}

export const Todo = (props: TodoType) => {
  // completed=falseのようにtypeに?をつけた場合にはデフォルト値を設定しておいたほうが良い（finedの場合があるため）
  const { userId, title, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]"
  return (
      <p>{`${completeMark}${title}(ユーザー：${userId})`}</p>
  )
}
