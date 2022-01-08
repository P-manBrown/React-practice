import React from 'react'

export const Todo = (props) => {
  const { userId, title } = props;
  return (
      <p>{`${title}(ユーザー：${userId})`}</p>
  )
}
