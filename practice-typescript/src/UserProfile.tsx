import React, { VFC } from 'react'
import { User } from './types/user'

type Props = {
  user: User;
}

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* .joinは指定した文字列で配列を結合する */}
      {/* オプショナルチェイニング(?)をつけることでデータがない場合には以降の記述は無視してundefinedを返すことができる */}
      <dd>{user.hobbies?.join("/")}</dd>
    </dl>
  )
}
