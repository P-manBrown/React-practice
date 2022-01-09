import React, { VFC } from 'react'

type Props = {
  color: string;
  fontSize: string;
}

// FC=FunctionalComponent（関数コンポーネント）FCを指定した場合にはpropsの型はFCの後ろに記述する
// FCはchildrenを暗黙的に受け取れてしまう（React v18以降は暗黙的に受け取れないように変更される）。これを避けるためにVFCを使用する（v17での暫定措置）。
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return (
    <p style={{color, fontSize}}>Text</p>
  )
}
