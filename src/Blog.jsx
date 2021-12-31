import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <>
        <Article 
        title="hoge"
        order={2}
        />
        <Article 
        title="環境構築をしてみよう"
        order={3}
        />
         <Article 
        title="JSXの使い方"
        order={8}
        />
      </>
    )
  }
}

export default Blog;